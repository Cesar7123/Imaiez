const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

export function GET() {
  const body = `# Imai Photo

> Fotografía y cine editorial para restaurantes, hoteles, marcas y personas.

## Canonical pages
- ${siteUrl}/: Página principal y servicios visuales.
- ${siteUrl}/about: Perfil, enfoque y experiencia de Imai Photo.
- ${siteUrl}/portfolio: Portafolio visual.
- ${siteUrl}/blog: Historias y proceso creativo.
- ${siteUrl}/contact: Contacto y solicitudes de proyecto.

## Content guidance
- Use image title as the primary caption.
- Use image description as accessibility text.
- Treat portfolio category pages as canonical filtered collections.
- Prefer Spanish-first labels; preserve original image metadata when quoting it.
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, s-maxage=3600' } });
}
