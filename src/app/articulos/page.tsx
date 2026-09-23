import { articles } from '@/data/articles';
import { ArticleCard, Breadcrumbs, ContactSection } from '@/components/shared';
import { metadata as makeMetadata } from '@/lib/seo';
export const metadata = makeMetadata('Artículos sobre medicina estética y cuidado personal', 'Información clara para conocer tratamientos, preparar tu valoración y cuidar tu piel y cabello con criterio.', '/articulos');
export default function ArticlesPage(){return <><Breadcrumbs items={[{label:'Artículos',href:'/articulos'}]}/><section className="container page-intro"><p className="eyebrow">EL ESPACIO JUPYTER</p><h1>Conocer también<br/>es <em>cuidarte.</em></h1><p>Ideas, respuestas y orientación para tomar decisiones informadas.</p></section><section className="section container article-grid">{articles.map((a,i)=><ArticleCard key={a.slug} article={a} index={i}/>)}</section><ContactSection/></>;}
