export const site = {
  name: 'Jupyter',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '',
  ga: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
  address: process.env.NEXT_PUBLIC_ADDRESS || '',
  city: process.env.NEXT_PUBLIC_CITY || '',
  hours: process.env.NEXT_PUBLIC_HOURS || '',
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
};
export function whatsappUrl(treatment?: string) {
  const number = site.whatsapp.replace(/\D/g, '');
  if (!/^[1-9]\d{7,14}$/.test(number)) return null;
  const message = treatment ? `Hola, quisiera solicitar una valoración para ${treatment}.` : 'Hola, quisiera solicitar una valoración en Jupyter Medicina Estética.';
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
export const navigation = [['Inicio', '/'], ['Tratamientos', '/tratamientos'], ['Nosotros', '/nosotros'], ['Artículos', '/articulos'], ['Contacto', '/contacto']] as const;
