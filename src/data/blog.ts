import fs from 'fs';
import path from 'path';

export interface BlogPost {
  slug: string;
  topic?: string;
  image: string;
  date: string;
  readTime: number;
  en: { title: string; metaTitle: string; metaDesc: string; excerpt: string; content: string[] };
  ml: { title: string; excerpt: string; content: string[] };
  relatedSlugs: string[];
}

// Hardcoded starter posts (always available)
const starterPosts: BlogPost[] = [
  {
    slug: 'benefits-of-raw-herbal-medicines',
    image: '/images/speciality-herbal2.webp',
    date: '2026-05-10',
    readTime: 6,
    relatedSlugs: ['ayurvedic-postnatal-care-kerala', 'traditional-piles-care-ayurveda'],
    en: {
      title: 'Benefits of Raw Herbal Medicines: Why Traditional Herbs Matter',
      metaTitle: 'Benefits of Raw Herbal Medicines | Rahath Ayurvedic Blog',
      metaDesc: 'Discover why raw herbal medicines are essential for natural wellness. Learn about traditional herb preparation and benefits from Rahath Ayurvedic, Mannarkkad.',
      excerpt: 'Discover why raw, traditionally prepared herbal medicines offer unique benefits that modern processed supplements cannot match.',
      content: [
        '## Why Raw Herbal Medicines?||Raw herbal medicines have been the cornerstone of Ayurvedic healing for thousands of years. Unlike modern processed supplements, raw herbs retain their full spectrum of naturally occurring compounds — including alkaloids, flavonoids, tannins, and essential oils — that work together synergistically for optimal therapeutic effect.',
        '## The Power of Whole Herbs||When herbs are processed industrially, many of their delicate compounds are destroyed by heat, chemicals, or extraction processes. Raw herbs, carefully dried and ground using traditional methods, preserve these compounds in their natural state. This is why Ayurvedic practitioners have always emphasized the importance of using minimally processed herbal medicines.',
        '## Traditional Preparation Matters||At Rahath Ayurvedic in Mannarkkad, we follow a meticulous 4-step preparation process: natural drying in ventilated spaces, careful cutting to retain potency, traditional grinding to maintain herbal integrity, and hygienic storage in glass containers. Each step is designed to preserve the herb\'s natural healing properties.',
        '## Common Raw Herbs and Their Uses||Some of the most widely used raw herbs in Ayurveda include Ashwagandha (for stress and vitality), Brahmi (for cognitive function), Triphala (for digestive health), Tulsi (for immunity), and Turmeric (for inflammation support). Each of these herbs has centuries of traditional use backed by modern research.',
        '## How to Choose Quality Herbs||When selecting raw herbal medicines, look for herbs that are naturally dried (not heat-treated), free from artificial additives, stored in glass or food-grade containers, sourced from reputable suppliers, and prepared using traditional methods. At Rahath Ayurvedic, we ensure all these quality standards are met.',
        '## Getting Started||If you\'re new to raw herbal medicines, we recommend visiting our shop at Hospital Junction, Mannarkkad for personalized guidance. Our experienced team can help you choose the right herbs based on your specific health needs and guide you on proper usage and dosage.'
      ]
    },
    ml: {
      title: 'പച്ചമരുന്നുകളുടെ ഗുണങ്ങൾ: പരമ്പരാഗത ഔഷധച്ചെടികൾ എന്തുകൊണ്ട് പ്രധാനമാണ്',
      excerpt: 'പരമ്പരാഗതമായി തയ്യാറാക്കിയ പച്ചമരുന്നുകൾ ആധുനിക സംസ്കരിച്ച സപ്ലിമെന്റുകൾക്ക് നൽകാനാകാത്ത അതുല്യമായ ഗുണങ്ങൾ എന്തുകൊണ്ട് വാഗ്ദാനം ചെയ്യുന്നുവെന്ന് കണ്ടെത്തുക.',
      content: [
        '## എന്തുകൊണ്ട് പച്ചമരുന്നുകൾ?||ആയിരക്കണക്കിന് വർഷങ്ങളായി ആയുർവേദ ചികിത്സയുടെ മൂലക്കല്ലാണ് പച്ചമരുന്നുകൾ. ആധുനിക സംസ്കരിച്ച സപ്ലിമെന്റുകളിൽ നിന്ന് വ്യത്യസ്തമായി, പച്ചമരുന്നുകൾ അവയുടെ സ്വാഭാവികമായി ഉണ്ടാകുന്ന സംയുക്തങ്ങളുടെ മുഴുവൻ സ്പെക്ട്രവും നിലനിർത്തുന്നു.',
        '## മൊത്തം ഔഷധച്ചെടികളുടെ ശക്തി||ഔഷധച്ചെടികൾ വ്യാവസായികമായി സംസ്കരിക്കുമ്പോൾ, അവയുടെ പല സൂക്ഷ്മ സംയുക്തങ്ങളും ചൂട്, രാസവസ്തുക്കൾ, അല്ലെങ്കിൽ നിർമ്മാണ പ്രക്രിയകൾ എന്നിവയാൽ നശിപ്പിക്കപ്പെടുന്നു.',
        '## പരമ്പരാഗത തയ്യാറെടുപ്പ് പ്രധാനമാണ്||മണ്ണാർക്കാട്ടെ റാഹത്ത് ആയുർവേദിക്കിൽ, ഞങ്ങൾ സൂക്ഷ്മമായ 4-ഘട്ട തയ്യാറെടുപ്പ് പ്രക്രിയ പിന്തുടരുന്നു: സ്വാഭാവിക ഉണക്കൽ, ശ്രദ്ധാപൂർവ്വമുള്ള മുറിക്കൽ, പരമ്പരാഗത അരയ്ക്കൽ, ശുചിത്വ സംഭരണം.',
        '## സാധാരണ പച്ചമരുന്നുകളും അവയുടെ ഉപയോഗങ്ങളും||അശ്വഗന്ധ (സമ്മർദ്ദത്തിനും ഊർജ്ജത്തിനും), ബ്രഹ്മി (ബുദ്ധിശക്തിക്ക്), ത്രിഫല (ദഹനത്തിന്), തുളസി (രോഗപ്രതിരോധത്തിന്), മഞ്ഞൾ (വീക്കം കുറയ്ക്കാൻ) എന്നിവ ഉൾപ്പെടുന്നു.'
      ]
    }
  },
  {
    slug: 'ayurvedic-postnatal-care-kerala',
    image: '/images/speciality-prasava1.webp',
    date: '2026-05-05',
    readTime: 7,
    relatedSlugs: ['benefits-of-raw-herbal-medicines', 'traditional-piles-care-ayurveda'],
    en: {
      title: 'Ayurvedic Postnatal Care in Kerala: A Complete Traditional Guide',
      metaTitle: 'Ayurvedic Postnatal Care in Kerala | Rahath Blog',
      metaDesc: 'Complete guide to traditional Kerala postnatal care (Prasava Raksha). Herbal preparations and practices for post-delivery wellness.',
      excerpt: 'Learn about Kerala\'s rich tradition of Ayurvedic postnatal care and how traditional herbal preparations support new mothers.',
      content: [
        '## The Kerala Tradition of Prasava Raksha||Kerala has one of the world\'s richest traditions of postnatal care, known locally as "Prasava Raksha." This comprehensive system of post-delivery wellness has been practiced for centuries, combining specific herbal medicines, therapeutic oils, dietary protocols, and rest practices to support the new mother\'s complete recovery.',
        '## Why Postnatal Care Matters||The postpartum period — typically the first 40 to 90 days after delivery — is considered one of the most critical phases in a woman\'s life according to Ayurveda. During this time, the body undergoes significant physiological changes as it recovers from childbirth. Proper herbal support during this period can aid recovery, support lactation, and restore energy and strength.',
        '## Key Herbs in Kerala Postnatal Care||Traditional Kerala postnatal care uses specific herbs known for their nourishing and restorative properties. These include herbs for digestive support, lactation enhancement, uterine recovery, and overall strength building. At Rahath Ayurvedic, our postnatal kits contain carefully selected combinations of these traditional herbs.',
        '## The Traditional 40-Day Protocol||The traditional Kerala postpartum protocol spans approximately 40 days and includes specific herbal preparations for each stage of recovery. The first week focuses on digestive restoration, weeks two through four on strength building, and the final phase on complete revitalization.',
        '## Modern Relevance||While modern medicine has advanced significantly, many families in Kerala and beyond continue to value traditional postnatal practices alongside medical care. The herbal preparations used in traditional postnatal care are gentle, time-tested, and designed to complement — not replace — modern medical guidance.',
        '## Getting Your Postnatal Kit||At Rahath Ayurvedic, Mannarkkad, we offer carefully curated postnatal herbal kits prepared following traditional Kerala methods. Visit our shop at Hospital Junction or contact us via WhatsApp for personalized guidance on postnatal herbal care.'
      ]
    },
    ml: {
      title: 'കേരളത്തിലെ ആയുർവേദ പ്രസവരക്ഷ: ഒരു സമ്പൂർണ്ണ പരമ്പരാഗത ഗൈഡ്',
      excerpt: 'കേരളത്തിന്റെ സമ്പന്നമായ ആയുർവേദ പ്രസവാനന്തര പരിചരണ പാരമ്പര്യത്തെക്കുറിച്ചും പരമ്പരാഗത ഹെർബൽ തയ്യാറെടുപ്പുകൾ പുതിയ അമ്മമാരെ എങ്ങനെ പിന്തുണയ്ക്കുന്നുവെന്നും അറിയുക.',
      content: [
        '## പ്രസവ രക്ഷയുടെ കേരള പാരമ്പര്യം||"പ്രസവ രക്ഷ" എന്നറിയപ്പെടുന്ന പ്രസവാനന്തര പരിചരണത്തിന്റെ ലോകത്തിലെ ഏറ്റവും സമ്പന്നമായ പാരമ്പര്യങ്ങളിൽ ഒന്ന് കേരളത്തിനുണ്ട്.',
        '## പ്രസവാനന്തര പരിചരണം എന്തുകൊണ്ട് പ്രധാനമാണ്||പ്രസവശേഷമുള്ള കാലഘട്ടം — സാധാരണയായി പ്രസവത്തിന് ശേഷമുള്ള ആദ്യ 40 മുതൽ 90 ദിവസങ്ങൾ — ആയുർവേദ പ്രകാരം ഒരു സ്ത്രീയുടെ ജീവിതത്തിലെ ഏറ്റവും നിർണായക ഘട്ടങ്ങളിലൊന്നായി കണക്കാക്കപ്പെടുന്നു.',
        '## കേരള പ്രസവരക്ഷയിലെ പ്രധാന ഔഷധച്ചെടികൾ||പരമ്പരാഗത കേരള പ്രസവാനന്തര പരിചരണം അവയുടെ പോഷകവും പുനഃസ്ഥാപന ഗുണങ്ങളും കൊണ്ട് അറിയപ്പെടുന്ന പ്രത്യേക ഔഷധച്ചെടികൾ ഉപയോഗിക്കുന്നു.',
        '## പരമ്പരാഗത 40-ദിവസ പ്രോട്ടോക്കോൾ||പരമ്പരാഗത കേരള പ്രസവാനന്തര പ്രോട്ടോക്കോൾ ഏകദേശം 40 ദിവസങ്ങൾ നീണ്ടുനിൽക്കുന്നു, വീണ്ടെടുക്കലിന്റെ ഓരോ ഘട്ടത്തിനും പ്രത്യേക ഹെർബൽ തയ്യാറെടുപ്പുകൾ ഉൾപ്പെടുന്നു.'
      ]
    }
  },
  {
    slug: 'traditional-piles-care-ayurveda',
    image: '/images/speciality-piles1.webp',
    date: '2026-04-28',
    readTime: 5,
    relatedSlugs: ['benefits-of-raw-herbal-medicines', 'ayurvedic-postnatal-care-kerala'],
    en: {
      title: 'Traditional Piles Care in Ayurveda: A Natural Approach',
      metaTitle: 'Traditional Ayurvedic Piles Care | Rahath Blog',
      metaDesc: 'Learn about the traditional Ayurvedic approach to piles care. Herbal formulations and lifestyle tips from Rahath Ayurvedic, Mannarkkad.',
      excerpt: 'Understanding how traditional Ayurvedic herbal formulations and lifestyle changes can support natural comfort for piles.',
      content: [
        '## Understanding Piles in Ayurveda||Ayurveda refers to piles as "Arsha" and classifies them based on the dominant dosha (Vata, Pitta, or Kapha). This ancient science takes a holistic approach — addressing not just symptoms but the root imbalances through dietary changes, lifestyle modifications, and carefully formulated herbal preparations.',
        '## The Ayurvedic Approach||Unlike symptomatic treatments, Ayurveda aims to address the underlying causes of piles. This typically involves improving digestive fire (Agni), correcting dietary habits, incorporating specific herbal preparations, and making lifestyle adjustments. The goal is long-term comfort through natural balance restoration.',
        '## Traditional Herbs for Piles Support||Several herbs have been traditionally used in Ayurveda for piles support. These include herbs known for their digestive, soothing, and anti-inflammatory properties. At Rahath Ayurvedic, our formulations combine these herbs following recipes refined over generations.',
        '## Dietary Recommendations||Diet plays a crucial role in Ayurvedic piles management. Traditional recommendations include increasing fiber through whole grains and vegetables, staying well-hydrated, avoiding spicy and fried foods, and eating at regular intervals. These dietary changes complement herbal preparations for optimal results.',
        '## Lifestyle Tips||Beyond herbs and diet, Ayurveda recommends regular physical activity, proper toilet habits, stress management, and adequate rest. These lifestyle modifications work synergistically with herbal preparations to support lasting comfort.',
        '## Seeking Support||At Rahath Ayurvedic in Mannarkkad, we provide personalized guidance alongside our traditional piles care formulations. Visit us at Hospital Junction for a consultation — we\'ll help you choose the right herbal support and provide dietary and lifestyle recommendations tailored to your needs.'
      ]
    },
    ml: {
      title: 'ആയുർവേദത്തിലെ പരമ്പരാഗത പൈൽസ് കെയർ: ഒരു സ്വാഭാവിക സമീപനം',
      excerpt: 'പൈൽസിന് സ്വാഭാവിക ആശ്വാസം നൽകുന്നതിന് പരമ്പരാഗത ആയുർവേദ ഹെർബൽ ഫോർമുലേഷനുകളും ജീവിതശൈലി മാറ്റങ്ങളും എങ്ങനെ പിന്തുണയ്ക്കുന്നുവെന്ന് മനസ്സിലാക്കുക.',
      content: [
        '## ആയുർവേദത്തിൽ പൈൽസ് മനസ്സിലാക്കൽ||ആയുർവേദത്തിൽ പൈൽസിനെ "അർശ" എന്ന് വിളിക്കുന്നു, പ്രധാന ദോഷത്തെ (വാത, പിത്ത, അല്ലെങ്കിൽ കഫ) അടിസ്ഥാനമാക്കി വർഗ്ഗീകരിക്കുന്നു.',
        '## ആയുർവേദ സമീപനം||ലക്ഷണ ചികിത്സകളിൽ നിന്ന് വ്യത്യസ്തമായി, ആയുർവേദം പൈൽസിന്റെ അടിസ്ഥാന കാരണങ്ങളെ അഭിമുഖീകരിക്കാൻ ലക്ഷ്യമിടുന്നു.',
        '## പൈൽസ് പിന്തുണയ്ക്കുള്ള പരമ്പരാഗത ഔഷധച്ചെടികൾ||ദഹന, ശമന, വീക്കം കുറയ്ക്കൽ ഗുണങ്ങൾക്ക് അറിയപ്പെടുന്ന ഔഷധച്ചെടികൾ ആയുർവേദത്തിൽ പൈൽസ് പിന്തുണയ്ക്കായി പരമ്പരാഗതമായി ഉപയോഗിക്കുന്നു.',
        '## ഭക്ഷണ ശുപാർശകൾ||ആയുർവേദ പൈൽസ് മാനേജ്മെന്റിൽ ഭക്ഷണം നിർണായക പങ്ക് വഹിക്കുന്നു. ധാന്യങ്ങളും പച്ചക്കറികളും വഴി ഫൈബർ വർധിപ്പിക്കുക, നന്നായി ജലാംശം നിലനിർത്തുക.'
      ]
    }
  }
];

// Load AI-generated posts from content/blog/ directory
function loadGeneratedPosts(): BlogPost[] {
    try {
        const contentDir = path.join(process.cwd(), 'content', 'blog');
        if (!fs.existsSync(contentDir)) return [];

        return fs.readdirSync(contentDir)
            .filter(f => f.endsWith('.json'))
            .map(f => {
                const data = JSON.parse(fs.readFileSync(path.join(contentDir, f), 'utf-8'));
                return data as BlogPost;
            })
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } catch {
        return [];
    }
}

// All posts: starter + AI-generated, sorted by date (newest first)
export function getAllPosts(): BlogPost[] {
    const generated = loadGeneratedPosts();
    const all = [...starterPosts, ...generated];

    // Deduplicate by slug
    const seen = new Set<string>();
    const unique = all.filter(p => {
        if (seen.has(p.slug)) return false;
        seen.add(p.slug);
        return true;
    });

    return unique.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
    return getAllPosts().find(p => p.slug === slug);
}

// For backward compatibility
export const blogPosts = getAllPosts();
