'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navigation } from '@/lib/site';
import { WhatsAppButton } from './whatsapp-button';
export function Header() {
 const path = usePathname(); const [open, setOpen] = useState(false);
 useEffect(() => { setOpen(false); }, [path]);
 return <header className="header"><div className="container header-inner"><Link href="/" className="logo" aria-label="Jupyter Medicina Estética, inicio">Jupyter<span>MEDICINA ESTÉTICA</span></Link><nav className="desktop-nav" aria-label="Navegación principal">{navigation.map(([label, href]) => <Link key={href} href={href} aria-current={(href === '/' ? path === href : path.startsWith(href)) ? 'page' : undefined}>{label}</Link>)}</nav><div className="header-cta"><WhatsAppButton location="header"/></div><button className="menu-toggle" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button></div>{open && <nav id="mobile-nav" className="mobile-nav" aria-label="Navegación móvil" onKeyDown={e => { if (e.key === 'Escape') { setOpen(false); document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus(); } }}>{navigation.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={(href === '/' ? path === href : path.startsWith(href)) ? 'page' : undefined}>{label}</Link>)}<WhatsAppButton location="menu"/></nav>}</header>;
}
