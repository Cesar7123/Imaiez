import AboutContent from './AboutContent';
import { getOptimizedUrl } from '@/app/lib/cloudinary';
import { getPortfolioImages } from '@/app/lib/portfolio';

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
