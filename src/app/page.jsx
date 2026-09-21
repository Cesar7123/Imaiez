import Div from '@/app/ui/Div';
import FunFact2 from '@/app/ui/FunFact/FunFact2';
import MasonryGallery from '@/app/ui/Gallery/MasonryGallery';
import Hero2 from '@/app/ui/Hero/Hero2';
import Hero6 from '@/app/ui/Hero/Hero6';
import PricingTableList from '@/app/ui/PricingTable/PricingTableList';
import SectionHeading from '@/app/ui/SectionHeading';
import PostSlider from '@/app/ui/Slider/PostSlider';
import TestimonialSlider from '@/app/ui/Slider/TestimonialSlider';
import Spacing from '@/app/ui/Spacing';
import { Icon } from '@iconify/react';
import Image from 'next/image';

import aboutImg from '../../public/images/about_img_5.jpeg';
import Card from './ui/Card';
import { getAllPosts } from '@/app/lib/blog';
import { getPortfolioImages } from '@/app/lib/portfolio';
import { getOptimizedUrl } from '@/app/lib/cloudinary';

export const metadata = {
  title: 'Fotografía y cine con intención',
  description: 'Imai Photo crea imágenes y películas para marcas, hoteles, restaurantes y personas.',
  alternates: { canonical: '/' },
};
const heroSocialLinks = [
  {
    name: 'Instagram',
    links: 'https://www.instagram.com/imaiez',
  },
];
const heroData = [
  {
    title: 'Boda',
    imageUrl: '/images/wedding.jpeg',
    href: '/service/service-details',
  },
  {
    title: 'Moda',
    imageUrl: '/images/fashion.jpeg',
    href: '/service/service-details',
  },
  {
    title: 'Comercial',
    imageUrl: '/images/commercial.jpeg',
    href: '/service/service-details',
  },
  {
    title: 'Paisaje',
    imageUrl: '/images/landscape.jpeg',
    href: '/service/service-details',
  },
];
const funfaceData = [
  {
    title: 'Productos',
    factNumber: '550',
  },
  {
    title: 'Clientes felices en todo el mundo',
    factNumber: '40K',
  },
  {
    title: 'Proyectos completados',
    factNumber: '50k',
  },
  {
    title: 'Miembros del equipo',
    factNumber: '250',
  },
];

const fallbackShowcaseData = [
  '/images/landscape.jpeg',
  '/images/wedding.jpeg',
  '/images/fashion.jpeg',
].map((imgUrl) => ({
  title: 'Imai Photo',
  imgUrl,
  href: '/portfolio',
}));

function getRandomLandscapeImages(images) {
  const landscapes = images.filter((image) => image.width > image.height);

  for (let index = landscapes.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [landscapes[index], landscapes[randomIndex]] = [landscapes[randomIndex], landscapes[index]];
  }

  return landscapes.slice(0, 3);
}

export default async function PhotographyAgencyHome() {
  const portfolio = await getPortfolioImages({ limit: 100 });
  const posts = getAllPosts();
  const heroImages = getRandomLandscapeImages(portfolio);
  const showcaseData = heroImages.length === 3
    ? heroImages.map((image) => ({
      title: image.title || 'Imai Photo',
      imgUrl: getOptimizedUrl(image.url),
      href: '/portfolio',
    }))
    : fallbackShowcaseData;

  return (
    <>
      {/* Start Hero Section */}

      <Hero6
        heroSocialLinks={heroSocialLinks}
        socialLinksHeading="Síguenos"
        showcaseData={showcaseData}
      />
      {/* End Hero Section */}

      {/* Start Gallery Section */}
      <Spacing lg="145" md="80" />
      <MasonryGallery portfolioData={portfolio} />
      {/* End Gallery Section */}

      {/* Start Testimonial Section */}
      <Spacing lg="145" md="80" />
      <TestimonialSlider />
      {/* End Testimonial Section */}

      {/* Start Blog Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Explora publicaciones recientes"
                subtitle="Nuestro Blog"
                btnText="Ver Más del Blog"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider posts={posts} />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Blog Section */}

      <Spacing lg="140" md="80" />
      {/* Start FunFact Section */}
      {/* <Div className="container">
        <FunFact2 data={funfaceData} variant="cs-type2" />
      </Div>*/}
      {/* End FunFact Section */}

      {/* Start Contact Section */}
      <Spacing lg="140" md="70" />
      <Div className="container">
        <SectionHeading
          title="Ponte en contacto"
          subtitle="Contáctanos"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
      </Div>
      <Div className="cs-gradient_bg_1">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <Spacing lg="100" md="80" />
              <form action="#" className="row">
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Nombre Completo*</label>
                  <input type="text" className="cs-form_field" />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Correo Electrónico*</label>
                  <input type="text" className="cs-form_field" />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Tipo de Proyecto*</label>
                  <input type="text" className="cs-form_field" />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Teléfono*</label>
                  <input type="text" className="cs-form_field" />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-12">
                  <label className="cs-primary_color">Detalles*</label>
                  <textarea
                    cols="30"
                    rows="7"
                    className="cs-form_field"
                  ></textarea>
                  <Spacing lg="25" md="25" />
                </Div>
                <Div className="col-sm-12">
                  <button className="cs-btn cs-style1">
                    <span>Enviar Mensaje</span>
                    <Icon icon="bi:arrow-right" />
                  </button>
                </Div>
              </form>
              <Spacing lg="100" md="60" />
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Div
                className="cs-google_map cs-type1 cs-bg"
                data-src="assets/img/map_img_1.jpeg"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1855337.5332464234!2d-110.83778634999999!3d24.7369676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x636080464b6765dd%3A0xd9dc2fb886bcffeb!2sChurea%20Producciones%20-%20Fotograf%C3%ADa%20de%20retrato%2C%20paisaje%20y%20comercial!5e0!3m2!1ses!2smx!4v1790009802238!5m2!1ses!2smx"
                  allowFullScreen
                  title="Churea Producciones en La Paz"
                />
              </Div>
              <Spacing lg="0" md="80" />
            </Div>
          </Div>
        </Div>
      </Div>
      {/* Start Contact Section */}
    </>
  );
}
