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
    const [showToast, setShowToast] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Format form data into WhatsApp message
        const waText = `*New Enquiry — Rahath Ayurvedic*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Concern:* ${formData.concern}
*Message:* ${formData.message || 'N/A'}`;

        const waUrl = `https://wa.me/919605424292?text=${encodeURIComponent(waText)}`;

        // Track event
        if (typeof window !== 'undefined' && (window as any).va) {
            ((window as any).va as (event: string, data: Record<string, string>) => void)('event', { name: 'enquiry_form_submit', concern: formData.concern });
        }

        // Open WhatsApp
        window.open(waUrl, '_blank');

        // Show success toast
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);

        // Reset form
        setFormData({ name: '', phone: '', concern: '', message: '' });
        setIsSubmitting(false);
    };

    const concerns = [
        t.specialities.items[0].title,
        t.specialities.items[1].title,
        t.specialities.items[2].title,
        language === 'ml' ? 'മറ്റു കൺസൾട്ടേഷനുകൾ' : 'Other Consultation'
    ];

    return (
        <section id="enquiry" style={{ background: 'var(--white)', position: 'relative' }}>
            {/* Success Toast */}
            {showToast && (
                <div style={{
                    position: 'fixed',
                    top: '100px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#1D9E75',
                    color: 'white',
                    padding: '16px 32px',
                    borderRadius: 'var(--radius-full)',
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    boxShadow: '0 8px 32px rgba(29, 158, 117, 0.3)',
                    animation: 'slideUp 0.3s ease-out',
                    fontSize: '0.95rem',
                    fontWeight: '500'
                }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {t.enquiry.success}
                </div>
            )}

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
                                <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>{t.enquiry.name_label}</label>
                                <input
                                    id="name"
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
                                <label htmlFor="phone" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>{t.enquiry.phone_label}</label>
                                <input
                                    id="phone"
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
                            <label htmlFor="concern" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>{t.enquiry.concern_label}</label>
                            <select
                                id="concern"
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
                            <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>{language === 'ml' ? 'സന്ദേശം' : 'Message'}</label>
                            <textarea
                                id="message"
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
                                minHeight: '56px',
                                fontSize: '1.1rem',
                                display: 'flex',
                                flexWrap: 'wrap',
                                textAlign: 'center',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                padding: '12px 20px',
                                opacity: isSubmitting ? 0.7 : 1,
                                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                background: '#25D366'
                            }}
                        >
                            {isSubmitting ? (
                                <>{language === 'ml' ? 'അയക്കുന്നു...' : 'Sending...'}</>
                            ) : (
                                <>
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.407 3.481 2.241 2.242 3.48 5.226 3.481 8.408-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.667zm6.302-3.801l.363.216c1.51.897 3.256 1.371 5.04 1.372h.006c5.842 0 10.596-4.753 10.599-10.593 0-2.83-1.1-5.489-3.097-7.487-1.998-1.996-4.659-3.093-7.489-3.093-5.84 0-10.592 4.754-10.595 10.595-.001 1.805.47 3.568 1.361 5.064l.238.401-1.001 3.659 3.754-.991zm10.743-7.143c-.272-.136-1.613-.797-1.864-.888-.25-.091-.432-.136-.614.136-.182.273-.706.888-.865 1.07-.159.182-.318.204-.59.068-.272-.136-1.15-.424-2.19-1.353-.809-.722-1.355-1.613-1.514-1.886-.159-.272-.017-.42.119-.556.122-.122.272-.318.408-.477.136-.159.182-.272.272-.454.091-.182.045-.341-.023-.477-.068-.136-.614-1.477-.841-2.022-.221-.532-.444-.459-.614-.468-.159-.008-.341-.01-.523-.01s-.477.068-.727.341c-.25.272-.954.932-.954 2.272s.977 2.636 1.114 2.818c.136.182 1.921 2.934 4.66 4.113.652.28 1.161.448 1.558.575.654.208 1.25.179 1.721.108.525-.08 1.613-.659 1.841-1.295.227-.636.227-1.181.159-1.295-.068-.113-.25-.182-.522-.318z" />
                                    </svg>
                                    {language === 'ml' ? 'WhatsApp വഴി അന്വേഷണം അയക്കുക' : 'Send Enquiry via WhatsApp'}
                                </>
                            )}
                        </button>

                        <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                            {language === 'ml'
                                ? 'നിങ്ങളുടെ അന്വേഷണം WhatsApp വഴി നേരിട്ട് അയക്കപ്പെടും'
                                : 'Your enquiry will be sent directly via WhatsApp'}
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
