import { getAllPosts } from '../lib/blog';
import { getPortfolioImages } from '../lib/portfolio';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

export async function GET() {
  const [posts, images] = await Promise.all([Promise.resolve(getAllPosts()), getPortfolioImages()]);
  const body = [
    '# IMAI - Churea Producciones (Imai Photo): machine-readable content index',
    '',
    '## Business',
    '- Name: IMAI - Churea Producciones (also known as Imai Photo, Churea Producciones)',
    '- Location: La Paz, Baja California Sur, México',
    '- Services: fotografía gastronómica, de hoteles, bodas, retrato, paisaje y comercial; cine y video',
    '- Instagram: https://www.instagram.com/imaiez',
    '',
    '## Portfolio images',
    ...images.map((image) => `- [${image.title}](${image.url}): ${image.description}. Categories: ${image.categories.join(', ')}.`),
    '',
    '## Blog posts',
    ...posts.map((post) => `- [${post.title}](${siteUrl}/blog/${post.slug}): ${post.excerpt}`),
    '',
    `Canonical site: ${siteUrl}`,
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, s-maxage=3600' } });
}
