'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Specialities() {
    const { t } = useLanguage();

    const specs = [
        {
            title: t.specialities.items[0].title,
            subtitle: t.specialities.items[0].subtitle,
            image: "/images/speciality-herbal1.webp",
            description: t.specialities.items[0].desc,
            color: "#E8F0E6",
            slug: t.specialities.items[0].slug
        },
        {
            title: t.specialities.items[1].title,
            subtitle: t.specialities.items[1].subtitle,
            image: "/images/speciality-piles1.webp",
            description: t.specialities.items[1].desc,
            color: "#F0EBE6",
            slug: t.specialities.items[1].slug
        },
        {
            title: t.specialities.items[2].title,
            subtitle: t.specialities.items[2].subtitle,
            image: "/images/speciality-prasava1.webp",
            description: t.specialities.items[2].desc,
            color: "#E6EDF0",
            slug: t.specialities.items[2].slug
        }
    ];

    return (
        <section id="specialities" style={{ background: 'var(--background)' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '60px' }}>
                    <h2 style={{
                        fontSize: 'clamp(1.75rem, 8vw, 2.5rem)',
                        marginBottom: '16px'
                    }}>{t.specialities.title}</h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        {t.specialities.subtitle}
                    </p>
                </div>
                <div className="grid grid-cols-3">
                    {specs.map((spec, index) => (
                        <div key={index} style={{
                            background: spec.color,
                            borderRadius: 'var(--radius-lg)',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'var(--transition)',
                            cursor: 'default',
                            boxShadow: 'var(--shadow-sm)'
                        }}>
                            <div style={{ width: '100%', aspectRatio: '16/10', overflow: 'hidden', position: 'relative' }}>
                                <Image src={spec.image} alt={spec.title} fill sizes="(max-width: 640px) 100vw, (max-width: 992px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: 'var(--primary-dark)' }}>{spec.title}</h3>
                                <p style={{ fontWeight: '500', color: 'var(--primary)', marginBottom: '24px', fontSize: '0.9rem', textTransform: 'uppercase' }}>{spec.subtitle}</p>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '32px', flex: 1 }}>{spec.description}</p>
                                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                    <Link href={`/specialities/${spec.slug}`} className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                                        {t.specialities.learn_more}
                                    </Link>
                                    <a href="#enquiry" className="btn btn-secondary" style={{ alignSelf: 'flex-start' }}>
                                        {t.specialities.enquire_now}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
