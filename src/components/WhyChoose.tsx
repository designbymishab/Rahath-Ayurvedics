'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function WhyChoose() {
    const { t } = useLanguage();

    const reasons = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
            ),
            title: t.why_choose.items[0].title,
            description: t.why_choose.items[0].desc
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            ),
            title: t.why_choose.items[1].title,
            description: t.why_choose.items[1].desc
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
            ),
            title: t.why_choose.items[2].title,
            description: t.why_choose.items[2].desc
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            ),
            title: t.why_choose.items[3].title,
            description: t.why_choose.items[3].desc
        }
    ];

    return (
        <section id="why-choose" style={{ background: 'var(--white)' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '60px' }}>
                    <h2 style={{
                        fontSize: 'clamp(1.75rem, 8vw, 2.5rem)',
                        marginBottom: '16px'
                    }}>{t.why_choose.title}</h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        {t.why_choose.subtitle}
                    </p>
                </div>
                <div className="grid grid-cols-4">
                    {reasons.map((reason, index) => (
                        <div key={index} className="card" style={{ textAlign: 'center' }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                background: 'var(--accent)',
                                color: 'var(--primary)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 24px'
                            }}>
                                {reason.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{reason.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
