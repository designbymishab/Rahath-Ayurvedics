'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import type { BlogPost } from '@/data/blog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function BlogListClient({ posts }: { posts: BlogPost[] }) {
    const { t, language } = useLanguage();

    return (
        <main>
            <Header />
            <section style={{
                paddingTop: '140px', paddingBottom: '60px',
                background: 'linear-gradient(180deg, #FDFBF7 0%, #F5F1E8 100%)'
            }}>
                <div className="container">
                    <Breadcrumbs items={[
                        { label: language === 'ml' ? 'ഹോം' : 'Home', href: '/' },
                        { label: t.blog.title }
                    ]} />
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '16px', lineHeight: '1.1' }}>
                        {t.blog.title}
                    </h1>
                    <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '600px' }}>
                        {t.blog.subtitle}
                    </p>
                </div>
            </section>

            <section style={{ background: 'var(--white)' }}>
                <div className="container">
                    <div className="grid grid-cols-3">
                        {posts.map((post) => {
                            const lang = language === 'ml' ? post.ml : post.en;
                            return (
                                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <article className="card" style={{ padding: 0, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ width: '100%', aspectRatio: '16/10', position: 'relative', overflow: 'hidden' }}>
                                            <Image src={post.image} alt={lang.title} fill sizes="(max-width: 640px) 100vw, (max-width: 992px) 50vw, 33vw" style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }} />
                                        </div>
                                        <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                            <div style={{ display: 'flex', gap: '16px', marginBottom: '12px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                                <span>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                                                <span>•</span>
                                                <span>{post.readTime} {t.blog.read_time}</span>
                                            </div>
                                            <h2 style={{ fontSize: '1.2rem', marginBottom: '12px', lineHeight: '1.4', color: 'var(--primary-dark)' }}>
                                                {lang.title}
                                            </h2>
                                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', flex: 1 }}>
                                                {lang.excerpt}
                                            </p>
                                            <span style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.9rem', marginTop: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                                {t.blog.read_more}
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                            </span>
                                        </div>
                                    </article>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
