import type { Metadata } from 'next';
import { site } from './site';
export function metadata(title: string, description: string, path: string): Metadata {
  return { title, description, alternates: { canonical: path }, openGraph: { title: `${title} | Jupyter`, description, url: path, locale: 'es_UY', type: 'website', siteName: 'Jupyter Medicina Estética', images: [{ url: '/images/hero.webp', width: 1536, height: 1024, alt: 'Jupyter Medicina Estética' }] }, twitter: { card: 'summary_large_image', title, description, images: ['/images/hero.webp'] } };
}
export function breadcrumbSchema(items: { label: string; href: string }[]) {
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ label: 'Inicio', href: '/' }, ...items].map((i, n) => ({ '@type': 'ListItem', position: n + 1, name: i.label, item: new URL(i.href, site.url).href })) };
}
