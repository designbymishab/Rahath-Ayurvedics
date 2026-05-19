import { NextResponse } from 'next/server';
import { readFileSync, existsSync } from 'fs';
import path from 'path';

// Slugify a title
function slugify(text: string) {
    return text.toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
}

// Select a cover image
function selectCoverImage(topic: string) {
    const images = [
        '/images/speciality-herbal1.webp',
        '/images/speciality-herbal2.webp',
        '/images/speciality-prasava1.webp',
        '/images/speciality-piles1.webp',
        '/images/hero2.webp',
    ];
    const hash = topic.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
    return images[hash % images.length];
}

export async function GET(req: Request) {
    // Basic authorization to protect the cron endpoint
    const authHeader = req.headers.get('authorization');
    if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const apiKey = process.env.GEMINI_API_KEY;
        const githubToken = process.env.GITHUB_TOKEN;
        const githubRepo = process.env.GITHUB_REPO; // e.g., "username/repo"

        if (!apiKey) throw new Error("GEMINI_API_KEY is missing");
        if (!githubToken || !githubRepo) {
             console.log("GitHub credentials missing. This API route is designed to push directly to GitHub to trigger Vercel rebuilds.");
             // If local, we could fallback, but this is an API route for Vercel Cron.
             throw new Error("GITHUB_TOKEN or GITHUB_REPO is missing");
        }

        // Fetch existing files from GitHub to know which topics are used
        const contentUrl = `https://api.github.com/repos/${githubRepo}/contents/content/blog`;
        const githubHeaders = {
            'Authorization': `Bearer ${githubToken}`,
            'Accept': 'application/vnd.github.v3+json',
            'X-GitHub-Api-Version': '2022-11-28'
        };

        let existingFiles: any[] = [];
        try {
            const filesRes = await fetch(contentUrl, { headers: githubHeaders });
            if (filesRes.ok) {
                existingFiles = await filesRes.json();
            }
        } catch (e) {
            console.log("Could not fetch existing files or directory doesn't exist yet.");
        }

        // Fetch settings from GitHub (to ensure we use latest)
        let settings: any = null;
        try {
            const settingsRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/blog-settings.json`, { headers: githubHeaders });
            if (settingsRes.ok) {
                const settingsData = await settingsRes.json();
                settings = JSON.parse(Buffer.from(settingsData.content, 'base64').toString('utf-8'));
            }
        } catch (e) {
             throw new Error("Could not load blog-settings.json from GitHub.");
        }

        // Determine used topics by parsing existing files (requires fetching their content)
        // For simplicity, we'll just check if the slugification of a topic exists as a filename.
        // This avoids fetching all files.
        const usedSlugs = existingFiles.map(f => f.name.replace('.json', ''));
        
        // Next topic
        let selectedTopic = null;
        for (const topic of settings.topics) {
            // Predict the slug (this is an approximation, but works if titles loosely match topics)
            // Better approach: fetch all files and check the `topic` field, but that's API heavy.
            // Let's assume we can keep track, or we generate and if it fails, we try another.
            // For now, let's just pick one randomly from settings that might not be used.
            // Ideally we'd have a database or a tracking file.
        }

        // Since Vercel Cron has a timeout (10s on hobby, up to 5min on pro), doing too many sequential fetches might fail.
        // Let's fetch all file contents concurrently if there aren't too many.
        const fileContents = await Promise.all(
            existingFiles.filter((f: any) => f.name.endsWith('.json')).map(async (f: any) => {
                const res = await fetch(f.download_url);
                return res.json();
            })
        );
        
        const usedTopics = fileContents.map((p: any) => p.topic);
        const availableTopics = settings.topics.filter((t: string) => !usedTopics.includes(t));

        if (availableTopics.length === 0) {
            return NextResponse.json({ message: "All topics exhausted" });
        }

        const topic = availableTopics[0];

        // --- Generate Post ---
        const prompt = `You are a professional Ayurvedic wellness content writer for "${settings.businessName}", a traditional herbal medicine shop in ${settings.location}.

Generate a blog article about: "${topic}"

REQUIREMENTS:
- Tone: ${settings.tone}
- Length: ${settings.length} (800-1200 words)
- Focus on traditional Kerala Ayurvedic wisdom
- Include practical, actionable advice
- Mention ${settings.businessName} naturally 1-2 times
- Reference the shop's location in ${settings.location} once
- Do NOT make medical cure claims — use words like "support", "traditional", "wellness"
- Write in a way that's SEO-friendly with natural keyword usage

RESPOND IN THIS EXACT JSON FORMAT (no markdown, just raw JSON):
{
    "title": "SEO-optimized article title (max 60 chars)",
    "metaTitle": "SEO title for page tab (max 60 chars)",
    "metaDesc": "Meta description (max 155 chars)",
    "excerpt": "2-sentence summary for blog listing card",
    "readTime": 6,
    "content": [
        "## Section Heading 1||Paragraph content for section 1.",
        "## Section Heading 2||Paragraph content for section 2."
    ],
    "mlTitle": "Malayalam translation of the title",
    "mlExcerpt": "Malayalam translation of the excerpt",
    "mlContent": [
        "## Malayalam heading 1||Malayalam paragraph 1"
    ]
}`;

        const aiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [
                    { parts: [{ text: prompt }] }
                ],
                systemInstruction: {
                    parts: [{ text: 'You are an expert Ayurvedic content writer. Always respond with valid JSON only.' }]
                },
                generationConfig: {
                    temperature: 0.7,
                    responseMimeType: "application/json"
                }
            })
        });

        if (!aiRes.ok) throw new Error("Gemini generation failed");

        const aiData = await aiRes.json();
        let contentRaw = aiData.candidates[0].content.parts[0].text.trim();
        if (contentRaw.startsWith('```')) {
            contentRaw = contentRaw.replace(/^```json?\n?/, '').replace(/\n?```$/, '');
        }

        const generated = JSON.parse(contentRaw);
        const slug = slugify(generated.title);
        const today = new Date().toISOString().split('T')[0];

        const postData = {
            slug,
            topic,
            image: selectCoverImage(topic),
            date: today,
            readTime: generated.readTime || 6,
            en: {
                title: generated.title,
                metaTitle: generated.metaTitle,
                metaDesc: generated.metaDesc,
                excerpt: generated.excerpt,
                content: generated.content,
            },
            ml: {
                title: generated.mlTitle,
                excerpt: generated.mlExcerpt,
                content: generated.mlContent,
            },
            relatedSlugs: [], // In a robust setup, calculate this by fetching others
            generatedAt: new Date().toISOString(),
        };

        // --- Push to GitHub ---
        const fileContentBase64 = Buffer.from(JSON.stringify(postData, null, 2)).toString('base64');
        const putRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/content/blog/${slug}.json`, {
            method: 'PUT',
            headers: githubHeaders,
            body: JSON.stringify({
                message: `chore(blog): auto-generate post - ${slug}`,
                content: fileContentBase64,
                branch: 'main'
            })
        });

        if (!putRes.ok) throw new Error("Failed to push to GitHub");

        return NextResponse.json({ success: true, slug, topic });

    } catch (error: any) {
        console.error("Cron Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
