'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function LocalSEO() {
    const { t } = useLanguage();

    return (
        <section id="location" style={{ background: 'var(--cream)', padding: '0' }}>
            <div className="localseo-container" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                minHeight: '500px'
            }}>
                <div className="localseo-content" style={{
                    padding: '80px 48px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <h2 style={{
                        fontSize: 'clamp(1.6rem, 7vw, 2.25rem)',
                        marginBottom: '24px'
                    }}>{t.localseo.title}</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '32px', lineHeight: '1.8' }}>
                        {t.localseo.desc}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                            <div style={{ color: 'var(--primary)' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </div>
                            <div>
                                <p style={{ fontWeight: '600' }}>{t.localseo.address_label}</p>
                                <p style={{ color: 'var(--text-muted)' }}>{t.localseo.address_value}</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                            <div style={{ color: 'var(--primary)' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            </div>
                            <div>
                                <p style={{ fontWeight: '600', marginBottom: '4px' }}>{t.localseo.working_hours_label}</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: '500' }}>{t.localseo.working_hours_value}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="localseo-map" style={{ background: '#eee', position: 'relative' }}>
                    {/* Mock Google Map */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5841451688584!2d76.4651452!3d10.9947286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba87f1c78b8901f%3A0x914bc46287362b08!2sRahath%20Ayurvedic!5e0!3m2!1sen!2sin!4v1771994567000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
