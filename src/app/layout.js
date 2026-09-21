import Header from '@/app/ui/Header';
import CustomCursor from '@/app/ui/CustomCursor';
import Footer from '@/app/ui/Footer';
import RouteEffects from '@/app/ui/RouteEffects';
import 'swiper/css';
import 'swiper/css/pagination';
import './scss/index.scss';
import { Poppins, Open_Sans } from 'next/font/google';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
const siteName = 'Imai Photo';
const siteDescription = 'Fotografía y cine para restaurantes, hoteles, marcas y personas que buscan contar historias con luz, detalle y autenticidad.';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--primary-font',
});
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--secondary-font',
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: 'Imai Photo' }],
  creator: 'Imai Photo',
  publisher: 'Imai Photo',
  keywords: ['fotografía', 'cine', 'fotografía gastronómica', 'fotografía de hoteles', 'fotografía de bodas', 'Imai'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: '/',
    siteName,
    title: siteName,
    description: siteDescription,
    images: [{ url: '/images/about_hero_bg.jpeg', width: 1600, height: 900, alt: 'Imai Photo, fotografía editorial' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    images: ['/images/about_hero_bg.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  icons: { icon: '/images/favicon.ico' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Person', 'ProfessionalService'],
  name: siteName,
  url: siteUrl,
  description: siteDescription,
  image: `${siteUrl}/images/about_hero_bg.jpeg`,
  sameAs: ['https://www.instagram.com/imaiez'],
  knowsAbout: ['Fotografía', 'Cine', 'Fotografía gastronómica', 'Fotografía de hoteles', 'Dirección creativa'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="author" content={siteName} />
        <link rel="preconnect" href="https://res.cloudinary.com" />
      </head>
      <body className={`${openSans.variable} ${poppins.variable}`}>
        <a className="skip-link" href="#main-content">Saltar al contenido</a>
        <Header />
        <CustomCursor />
        <RouteEffects />
        <main id="main-content">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
