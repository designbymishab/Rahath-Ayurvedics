'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { specialities, getSpecialityBySlug } from '@/data/specialities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function SpecialityPageClient({ slug }: { slug: string }) {
    const { t, language } = useLanguage();
    const spec = getSpecialityBySlug(slug);
    if (!spec) return null;

    const lang = language === 'ml' ? spec.ml : spec.en;
    const otherSpecs = specialities.filter(s => s.slug !== slug);

    return (
        <main>
            <Header />
            {/* Hero */}
            <section style={{
                paddingTop: '140px', paddingBottom: '60px',
                background: `linear-gradient(180deg, ${spec.color} 0%, #FDFBF7 100%)`
            }}>
                <div className="container">
                    <Breadcrumbs items={[
                        { label: language === 'ml' ? 'ഹോം' : 'Home', href: '/' },
                        { label: t.specialities.title, href: '/#specialities' },
                        { label: lang.title }
                    ]} />
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '48px', alignItems: 'center' }} className="hero-container">
                        <div className="hero-content">
                            <span style={{
                                color: 'var(--primary)', fontWeight: '600', textTransform: 'uppercase',
                                letterSpacing: '1px', fontSize: '0.875rem', marginBottom: '12px', display: 'block'
                            }}>{lang.subtitle}</span>
                            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '24px', lineHeight: '1.1' }}>
                                {lang.title}
                            </h1>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '32px', lineHeight: '1.8' }}>
                                {lang.heroDesc}
                            </p>
                            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }} className="hero-buttons">
                                <Link href="/#enquiry" className="btn btn-primary">{t.speciality_detail.enquire_cta}</Link>
                                <a href="https://wa.me/919605424292" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                                    {t.speciality_detail.whatsapp_cta}
                                </a>
                            </div>
                        </div>
                        <div className="hero-image" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                            <div style={{ width: '100%', aspectRatio: '1/1', position: 'relative', background: spec.color }}>
                                <Image src={spec.image} alt={lang.title} fill sizes="(max-width: 992px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            {lang.sections.map((section, i) => (
                <section key={i} style={{ background: i % 2 === 0 ? 'var(--white)' : 'var(--background)' }}>
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '20px' }}>{section.heading}</h2>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', fontSize: '1.05rem' }}>{section.content}</p>
                    </div>
                </section>
            ))}

            {/* Process CTA */}
            <section style={{ background: 'var(--accent)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '16px' }}>{t.speciality_detail.process_title}</h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 32px' }}>
                        {t.process.subtitle}
                    </p>
                    <Link href="/#process" className="btn btn-primary">
                        {language === 'ml' ? 'പ്രക്രിയ കാണുക' : 'View Our Process'}
                    </Link>
                </div>
            </section>

            {/* Related Specialities */}
            <section style={{ background: 'var(--white)' }}>
                <div className="container">
                    <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '40px', textAlign: 'center' }}>
                        {t.speciality_detail.related_title}
                    </h2>
                    <div className="grid grid-cols-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {otherSpecs.map((other) => {
                            const otherLang = language === 'ml' ? other.ml : other.en;
                            return (
                                <Link key={other.slug} href={`/specialities/${other.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div style={{
                                        background: other.color, borderRadius: 'var(--radius-lg)', overflow: 'hidden',
                                        boxShadow: 'var(--shadow-sm)', transition: 'var(--transition)'
                                    }} className="card" onMouseOver={e => (e.currentTarget.style.transform = 'translateY(-4px)')} onMouseOut={e => (e.currentTarget.style.transform = 'translateY(0)')}>
                                        <div style={{ width: '100%', aspectRatio: '16/10', overflow: 'hidden', position: 'relative' }}>
                                            <Image src={other.image} alt={otherLang.title} fill sizes="(max-width: 640px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                                        </div>
                                        <div style={{ padding: '24px' }}>
                                            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--primary-dark)' }}>{otherLang.title}</h3>
                                            <p style={{ fontWeight: '500', color: 'var(--primary)', fontSize: '0.85rem', textTransform: 'uppercase' }}>{otherLang.subtitle}</p>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
