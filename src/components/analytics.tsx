'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { site } from '@/lib/site';
declare global { interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; } }
export function track(name: string, params: Record<string, string> = {}) {
 if (localStorage.getItem('jupyter-analytics') !== 'accepted') return;
 window.gtag?.('event', name, { ...params, page: window.location.pathname });
}
export function Analytics() {
 const pathname = usePathname();
 const [choice, setChoice] = useState<string | null>('pending');
 const [ready, setReady] = useState(false);
 useEffect(() => { setChoice(localStorage.getItem('jupyter-analytics')); }, []);
 useEffect(() => { if (ready && choice === 'accepted') window.gtag?.('event', 'page_view', { page_path: pathname, page_location: location.origin + pathname, page_title: document.title }); }, [pathname, ready, choice]);
 useEffect(() => { const reopen = () => setChoice(null); window.addEventListener('privacy-settings', reopen); return () => window.removeEventListener('privacy-settings', reopen); }, []);
 function choose(value: string) { localStorage.setItem('jupyter-analytics', value); setChoice(value); if (value === 'rejected' && ready) { window.gtag?.('consent', 'update', { analytics_storage: 'denied' }); location.reload(); } }
 if (!/^G-[A-Z0-9]+$/.test(site.ga)) return null;
 return <>{choice === 'accepted' && <Script id="ga4" src={`https://www.googletagmanager.com/gtag/js?id=${site.ga}`} strategy="afterInteractive" onReady={() => {
 window.dataLayer = window.dataLayer || [];
 window.gtag = function (...args: unknown[]) { window.dataLayer!.push(args); };
 window.gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
 window.gtag('js', new Date()); window.gtag('config', site.ga, { send_page_view: false }); setReady(true);
 }}/ >}
 {choice === null && <aside className="consent" aria-label="Preferencias de privacidad"><p>¿Nos ayudas a mejorar?<br/><small>Con tu permiso, usamos Google Analytics para conocer cómo se utiliza la web. <a href="/privacidad">Privacidad</a></small></p><div><button onClick={() => choose('rejected')}>Rechazar</button><button onClick={() => choose('accepted')}>Aceptar</button></div></aside>}</>;
}
export function PrivacySettings() { return <button className="text-button" onClick={() => window.dispatchEvent(new Event('privacy-settings'))}>Preferencias de cookies</button>; }
