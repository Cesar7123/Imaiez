"use client";
import Div from "@/app/ui/Div";
import Spacing from "@/app/ui/Spacing";
import { WellnessContactForm } from "@/app/ui/ContactForm";
import { Icon } from "@iconify/react";

const MAPS_EMBED_URL =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ||
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1855337.5332464234!2d-110.83778634999999!3d24.7369676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x636080464b6765dd%3A0xd9dc2fb886bcffeb!2sChurea%20Producciones%20-%20Fotograf%C3%ADa%20de%20retrato%2C%20paisaje%20y%20comercial!5e0!3m2!1ses!2smx!4v1790009802238!5m2!1ses!2smx";

export default function ContactPage() {
  return (
    <>
      <Spacing lg="150" md="80" />
      <Div className="cs-wellness_section">
        <Div
          className="cs-wellness_bg"
          style={{ backgroundImage: "url('/images/landscape.jpeg')" }}
        />
        <Div className="container">
          <Div className="cs-wellness_card">
            <Div className="cs-wellness_info">
              <h2>Agenda tu sesión</h2>
              <p>
                Cuéntanos sobre tu proyecto y te responderemos en menos de 24
                horas con una propuesta a tu medida. Fotografía y cine con
                intención en La Paz y todo Baja California Sur.
              </p>
              <a
                href="#mapa"
                className="cs-wellness_locate_btn"
              >
                <Icon icon="mdi:map-marker-outline" />
                Ver ubicación
              </a>
              <Div className="cs-wellness_contact_block">
                <span>Teléfono</span>
                <a href="tel:+526122341114">+52 612 234 1114</a>
                <span>Email</span>
                <a href="mailto:contacto@imai.com">contacto@imai.com</a>
                <span>Ubicación</span>
                <p>La Paz, Baja California Sur, México</p>
              </Div>
            </Div>
            <Div className="cs-wellness_form_panel">
              <h3>Solicita tu cotización</h3>
              <WellnessContactForm />
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="100" md="60" />
      <Div className="container">
        <Div className="cs-wellness_map" id="mapa">
          <iframe
            src={MAPS_EMBED_URL}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de IMAI - Churea Producciones en La Paz, Baja California Sur — mapa de Google Maps"
          />
        </Div>
      </Div>
      <Spacing lg="100" md="60" />
    </>
  );
}
