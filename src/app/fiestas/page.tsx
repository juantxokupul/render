import Link from "next/link";
import Image from "next/image";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { Clock, ArrowRight } from "lucide-react";

const eventos = [
  {
    dia: "Viernes",
    nombre: "Sunset Sessions",
    desc: "Música electrónica suave mientras el sol se pone. Cocktails de bienvenida y pinchos.",
    hora: "19:00 – 02:00",
    img: "https://images.pexels.com/photos/4218028/pexels-photo-4218028.jpeg?auto=compress&cs=tinysrgb&w=800",
    tipo: "Electrónica & Chill",
  },
  {
    dia: "Sábado",
    nombre: "Fuego & Ritmo",
    hora: "20:00 – 03:00",
    desc: "La gran noche de Villa Nabo. DJ en vivo, barra libre de cocktails y la mejor carne a la brasa.",
    img: "https://images.pexels.com/photos/36697295/pexels-photo-36697295.jpeg?auto=compress&cs=tinysrgb&w=800",
    tipo: "DJ + Open Bar",
  },
  {
    dia: "Domingo",
    nombre: "Brunch & Brasa",
    hora: "12:00 – 18:00",
    desc: "Brunch especial con cortes selectos, música en vivo acústica y el mejor ambiente para despedir el fin de semana.",
    img: "https://images.pexels.com/photos/5374014/pexels-photo-5374014.jpeg?auto=compress&cs=tinysrgb&w=800",
    tipo: "Música Acústica",
  },
];

const galeria = [
  "https://images.pexels.com/photos/4218028/pexels-photo-4218028.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/36366519/pexels-photo-36366519.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/36697295/pexels-photo-36697295.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/13902051/pexels-photo-13902051.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/5374014/pexels-photo-5374014.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/29093620/pexels-photo-29093620.jpeg?auto=compress&cs=tinysrgb&w=600",
];

export default function FiestasPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ position: "relative", isolation: "isolate", overflow: "hidden" }}>
        <Image
          src="https://images.pexels.com/photos/13902051/pexels-photo-13902051.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", zIndex: -2 }}
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.7) 60%, rgba(10,10,10,0.95) 100%)",
          zIndex: -1,
        }} />
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "8rem 2rem 6rem", textAlign: "center" }}>
          <p style={{
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "var(--ember)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}>
            Cada fin de semana
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
            fontWeight: 700,
            color: "var(--text)",
            marginBottom: "1.25rem",
          }}>
            Fiestas & Eventos
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "620px", margin: "0 auto", lineHeight: 1.7 }}>
            Cada semana el atardecer transforma Villa Nabo en un espacio único de música, cocktails y diversión.
          </p>
        </div>
      </section>

      {/* Programación semanal */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <h3 style={{
            fontFamily: "var(--font-display)",
            fontSize: "2rem",
            fontWeight: 700,
            color: "var(--text)",
          }}>
            Programación Semanal
          </h3>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {eventos.map((evento) => (
            <div key={evento.dia} className="grid-2col card-lift" style={{
              gap: 0,
              alignItems: "stretch",
              background: "var(--bg-elevated)",
              border: "1px solid var(--border)",
              borderRadius: "var(--r-md)",
              overflow: "hidden",
              boxShadow: "var(--shadow-md)",
            }}>
              <div style={{ position: "relative", minHeight: "260px" }}>
                <Image src={evento.img} alt={evento.nombre} fill sizes="(max-width: 768px) 100vw, 550px" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "2.25rem 2.25rem 2.5rem" }}>
                <span style={{
                  display: "inline-block",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "var(--ember)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                }}>
                  {evento.dia} · {evento.tipo}
                </span>
                <h4 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: "0.75rem",
                }}>
                  {evento.nombre}
                </h4>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.25rem" }}>{evento.desc}</p>
                <p style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--gold)", fontWeight: 600, fontSize: "0.95rem" }}>
                  <Clock size={16} /> {evento.hora}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Galería */}
      <section style={{ background: "var(--bg-elevated)", padding: "5rem 2rem", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h3 style={{
            fontFamily: "var(--font-display)",
            fontSize: "2rem",
            fontWeight: 700,
            color: "var(--text)",
          }}>
            Galería de Momentos
          </h3>
        </div>
        <div className="grid-3col" style={{ maxWidth: "1100px", margin: "0 auto", gap: "1rem" }}>
          {galeria.map((src, i) => (
            <div key={i} style={{ position: "relative", width: "100%", height: "240px", borderRadius: "var(--r-md)", overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
              <Image src={src} alt={`Momento ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 350px" style={{ objectFit: "cover" }} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 2rem", textAlign: "center" }}>
        <h3 style={{
          fontFamily: "var(--font-display)",
          fontSize: "2rem",
          fontWeight: 700,
          color: "var(--text)",
          marginBottom: "1rem",
        }}>
          ¿Vienes esta semana?
        </h3>
        <p style={{ color: "var(--text-muted)", marginBottom: "2.25rem", fontSize: "1.05rem" }}>
          Reserva tu mesa o consigue tu entrada para los eventos especiales
        </p>
        <Link href="/contacto" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.95rem 2rem",
          background: "var(--gold)",
          color: "var(--bg)",
          borderRadius: "var(--r-sm)",
          textDecoration: "none",
          fontWeight: 600,
          fontSize: "0.95rem",
          boxShadow: "var(--shadow-gold)",
        }}>
          Reservar Ahora <ArrowRight size={16} />
        </Link>
      </section>

      <Footer />
    </div>
  );
}
