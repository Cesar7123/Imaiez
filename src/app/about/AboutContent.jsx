'use client';

import Image from "next/image";
import Hero from "../ui/Hero";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import FunFact from "@/app/ui/FunFact";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import TeamSlider from "@/app/ui/Slider/TeamSlider";
import Spacing from "@/app/ui/Spacing";
import aboutImg from '../../../public/images/about_img_1.jpeg'
import aboutImg2 from '../../../public/images/about_img_2.jpeg'
import aboutImg3 from '../../../public/images/about_img_3.jpeg'
import aboutImg4 from '../../../public/images/about_img_4.jpeg'

// Hero Social Links
const heroSocialLinks = [
  {
    name: 'Instagram',
    links: 'https://www.instagram.com/imaiez',
  },
];

const funfaceData = [
  {
    title: 'Clientes Satisfechos en el Mundo',
    factNumber: '40K',
  },
  {
    title: 'Proyectos Completados',
    factNumber: '50K',
  },
  {
    title: 'Miembros del Equipo',
    factNumber: '245',
  },
  {
    title: 'Productos Digitales',
    factNumber: '550',
  },
];

export default function AboutContent({ aboutImage, heroImage }) {
  return (
    <>
      {/* Start Page Heading Section */}
      <Hero
        title="Soy <br/>Imai"
        subtitle="Soy fotógrafo y cineasta con X años de experiencia, especializado en la creación de contenido visual de alta calidad para restaurantes, hoteles y marcas del sector hostelero.<br/><br/>Mi trabajo combina la precisión técnica con un marcado enfoque narrativo, aportando dirección creativa y visión estratégica a cada proyecto. Colaboro con marcas que valoran la autenticidad, el detalle y la excelencia, desde el concepto hasta el resultado final..."
        btnText=""
        btnLink="/contact"
        scrollDownId="#service"
        socialLinksHeading="Síguenos"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl={heroImage?.url || aboutImage?.url || aboutImg.src}
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="Tu aliado de confianza"
              subtitle="IMAI"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Este es el factor principal que nos diferencia de la competencia
                y nos permite ofrecer un servicio especializado de consultoría
                empresarial. Nuestro equipo aplica su amplia experiencia para
                determinar las mejores soluciones. A través de nuestros años de
                experiencia, también hemos aprendido que cada canal requiere un
                enfoque único.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src={aboutImage?.url || aboutImg.src}
              alt={aboutImage?.description || 'Acerca de Imai'}
              width={aboutImage?.width || 1200}
              height={aboutImage?.height || 800}
              loading="lazy"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-7">
            <Image
              src={aboutImg2}
              alt="Acerca de"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-5">
            <Image
              src={aboutImg3}
              alt="Acerca de"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}

      {/* Start Fun Fact Section */}
      {/* <Div className="container">
        <FunFact
          title="Nuestro dato curioso"
          subtitle="Texto descriptivo breve sobre un dato interesante de la agencia y su trayectoria profesional."
          data={funfaceData}
        />
      </Div>*/}
      {/* End Fun Fact Section */}

      {/* Start Why Choose Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <Image
                  src={aboutImg4}
                  alt="Acerca de"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading
              title="Personas altamente experimentadas con nosotros"
              subtitle="Por Qué Elegirnos"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Este es el factor principal que nos diferencia de la competencia
                y nos permite ofrecer un servicio especializado de consultoría
                empresarial. Nuestro equipo aplica su amplia experiencia para
                determinar las mejores soluciones. A través de nuestros años de
                experiencia, también hemos aprendido que cada canal requiere un
                enfoque único.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Este es el factor principal que nos diferencia de la competencia
                y nos permite ofrecer un servicio especializado de consultoría
                empresarial. Nuestro equipo aplica su amplia experiencia para
                determinar las mejores soluciones.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Section */}

      {/* Start CTA Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Hablemos de crear <br />algo <i>increíble</i> juntos"
          btnText="Agendar una reunión"
          btnLink="/contact"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
