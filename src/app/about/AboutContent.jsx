"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import FunFact from "@/app/ui/FunFact";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import TeamSlider from "@/app/ui/Slider/TeamSlider";
import Spacing from "@/app/ui/Spacing";
import aboutImg from "../../../public/images/about_img_1.jpeg";
import aboutImg2 from "../../../public/images/about_img_2.jpeg";
import aboutImg3 from "../../../public/images/about_img_3.jpeg";
import aboutImg4 from "../../../public/images/about_img_4.jpeg";

const funfaceData = [
  {
    title: "Clientes Satisfechos en el Mundo",
    factNumber: "40K",
  },
  {
    title: "Proyectos Completados",
    factNumber: "50K",
  },
  {
    title: "Miembros del Equipo",
    factNumber: "245",
  },
  {
    title: "Productos Digitales",
    factNumber: "550",
  },
];

export default function AboutContent({ aboutImage, heroImage }) {
  const photoUrl = heroImage?.url || aboutImage?.url || aboutImg.src;
  const photoAlt =
    heroImage?.description ||
    aboutImage?.description ||
    "Imai — fotógrafo y cineasta";

  return (
    <>
      {/* Start Hero Section (Dark Studio Identity) */}
      <section className="cs-studio_hero">
        <div className="cs-studio_hero_glow" aria-hidden="true" />
        <div className="cs-studio_hero_photo">
          <img src={photoUrl} alt={photoAlt} fetchPriority="high" />
        </div>
        <div className="container cs-studio_hero_content">
          <div className="cs-studio_hero_text">
            <h1 className="cs-studio_title">
              Tu imagen habla
              <br />
              antes que tú.
            </h1>
            <p className="cs-studio_subtitle">
              ¿Conversamos sobre lo que está diciendo?
            </p>
            <p className="cs-studio_bio">
              Fotógrafo y cineasta especializado en contenido visual de alta
              calidad para restaurantes, hoteles y marcas del sector hostelero.
              Precisión técnica, enfoque narrativo y dirección creativa en cada
              proyecto.
            </p>
            <div className="cs-studio_pills">
              <a
                className="cs-studio_pill cs-studio_pill_primary"
                href="https://www.instagram.com/imaiez"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="bi:instagram" aria-hidden="true" />
                @imaiez
              </a>
              <Link
                className="cs-studio_pill cs-studio_pill_ghost"
                href="/portfolio"
              >
                Portafolio
              </Link>
            </div>
            <Link href="/contact" className="cs-studio_cta">
              Solicita tu presupuesto
              <span>-</span>
              <Icon icon="bi:arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <a
          href="#about"
          className="cs-studio_scroll"
          aria-label="Desplazar hacia abajo"
        >
          <Icon icon="bi:arrow-down" aria-hidden="true" />
        </a>
      </section>
      {/* End Hero Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container" id="about">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading title="Tu aliado de confianza" subtitle="IMAI">
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
              alt={aboutImage?.description || "Acerca de Imai"}
              width={aboutImage?.width || 1200}
              height={aboutImage?.height || 800}
              loading="lazy"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}

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
