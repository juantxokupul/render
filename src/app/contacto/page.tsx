'use client';

import { useState } from "react";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { MapPin, Phone, Mail, Clock, CheckCircle2, type LucideIcon } from "lucide-react";

// Web3Forms access key. Get yours free at https://web3forms.com (enter hola@villanabo.es).
// Safe to expose in client code — it only allows sending to the address it's registered to,
// and it ships in the client bundle regardless. Hardcoded so it does not depend on the
// host's build-time env vars; an env var, if set, still overrides it.
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "799e244c-5ae7-437e-8ea0-3e0693a06dff";

type InfoItem = { Icon: LucideIcon; titulo: string; lineas: string[] };

const infoItems: InfoItem[] = [
  { Icon: MapPin, titulo: "Dirección", lineas: ["Camino Rural de Villa Nabo, s/n", "09451 Arauzo de Torre, Burgos"] },
  { Icon: Phone, titulo: "Teléfono", lineas: ["+34 666 666 666", "Lunes a Domingo 10:00 - 23:00"] },
  { Icon: Mail, titulo: "Email", lineas: ["hola@villanabo.es", "Respondemos en menos de 24h"] },
];

const horarios: [string, string][] = [
  ["Lunes – Jueves", "12:00 – 22:00"],
  ["Viernes", "12:00 – 02:00"],
  ["Sábado", "11:00 – 03:00"],
  ["Domingo", "11:00 – 20:00"],
];

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", fecha: "", personas: "2", mensaje: "" });
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  // Honeypot: a hidden field real users never see. Bots tend to fill every field.
  const [trampa, setTrampa] = useState("");

  // Earliest selectable reservation date (today), in YYYY-MM-DD for the date input.
  const hoy = new Date().toISOString().split("T")[0];
  const URL_RE = /(https?:\/\/|www\.)/i;

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  }

  function validar() {
    const e: Record<string, string> = {};
    const nombre = form.nombre.trim();
    if (nombre.length < 2) e.nombre = "Introduce tu nombre.";
    else if (URL_RE.test(nombre)) e.nombre = "El nombre no puede contener enlaces.";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Introduce un email válido.";

    if (form.telefono.trim() && !/^[+\d][\d\s().-]{6,}$/.test(form.telefono.trim()))
      e.telefono = "Introduce un teléfono válido.";

    if (!form.fecha) e.fecha = "Elige una fecha.";
    else if (form.fecha < hoy) e.fecha = "La fecha no puede ser anterior a hoy.";

    if (form.mensaje.length > 1000) e.mensaje = "El mensaje es demasiado largo.";
    else if (URL_RE.test(form.mensaje)) e.mensaje = "El mensaje no puede contener enlaces.";

    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    // Honeypot tripped → almost certainly a bot. Pretend success, send nothing.
    if (trampa) { setEnviado(true); return; }

    const errs = validar();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setEnviando(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Nueva reserva — ${form.nombre} (${form.personas} pers.)`,
          from_name: "Web Villa Nabo",
          replyto: form.email,
          botcheck: trampa, // server-side honeypot check
          nombre: form.nombre,
          email: form.email,
          telefono: form.telefono,
          fecha: form.fecha,
          personas: form.personas,
          mensaje: form.mensaje,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setEnviado(true);
      } else {
        setError("No se pudo enviar la reserva. Inténtalo de nuevo o llámanos por teléfono.");
      }
    } catch {
      setError("No se pudo enviar la reserva. Comprueba tu conexión e inténtalo de nuevo.");
    } finally {
      setEnviando(false);
    }
  }

  const inputStyle = {
    width: "100%",
    padding: "0.85rem 1rem",
    background: "var(--bg)",
    border: "1px solid var(--border-strong)",
    borderRadius: "var(--r-sm)",
    color: "var(--text)",
    fontSize: "0.95rem",
    fontFamily: "var(--font-sans)",
    outline: "none",
    boxSizing: "border-box" as const,
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  const labelStyle = {
    display: "block",
    color: "var(--text-muted)",
    fontSize: "0.85rem",
    fontWeight: 500,
    marginBottom: "0.4rem",
  };

  const errStyle = {
    color: "var(--ember)",
    fontSize: "0.8rem",
    margin: "0.35rem 0 0",
  };

  // Input style with a red border when the field has a validation error.
  const fieldStyle = (name: string) =>
    errors[name] ? { ...inputStyle, borderColor: "var(--ember)" } : inputStyle;

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)" }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        background: "var(--bg-elevated)",
        padding: "5rem 2rem 4rem",
        textAlign: "center",
        borderBottom: "1px solid var(--border)",
      }}>
        <p style={{
          fontSize: "0.8rem",
          fontWeight: 600,
          color: "var(--ember)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "1rem",
        }}>
          Estamos aquí
        </p>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.25rem, 5vw, 3rem)",
          fontWeight: 700,
          color: "var(--text)",
          marginBottom: "1rem",
        }}>
          Contacto & Reservas
        </h2>
        <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
          ¿Tienes preguntas o quieres reservar tu mesa? Estamos aquí para ayudarte.
        </p>
      </section>

      {/* Contenido */}
      <section className="grid-2col-wide" style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem", gap: "3.5rem", alignItems: "start" }}>

        {/* Info */}
        <div>
          <h3 style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "var(--text)",
            marginBottom: "1.5rem",
          }}>
            Información
          </h3>

          {infoItems.map(({ Icon, titulo, lineas }) => (
            <div key={titulo} style={{
              display: "flex",
              gap: "1rem",
              marginBottom: "1rem",
              padding: "1.25rem 1.5rem",
              background: "var(--bg-elevated)",
              borderRadius: "var(--r-md)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-sm)",
            }}>
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "var(--r-sm)",
                background: "rgba(212,165,116,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}>
                <Icon size={20} color="var(--gold)" />
              </div>
              <div>
                <p style={{ fontWeight: 600, color: "var(--text)", marginBottom: "0.25rem" }}>{titulo}</p>
                {lineas.map((l) => <p key={l} style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.5 }}>{l}</p>)}
              </div>
            </div>
          ))}

          {/* Horarios */}
          <div style={{
            padding: "1.5rem",
            background: "var(--bg-elevated)",
            borderRadius: "var(--r-md)",
            border: "1px solid var(--border)",
            boxShadow: "var(--shadow-sm)",
            marginTop: "1rem",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
              <Clock size={18} color="var(--gold)" />
              <p style={{ fontWeight: 600, color: "var(--text)" }}>Horarios</p>
            </div>
            {horarios.map(([dia, hora]) => (
              <div key={dia} style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0.55rem 0",
                borderBottom: "1px solid var(--border)",
                fontSize: "0.9rem",
              }}>
                <span style={{ color: "var(--text-muted)" }}>{dia}</span>
                <span style={{ color: "var(--gold)", fontWeight: 500 }}>{hora}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Formulario */}
        <div>
          <h3 style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "var(--text)",
            marginBottom: "1.5rem",
          }}>
            {enviado ? "¡Reserva Recibida!" : "Reserva tu Mesa"}
          </h3>

          <div style={{
            background: "var(--bg-elevated)",
            border: "1px solid var(--border)",
            borderRadius: "var(--r-md)",
            padding: "2.5rem",
            boxShadow: "var(--shadow-md)",
          }}>
          {enviado ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <CheckCircle2 size={56} color="var(--gold)" style={{ marginBottom: "1.25rem" }} />
              <p style={{ color: "var(--text-muted)" }}>Te confirmaremos tu mesa por email en menos de 24 horas.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {/* Honeypot anti-spam: hidden from real users (aria-hidden, off-screen, no tab
                  stop). Bots that auto-fill every field trip it and get silently rejected. */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={trampa}
                onChange={(e) => setTrampa(e.target.value)}
                style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
              />

              <div className="grid-2col" style={{ gap: "1rem" }}>
                <div>
                  <label style={labelStyle}>Nombre</label>
                  <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Tu nombre" required style={fieldStyle("nombre")} />
                  {errors.nombre && <p style={errStyle}>{errors.nombre}</p>}
                </div>
                <div>
                  <label style={labelStyle}>Teléfono</label>
                  <input name="telefono" value={form.telefono} onChange={handleChange} placeholder="+34 600 000 000" style={fieldStyle("telefono")} />
                  {errors.telefono && <p style={errStyle}>{errors.telefono}</p>}
                </div>
              </div>

              <div>
                <label style={labelStyle}>Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="correo@ejemplo.com" required style={fieldStyle("email")} />
                {errors.email && <p style={errStyle}>{errors.email}</p>}
              </div>

              <div className="grid-2col" style={{ gap: "1rem" }}>
                <div>
                  <label style={labelStyle}>Fecha</label>
                  <input name="fecha" type="date" min={hoy} value={form.fecha} onChange={handleChange} required style={fieldStyle("fecha")} />
                  {errors.fecha && <p style={errStyle}>{errors.fecha}</p>}
                </div>
                <div>
                  <label style={labelStyle}>Personas</label>
                  <select name="personas" value={form.personas} onChange={handleChange} style={inputStyle}>
                    {["1","2","3","4","5","6","7","8","9","10+"].map((n) => <option key={n} value={n}>{n} persona{n !== "1" ? "s" : ""}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label style={labelStyle}>Mensaje o petición especial</label>
                <textarea name="mensaje" value={form.mensaje} onChange={handleChange} rows={4} placeholder="¿Alguna alergia, evento especial, preferencia de mesa...?" style={{ ...fieldStyle("mensaje"), resize: "vertical" }} />
                {errors.mensaje && <p style={errStyle}>{errors.mensaje}</p>}
              </div>

              {error && (
                <p style={{ color: "var(--ember)", fontSize: "0.9rem", margin: 0 }}>{error}</p>
              )}

              <button type="submit" disabled={enviando} style={{
                padding: "0.95rem",
                background: "var(--gold)",
                color: "var(--bg)",
                border: "none",
                borderRadius: "var(--r-sm)",
                fontSize: "0.95rem",
                fontWeight: 600,
                fontFamily: "var(--font-sans)",
                cursor: enviando ? "wait" : "pointer",
                opacity: enviando ? 0.7 : 1,
                marginTop: "0.5rem",
                boxShadow: "var(--shadow-gold)",
                transition: "transform 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => { if (!enviando) e.currentTarget.style.background = "var(--gold-soft)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--gold)"; }}>
                {enviando ? "Enviando..." : "Enviar Reserva"}
              </button>
            </form>
          )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
