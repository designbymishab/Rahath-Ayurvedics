'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function AboutPageClient() {
    const { t, language } = useLanguage();
    const a = t.about;

    return (
        <main>
            <Header />
            <section style={{
                paddingTop: '140px', paddingBottom: '60px',
                background: 'linear-gradient(180deg, #FDFBF7 0%, #F5F1E8 100%)'
            }}>
                <div className="container">
                    <Breadcrumbs items={[
                        { label: language === 'ml' ? 'ഹോം' : 'Home', href: '/' },
                        { label: a.title }
                    ]} />
                    <span style={{
                        color: 'var(--primary)', fontWeight: '600', textTransform: 'uppercase',
                        letterSpacing: '1px', fontSize: '0.875rem', marginBottom: '16px', display: 'block'
                    }}>{a.badge}</span>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '24px', lineHeight: '1.1' }}>
                        {a.title}
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '700px' }}>
                        {a.subtitle}
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section style={{ background: 'var(--white)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="about-grid">
                        <div>
                            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', marginBottom: '24px' }}>{a.story_title}</h2>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>{a.story_p1}</p>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>{a.story_p2}</p>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>{a.story_p3}</p>
                        </div>
                        <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                            <div style={{ width: '100%', aspectRatio: '4/3', position: 'relative', background: 'var(--accent)' }}>
                                <Image
                                    src="/images/hero2.webp"
                                    alt="Rahath Ayurvedic shop at Hospital Junction, Mannarkkad | റാഹത്ത് ആയുർവേദിക് കട, ഹോസ്പിറ്റൽ ജംഗ്ഷൻ, മണ്ണാർക്കാട്"
                                    fill
                                    sizes="(max-width: 992px) 100vw, 50vw"
                                    style={{ objectFit: 'cover' }}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Traditional Methods Section */}
            <section style={{ background: 'var(--background)' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '60px' }}>
                        <h2 style={{ fontSize: 'clamp(1.75rem, 8vw, 2.5rem)', marginBottom: '16px' }}>
                            {language === 'ml' ? 'എന്തുകൊണ്ട് പരമ്പരാഗത രീതികൾ?' : 'Why Traditional Methods?'}
                        </h2>
                        <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
                            {language === 'ml'
                                ? 'ആയിരക്കണക്കിന് വർഷങ്ങളായി പരീക്ഷിച്ച പാരമ്പര്യ രീതികൾ ഔഷധച്ചെടികളുടെ യഥാർത്ഥ ശക്തിയും ഗുണമേന്മയും നിലനിർത്തുന്നു. ഞങ്ങളുടെ 4-ഘട്ട പ്രക്രിയ ഓരോ മരുന്നിന്റെയും ശുദ്ധത ഉറപ്പാക്കുന്നു.'
                                : 'Traditional methods, tested over thousands of years, preserve the true potency and quality of medicinal herbs. Our 4-step process ensures the purity of every medicine we prepare.'}
                        </p>
                    </div>
                    <div className="grid grid-cols-4">
                        {[
                            {
                                icon: '🌿',
                                en: { title: 'Natural Drying', desc: 'Herbs are sun-dried in clean, ventilated spaces — never heat-treated — to preserve their volatile oils and natural compounds.' },
                                ml: { title: 'സ്വാഭാവിക ഉണക്കൽ', desc: 'ചൂടുപയോഗിച്ചല്ല, വൃത്തിയുള്ള വായുസഞ്ചാരമുള്ള ഇടങ്ങളിൽ സൂര്യപ്രകാശത്തിൽ ഉണക്കി, അവയുടെ വോളറ്റൈൽ ഓയിലുകൾ സംരക്ഷിക്കുന്നു.' }
                            },
                            {
                                icon: '✂️',
                                en: { title: 'Careful Cutting', desc: 'Each herb is hand-selected and carefully cut to retain maximum potency. We never rush this process.' },
                                ml: { title: 'ശ്രദ്ധാപൂർവ്വം മുറിക്കൽ', desc: 'ഓരോ ഔഷധച്ചെടിയും കൈകൊണ്ട് തിരഞ്ഞെടുത്ത് പരമാവധി ശക്തി നിലനിർത്തുന്നതിനായി ശ്രദ്ധയോടെ മുറിക്കുന്നു.' }
                            },
                            {
                                icon: '⚙️',
                                en: { title: 'Traditional Grinding', desc: 'Ground using methods that maintain herbal integrity — the fiber, oils, and active compounds remain intact.' },
                                ml: { title: 'പരമ്പരാഗത പൊടിക്കൽ', desc: 'ഹെർബൽ ഗുണങ്ങൾ നിലനിർത്തുന്ന രീതികൾ ഉപയോഗിച്ച് പൊടിക്കുന്നു — നാരുകൾ, എണ്ണകൾ, സജീവ സംയുക്തങ്ങൾ അവശേഷിക്കുന്നു.' }
                            },
                            {
                                icon: '🫙',
                                en: { title: 'Glass Storage', desc: 'Stored in sealed glass containers — never plastic — to maintain freshness and prevent contamination.' },
                                ml: { title: 'ഗ്ലാസ് സംഭരണം', desc: 'പ്ലാസ്റ്റിക്കിലല്ല, മുദ്ര വച്ച ഗ്ലാസ് പാത്രങ്ങളിൽ സൂക്ഷിക്കുന്നു — ഫ്രഷ്‌നെസ്സ് നിലനിർത്തുകയും മാലിന്യം തടയുകയും ചെയ്യുന്നു.' }
                            }
                        ].map((step, i) => (
                            <div key={i} className="card" style={{ textAlign: 'center' }}>
                                <div style={{
                                    fontSize: '2rem', marginBottom: '16px'
                                }}>
                                    {step.icon}
                                </div>
                                <h3 style={{ fontSize: '1.15rem', marginBottom: '12px' }}>
                                    {language === 'ml' ? step.ml.title : step.en.title}
                                </h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.7' }}>
                                    {language === 'ml' ? step.ml.desc : step.en.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Promise Section */}
            <section style={{ background: 'var(--white)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="about-grid">
                        <div style={{
                            background: 'linear-gradient(135deg, #2D5A27 0%, #1D9E75 100%)',
                            borderRadius: 'var(--radius-lg)',
                            padding: 'clamp(32px, 6vw, 60px) clamp(24px, 4vw, 40px)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: '350px',
                            textAlign: 'center'
                        }}>
                            {/* Founder placeholder avatar */}
                            <div style={{
                                width: '120px', height: '120px', borderRadius: '50%',
                                background: 'rgba(255,255,255,0.15)', display: 'flex',
                                alignItems: 'center', justifyContent: 'center',
                                marginBottom: '24px', border: '3px solid rgba(255,255,255,0.3)'
                            }}>
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', fontWeight: '500' }}>
                                {language === 'ml' ? 'സ്ഥാപകൻ, റാഹത്ത് ആയുർവേദിക്' : 'Founder, Rahath Ayurvedic'}
                            </p>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginTop: '4px' }}>
                                {language === 'ml' ? 'മണ്ണാർക്കാട്, കേരളം' : 'Mannarkkad, Kerala'}
                            </p>
                        </div>
                        <div>
                            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', marginBottom: '24px' }}>
                                {language === 'ml' ? 'ഞങ്ങളുടെ വാഗ്ദാനം' : 'Our Promise'}
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {[
                                    {
                                        en: { title: 'No Artificial Additives', desc: 'Every herbal preparation we make is 100% natural. We never add preservatives, artificial colors, or synthetic chemicals to our medicines.' },
                                        ml: { title: 'കൃത്രിമ ചേരുവകൾ ഇല്ല', desc: 'ഞങ്ങൾ ഉണ്ടാക്കുന്ന ഓരോ ഹെർബൽ തയ്യാറെടുപ്പും 100% പ്രകൃതിദത്തമാണ്. സംരക്ഷണ വസ്തുക്കളോ കൃത്രിമ നിറങ്ങളോ രാസവസ്തുക്കളോ ഞങ്ങൾ ചേർക്കുന്നില്ല.' }
                                    },
                                    {
                                        en: { title: 'In-House Preparation', desc: 'From sourcing to grinding and storage, every step happens in our shop at Hospital Junction. We never outsource our herbal preparation.' },
                                        ml: { title: 'ഇൻ-ഹൌസ് തയ്യാറെടുപ്പ്', desc: 'ശേഖരണം മുതൽ പൊടിക്കൽ, സംഭരണം വരെ ഓരോ ഘട്ടവും ഹോസ്പിറ്റൽ ജംഗ്ഷനിലെ ഞങ്ങളുടെ കടയിൽ നടക്കുന്നു. ഔട്ട്സോഴ്സ് ചെയ്യില്ല.' }
                                    },
                                    {
                                        en: { title: 'Community Trust', desc: 'Over 5 years of dedicated service to Mannarkkad and the wider Palakkad community. Hundreds of families trust us for their herbal wellness needs.' },
                                        ml: { title: 'സമൂഹ വിശ്വാസം', desc: '5 വർഷത്തിലധികമായി മണ്ണാർക്കാട്ടിനും പാലക്കാട് സമൂഹത്തിനും സമർപ്പിത സേവനം. നൂറുകണക്കിന് കുടുംബങ്ങൾ ഞങ്ങളെ വിശ്വസിക്കുന്നു.' }
                                    }
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                        <div style={{
                                            width: '36px', height: '36px', borderRadius: '50%',
                                            background: 'var(--accent)', color: 'var(--primary)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            flexShrink: 0
                                        }}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>
                                                {language === 'ml' ? item.ml.title : item.en.title}
                                            </h3>
                                            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.7' }}>
                                                {language === 'ml' ? item.ml.desc : item.en.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section style={{ background: 'var(--background)' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '60px' }}>
                        <h2 style={{ fontSize: 'clamp(1.75rem, 8vw, 2.5rem)', marginBottom: '16px' }}>{a.mission_title}</h2>
                        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>{a.mission_desc}</p>
                    </div>
                    <div className="grid grid-cols-4">
                        {a.values.map((val, i) => (
                            <div key={i} className="card" style={{ textAlign: 'center' }}>
                                <div style={{
                                    width: '60px', height: '60px', background: 'var(--accent)', color: 'var(--primary)',
                                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    margin: '0 auto 24px', fontSize: '1.5rem', fontWeight: '700'
                                }}>
                                    {i + 1}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{val.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ background: 'var(--white)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                        {a.cta_text}
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/#enquiry" className="btn btn-primary">
                            {language === 'ml' ? 'അന്വേഷണം അയക്കുക' : 'Send an Enquiry'}
                        </Link>
                        <a href="https://wa.me/919605424292" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                            {language === 'ml' ? 'വാട്സാപ്പ് ചാറ്റ്' : 'WhatsApp Chat'}
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
