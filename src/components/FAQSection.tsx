'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface FAQItem {
    question: string;
    answer: string;
    bullets: string[];
    link: { href: string; text: string };
}

const faqsEn: FAQItem[] = [
    {
        question: 'What is Rahath Ayurvedic in Mannarkkad?',
        answer: 'Rahath Ayurvedic is an authentic Ayurvedic herbal medicine shop at Hospital Junction, Mannarkkad, Palakkad, Kerala. With over 5 years of trusted service, it specializes in raw herbal medicines, piles care support, and postnatal herbal wellness — all prepared in-house using traditional Kerala methods.',
        bullets: [
            'In-house traditional herbal preparation — no artificial additives',
            'Serving Mannarkkad and Palakkad district for 5+ years',
            'Open daily from 9:00 AM to 8:30 PM'
        ],
        link: { href: '#why-choose', text: 'Discover why families trust Rahath' }
    },
    {
        question: 'What Ayurvedic treatments are available at Rahath?',
        answer: 'Rahath offers three core specialities: Raw Herbal Medicines (dried, cut, powdered herbs), Piles Care Support (traditional Ayurvedic formulations for comfort), and Postnatal Care (curated herbal sets following Kerala post-delivery wellness practices). All made without artificial additives.',
        bullets: [
            'Raw Herbal Medicines — authentic single herbs and blends',
            'Piles Care — traditional Ayurvedic herbal support',
            'Postnatal Care — Kerala-style post-delivery wellness kits'
        ],
        link: { href: '#specialities', text: 'Browse our Ayurvedic specialities' }
    },
    {
        question: 'Where is Rahath Ayurvedic located?',
        answer: 'Rahath Ayurvedic is at Hospital Junction, Near Old Bus Stand, Mannarkkad, Palakkad, Kerala 678582. Open daily 9:00 AM to 8:30 PM. Reach us at +91 9605 424 292 or via WhatsApp.',
        bullets: [
            'Address: Hospital Junction, Near Old Bus Stand, Mannarkkad',
            'Phone: +91 9605 424 292 (Call or WhatsApp)',
            'Hours: 9:00 AM – 8:30 PM, all 7 days'
        ],
        link: { href: '#location', text: 'View our location on the map' }
    },
    {
        question: 'Does Rahath offer Ayurvedic piles care support?',
        answer: 'Yes. Rahath provides specialized traditional herbal formulations for comfort and natural relief for piles using time-tested Kerala Ayurvedic ingredients. These are supportive herbal formulations rooted in traditional wisdom.',
        bullets: [
            'Traditional Ayurvedic herbs selected for piles support',
            'No artificial additives — purely herbal formulations',
            'Personalized guidance available at the shop'
        ],
        link: { href: '#enquiry', text: 'Enquire about piles care support' }
    },
    {
        question: 'What is postnatal care in Ayurveda?',
        answer: 'Postnatal care in Ayurveda focuses on post-childbirth recovery using nourishing herbs. At Rahath, postnatal care includes curated herbal sets following Kerala traditional post-delivery practices, supporting healing, strength, and well-being.',
        bullets: [
            'Curated herbal sets for post-delivery recovery',
            'Follows traditional Kerala Ayurvedic practices',
            'Herbs selected for nourishing and restorative properties'
        ],
        link: { href: '#specialities', text: 'Learn about postnatal herbal care' }
    },
    {
        question: 'How are herbal medicines prepared at Rahath?',
        answer: 'Rahath follows a 4-step traditional process: Natural Drying in ventilated spaces, Careful Cutting to retain potency, Fine Grinding preserving herbal integrity, and Clean Storage in hygienic glass containers. Every step is handled in-house.',
        bullets: [
            'Step 1: Natural drying under clean conditions',
            'Step 2: Careful cutting and selection of herbs',
            'Step 3: Traditional fine grinding for potency',
            'Step 4: Hygienic storage in sealed glass containers'
        ],
        link: { href: '#process', text: 'See our preparation process' }
    }
];

const faqsMl: FAQItem[] = [
    {
        question: 'മണ്ണാർക്കാട്ടെ റാഹത്ത് ആയുർവേദിക് എന്താണ്?',
        answer: 'റാഹത്ത് ആയുർവേദിക് മണ്ണാർക്കാട്ടെ ഹോസ്പിറ്റൽ ജംഗ്ഷനിൽ സ്ഥിതി ചെയ്യുന്ന ഒരു ആധികാരിക പച്ചമരുന്ന് കടയാണ്. 5+ വർഷമായി പച്ചമരുന്നുകൾ, പൈൽസ് കെയർ, പ്രസവരക്ഷ എന്നിവയിൽ വൈദഗ്ധ്യം.',
        bullets: [
            'സ്വന്തമായി തയ്യാറാക്കുന്ന പരമ്പരാഗത ഫോർമുലേഷനുകൾ',
            'കൃത്രിമ ചേരുവകൾ ഇല്ലാത്ത ശുദ്ധ പച്ചമരുന്നുകൾ',
            'എല്ലാ ദിവസവും 9 AM - 8:30 PM'
        ],
        link: { href: '#why-choose', text: 'എന്തുകൊണ്ട് റാഹത്ത്' }
    },
    {
        question: 'റാഹത്തിൽ ഏതെല്ലാം ചികിത്സകൾ ലഭ്യമാണ്?',
        answer: 'പച്ചമരുന്നുകൾ, പൈൽസ് കെയർ സപ്പോർട്ട്, പ്രസവരക്ഷ ഹെർബൽ കൂട്ടുകൾ എന്നിവ ലഭ്യമാണ്. എല്ലാം പരമ്പരാഗത കേരള രീതികൾ പിന്തുടർന്ന് ഇൻ-ഹൌസ് ആയി ചെയ്യുന്നു.',
        bullets: [
            'ഉണക്കി മുറിച്ചു പൊടിച്ച പച്ചമരുന്നുകൾ',
            'പൈൽസിനുള്ള ആയുർവേദ ഫോർമുലേഷനുകൾ',
            'പ്രസവാനന്തര പരിരക്ഷ കിറ്റുകൾ'
        ],
        link: { href: '#specialities', text: 'പ്രത്യേകതകൾ കാണുക' }
    },
    {
        question: 'റാഹത്ത് ആയുർവേദിക് എവിടെയാണ്?',
        answer: 'ഹോസ്പിറ്റൽ ജംഗ്ഷൻ, പഴയ ബസ് സ്റ്റാൻഡിന് സമീപം, മണ്ണാർക്കാട്, കേരളം 678582. എല്ലാ ദിവസവും 9:00 AM - 8:30 PM.',
        bullets: [
            'ഹോസ്പിറ്റൽ ജംഗ്ഷൻ, മണ്ണാർക്കാട്',
            'ഫോൺ: +91 9605 424 292',
            'ദിവസവും 9 AM - 8:30 PM'
        ],
        link: { href: '#location', text: 'ലൊക്കേഷൻ കാണുക' }
    }
];

export default function FAQSection() {
    const { language } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const faqs = language === 'ml' ? faqsMl : faqsEn;

    return (
        <section id="faq" style={{ background: 'var(--background)' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <div className="text-center" style={{ marginBottom: '60px' }}>
                    <h2 style={{ fontSize: 'clamp(1.75rem, 8vw, 2.5rem)', marginBottom: '16px' }}>
                        {language === 'ml' ? 'പതിവ് ചോദ്യങ്ങൾ' : 'Frequently Asked Questions'}
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        {language === 'ml'
                            ? 'ആയുർവേദ ഹെർബൽ മരുന്നുകളെ കുറിച്ചുള്ള സാധാരണ ചോദ്യങ്ങൾ.'
                            : 'Common questions about Ayurvedic herbal medicines in Mannarkkad and our traditional preparation methods.'}
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {faqs.map((faq, index) => (
                        <div key={index} style={{
                            background: 'var(--white)',
                            borderRadius: 'var(--radius-md)',
                            overflow: 'hidden',
                            boxShadow: openIndex === index ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                            transition: 'var(--transition)',
                            border: openIndex === index ? '1px solid var(--primary)' : '1px solid transparent'
                        }}>
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                                id={`faq-question-${index}`}
                                style={{
                                    width: '100%', padding: '24px 28px',
                                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                    gap: '16px', textAlign: 'left', cursor: 'pointer',
                                    background: 'none', border: 'none',
                                    fontSize: '1.1rem', fontWeight: '600',
                                    color: openIndex === index ? 'var(--primary)' : 'var(--primary-dark)',
                                    fontFamily: language === 'ml' ? "'Anek Malayalam', sans-serif" : "'Outfit', sans-serif"
                                }}
                            >
                                <span>{faq.question}</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    style={{ flexShrink: 0, transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s ease' }}>
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>

                            <div id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`}
                                style={{ maxHeight: openIndex === index ? '600px' : '0', overflow: 'hidden', transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                                <div style={{ padding: '0 28px 24px' }}>
                                    <p style={{ color: 'var(--foreground)', lineHeight: '1.8', marginBottom: '16px', fontSize: '0.95rem' }}>
                                        {faq.answer}
                                    </p>
                                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                                        {faq.bullets.map((bullet, bIdx) => (
                                            <li key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                </svg>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a href={faq.link.href} style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                        {faq.link.text}
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '48px', textAlign: 'center', padding: '32px', background: 'var(--accent)', borderRadius: 'var(--radius-lg)' }}>
                    <p style={{ fontSize: '1.1rem', color: 'var(--primary-dark)', marginBottom: '16px', fontWeight: '500' }}>
                        {language === 'ml' ? 'കൂടുതൽ ചോദ്യങ്ങൾ ഉണ്ടോ? നേരിട്ട് ബന്ധപ്പെടുക.' : 'Still have questions? Contact us for personalized Ayurvedic guidance.'}
                    </p>
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="#enquiry" className="btn btn-primary">
                            {language === 'ml' ? 'അന്വേഷണം അയക്കുക' : 'Send an Enquiry'}
                        </a>
                        <a href="https://wa.me/919605424292" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                            {language === 'ml' ? 'വാട്സാപ്പ് ചാറ്റ്' : 'WhatsApp Chat'}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
