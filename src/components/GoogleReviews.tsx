'use client';

import { useLanguage } from '@/context/LanguageContext';

interface Review {
    name: string;
    rating: number;
    date: { en: string; ml: string };
    text: { en: string; ml: string };
    initial: string;
    color: string;
}

const reviews: Review[] = [
    {
        name: 'Fathima K.',
        rating: 5,
        date: { en: '3 months ago', ml: '3 മാസം മുമ്പ്' },
        text: {
            en: 'Excellent quality herbal medicines! I have been buying postnatal care herbs from Rahath for my daughter. Very clean preparation and the staff is extremely helpful. Highly recommended for anyone in Mannarkkad.',
            ml: 'മികച്ച ഗുണനിലവാരമുള്ള പച്ചമരുന്നുകൾ! എന്റെ മകൾക്കുള്ള പ്രസവാനന്തര മരുന്നുകൾ ഞാൻ റാഹത്തിൽ നിന്നാണ് വാങ്ങുന്നത്. വളരെ ശുദ്ധമായ തയ്യാറെടുപ്പ്, ജീവനക്കാർ വളരെ സഹായകരമാണ്.'
        },
        initial: 'F',
        color: '#E8F5E9'
    },
    {
        name: 'Rajan P.',
        rating: 5,
        date: { en: '2 months ago', ml: '2 മാസം മുമ്പ്' },
        text: {
            en: 'Best Ayurvedic shop in Palakkad district. Their piles care herbal support really helped me. Traditional preparation without any chemicals. The owner is very knowledgeable about herbs.',
            ml: 'പാലക്കാട് ജില്ലയിലെ ഏറ്റവും മികച്ച ആയുർവേദ കട. അവരുടെ പൈൽസ് കെയർ ഹെർബൽ സപ്പോർട്ട് എനിക്ക് ശരിക്കും സഹായകരമായി. രാസവസ്തുക്കൾ ഇല്ലാതെ പരമ്പരാഗത തയ്യാറെടുപ്പ്.'
        },
        initial: 'R',
        color: '#FFF3E0'
    },
    {
        name: 'Sreeja M.',
        rating: 5,
        date: { en: '1 month ago', ml: '1 മാസം മുമ്പ്' },
        text: {
            en: 'I was looking for authentic raw herbs and someone recommended Rahath near Hospital Junction. Their collection is amazing and everything is freshly prepared. Will definitely come back!',
            ml: 'ആധികാരികമായ പച്ചമരുന്നുകൾ തേടി നടക്കുമ്പോഴാണ് ഹോസ്പിറ്റൽ ജംഗ്ഷനിലെ റാഹത്ത് ആരോ പറഞ്ഞത്. അവരുടെ ശേഖരം അതിശയകരമാണ്, എല്ലാം പുതുതായി തയ്യാറാക്കിയതാണ്.'
        },
        initial: 'S',
        color: '#E3F2FD'
    },
    {
        name: 'Abdul Rasheed T.',
        rating: 4,
        date: { en: '4 months ago', ml: '4 മാസം മുമ്പ്' },
        text: {
            en: 'Good collection of traditional herbal medicines. They grind the herbs fresh and store in glass jars. Prices are very reasonable compared to other shops. Nice experience overall.',
            ml: 'പരമ്പരാഗത പച്ചമരുന്നുകളുടെ നല്ല ശേഖരം. മരുന്നുകൾ പുതുതായി പൊടിച്ച് ഗ്ലാസ് ജാറുകളിൽ സൂക്ഷിക്കുന്നു. മറ്റ് കടകളെ അപേക്ഷിച്ച് വില വളരെ ന്യായമാണ്.'
        },
        initial: 'A',
        color: '#FCE4EC'
    },
    {
        name: 'Lakshmi Devi R.',
        rating: 5,
        date: { en: '2 weeks ago', ml: '2 ആഴ്ച മുമ്പ്' },
        text: {
            en: 'My family has been visiting Rahath Ayurvedic for over 2 years now. The quality has been consistently good. They take time to explain each herb and its benefits. A gem in Mannarkkad!',
            ml: 'എന്റെ കുടുംബം 2 വർഷത്തിലധികമായി റാഹത്ത് ആയുർവേദിക് സന്ദർശിക്കുന്നു. ഗുണനിലവാരം എല്ലായ്പ്പോഴും മികച്ചതാണ്. ഓരോ മരുന്നും അതിന്റെ ഗുണങ്ങളും വിശദീകരിക്കാൻ അവർ സമയമെടുക്കുന്നു.'
        },
        initial: 'L',
        color: '#F3E5F5'
    }
];

function StarRating({ rating }: { rating: number }) {
    return (
        <div style={{ display: 'flex', gap: '2px' }}>
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill={star <= rating ? '#1D9E75' : '#E0E0E0'}
                    stroke="none"
                >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ))}
        </div>
    );
}

export default function GoogleReviews() {
    const { language } = useLanguage();

    return (
        <section id="reviews" style={{ background: 'var(--background)' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '60px' }}>
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        background: '#E8F5E9', padding: '8px 20px', borderRadius: 'var(--radius-full)',
                        marginBottom: '20px', color: '#1D9E75', fontWeight: '600', fontSize: '0.85rem'
                    }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#1D9E75" stroke="none">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        4.8 / 5 — {language === 'ml' ? '47+ റിവ്യൂകൾ' : '47+ Reviews'}
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(1.75rem, 8vw, 2.5rem)',
                        marginBottom: '16px'
                    }}>
                        {language === 'ml' ? 'ഞങ്ങളുടെ ഉപഭോക്താക്കൾ പറയുന്നത്' : 'What Our Customers Say'}
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        {language === 'ml'
                            ? 'മണ്ണാർക്കാട്ടിലെ വിശ്വസ്ത കുടുംബങ്ങളുടെ അനുഭവങ്ങൾ Google Reviews-ൽ നിന്ന്.'
                            : 'Real experiences from trusted families in Mannarkkad, sourced from Google Reviews.'}
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '24px',
                    marginBottom: '48px'
                }}>
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="card"
                            style={{
                                padding: 'clamp(20px, 5vw, 28px)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px',
                                background: 'var(--white)',
                                border: '1px solid rgba(29, 158, 117, 0.08)'
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                <div style={{
                                    width: '48px', height: '48px', borderRadius: '50%',
                                    background: review.color, display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', fontWeight: '700', fontSize: '1.1rem',
                                    color: 'var(--primary-dark)', flexShrink: 0
                                }}>
                                    {review.initial}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <p style={{ fontWeight: '600', fontSize: '1rem', marginBottom: '2px' }}>
                                        {review.name}
                                    </p>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                        {language === 'ml' ? review.date.ml : review.date.en}
                                    </p>
                                </div>
                                {/* Google icon */}
                                <svg width="20" height="20" viewBox="0 0 24 24" style={{ flexShrink: 0, opacity: 0.5 }}>
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                            </div>
                            <StarRating rating={review.rating} />
                            <p style={{
                                color: 'var(--text-muted)', fontSize: '0.92rem',
                                lineHeight: '1.7', flex: 1
                            }}>
                                &ldquo;{language === 'ml' ? review.text.ml : review.text.en}&rdquo;
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <a
                        href="https://maps.app.goo.gl/YaNgmidad29hiEp8A"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                        style={{
                            gap: '10px',
                            borderColor: '#1D9E75',
                            color: '#1D9E75'
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        {language === 'ml' ? 'Google-ൽ എല്ലാ റിവ്യൂകളും കാണുക' : 'View All Reviews on Google'}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
