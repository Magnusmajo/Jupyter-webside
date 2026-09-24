# Jupyter Medicina Estética

Sitio comercial creado con Next.js 15, React 19, TypeScript y Tailwind CSS. Incluye páginas indexables de tratamientos, artículos educativos, CTA contextuales de WhatsApp, GA4 con consentimiento, metadatos, JSON-LD, sitemap y robots.

## Desarrollo local

```bash
npm install
copy .env.example .env.local
npm run dev
```

La web estará disponible en `http://localhost:3000`.

## Variables de entorno

- `NEXT_PUBLIC_SITE_URL`: URL canónica, sin barra final.
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: número internacional con código de país, sin `+`, espacios ni guiones.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: identificador de Google Analytics 4 con formato `G-...`.
- `NEXT_PUBLIC_ADDRESS`: dirección verificada de la clínica.
- `NEXT_PUBLIC_CITY`: ciudad o zona de atención.
- `NEXT_PUBLIC_HOURS`: horarios confirmados.
- `NEXT_PUBLIC_INSTAGRAM_URL`: URL completa del perfil oficial.

Cuando el número de WhatsApp no está configurado, los CTA llevan a la página de contacto y esta informa que el canal aún no está disponible. GA4 solo se carga tras el consentimiento.

## Validación

```bash
npm run lint
npm run typecheck
npm run build
```

Antes de publicar, reemplaza los datos de la clínica, confirma los textos médicos con el profesional responsable e incorpora las credenciales legales y profesionales verificadas.
