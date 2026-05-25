'use client';

import { useState } from "react";
import Navbar from "@/src/components/Navbar";

import Footer from "@/src/components/Footer";

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
    background: "#1a1a1a",
    border: "1px solid #3a2a1a",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "1rem",
    outline: "none",
    boxSizing: "border-box" as const
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0f0f0f", color: "#fff", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #2d1810 0%, #1a1a1a 100%)", padding: "5rem 2rem", textAlign: "center", borderBottom: "3px solid #d4a574" }}>
        <h2 style={{ fontSize: "3rem", fontWeight: "900", color: "#d4a574", marginBottom: "1rem" }}>Contacto & Reservas</h2>
        <p style={{ fontSize: "1.1rem", color: "#b0a090", maxWidth: "600px", margin: "0 auto" }}>
          ¿Tienes preguntas o quieres reservar tu mesa? Estamos aquí para ayudarte.
        </p>
      </section>

      {/* Contenido */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "4rem", alignItems: "start" }}>

        {/* Info */}
        <div>
          <h3 style={{ fontSize: "1.6rem", fontWeight: "800", color: "#d4a574", marginBottom: "2rem" }}>Información</h3>

          {[
            { icon: "📍", titulo: "Dirección", lineas: ["Camino Rural de Villa Nabo, s/n", "09451 Arauzo de Torre, Burgos"] },
            { icon: "📞", titulo: "Teléfono", lineas: ["+34 666 666 666", "Lunes a Domingo 10:00 - 23:00"] },
            { icon: "📧", titulo: "Email", lineas: ["hola@villanabo.es", "Respondemos en menos de 24h"] },
          ].map((item) => (
            <div key={item.titulo} style={{ display: "flex", gap: "1.25rem", marginBottom: "2rem", padding: "1.5rem", background: "#1a1a1a", borderRadius: "12px", border: "1px solid #2d1810" }}>
              <span style={{ fontSize: "1.8rem" }}>{item.icon}</span>
              <div>
                <p style={{ fontWeight: "700", color: "#d4a574", marginBottom: "0.4rem" }}>{item.titulo}</p>
                {item.lineas.map((l) => <p key={l} style={{ color: "#b0a090", fontSize: "0.95rem" }}>{l}</p>)}
              </div>
            </div>
          ))}

          {/* Horarios */}
          <div style={{ padding: "1.5rem", background: "#1a1a1a", borderRadius: "12px", border: "1px solid #2d1810" }}>
            <p style={{ fontWeight: "700", color: "#d4a574", marginBottom: "1rem", fontSize: "1rem" }}>⏰ Horarios</p>
            {[
              ["Lunes – Jueves", "12:00 – 22:00"],
              ["Viernes", "12:00 – 02:00 🎉"],
              ["Sábado", "11:00 – 03:00 🎉"],
              ["Domingo", "11:00 – 20:00"],
            ].map(([dia, hora]) => (
              <div key={dia} style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0", borderBottom: "1px solid #222", color: "#b0a090", fontSize: "0.9rem" }}>
                <span>{dia}</span>
                <span style={{ color: hora.includes("🎉") ? "#ff6b35" : "#d4a574" }}>{hora}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Formulario */}
        <div style={{ background: "#1a1a1a", border: "2px solid #d4a574", borderRadius: "15px", padding: "2.5rem" }}>
          {enviado ? (
            <div style={{ textAlign: "center", padding: "3rem 0" }}>
              <p style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</p>
              <h4 style={{ fontSize: "1.5rem", color: "#d4a574", marginBottom: "0.75rem" }}>¡Reserva Recibida!</h4>
              <p style={{ color: "#b0a090" }}>Te confirmaremos tu mesa por email en menos de 24 horas.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#d4a574", marginBottom: "0.5rem" }}>Reserva tu Mesa</h3>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={{ display: "block", color: "#b0a090", fontSize: "0.9rem", marginBottom: "0.4rem" }}>Nombre</label>
                  <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Tu nombre" required style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: "block", color: "#b0a090", fontSize: "0.9rem", marginBottom: "0.4rem" }}>Teléfono</label>
                  <input name="telefono" value={form.telefono} onChange={handleChange} placeholder="+34 600 000 000" style={inputStyle} />
                </div>
              </div>

              <div>
                <label style={{ display: "block", color: "#b0a090", fontSize: "0.9rem", marginBottom: "0.4rem" }}>Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="correo@ejemplo.com" required style={inputStyle} />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={{ display: "block", color: "#b0a090", fontSize: "0.9rem", marginBottom: "0.4rem" }}>Fecha</label>
                  <input name="fecha" type="date" value={form.fecha} onChange={handleChange} required style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: "block", color: "#b0a090", fontSize: "0.9rem", marginBottom: "0.4rem" }}>Personas</label>
                  <select name="personas" value={form.personas} onChange={handleChange} style={inputStyle}>
                    {["1","2","3","4","5","6","7","8","9","10+"].map((n) => <option key={n} value={n}>{n} persona{n !== "1" ? "s" : ""}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: "block", color: "#b0a090", fontSize: "0.9rem", marginBottom: "0.4rem" }}>Mensaje o petición especial</label>
                <textarea name="mensaje" value={form.mensaje} onChange={handleChange} rows={4} placeholder="¿Alguna alergia, evento especial, preferencia de mesa...?" style={{ ...inputStyle, resize: "vertical" }} />
              </div>

              <button type="submit" style={{
                padding: "1rem",
                background: "linear-gradient(135deg, #d4a574 0%, #ff6b35 100%)",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "700",
                cursor: "pointer",
                marginTop: "0.5rem"
              }}>
                Enviar Reserva
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
