import { getCloudinaryImages } from "./cloudinary";

export const fallbackPortfolio = [
  ["portfolio_21.jpeg", "Boda en luz natural", "wedding"],
  ["portfolio_25.jpeg", "Retrato editorial", "portrait"],
  ["portfolio_29.jpeg", "Moda en movimiento", "fashion"],
  ["portfolio_22.jpeg", "Historia de marca", "commercial"],
  ["portfolio_27.jpeg", "Celebración íntima", "wedding"],
  ["portfolio_23.jpeg", "Forma y textura", "fashion"],
  ["portfolio_26.jpeg", "Paisaje abierto", "landscape"],
  ["portfolio_30.jpeg", "Retrato de autor", "portrait"],
  ["portfolio_24.jpeg", "Corto documental", "shortfilm"],
  ["portfolio_28.jpeg", "Campaña de moda", "fashion"],
].map(([file, title, category, caption], index) => ({
  publicId: `local-${index}`,
  url: `/images/${file}`,
  previewUrl: `/images/${file}`,
  title,
  caption: caption || "",
  alt: `${title}, fotografía Imai`,
  description: `${title}, fotografía Imai`,
  tags: [category],
  categories: [category],
  width: index % 3 === 1 ? 800 : 1200,
  height: index % 3 === 1 ? 1200 : 800,
}));

export async function getPortfolioImages(options = {}) {
  const result = await getPortfolioPage(options);
  return result.images;
}

export async function getPortfolioPage(options = {}) {
  try {
    const result = await getCloudinaryImages(options);
    if (result.configured && result.images.length) return result;
  } catch (error) {
    console.error("Cloudinary portfolio fallback:", error);
  }

  const category = options.category?.toLowerCase();
  const allImages = category
    ? fallbackPortfolio.filter((image) => image.categories.includes(category))
    : fallbackPortfolio;
  const offset = Number(options.nextCursor) || 0;
  const limit = Number(options.limit) || allImages.length;
  const images = allImages.slice(offset, offset + limit);

  return {
    images,
    nextCursor: offset + limit < allImages.length ? String(offset + limit) : null,
    total: allImages.length,
    configured: false,
  };
}
