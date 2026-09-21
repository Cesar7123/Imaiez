import { getAllPosts } from './lib/blog';
import { getPortfolioImages } from './lib/portfolio';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

export default async function sitemap() {
  const [posts, portfolio] = await Promise.all([
    Promise.resolve(getAllPosts()),
    getPortfolioImages(),
  ]);
  const categories = [...new Set(portfolio.flatMap((image) => image.categories))];
  const now = new Date();

  return [
    { url: siteUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/portfolio`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, images: portfolio.map((image) => image.url) },
    ...categories.map((category) => ({ url: `${siteUrl}/portfolio/category/${category}`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 })),
    { url: `${siteUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    ...posts.map((post) => ({ url: `${siteUrl}/blog/${post.slug}`, lastModified: new Date(post.date), changeFrequency: 'monthly', priority: 0.7, images: post.image ? [`${siteUrl}${post.image}`] : [] })),
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];
}
