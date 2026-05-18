'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations } from '../translations';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');

    // Load language from localStorage on mount
    useEffect(() => {
        const savedLang = localStorage.getItem('language') as Language;
        if (savedLang && (savedLang === 'en' || savedLang === 'ml')) {
            setLanguage(savedLang);
        }
    }, []);

    // Save language to localStorage when it changes
    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };

    const value = {
        language,
        setLanguage: handleSetLanguage,
        t: translations[language],
    };

    return (
        <LanguageContext.Provider value={value}>
            <div className={language === 'ml' ? 'font-ml' : ''}>
                {children}
            </div>
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
