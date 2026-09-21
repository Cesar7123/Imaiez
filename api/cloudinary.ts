import { getCloudinaryImages } from '../src/app/lib/cloudinary';

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'GET') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { Allow: 'GET', 'Content-Type': 'application/json' },
    });
  }

  const url = new URL(req.url);
  const category = url.searchParams.get('category') || undefined;
  const nextCursor = url.searchParams.get('next_cursor') || undefined;
  const limit = Number(url.searchParams.get('limit') || 100);

  try {
    const result = await getCloudinaryImages({ category, nextCursor, limit } as any);
    if (!result.configured) {
      return new Response(JSON.stringify({ error: 'Cloudinary is not configured' }), {
        status: 503,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    });
  } catch (error) {
    console.error('Cloudinary fetch error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch images' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export const config = { runtime: 'nodejs' };
