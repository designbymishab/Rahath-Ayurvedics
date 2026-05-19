// AI Blog Post Generator for Rahath Ayurvedic
// Uses OpenAI API to generate SEO-optimized Ayurvedic blog posts
// Run: node scripts/generate-blog.mjs

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// Load environment variables from .env.local manually for raw Node script
const envPath = join(ROOT, '.env.local');
if (existsSync(envPath)) {
    const envContent = readFileSync(envPath, 'utf-8');
    envContent.split(/\r?\n/).forEach(line => {
        const match = line.match(/^([^=]+)=(.*)$/);
        if (match) {
            const key = match[1].trim();
            let value = match[2].trim();
            // Remove surrounding quotes if they exist
            if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
            if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
            process.env[key] = value;
        }
    });
}

const CONTENT_DIR = join(ROOT, 'content', 'blog');
const SETTINGS_PATH = join(ROOT, 'blog-settings.json');

// Ensure content directory exists
if (!existsSync(CONTENT_DIR)) {
    mkdirSync(CONTENT_DIR, { recursive: true });
}

// Load settings
const settings = JSON.parse(readFileSync(SETTINGS_PATH, 'utf-8'));

// Get already generated topics
function getExistingPosts() {
    if (!existsSync(CONTENT_DIR)) return [];
    return readdirSync(CONTENT_DIR)
        .filter(f => f.endsWith('.json'))
        .map(f => JSON.parse(readFileSync(join(CONTENT_DIR, f), 'utf-8')));
}

// Pick next topic that hasn't been generated yet
function getNextTopic(existingPosts) {
    const usedTopics = existingPosts.map(p => p.topic);
    const available = settings.topics.filter(t => !usedTopics.includes(t));
    if (available.length === 0) {
        console.log('All topics have been generated! Add more topics to blog-settings.json');
        return null;
    }
    return available[0]; // Pick the next one in order
}

// Slugify a title
function slugify(text) {
    return text.toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
}

// Generate blog post via Gemini API
async function generatePost(topic) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        throw new Error('GEMINI_API_KEY is required. Set it in .env.local or as an environment variable.');
    }

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
        "## Section Heading 1||Paragraph content for section 1. Write 2-3 sentences minimum.",
        "## Section Heading 2||Paragraph content for section 2. Write 2-3 sentences minimum.",
        "## Section Heading 3||Paragraph content for section 3. Write 2-3 sentences minimum.",
        "## Section Heading 4||Paragraph content for section 4. Write 2-3 sentences minimum.",
        "## Section Heading 5||Paragraph content for section 5. Write 2-3 sentences minimum.",
        "## Section Heading 6||Paragraph content for section 6. Write 2-3 sentences minimum."
    ],
    "mlTitle": "Malayalam translation of the title",
    "mlExcerpt": "Malayalam translation of the excerpt",
    "mlContent": [
        "## Malayalam heading 1||Malayalam paragraph 1",
        "## Malayalam heading 2||Malayalam paragraph 2",
        "## Malayalam heading 3||Malayalam paragraph 3",
        "## Malayalam heading 4||Malayalam paragraph 4"
    ]
}`;

    console.log(`🤖 Generating article about: "${topic}"`);

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
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

    if (!response.ok) {
        const err = await response.text();
        throw new Error(`Gemini API error: ${response.status} - ${err}`);
    }

    const data = await response.json();
    let content = data.candidates[0].content.parts[0].text.trim();

    // Strip markdown code fences if present
    if (content.startsWith('```')) {
        content = content.replace(/^```json?\n?/, '').replace(/\n?```$/, '');
    }

    return JSON.parse(content);
}

// Select a cover image from existing images
function selectCoverImage(topic) {
    const images = [
        '/images/speciality-herbal1.webp',
        '/images/speciality-herbal2.webp',
        '/images/speciality-prasava1.webp',
        '/images/speciality-piles1.webp',
        '/images/hero2.webp',
    ];
    // Simple hash-based selection for consistency
    const hash = topic.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
    return images[hash % images.length];
}

// Main
async function main() {
    const existingPosts = getExistingPosts();
    console.log(`📚 Found ${existingPosts.length} existing blog posts`);

    const topic = getNextTopic(existingPosts);
    if (!topic) return;

    try {
        const generated = await generatePost(topic);
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
            relatedSlugs: [],
            generatedAt: new Date().toISOString(),
        };

        const filePath = join(CONTENT_DIR, `${slug}.json`);
        writeFileSync(filePath, JSON.stringify(postData, null, 2), 'utf-8');
        console.log(`✅ Generated: "${generated.title}"`);
        console.log(`📁 Saved to: content/blog/${slug}.json`);

        // Update related slugs for cross-linking
        updateRelatedSlugs();

        return postData;
    } catch (err) {
        console.error('❌ Generation failed:', err.message);
        throw err;
    }
}

// Auto-link recent posts to each other
function updateRelatedSlugs() {
    const posts = getExistingPosts();
    if (posts.length < 2) return;

    for (const post of posts) {
        const others = posts.filter(p => p.slug !== post.slug);
        // Pick 2 random related posts
        const related = others
            .sort(() => Math.random() - 0.5)
            .slice(0, 2)
            .map(p => p.slug);
        post.relatedSlugs = related;

        const filePath = join(CONTENT_DIR, `${post.slug}.json`);
        writeFileSync(filePath, JSON.stringify(post, null, 2), 'utf-8');
    }
    console.log('🔗 Updated cross-links between posts');
}

main().catch(console.error);
