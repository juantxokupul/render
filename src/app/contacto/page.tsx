'use client';

import { useState } from "react";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { MapPin, Phone, Mail, Clock, CheckCircle2, type LucideIcon } from "lucide-react";

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

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEnviado(true);
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
              <div className="grid-2col" style={{ gap: "1rem" }}>
                <div>
                  <label style={labelStyle}>Nombre</label>
                  <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Tu nombre" required style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Teléfono</label>
                  <input name="telefono" value={form.telefono} onChange={handleChange} placeholder="+34 600 000 000" style={inputStyle} />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="correo@ejemplo.com" required style={inputStyle} />
              </div>

              <div className="grid-2col" style={{ gap: "1rem" }}>
                <div>
                  <label style={labelStyle}>Fecha</label>
                  <input name="fecha" type="date" value={form.fecha} onChange={handleChange} required style={inputStyle} />
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
                <textarea name="mensaje" value={form.mensaje} onChange={handleChange} rows={4} placeholder="¿Alguna alergia, evento especial, preferencia de mesa...?" style={{ ...inputStyle, resize: "vertical" }} />
              </div>

              <button type="submit" style={{
                padding: "0.95rem",
                background: "var(--gold)",
                color: "var(--bg)",
                border: "none",
                borderRadius: "var(--r-sm)",
                fontSize: "0.95rem",
                fontWeight: 600,
                fontFamily: "var(--font-sans)",
                cursor: "pointer",
                marginTop: "0.5rem",
                boxShadow: "var(--shadow-gold)",
                transition: "transform 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold-soft)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--gold)"; }}>
                Enviar Reserva
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
