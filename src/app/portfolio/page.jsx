import Spacing from '@/app/ui/Spacing';
import MasonryGallery from '@/app/ui/Gallery/MasonryGallery';
import { getPortfolioPage } from '@/app/lib/portfolio';

export const metadata = {
  title: 'Portafolio de fotografía',
  description: 'Explora fotografía de bodas, retratos, moda, hoteles, gastronomía y marcas.',
  alternates: { canonical: '/portfolio' },
};

export default async function PortfolioPage() {
  const portfolio = await getPortfolioPage({ limit: 25 });
  return (
    <>
      <Spacing lg="145" md="80" />
      <MasonryGallery portfolioData={portfolio.images} nextCursor={portfolio.nextCursor} total={portfolio.total} />
    </>
  );
}
