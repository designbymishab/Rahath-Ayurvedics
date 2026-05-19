'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
    const { t, language } = useLanguage();

    return (
        <footer style={{ background: 'var(--primary-dark)', color: 'var(--white)', padding: '60px 24px 30px' }}>
            <div className="container">
                <div className="footer-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: '1.5fr 1fr 1fr',
                    gap: '48px',
                    marginBottom: '60px'
                }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                            <Image
                                src="/Logo/android-chrome-512x512.png"
                                alt="Rahath Ayurvedic Logo"
                                width={50}
                                height={50}
                                style={{
                                    borderRadius: '4px'
                                }}
                            />
                            <h3 style={{ color: 'var(--white)', fontSize: '1.5rem' }}>{language === 'ml' ? 'റാഹത്ത് ആയുർവേദിക്' : 'Rahath Ayurvedic'}</h3>
                        </div>
                        <p style={{ opacity: 0.8, marginBottom: '24px', maxWidth: '300px' }}>
                            {t.footer.desc}
                        </p>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <a href="https://www.facebook.com/profile.php?id=61587190377965" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--white)' }} aria-label="Facebook">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </a>
                            <a href="https://www.instagram.com/rahathayurvedic/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--white)' }} aria-label="Instagram">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ color: 'var(--white)', marginBottom: '24px' }}>{t.footer.quick_links}</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <li><Link href="/#why-choose" style={{ opacity: 0.8, textDecoration: 'none', color: 'inherit' }}>{t.why_choose.title}</Link></li>
                            <li><Link href="/#specialities" style={{ opacity: 0.8, textDecoration: 'none', color: 'inherit' }}>{t.specialities.title}</Link></li>
                            <li><Link href="/#process" style={{ opacity: 0.8, textDecoration: 'none', color: 'inherit' }}>{t.process.title}</Link></li>
                            <li><Link href="/#location" style={{ opacity: 0.8, textDecoration: 'none', color: 'inherit' }}>{t.localseo.title}</Link></li>
                            <li><Link href="/#faq" style={{ opacity: 0.8, textDecoration: 'none', color: 'inherit' }}>{language === 'ml' ? 'പതിവ് ചോദ്യങ്ങൾ' : 'FAQs'}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ color: 'var(--white)', marginBottom: '24px' }}>{t.footer.contact}</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                <span style={{ opacity: 0.8 }}>+91 9605 424 292</span>
                            </li>
                            <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                <a href="mailto:rahathayurvedic@gmail.com" style={{ opacity: 0.8, color: 'var(--white)', textDecoration: 'none' }}>rahathayurvedic@gmail.com</a>
                            </li>
                            <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                <span style={{ opacity: 0.8 }}>{t.localseo.address_value}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '30px',
                    textAlign: 'center',
                    fontSize: '0.9rem',
                    opacity: 0.6
                }}>
                    <p>© {new Date().getFullYear()} {language === 'ml' ? 'റാഹത്ത് ആയുർവേദിക്' : 'Rahath Ayurvedic'}. {t.footer.all_rights}</p>
                </div>
            </div>
        </footer>
    );
}
