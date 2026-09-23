import Link from 'next/link';
import Spacing from '@/app/ui/Spacing';
import MasonryGallery from '@/app/ui/Gallery/MasonryGallery';
import { getPortfolioImages, getPortfolioPage } from '@/app/lib/portfolio';

export async function generateStaticParams() {
  const images = await getPortfolioImages({ limit: 100 });
  return [...new Set(images.flatMap((image) => image.categories))].map((category) => ({ category }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const label = category.replace(/_/g, ' ');
  return {
    title: `Fotografía de ${label}`,
    description: `Colección de fotografía de ${label} de Imai Photo.`,
    alternates: { canonical: `/portfolio/category/${category}` },
  };
}

export default async function PortfolioCategoryPage({ params }) {
  const { category } = await params;
  const portfolio = await getPortfolioPage({ category, limit: 25 });
  return (
    <>
      <Spacing lg="145" md="80" />
      <div className="container portfolio-category_intro">
        <Link href="/portfolio" className="blog-back">← Ver todo el portafolio</Link>
        <p className="blog-kicker">Colección</p>
        <h1>Fotografía de {category.replace(/_/g, ' ')}</h1>
        <p>Una selección de imágenes de Imai Photo dentro de esta categoría.</p>
      </div>
      <Spacing lg="55" md="35" />
      <MasonryGallery portfolioData={portfolio.images} nextCursor={portfolio.nextCursor} total={portfolio.total} category={category} />
    </>
  );
}
