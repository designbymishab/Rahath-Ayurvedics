import type { Metadata } from 'next';
import { specialities } from '@/data/specialities';
import { notFound } from 'next/navigation';
import SpecialityPageClient from './SpecialityPageClient';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return specialities.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const spec = specialities.find(s => s.slug === slug);
    if (!spec) return {};
    return {
        title: spec.en.metaTitle,
        description: spec.en.metaDesc,
        alternates: { canonical: `https://rahathayurvedic.vercel.app/specialities/${slug}` },
        openGraph: {
            title: spec.en.metaTitle,
            description: spec.en.metaDesc,
            url: `https://rahathayurvedic.vercel.app/specialities/${slug}`,
            images: [{ url: spec.image, alt: spec.en.title }],
        },
    };
}

export default async function SpecialityPage({ params }: Props) {
    const { slug } = await params;
    const spec = specialities.find(s => s.slug === slug);
    if (!spec) notFound();
    return <SpecialityPageClient slug={slug} />;
}
