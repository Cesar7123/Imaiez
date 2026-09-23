import Div from "@/app/ui/Div";
import MasonryGallery from "@/app/ui/Gallery/MasonryGallery";
import Hero6 from "@/app/ui/Hero/Hero6";
import SectionHeading from "@/app/ui/SectionHeading";
import PostSlider from "@/app/ui/Slider/PostSlider";
import TestimonialSlider from "@/app/ui/Slider/TestimonialSlider";
import Spacing from "@/app/ui/Spacing";
import { ClassicContactForm } from "@/app/ui/ContactForm";

import { getAllPosts } from "@/app/lib/blog";
import { getPortfolioPage } from "@/app/lib/portfolio";
import { getOptimizedUrl } from "@/app/lib/cloudinary";

export const metadata = {
  title: "Fotografía y cine con intención",
  description:
    "Imai Photo crea imágenes y películas para marcas, hoteles, restaurantes y personas.",
  alternates: { canonical: "/" },
};

const MAPS_EMBED_URL =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ||
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1855337.5332464234!2d-110.83778634999999!3d24.7369676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x636080464b6765dd%3A0xd9dc2fb886bcffeb!2sChurea%20Producciones%20-%20Fotograf%C3%ADa%20de%20retrato%2C%20paisaje%20y%20comercial!5e0!3m2!1ses!2smx!4v1790009802238!5m2!1ses!2smx";

const heroSocialLinks = [
  {
    name: "Instagram",
    links: "https://www.instagram.com/imaiez",
  },
];

const fallbackShowcaseData = [
  "/images/landscape.jpeg",
  "/images/wedding.jpeg",
  "/images/fashion.jpeg",
].map((imgUrl) => ({
  title: "Imai Photo",
  imgUrl,
  href: "/portfolio",
}));

function getRandomLandscapeImages(images) {
  const landscapes = images.filter((image) => image.width > image.height);

  for (let index = landscapes.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [landscapes[index], landscapes[randomIndex]] = [
      landscapes[randomIndex],
      landscapes[index],
    ];
  }

  return landscapes.slice(0, 3);
}

export default async function PhotographyAgencyHome() {
  const portfolioPage = await getPortfolioPage({ limit: 25 });
  const portfolio = portfolioPage.images;
  const posts = getAllPosts();
  const heroImages = getRandomLandscapeImages(portfolio);
  const showcaseData =
    heroImages.length === 3
      ? heroImages.map((image) => ({
          title: image.caption || image.title || "Imai Photo",
          alt:
            image.alt ||
            image.description ||
            image.caption ||
            image.title ||
            "Imai Photo",
          imgUrl: getOptimizedUrl(image.url),
          href: "/portfolio",
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
      <MasonryGallery
        portfolioData={portfolio}
        nextCursor={portfolioPage.nextCursor}
        total={portfolioPage.total}
      />
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
              <ClassicContactForm />
              <Spacing lg="100" md="60" />
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Div
                className="cs-google_map cs-type1 cs-bg"
                data-src="assets/img/map_img_1.jpeg"
              >
                <iframe
                  src={MAPS_EMBED_URL}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de IMAI - Churea Producciones en La Paz, Baja California Sur — mapa de Google Maps"
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
