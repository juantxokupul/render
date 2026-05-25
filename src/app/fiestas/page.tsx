import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

const eventos = [
  {
    dia: "Viernes",
    nombre: "Sunset Sessions",
    desc: "Música electrónica suave mientras el sol se pone. Cocktails de bienvenida y pinchos.",
    hora: "19:00 - 02:00",
    img: "https://images.pexels.com/photos/4218028/pexels-photo-4218028.jpeg?auto=compress&cs=tinysrgb&w=600",
    tipo: "Electrónica & Chill",
    color: "#ff6b35",
  },
  {
    dia: "Sábado",
    nombre: "Fuego & Ritmo",
    hora: "20:00 - 03:00",
    desc: "La gran noche de Villa Nabo. DJ en vivo, barra libre de cocktails y la mejor carne a la brasa.",
    img: "https://images.pexels.com/photos/36697295/pexels-photo-36697295.jpeg?auto=compress&cs=tinysrgb&w=600",
    tipo: "DJ + Open Bar",
    color: "#a855f7",
  },
  {
    dia: "Domingo",
    nombre: "Brunch & Brasa",
    hora: "12:00 - 18:00",
    desc: "Brunch especial con cortes selectos, música en vivo acústica y el mejor ambiente para despedir el fin de semana.",
    img: "https://images.pexels.com/photos/5374014/pexels-photo-5374014.jpeg?auto=compress&cs=tinysrgb&w=600",
    tipo: "Música Acústica",
    color: "#d4a574",
  },
];

const galeria = [
  "https://images.pexels.com/photos/4218028/pexels-photo-4218028.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/36366519/pexels-photo-36366519.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/36697295/pexels-photo-36697295.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/13902051/pexels-photo-13902051.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/5374014/pexels-photo-5374014.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/29093620/pexels-photo-29093620.jpeg?auto=compress&cs=tinysrgb&w=400",
];

export default function FiestasPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0f0f0f", color: "#fff", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        background: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.pexels.com/photos/13902051/pexels-photo-13902051.jpeg?auto=compress&cs=tinysrgb&w=1200')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "7rem 2rem",
        textAlign: "center",
        borderBottom: "3px solid #ff6b35"
      }}>
        <h2 style={{ fontSize: "3.5rem", fontWeight: "900", color: "#fff", marginBottom: "1rem" }}>Fiestas & Eventos</h2>
        <p style={{ fontSize: "1.2rem", color: "#f5a96f", maxWidth: "650px", margin: "0 auto", lineHeight: "1.7" }}>
          Cada semana el atardecer transforma Villa Nabo en un espacio único de música, cocktails y diversión.
        </p>
      </section>

      {/* Programación semanal */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem" }}>
        <h3 style={{ fontSize: "2rem", fontWeight: "800", color: "#ff6b35", marginBottom: "3rem", textAlign: "center" }}>
          Programación Semanal
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {eventos.map((evento) => (
            <div key={evento.dia} className="grid-2col" style={{
              gap: "3rem",
              alignItems: "center",
              background: "rgba(30, 20, 10, 0.6)",
              border: `2px solid ${evento.color}`,
              borderRadius: "15px",
              overflow: "hidden"
            }}>
              <img src={evento.img} alt={evento.nombre} style={{ width: "100%", height: "280px", objectFit: "cover" }} />
              <div style={{ padding: "2.5rem" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: "700", color: evento.color, background: `${evento.color}20`, padding: "0.3rem 0.8rem", borderRadius: "20px" }}>
                  {evento.dia} · {evento.tipo}
                </span>
                <h4 style={{ fontSize: "1.8rem", fontWeight: "800", color: "#fff", margin: "1rem 0 0.5rem" }}>{evento.nombre}</h4>
                <p style={{ color: "#b0a090", lineHeight: "1.7", marginBottom: "1rem" }}>{evento.desc}</p>
                <p style={{ color: evento.color, fontWeight: "700", fontSize: "1rem" }}>⏰ {evento.hora}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Galería */}
      <section style={{ background: "#1a1a1a", padding: "5rem 2rem" }}>
        <h3 style={{ fontSize: "2rem", fontWeight: "800", color: "#d4a574", marginBottom: "2.5rem", textAlign: "center" }}>
          Galería de Momentos
        </h3>
        <div className="grid-3col" style={{ maxWidth: "1200px", margin: "0 auto", gap: "1rem" }}>
          {galeria.map((src, i) => (
            <img key={i} src={src} alt={`Momento ${i + 1}`} style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: "10px", border: "2px solid #2d1810" }} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #ff6b35 0%, #d4a574 100%)", padding: "4rem 2rem", textAlign: "center" }}>
        <h3 style={{ fontSize: "2rem", fontWeight: "800", color: "#fff", marginBottom: "1rem" }}>¿Vienes esta semana?</h3>
        <p style={{ color: "#f5e6d3", marginBottom: "2rem", fontSize: "1.05rem" }}>Reserva tu mesa o consigue tu entrada para los eventos especiales</p>
        <Link href="/contacto" style={{
          display: "inline-block",
          padding: "1rem 2.5rem",
          fontSize: "1rem",
          fontWeight: "700",
          background: "#fff",
          color: "#ff6b35",
          border: "none",
          borderRadius: "8px",
          textDecoration: "none"
        }}>
          Reservar Ahora
        </Link>
      </section>

      <Footer />
    </div>
  );
}
