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
                                <Image src="/images/hero2.webp" alt="Rahath Ayurvedic shop in Mannarkkad" fill sizes="(max-width: 992px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
