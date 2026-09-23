"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Div from "@/app/ui/Div";
import Spacing from "@/app/ui/Spacing";
import { Icon } from "@iconify/react";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

function useFormStatus() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const emailjsReady = Boolean(
    EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY
  );

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

  return { formRef, status, errorMsg, handleSubmit };
}

function StatusMessage({ status, errorMsg, dark }) {
  if (status === "success") {
    return (
      <p className={dark ? "cs-wellness_success" : "cs-accent_color"} role="status">
        ¡Gracias! Te responderemos pronto.
      </p>
    );
  }
  if (status === "error") {
    return (
      <p className="cs-form_error" role="alert">
        {errorMsg}
      </p>
    );
  }
  return null;
}

export function ClassicContactForm() {
  const { formRef, status, errorMsg, handleSubmit } = useFormStatus();
  const sending = status === "sending";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="row">
      <Div className="col-sm-6">
        <label className="cs-primary_color" htmlFor="contact-classic-name">
          Nombre Completo*
        </label>
        <input
          type="text"
          id="contact-classic-name"
          name="from_name"
          className="cs-form_field"
          required
          autoComplete="name"
        />
        <Spacing lg="20" md="20" />
      </Div>
      <Div className="col-sm-6">
        <label className="cs-primary_color" htmlFor="contact-classic-email">
          Correo Electrónico*
        </label>
        <input
          type="email"
          id="contact-classic-email"
          name="from_email"
          className="cs-form_field"
          required
          autoComplete="email"
        />
        <Spacing lg="20" md="20" />
      </Div>
      <Div className="col-sm-6">
        <label className="cs-primary_color" htmlFor="contact-classic-project">
          Tipo de Proyecto*
        </label>
        <input
          type="text"
          id="contact-classic-project"
          name="project_type"
          className="cs-form_field"
          placeholder="Boda, restaurante, hotel, retrato…"
          required
        />
        <Spacing lg="20" md="20" />
      </Div>
      <Div className="col-sm-6">
        <label className="cs-primary_color" htmlFor="contact-classic-phone">
          Teléfono*
        </label>
        <input
          type="tel"
          id="contact-classic-phone"
          name="phone"
          className="cs-form_field"
          required
          autoComplete="tel"
        />
        <Spacing lg="20" md="20" />
      </Div>
      <Div className="col-sm-12">
        <label className="cs-primary_color" htmlFor="contact-classic-message">
          Detalles*
        </label>
        <textarea
          cols="30"
          rows="7"
          id="contact-classic-message"
          name="message"
          className="cs-form_field"
          required
        ></textarea>
        <Spacing lg="25" md="25" />
      </Div>
      <Div className="col-sm-12">
        <button className="cs-btn cs-style1" type="submit" disabled={sending}>
          <span>
            {sending ? "Enviando…" : status === "success" ? "Mensaje enviado" : "Enviar Mensaje"}
          </span>
          <Icon icon="bi:arrow-right" />
        </button>
        <StatusMessage status={status} errorMsg={errorMsg} />
      </Div>
    </form>
  );
}

export function WellnessContactForm() {
  const { formRef, status, errorMsg, handleSubmit } = useFormStatus();
  const sending = status === "sending";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="cs-wellness_form">
      <div className="cs-wellness_field_group">
        <label htmlFor="contact-wellness-name">Nombre*</label>
        <input
          type="text"
          id="contact-wellness-name"
          name="from_name"
          placeholder="Tu nombre"
          required
          autoComplete="name"
        />
      </div>
      <div className="cs-wellness_field_group">
        <label htmlFor="contact-wellness-email">Email*</label>
        <input
          type="email"
          id="contact-wellness-email"
          name="from_email"
          placeholder="tucorreo@ejemplo.com"
          required
          autoComplete="email"
        />
      </div>
      <div className="cs-wellness_field_row">
        <div className="cs-wellness_field_group">
          <label htmlFor="contact-wellness-phone">Teléfono*</label>
          <input
            type="tel"
            id="contact-wellness-phone"
            name="phone"
            placeholder="+52 612 000 0000"
            required
            autoComplete="tel"
          />
        </div>
        <div className="cs-wellness_field_group">
          <label htmlFor="contact-wellness-project">Tipo de proyecto*</label>
          <input
            type="text"
            id="contact-wellness-project"
            name="project_type"
            placeholder="Boda, restaurante, hotel…"
            required
          />
        </div>
      </div>
      <div className="cs-wellness_field_group">
        <label htmlFor="contact-wellness-message">Detalles*</label>
        <textarea
          id="contact-wellness-message"
          name="message"
          rows="4"
          placeholder="Cuéntanos sobre tu proyecto: fechas, ubicación, ideas…"
          required
        ></textarea>
      </div>
      <div className="cs-wellness_consent">
        <input type="checkbox" id="contact-wellness-consent" name="consent" value="sí" required />
        <label htmlFor="contact-wellness-consent">
          Acepto el aviso de privacidad y que IMAI - Churea Producciones me
          contacte para dar seguimiento a mi solicitud.*
        </label>
      </div>
      <button className="cs-wellness_submit" type="submit" disabled={sending}>
        {sending ? "Enviando…" : status === "success" ? "Enviado ✓" : "Enviar solicitud"}
      </button>
      <StatusMessage status={status} errorMsg={errorMsg} dark />
    </form>
  );
}
