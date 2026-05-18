'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
    const { language, setLanguage } = useLanguage();

    return (
        <header style={{
            padding: '20px 24px',
            background: 'rgba(253, 251, 247, 0.8)',
            backdropFilter: 'blur(10px)',
            position: 'fixed',
            width: '100%',
            top: 0,
            zIndex: 100,
            borderBottom: '1px solid rgba(45, 90, 39, 0.05)'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Link href="/" className="header-brand" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                }}>
                    <Image
                        src="/Logo/android-chrome-512x512.png"
                        alt="Rahath Ayurvedic Logo"
                        className="header-logo"
                        width={32}
                        height={32}
                        style={{
                            borderRadius: '4px'
                        }}
                    />
                    <span className="brand-text" style={{
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        color: 'var(--primary)',
                        letterSpacing: '-0.5px',
                        fontFamily: "'Outfit', sans-serif"
                    }}>
                        Rahath <span style={{ color: 'var(--foreground)', fontWeight: '400' }}>Ayurvedic</span>
                    </span>
                </Link>
                <nav style={{ display: 'none' }}> {/* Hidden for mobile-first landing, could add simple menu if needed */}
                </nav>

                <div className="language-toggle" style={{
                    display: 'flex',
                    background: 'var(--accent)',
                    padding: '3px',
                    borderRadius: 'var(--radius-full)',
                    gap: '2px'
                }}>
                    <button
                        onClick={() => setLanguage('en')}
                        style={{
                            padding: '5px 12px',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.8rem',
                            fontWeight: '600',
                            background: language === 'en' ? 'var(--primary)' : 'transparent',
                            color: language === 'en' ? 'var(--white)' : 'var(--primary-dark)',
                            transition: 'var(--transition)',
                            fontFamily: "'Outfit', sans-serif"
                        }}
                    >
                        EN
                    </button>
                    <button
                        onClick={() => setLanguage('ml')}
                        style={{
                            padding: '5px 12px',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.8rem',
                            fontWeight: '600',
                            background: language === 'ml' ? 'var(--primary)' : 'transparent',
                            color: language === 'ml' ? 'var(--white)' : 'var(--primary-dark)',
                            transition: 'var(--transition)',
                            fontFamily: "'Outfit', sans-serif"
                        }}
                    >
                        മല
                    </button>
                </div>
            </div>
        </header>
    );
}
