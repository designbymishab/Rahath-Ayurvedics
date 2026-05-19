import type { Metadata } from 'next';
import BlogListClient from './BlogListClient';
import { getAllPosts } from '@/data/blog';

export const metadata: Metadata = {
    title: 'Ayurvedic Wellness Blog | Rahath Ayurvedic Mannarkkad',
    description: 'Read about traditional Ayurvedic remedies, herbal medicine benefits, postnatal care, and wellness tips from Rahath Ayurvedic, Mannarkkad.',
    alternates: { canonical: 'https://rahathayurvedic.vercel.app/blog' },
    openGraph: {
        title: 'Ayurvedic Wellness Blog | Rahath Ayurvedic',
        description: 'Traditional wisdom and herbal remedies from Mannarkkad.',
        url: 'https://rahathayurvedic.vercel.app/blog',
    },
};

export default function BlogPage() {
    const posts = getAllPosts();
    return <BlogListClient posts={posts} />;
}
