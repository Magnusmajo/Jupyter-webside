import Image from 'next/image';
import Link from 'next/link';
import { metadata as makeMetadata } from '@/lib/seo';
import { featuredTreatments } from '@/data/treatments';
import { articles } from '@/data/articles';
import { Icon, Arrow } from '@/components/icons';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { SectionHeading, ContactSection, ArticleCard, JsonLd } from '@/components/shared';
import { site } from '@/lib/site';
export const metadata = makeMetadata('Medicina Estética con resultados naturales', 'Descubre Jupyter: tratamientos faciales y capilares, atención personalizada y un enfoque médico. Solicita tu valoración.', '/');

const principles = [
 ['01', 'Naturalidad', 'Un enfoque que preserva la expresión y los rasgos propios.'],
 ['02', 'Personalización', 'Objetivos, alternativas y cuidados definidos para cada caso.'],
 ['03', 'Criterio', 'Información clara sobre posibilidades, límites y decisiones.'],
] as const;

const experienceSteps = [
 ['01', 'Valoración', 'Objetivos, antecedentes y expectativas.'],
 ['02', 'Plan', 'Opciones y cuidados explicados con claridad.'],
 ['03', 'Tratamiento', 'Un procedimiento acorde al plan definido.'],
 ['04', 'Seguimiento', 'Evolución y próximos pasos.'],
] as const;

export default function Home() { return <>
 <section className="hero"><Image className="hero-photo" src="/images/hero.webp" alt="Retrato editorial de una mujer con expresión natural" fill priority sizes="100vw"/><div className="hero-shade"/><div className="container hero-content"><p className="eyebrow">REALZA TU MEJOR VERSIÓN</p><h1>Medicina Estética<br/>con resultados<br/><em>naturales.</em></h1><p className="hero-description">Un espacio para explorar cuidados faciales y capilares desde una mirada serena y contemporánea.</p><div className="hero-actions"><WhatsAppButton location="hero"/><Link className="button button-ghost" href="/tratamientos">Ver tratamientos <Arrow/></Link></div></div></section>
 <section className="featured-treatments section"><div className="container"><div className="section-top"><SectionHeading eyebrow="TRATAMIENTOS DESTACADOS" title="Explora por tratamiento."/><Link className="text-link" href="/tratamientos">Ver todos <Arrow/></Link></div><div className="quick-treatments" aria-label="Descubre nuestros tratamientos">{featuredTreatments.map(t => <Link key={t.slug} href={`/tratamientos/${t.slug}`}><Icon name={t.icon}/><h2>{t.name}</h2><p>{t.category}</p></Link>)}</div></div></section>
 <section className="section philosophy"><div className="container philosophy-grid"><div><p className="eyebrow">ENFOQUE JUPYTER</p><h2>Tres principios.<br/>Una mirada <em>coherente.</em></h2></div><div className="philosophy-link"><Link className="text-link" href="/nosotros">Conoce el proyecto <Arrow/></Link></div></div><div className="container value-grid">{principles.map(([n, title, text]) => <div key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>
 <section className="journey section"><div className="container"><SectionHeading eyebrow="LA EXPERIENCIA" title="Del primer encuentro al seguimiento."/><div className="steps experience-steps">{experienceSteps.map(([n, title, text]) => <div key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>
 <section className="section container"><div className="section-top"><SectionHeading eyebrow="ARTÍCULOS" title="Ideas para seguir explorando."/><Link className="text-link" href="/articulos">Todos los artículos <Arrow/></Link></div><div className="article-grid">{articles.map((a, i) => <ArticleCard key={a.slug} article={a} index={i}/>)}</div></section>
 <ContactSection compact/>{site.address && <JsonLd data={{ '@context': 'https://schema.org', '@type': 'MedicalBusiness', name: 'Jupyter Medicina Estética', url: site.url, address: { '@type': 'PostalAddress', streetAddress: site.address, addressLocality: site.city || undefined }, telephone: site.whatsapp || undefined }}/ >}
 </>; }
