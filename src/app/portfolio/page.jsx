import Spacing from '@/app/ui/Spacing';
import MasonryGallery from '@/app/ui/Gallery/MasonryGallery';
import { getPortfolioImages } from '@/app/lib/portfolio';

export const metadata = {
  title: 'Portafolio de fotografía',
  description: 'Explora fotografía de bodas, retratos, moda, hoteles, gastronomía y marcas.',
  alternates: { canonical: '/portfolio' },
};

export default async function PortfolioPage() {
  const portfolio = await getPortfolioImages({ limit: 100 });
  return (
    <>
      <Spacing lg="145" md="80" />
      <MasonryGallery portfolioData={portfolio} />
    </>
  );
}
