'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function EnquiryForm() {
    const { t, language } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        concern: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'enquiry',
                    ...formData
                }),
            });

            if (response.ok) {
                alert(t.enquiry.success);
                setFormData({ name: '', phone: '', concern: '', message: '' });
            } else {
                alert('Something went wrong. Please try WhatsApp.');
            }
        } catch (error) {
            alert('Failed to send enquiry.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const concerns = [
        t.specialities.items[0].title,
        t.specialities.items[1].title,
        t.specialities.items[2].title,
        language === 'ml' ? 'മറ്റു കൺസൾട്ടേഷനുകൾ' : 'Other Consultation'
    ];

    return (
        <section id="enquiry" style={{ background: 'var(--white)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="card form-card" style={{ padding: '60px' }}>
                    <div className="text-center" style={{ marginBottom: '40px' }}>
                        <h2 style={{
                            fontSize: 'clamp(1.75rem, 8vw, 2.5rem)',
                            marginBottom: '16px',
                            lineHeight: '1.2'
                        }}>{t.enquiry.title}</h2>
                        <p style={{ color: 'var(--text-muted)' }}>{t.enquiry.subtitle}</p>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '24px' }}>
                        <div className="enquiry-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>{t.enquiry.name_label}</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder={t.enquiry.name_placeholder}
                                    style={{
                                        width: '100%',
                                        padding: '14px 20px',
                                        borderRadius: 'var(--radius-sm)',
                                        border: '1px solid #E2E8F0',
                                        fontSize: '1rem',
                                        background: '#F8FAFC'
                                    }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>{t.enquiry.phone_label}</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder={t.enquiry.phone_placeholder}
                                    style={{
                                        width: '100%',
                                        padding: '14px 20px',
                                        borderRadius: 'var(--radius-sm)',
                                        border: '1px solid #E2E8F0',
                                        fontSize: '1rem',
                                        background: '#F8FAFC'
                                    }}
                                />
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>{t.enquiry.concern_label}</label>
                            <select
                                name="concern"
                                required
                                value={formData.concern}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '14px 20px',
                                    borderRadius: 'var(--radius-sm)',
                                    border: '1px solid #E2E8F0',
                                    fontSize: '1rem',
                                    background: '#F8FAFC',
                                    appearance: 'none'
                                }}
                            >
                                <option value="">{language === 'ml' ? 'ഒരു വിഭാഗം തിരഞ്ഞെടുക്കുക' : 'Select a concern'}</option>
                                {concerns.map((concern, idx) => (
                                    <option key={idx} value={concern}>{concern}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>{language === 'ml' ? 'സന്ദേശം' : 'Message'}</label>
                            <textarea
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder={t.enquiry.concern_placeholder}
                                style={{
                                    width: '100%',
                                    padding: '14px 20px',
                                    borderRadius: 'var(--radius-sm)',
                                    border: '1px solid #E2E8F0',
                                    fontSize: '1rem',
                                    background: '#F8FAFC',
                                    resize: 'vertical'
                                }}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-primary"
                            style={{
                                height: '56px',
                                fontSize: '1.1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                opacity: isSubmitting ? 0.7 : 1,
                                cursor: isSubmitting ? 'not-allowed' : 'pointer'
                            }}
                        >
                            {isSubmitting ? (
                                <>{language === 'ml' ? 'അയക്കുന്നു...' : 'Sending...'}</>
                            ) : (
                                <>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                    {t.enquiry.submit}
                                </>
                            )}
                        </button>

                        <div style={{ textAlign: 'center', margin: '16px 0' }}>
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{language === 'ml' ? 'അല്ലെങ്കിൽ' : 'OR'}</span>
                        </div>

                        <button
                            type="button"
                            onClick={() => {
                                const waText = `Hello Rahath Ayurvedic, I have an enquiry:
Name: ${formData.name}
Phone: ${formData.phone}
Concern: ${formData.concern}
Message: ${formData.message}`;
                                const waUrl = `https://wa.me/919605424292?text=${encodeURIComponent(waText)}`;
                                window.open(waUrl, '_blank');
                            }}
                            className="btn btn-secondary"
                            style={{
                                width: '100%',
                                height: '56px',
                                fontSize: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px'
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                            {t.enquiry.whatsapp}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
