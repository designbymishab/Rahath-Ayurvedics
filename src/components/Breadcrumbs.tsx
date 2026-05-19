'use client';

import Link from 'next/link';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.label,
            ...(item.href ? { "item": `https://rahathayurvedic.vercel.app${item.href}` } : {})
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <nav aria-label="Breadcrumb" style={{
                padding: '16px 0',
                fontSize: '0.85rem',
                color: 'var(--text-muted)'
            }}>
                <ol style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '4px',
                    alignItems: 'center'
                }}>
                    {items.map((item, index) => (
                        <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            {index > 0 && (
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            )}
                            {item.href ? (
                                <Link href={item.href} style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '500' }}>
                                    {item.label}
                                </Link>
                            ) : (
                                <span style={{ color: 'var(--text-muted)' }}>{item.label}</span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
}
