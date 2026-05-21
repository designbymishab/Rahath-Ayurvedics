'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function CallBackPopup() {
    const { language } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsMinimized(false);
        }, 5000); // Show after 5 seconds
        return () => clearTimeout(timer);
    }, []);

    const [phone, setPhone] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const waText = `Hello Rahath Ayurvedic, please call me back at ${phone}`;
        const waUrl = `https://wa.me/919605424292?text=${encodeURIComponent(waText)}`;
        window.open(waUrl, '_blank');

        alert(language === 'ml' ? 'വിജയിച്ചു! ഞങ്ങൾ നിങ്ങളെ ഉടൻ വിളിക്കും.' : 'Success! We will call you soon.');

        setPhone('');
        setIsMinimized(true);
    };

    if (isMinimized) {
        return (
            <button
                onClick={() => setIsMinimized(false)}
                className="floating-callback"
                aria-label="Request Call Back"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </button>
        );
    }

    return (
        <div style={{
            position: 'fixed',
            bottom: '100px',
            left: '24px',
            width: '320px',
            background: 'var(--white)',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-lg)',
            zIndex: 999,
            padding: '24px',
            border: '1px solid rgba(0,0,0,0.05)',
            animation: 'slideUp 0.3s ease-out'
        }}>
            <button
                onClick={() => setIsMinimized(true)}
                style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    color: 'var(--text-muted)'
                }}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{language === 'ml' ? 'വിളിക്കണോ?' : 'Call back requested?'}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                {language === 'ml' ? 'നിങ്ങളുടെ നമ്പർ നൽകുക, 24 മണിക്കൂറിനുള്ളിൽ ഞങ്ങൾ നിങ്ങളെ വിളിക്കും.' : "Leave your number and we'll call you back within 24 hours."}
            </p>

            <form onSubmit={handleSubmit}>
                <input
                    type="tel"
                    placeholder={language === 'ml' ? 'നിങ്ങളുടെ ഫോൺ നമ്പർ' : 'Your Phone Number'}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid #E2E8F0',
                        marginBottom: '12px',
                        fontSize: '1rem'
                    }}
                />
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '12px' }}>
                    {language === 'ml' ? 'ഇപ്പോൾ അറിയിക്കുക' : 'Call Me Back'}
                </button>
            </form>
        </div>
    );
}
