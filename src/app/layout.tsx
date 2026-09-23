import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/shared';
import { Analytics } from '@/components/analytics';
import { site } from '@/lib/site';
import './globals.css';
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });
export const metadata: Metadata = { metadataBase: new URL(site.url), title: { default: 'Jupyter | Medicina Estética', template: '%s | Jupyter' }, description: 'Medicina estética con un enfoque personalizado y resultados naturales.', robots: { index: true, follow: true } };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="es"><body className={manrope.variable}><a className="skip-link" href="#contenido">Saltar al contenido</a><Header/><main id="contenido">{children}</main><Footer/><Analytics/></body></html>; }
