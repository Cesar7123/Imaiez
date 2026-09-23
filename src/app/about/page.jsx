import AboutContent from './AboutContent';
import { getOptimizedUrl } from '@/app/lib/cloudinary';
import { getPortfolioImages } from '@/app/lib/portfolio';

export const metadata = {
  title: 'Sobre Imai Photo — Fotógrafo y cineasta en La Paz, BCS',
  description:
    'Conoce a Imai Photo: fotografía y cine con intención para restaurantes, hoteles y marcas en La Paz, Baja California Sur. Enfoque, experiencia y proceso creativo.',
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'profile',
    locale: 'es_MX',
    url: '/about',
    title: 'Sobre Imai Photo — Fotógrafo y cineasta en La Paz, BCS',
    description:
      'Fotografía y cine con intención en Baja California Sur. Enfoque, experiencia y proceso creativo.',
    images: [{ url: '/images/about_hero_bg.jpeg', width: 1600, height: 900, alt: 'Imai Photo' }],
  },
};

export default async function AboutPage() {
  const portfolio = await getPortfolioImages({ limit: 100 });
  const aboutImage = portfolio.find((image) => image.categories.includes('about'));

  return (
    <AboutContent
      aboutImage={aboutImage && {
        ...aboutImage,
        url: getOptimizedUrl(aboutImage.url, 1200),
      }}
      heroImage={aboutImage && {
        ...aboutImage,
        url: getOptimizedUrl(aboutImage.url, 1920),
      }}
    />
  );
}
