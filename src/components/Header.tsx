'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
    const { language, setLanguage, t } = useLanguage();
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { href: '/', label: t.nav.home },
        { href: '/about', label: t.nav.about },
        { href: '/#specialities', label: t.nav.specialities },
        { href: '/blog', label: t.nav.blog },
        { href: '/#enquiry', label: t.nav.contact },
    ];

    return (
        <header style={{
            padding: '16px 24px',
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
                    display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none'
                }}>
                    <Image
                        src="/Logo/android-chrome-512x512.png"
                        alt="Rahath Ayurvedic Logo"
                        className="header-logo"
                        width={32} height={32}
                        style={{ borderRadius: '4px' }}
                    />
                    <span className="brand-text" style={{
                        fontSize: '1.25rem', fontWeight: '700', color: 'var(--primary)',
                        letterSpacing: '-0.5px', fontFamily: "'Outfit', sans-serif"
                    }}>
                        Rahath <span style={{ color: 'var(--foreground)', fontWeight: '400' }}>Ayurvedic</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} style={{
                            color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500',
                            textDecoration: 'none', transition: 'color 0.2s ease'
                        }}
                            onMouseOver={e => (e.currentTarget.style.color = 'var(--primary)')}
                            onMouseOut={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {/* Language Toggle */}
                    <div className="language-toggle" style={{
                        display: 'flex', background: 'var(--accent)', padding: '3px',
                        borderRadius: 'var(--radius-full)', gap: '2px'
                    }}>
                        <button onClick={() => setLanguage('en')} style={{
                            padding: '5px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: '600',
                            background: language === 'en' ? 'var(--primary)' : 'transparent',
                            color: language === 'en' ? 'var(--white)' : 'var(--primary-dark)',
                            transition: 'var(--transition)', fontFamily: "'Outfit', sans-serif"
                        }}>EN</button>
                        <button onClick={() => setLanguage('ml')} style={{
                            padding: '5px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: '600',
                            background: language === 'ml' ? 'var(--primary)' : 'transparent',
                            color: language === 'ml' ? 'var(--white)' : 'var(--primary-dark)',
                            transition: 'var(--transition)', fontFamily: "'Outfit', sans-serif"
                        }}>മല</button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" style={{
                        display: 'none', padding: '8px', color: 'var(--primary-dark)'
                    }}>
                        {menuOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="mobile-menu" style={{
                    position: 'absolute', top: '100%', left: 0, right: 0,
                    background: 'rgba(253, 251, 247, 0.98)', backdropFilter: 'blur(12px)',
                    borderBottom: '1px solid rgba(45, 90, 39, 0.1)',
                    padding: '16px 24px', animation: 'slideUp 0.2s ease-out'
                }}>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
                                color: 'var(--primary-dark)', fontSize: '1rem', fontWeight: '500',
                                textDecoration: 'none', padding: '12px 0',
                                borderBottom: '1px solid rgba(45, 90, 39, 0.05)'
                            }}>
                                {link.label}
                            </Link>
                        ))}
                        <a href="tel:+919605424292" className="btn btn-primary" style={{ marginTop: '12px', textAlign: 'center' }}>
                            {t.nav.call_now}
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
