'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Process() {
    const { t } = useLanguage();

    const steps = [
        {
            title: t.process.items[0].title,
            image: "/images/process-drying2.webp",
            description: t.process.items[0].desc
        },
        {
            title: t.process.items[1].title,
            image: "/images/process-cutting1.webp",
            description: t.process.items[1].desc
        },
        {
            title: t.process.items[2].title,
            image: "/images/process-grinding1.webp",
            description: t.process.items[2].desc
        },
        {
            title: t.process.items[3].title,
            image: "/images/process-storage2.webp",
            description: t.process.items[3].desc
        }
    ];

    return (
        <section id="process" style={{ background: 'var(--white)' }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    marginBottom: '60px',
                    flexWrap: 'wrap',
                    gap: '24px'
                }}>
                    <div style={{ maxWidth: '600px' }}>
                        <h2 style={{
                            fontSize: 'clamp(1.75rem, 8vw, 2.5rem)',
                            marginBottom: '16px'
                        }}>{t.process.title}</h2>
                        <p style={{ color: 'var(--text-muted)' }}>
                            {t.process.subtitle}
                        </p>
                    </div>
                    <div style={{
                        background: 'var(--accent)',
                        padding: '12px 24px',
                        borderRadius: 'var(--radius-full)',
                        color: 'var(--primary)',
                        fontWeight: '600',
                        fontSize: '0.9rem'
                    }}>
                        {t.process.badge}
                    </div>
                </div>

                <div className="grid grid-cols-4">
                    {steps.map((step, index) => (
                        <div key={index} style={{ position: 'relative' }}>
                            <div style={{
                                borderRadius: 'var(--radius-md)',
                                overflow: 'hidden',
                                aspectRatio: '3/4',
                                position: 'relative',
                                marginBottom: '20px',
                                boxShadow: 'var(--shadow-sm)'
                            }}>
                                <Image src={step.image} alt={`${step.title} - Traditional herbal preparation | പരമ്പരാഗത മരുന്ന് തയ്യാറെടുപ്പ്`} fill sizes="(max-width: 640px) 100vw, (max-width: 992px) 50vw, 25vw" style={{ objectFit: 'cover' }} loading="lazy" />
                            </div>
                            <div style={{
                                position: 'absolute',
                                top: '16px',
                                left: '16px',
                                width: '32px',
                                height: '32px',
                                background: 'var(--white)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: '700',
                                color: 'var(--primary)',
                                fontSize: '0.9rem',
                                boxShadow: 'var(--shadow-sm)'
                            }}>
                                {index + 1}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{step.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
