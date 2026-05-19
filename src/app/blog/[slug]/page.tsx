import type { Metadata } from 'next';
import { getAllPosts } from '@/data/blog';
import { notFound } from 'next/navigation';
import BlogPostClient from './BlogPostClient';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return getAllPosts().map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getAllPosts().find(p => p.slug === slug);
    if (!post) return {};
    return {
        title: post.en.metaTitle,
        description: post.en.metaDesc,
        alternates: { canonical: `https://rahathayurvedic.vercel.app/blog/${slug}` },
        openGraph: {
            title: post.en.metaTitle,
            description: post.en.metaDesc,
            url: `https://rahathayurvedic.vercel.app/blog/${slug}`,
            type: 'article',
            images: [{ url: post.image, alt: post.en.title }],
        },
    };
}
export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const posts = getAllPosts();
    const post = posts.find(p => p.slug === slug);
    if (!post) notFound();
    
    const relatedPosts = posts.filter(p => post.relatedSlugs?.includes(p.slug));
    return <BlogPostClient slug={slug} post={post} relatedPosts={relatedPosts} />;
}
