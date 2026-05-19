import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
    title: 'About Rahath Ayurvedic | Herbal Medicine Shop Mannarkkad',
    description: 'Learn about Rahath Ayurvedic — over 5 years of trusted Ayurvedic herbal medicine service in Mannarkkad, Palakkad, Kerala. Our story, mission & values.',
    alternates: { canonical: 'https://rahathayurvedic.vercel.app/about' },
    openGraph: {
        title: 'About Rahath Ayurvedic | Herbal Medicine Shop Mannarkkad',
        description: 'Learn about Rahath Ayurvedic — over 5 years of trusted service in Mannarkkad.',
        url: 'https://rahathayurvedic.vercel.app/about',
        images: [{ url: '/Logo/android-chrome-512x512.png', width: 512, height: 512, alt: 'Rahath Ayurvedic' }],
    },
};

export default function AboutPage() {
    return <AboutPageClient />;
}
