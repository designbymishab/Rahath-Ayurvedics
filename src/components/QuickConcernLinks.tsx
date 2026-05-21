'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const concerns = [
    {
        en: 'Piles Care',
        ml: 'പൈൽസ് കെയർ',
        href: '/specialities/piles-care',
    },
    {
        en: 'Postnatal Care',
        ml: 'പ്രസവരക്ഷ',
        href: '/specialities/postnatal-care',
    },
    {
        en: 'Raw Herbs',
        ml: 'പച്ചമരുന്നുകൾ',
        href: '/specialities/raw-herbal-medicines',
    },
];

export default function QuickConcernLinks() {
    const { language } = useLanguage();

    return (
        <div className="quick-concerns" style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            marginTop: '24px'
        }}>
            {concerns.map((concern, index) => (
                <Link
                    key={index}
                    href={concern.href}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: 'clamp(8px, 2vw, 10px) clamp(16px, 4vw, 22px)',
                        borderRadius: 'var(--radius-full)',
                        border: '1.5px solid rgba(29, 158, 117, 0.3)',
                        color: '#1D9E75',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        background: 'rgba(29, 158, 117, 0.04)',
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.background = 'rgba(29, 158, 117, 0.1)';
                        e.currentTarget.style.borderColor = '#1D9E75';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.background = 'rgba(29, 158, 117, 0.04)';
                        e.currentTarget.style.borderColor = 'rgba(29, 158, 117, 0.3)';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                >
                    {language === 'ml' ? concern.ml : concern.en}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </Link>
            ))}
        </div>
    );
}
