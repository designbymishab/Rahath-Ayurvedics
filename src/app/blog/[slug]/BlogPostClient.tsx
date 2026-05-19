'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import type { BlogPost } from '@/data/blog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function BlogPostClient({ slug, post, relatedPosts }: { slug: string, post: BlogPost, relatedPosts: BlogPost[] }) {
    const { t, language } = useLanguage();
    if (!post) return null;

    const lang = language === 'ml' ? post.ml : post.en;

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.en.title,
        "description": post.en.metaDesc,
        "image": `https://rahathayurvedic.vercel.app${post.image}`,
        "datePublished": post.date,
        "dateModified": post.date,
        "author": { "@type": "Organization", "name": "Rahath Ayurvedic" },
        "publisher": {
            "@type": "Organization", "name": "Rahath Ayurvedic",
            "logo": { "@type": "ImageObject", "url": "https://rahathayurvedic.vercel.app/Logo/android-chrome-512x512.png" }
        },
        "mainEntityOfPage": `https://rahathayurvedic.vercel.app/blog/${slug}`
    };

    return (
        <main>
            <Header />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

            {/* Hero */}
            <section style={{ paddingTop: '140px', paddingBottom: '40px', background: 'var(--background)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <Breadcrumbs items={[
                        { label: language === 'ml' ? 'ഹോം' : 'Home', href: '/' },
                        { label: t.blog.title, href: '/blog' },
                        { label: lang.title }
                    ]} />
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        <span>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                        <span>•</span>
                        <span>{post.readTime} {t.blog.read_time}</span>
                    </div>
                    <h1 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', marginBottom: '24px', lineHeight: '1.2' }}>
                        {lang.title}
                    </h1>
                    <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>{lang.excerpt}</p>
                </div>
            </section>

            {/* Featured Image */}
            <div className="container" style={{ maxWidth: '800px', marginBottom: '40px' }}>
                <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', aspectRatio: '16/9', position: 'relative' }}>
                    <Image src={post.image} alt={lang.title} fill sizes="800px" style={{ objectFit: 'cover' }} />
                </div>
            </div>

            {/* Article Body */}
            <article style={{ paddingBottom: '80px' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    {lang.content.map((block, i) => {
                        const [heading, body] = block.split('||');
                        return (
                            <div key={i} style={{ marginBottom: '40px' }}>
                                <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--primary-dark)' }}>
                                    {heading.replace('## ', '')}
                                </h2>
                                <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', fontSize: '1.05rem' }}>{body}</p>
                            </div>
                        );
                    })}

                    {/* CTA */}
                    <div style={{
                        background: 'var(--accent)', borderRadius: 'var(--radius-lg)', padding: '40px',
                        textAlign: 'center', marginTop: '48px'
                    }}>
                        <p style={{ fontSize: '1.1rem', color: 'var(--primary-dark)', marginBottom: '20px', fontWeight: '500' }}>
                            {language === 'ml' ? 'വ്യക്തിഗത ആയുർവേദ മാർഗ്ഗനിർദ്ദേശത്തിനായി ഞങ്ങളെ ബന്ധപ്പെടുക.' : 'Contact us for personalized Ayurvedic guidance.'}
                        </p>
                        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/#enquiry" className="btn btn-primary">
                                {language === 'ml' ? 'അന്വേഷണം' : 'Send Enquiry'}
                            </Link>
                            <a href="https://wa.me/919605424292" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                                {language === 'ml' ? 'വാട്സാപ്പ്' : 'WhatsApp'}
                            </a>
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
                <section style={{ background: 'var(--background)' }}>
                    <div className="container">
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '40px', textAlign: 'center' }}>{t.blog.related_articles}</h2>
                        <div className="grid grid-cols-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            {relatedPosts.map(rp => {
                                const rpLang = language === 'ml' ? rp.ml : rp.en;
                                return (
                                    <Link key={rp.slug} href={`/blog/${rp.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                                            <div style={{ aspectRatio: '16/10', position: 'relative' }}>
                                                <Image src={rp.image} alt={rpLang.title} fill sizes="400px" style={{ objectFit: 'cover' }} />
                                            </div>
                                            <div style={{ padding: '20px' }}>
                                                <h3 style={{ fontSize: '1.1rem', lineHeight: '1.4', color: 'var(--primary-dark)' }}>{rpLang.title}</h3>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
