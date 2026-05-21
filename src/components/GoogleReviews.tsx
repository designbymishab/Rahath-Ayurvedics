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
        name: 'Mohammed Faizal',
        rating: 5,
        date: { en: '2 months ago', ml: '2 മാസം മുമ്പ്' },
        text: {
            en: 'I had a wonderful experience at Rahath Ayurvedic shop in Mannarkkad. I was impressed by how well organized and hygienic the shop was. The staff were very knowledgeable about the products and took the time to understand my health concerns before recommending anything.',
            ml: 'മണ്ണാർക്കാടുള്ള റാഹത്ത് ആയുർവേദിക് ഷോപ്പിൽ എനിക്ക് മികച്ചൊരു അനുഭവം ഉണ്ടായി. കട എത്രത്തോളം ചിട്ടയുള്ളതും വൃത്തിയുള്ളതുമാണെന്നത് എന്നെ ആകർഷിച്ചു. ഉൽപ്പന്നങ്ങളെക്കുറിച്ച് ജീവനക്കാർക്ക് നല്ല അറിവുണ്ടായിരുന്നു, എന്തെങ്കിലും ശുപാർശ ചെയ്യുന്നതിന് മുൻപ് എന്റെ ആരോഗ്യ പ്രശ്നങ്ങൾ മനസ്സിലാക്കാൻ അവർ സമയം കണ്ടെത്തി.'
        },
        initial: 'M',
        color: '#E8F5E9'
    },
    {
        name: 'malabardrugs mkd',
        rating: 5,
        date: { en: '2 months ago', ml: '2 മാസം മുമ്പ്' },
        text: {
            en: 'Good option in Mannarkkad for ayurvedic raw materials',
            ml: 'ആയുർവേദ പച്ചമരുന്നുകൾക്ക് മണ്ണാർക്കാട്ടെ നല്ലൊരു ഓപ്ഷൻ'
        },
        initial: 'm',
        color: '#FFF3E0'
    },
    {
        name: 'mp kavanoor',
        rating: 5,
        date: { en: '3 weeks ago', ml: '3 ആഴ്ച മുമ്പ്' },
        text: {
            en: 'This Ayurvedic raw medicine shop near Hospital Junction, Mannarkkad is highly recommended. They give precise instructions about the medicines we need. It is a very good shop for those who want good quality medicines.',
            ml: 'മണ്ണാർക്കാട് ആശുപത്രിപ്പടിയിലെ ഈ ആയുർവേദ പച്ച മരുന്ന് കട എടുത്തു പറയേണ്ട ഒന്നാണ്. നമുക്ക് ആവശ്യമുള്ള മരുന്നുകളെക്കുറിച്ച് കൃത്യമായ നിർദ്ദേശങ്ങൾ അവർ തരുന്നുണ്ട്. നല്ല മരുന്നുകൾ ആഗ്രഹിക്കുന്നവർക്ക് ഇത് നല്ലൊരു കടയാണ്.'
        },
        initial: 'm',
        color: '#E3F2FD'
    },
    {
        name: 'DigiBayt',
        rating: 5,
        date: { en: '2 weeks ago', ml: '2 ആഴ്ച മുമ്പ്' },
        text: {
            en: 'This Ayurvedic medicine shop near Hospital Junction, Mannarkkad is a great option for those seeking traditional treatment guidance or medicines.',
            ml: 'മണ്ണാർക്കാട് ആശുപത്രിപ്പടിയിലെ ഈ ആയുർവേദ മരുന്ന് ഷോപ്പ് നല്ല പാരമ്പര്യ ചികിത്സാ നിർദ്ദേശങ്ങളോ മരുന്നോ ആഗ്രഹിക്കുന്നവർക്ക് നല്ലൊരു ഓപ്ഷൻ ആണ്.'
        },
        initial: 'D',
        color: '#FCE4EC'
    },
    {
        name: 'Muhammed Mishab',
        rating: 5,
        date: { en: 'Just now', ml: 'ഇപ്പോൾ' },
        text: {
            en: 'My family has been visiting Rahath Ayurvedic for over 2 years now. The quality has been consistently good. They take time to explain each herb and its benefits. A gem in Mannarkkad!',
            ml: 'എന്റെ കുടുംബം 2 വർഷത്തിലധികമായി റാഹത്ത് ആയുർവേദിക് സന്ദർശിക്കുന്നു. ഗുണനിലവാരം എല്ലായ്പ്പോഴും മികച്ചതാണ്. ഓരോ മരുന്നും അതിന്റെ ഗുണങ്ങളും വിശദീകരിക്കാൻ അവർ സമയമെടുക്കുന്നു. മണ്ണാർക്കാട്ടിലെ ഒരു മുതൽക്കൂട്ട്!'
        },
        initial: 'M',
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
                    columnCount: 'auto',
                    columnWidth: '280px',
                    columnGap: '24px',
                    marginBottom: '48px'
                }}>
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="card"
                            style={{
                                breakInside: 'avoid',
                                pageBreakInside: 'avoid',
                                marginBottom: '24px',
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
                        href="https://www.google.com/maps/place/Rahath+Ayurvedic/@10.9947286,76.4625703,17z/data=!4m8!3m7!1s0x3ba87f1c78b8901f:0x914bc46287362b08!8m2!3d10.9947286!4d76.4651452!9m1!1b1!16s%2Fg%2F11z0h5blll?entry=ttu&g_ep=EgoyMDI2MDUxNy4wIKXMDSoASAFQAw%3D%3D"
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
