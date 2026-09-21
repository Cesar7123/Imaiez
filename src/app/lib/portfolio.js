import { getCloudinaryImages } from './cloudinary';

export const fallbackPortfolio = [
  ['portfolio_21.jpeg', 'Boda en luz natural', 'wedding'],
  ['portfolio_25.jpeg', 'Retrato editorial', 'portrait'],
  ['portfolio_29.jpeg', 'Moda en movimiento', 'fashion'],
  ['portfolio_22.jpeg', 'Historia de marca', 'commercial'],
  ['portfolio_27.jpeg', 'Celebración íntima', 'wedding'],
  ['portfolio_23.jpeg', 'Forma y textura', 'fashion'],
  ['portfolio_26.jpeg', 'Paisaje abierto', 'landscape'],
  ['portfolio_30.jpeg', 'Retrato de autor', 'portrait'],
  ['portfolio_24.jpeg', 'Corto documental', 'shortfilm'],
  ['portfolio_28.jpeg', 'Campaña de moda', 'fashion'],
].map(([file, title, category], index) => ({
  publicId: `local-${index}`,
  url: `/images/${file}`,
  previewUrl: `/images/${file}`,
  title,
  description: `${title}, fotografía Imai`,
  categories: [category],
  width: index % 3 === 1 ? 800 : 1200,
  height: index % 3 === 1 ? 1200 : 800,
}));

export async function getPortfolioImages(options = {}) {
  try {
    const result = await getCloudinaryImages(options);
    if (result.configured && result.images.length) return result.images;
  } catch (error) {
    console.error('Cloudinary portfolio fallback:', error);
  }

  const category = options.category?.toLowerCase();
  return category
    ? fallbackPortfolio.filter((image) => image.categories.includes(category))
    : fallbackPortfolio;
}
