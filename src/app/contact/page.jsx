"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import ContactInfoWidget from "@/app/ui/Widget/ContactInfoWidget";
import { Icon } from "@iconify/react";

const MAPS_EMBED_URL =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ||
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1855337.5332464234!2d-110.83778634999999!3d24.7369676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x636080464b6765dd%3A0xd9dc2fb886bcffeb!2sChurea%20Producciones%20-%20Fotograf%C3%ADa%20de%20retrato%2C%20paisaje%20y%20comercial!5e0!3m2!1ses!2smx!4v1790009802238!5m2!1ses!2smx";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const initialForm = {
  from_name: "",
  from_email: "",
  project_type: "",
  phone: "",
  message: "",
};

export default function ContactPage() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const emailjsReady =
    EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY;

  async function handleSubmit(e) {
    e.preventDefault();
    if (!emailjsReady) {
      setStatus("error");
      setErrorMsg(
        "El formulario aún no está configurado. Escríbenos a contacto@imai.com o por teléfono."
      );
      return;
    }
    setStatus("sending");
    setErrorMsg("");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      formRef.current.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        "No pudimos enviar tu mensaje. Intenta de nuevo o escríbenos a contacto@imai.com."
      );
      console.error("EmailJS error:", err);
    }
  }

  return (
    <>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="Tienes un proyecto en mente?"
              subtitle="Contactanos"
            />
            <Spacing lg="55" md="30" />
            <ContactInfoWidget withIcon />
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6">
            <form ref={formRef} onSubmit={handleSubmit} className="row">
              <Div className="col-sm-6">
                <label className="cs-primary_color" htmlFor="from_name">
                  Nombre*
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  className="cs-form_field"
                  required
                  autoComplete="name"
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color" htmlFor="from_email">
                  Email*
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  className="cs-form_field"
                  required
                  autoComplete="email"
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color" htmlFor="project_type">
                  Tipo de proyecto*
                </label>
                <input
                  type="text"
                  id="project_type"
                  name="project_type"
                  className="cs-form_field"
                  placeholder="Boda, restaurante, hotel, retrato…"
                  required
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color" htmlFor="phone">
                  Teléfono*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="cs-form_field"
                  required
                  autoComplete="tel"
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color" htmlFor="message">
                  Detalles*
                </label>
                <textarea
                  cols="30"
                  rows="7"
                  id="message"
                  name="message"
                  className="cs-form_field"
                  required
                ></textarea>
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button
                  className="cs-btn cs-style1"
                  type="submit"
                  disabled={status === "sending"}
                >
                  <span>
                    {status === "sending"
                      ? "Enviando…"
                      : status === "success"
                        ? "Mensaje enviado ✓"
                        : "Enviar mensaje"}
                  </span>
                  <Icon icon="bi:arrow-right" />
                </button>
                {status === "success" && (
                  <p className="cs-accent_color" role="status">
                    ¡Gracias! Te responderemos pronto.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-danger" role="alert">
                    {errorMsg}
                  </p>
                )}
              </Div>
            </form>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="cs-google_map">
        <iframe
          src={MAPS_EMBED_URL}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de IMAI - Churea Producciones en La Paz, Baja California Sur — mapa de Google Maps"
        />
      </Div>
      <Spacing lg="50" md="40" />
    </>
  );
}
