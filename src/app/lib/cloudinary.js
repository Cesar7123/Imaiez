import { v2 as cloudinary } from "cloudinary";

function getConfig() {
  const cloudName =
    process.env.CLOUDINARY_CLOUD_NAME ||
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ||
    process.env.VITE_CLOUD_NAME;
  const apiKey =
    process.env.CLOUDINARY_API_KEY ||
    process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
  const apiSecret =
    process.env.CLOUDINARY_API_SECRET || process.env.CLOUDINARY_API_KEY_SECRET;

  if (!cloudName || !apiKey || !apiSecret) return null;
  return { cloudName, apiKey, apiSecret };
}

function normalizeCategory(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function getPreviewUrl(url) {
  return url.replace("/upload/", "/upload/w_480,q_auto:low,f_auto/");
}

export function getOptimizedUrl(url, width = 1920) {
  return url.replace("/upload/", `/upload/w_${width},q_auto,f_auto/`);
}

export function normalizeCategories(tags = []) {
  return [
    ...new Set(
      tags
        .filter(Boolean)
        .map((tag) => String(tag))
        .map(normalizeCategory)
        .filter(Boolean),
    ),
  ];
}

function normalizeResource(resource) {
  const custom = resource.context?.custom || {};
  const caption =
    custom.caption ||
    custom.title ||
    resource.public_id.split('/').pop();
  const description = custom.alt || custom.description || caption;

  return {
    publicId: resource.public_id,
    url: resource.secure_url,
    previewUrl: getPreviewUrl(resource.secure_url),
    title: caption,
    caption,
    alt: description,
    description,
    tags: [...(resource.tags || [])],
    categories: normalizeCategories([
      ...(resource.tags || []),
      custom.category,
    ]),
    width: resource.width,
    height: resource.height,
    format: resource.format,
    createdAt: resource.created_at,
  };
}

const imageCountCache = new Map();

async function getCloudinaryImageCount(category) {
  const cacheKey = category || 'all';
  const cached = imageCountCache.get(cacheKey);
  if (cached && cached.expiresAt > Date.now()) return cached.total;

  const expression = category
    ? `resource_type:image AND type:upload AND tags=${normalizeCategory(category)}`
    : 'resource_type:image AND type:upload';
  const response = await cloudinary.search
    .expression(expression)
    .max_results(1)
    .execute();
  const total = response.total_count || 0;
  imageCountCache.set(cacheKey, { total, expiresAt: Date.now() + 300000 });
  return total;
}

export async function getCloudinaryImages({
  category,
  limit = 100,
  nextCursor,
} = {}) {
  const config = getConfig();
  if (!config) return { images: [], nextCursor: null, configured: false };

  cloudinary.config({
    cloud_name: config.cloudName,
    api_key: config.apiKey,
    api_secret: config.apiSecret,
    secure: true,
  });

  const pageSize = Math.min(Math.max(Number(limit) || 100, 1), 500);
  const response = await cloudinary.api.resources({
    type: "upload",
    resource_type: "image",
    max_results: pageSize,
    next_cursor: nextCursor || undefined,
    tags: true,
    context: true,
  });

  const images = response.resources
    .map(normalizeResource)
    .filter(
      (image) =>
        !category || image.categories.includes(normalizeCategory(category)),
    );

  return {
    images,
    nextCursor: response.next_cursor || null,
    total: await getCloudinaryImageCount(category),
    configured: true,
  };
}
