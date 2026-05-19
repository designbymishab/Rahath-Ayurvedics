'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
    const { t, language } = useLanguage();

    return (
        <section style={{
            paddingTop: '160px',
            paddingBottom: '100px',
            background: 'linear-gradient(180deg, #FDFBF7 0%, #F5F1E8 100%)',
            overflow: 'hidden'
        }}>
            <div className="container hero-container" style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.2fr) 1fr',
                gap: '48px',
                alignItems: 'center'
            }}>
                <div className="hero-content">
                    <span style={{
                        color: 'var(--primary)',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        fontSize: '0.875rem',
                        marginBottom: '16px',
                        display: 'block'
                    }}>
                        {t.hero.badge}
                    </span>
                    <h1 style={{
                        fontSize: language === 'ml' ? 'clamp(2rem, 5vw, 3.5rem)' : 'clamp(2.5rem, 5vw, 4rem)',
                        marginBottom: '24px',
                        lineHeight: language === 'ml' ? '1.3' : '1.1'
                    }}>
                        {t.hero.title}
                    </h1>
                    <p className="hero-text" style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-muted)',
                        marginBottom: '40px',
                        maxWidth: '600px'
                    }}>
                        {t.hero.description}
                    </p>
                    <div className="hero-buttons" style={{
                        display: 'flex',
                        gap: '16px',
                        flexWrap: 'wrap'
                    }}>
                        <a href="tel:+919605424292" className="btn btn-primary">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            {t.hero.cta_call}
                        </a>
                        <a href="https://wa.me/919605424292" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                            {t.hero.cta_whatsapp}
                        </a>
                    </div>
                </div>
                <div className="hero-image" style={{
                    position: 'relative',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-lg)'
                }}>
                    <div style={{
                        width: '100%',
                        aspectRatio: '1/1',
                        position: 'relative',
                        background: 'var(--accent)'
                    }}>
                        <Image
                            src="/images/hero2.webp"
                            alt="Traditional Ayurvedic herbal medicine preparation at Rahath Ayurvedic Mannarkkad"
                            fill
                            priority
                            sizes="(max-width: 992px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div style={{
                        position: 'absolute',
                        bottom: '24px',
                        left: '24px',
                        right: '24px',
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(8px)',
                        padding: '20px',
                        borderRadius: 'var(--radius-md)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px'
                    }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            background: 'var(--primary)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white'
                        }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <div>
                            <p style={{ fontWeight: '600', fontSize: '0.9rem' }}>{t.hero.feature_title}</p>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.hero.feature_desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
