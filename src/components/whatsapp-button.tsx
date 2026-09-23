'use client';
import Link from 'next/link';
import { whatsappUrl } from '@/lib/site';
import { track } from './analytics';
import { Icon } from './icons';
export function WhatsAppButton({ treatment, location = 'content', children = 'Solicitar valoración', light = false }: { treatment?: string; location?: string; children?: React.ReactNode; light?: boolean }) {
 const href = whatsappUrl(treatment);
 return <Link className={`button ${light ? 'button-light' : ''}`} href={href || '/contacto#disponibilidad'} target={href ? '_blank' : undefined} rel={href ? 'noopener noreferrer' : undefined} onClick={() => {
 const params = { treatment: treatment || 'general', location, cta: 'solicitar_valoracion' };
 if (href) track('whatsapp_click', params);
 track(location === 'hero' ? 'hero_cta_click' : treatment ? 'treatment_cta_click' : 'contact_click', params);
 }}><Icon name="whatsapp"/>{children}<span className="button-arrow" aria-hidden="true">↗</span></Link>;
}
