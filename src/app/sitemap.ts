import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { treatments } from '@/data/treatments';
import { articles } from '@/data/articles';
export default function sitemap(): MetadataRoute.Sitemap { return ['','/tratamientos','/nosotros','/articulos','/contacto','/privacidad','/aviso-legal',...treatments.map(t=>`/tratamientos/${t.slug}`),...articles.map(a=>`/articulos/${a.slug}`)].map(path=>({url:new URL(path || '/',site.url).href,changeFrequency:path===''?'monthly':'yearly',priority:path===''?1:path.startsWith('/tratamientos')?0.8:0.5})); }
