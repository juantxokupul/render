import Link from "next/link";
import Image from "next/image";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { Clock, ArrowRight } from "lucide-react";
import { getDictionary } from "@/src/i18n/dictionaries";
import type { Locale } from "@/src/i18n/config";

// Time + image per event, zipped with dict.fiestas.eventos by index.
const eventosMeta = [
  { hora: "19:00 – 02:00", img: "/images/4218028.jpg" },
  { hora: "20:00 – 03:00", img: "/images/36697295.jpg" },
  { hora: "12:00 – 18:00", img: "/images/5374014.jpg" },
];

const galeria = [
  "/images/4218028.jpg",
  "/images/36366519.jpg",
  "/images/36697295.jpg",
  "/images/13902051.jpg",
  "/images/5374014.jpg",
  "/images/29093620.jpg",
];

export default async function FiestasPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const t = getDictionary(lang).fiestas;
  const eventos = t.eventos.map((e, i) => ({ ...e, ...eventosMeta[i] }));

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ position: "relative", isolation: "isolate", overflow: "hidden" }}>
        <Image
          src="/images/13902051.jpg"
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
            {t.heroKicker}
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
            fontWeight: 700,
            color: "var(--text)",
            marginBottom: "1.25rem",
          }}>
            {t.heroTitle}
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "620px", margin: "0 auto", lineHeight: 1.7 }}>
            {t.heroSubtitle}
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
            {t.scheduleTitle}
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
            {t.galleryTitle}
          </h3>
        </div>
        <div className="grid-3col" style={{ maxWidth: "1100px", margin: "0 auto", gap: "1rem" }}>
          {galeria.map((src, i) => (
            <div key={i} style={{ position: "relative", width: "100%", height: "240px", borderRadius: "var(--r-md)", overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
              <Image src={src} alt={`${t.galleryAlt} ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 350px" style={{ objectFit: "cover" }} />
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
          {t.ctaTitle}
        </h3>
        <p style={{ color: "var(--text-muted)", marginBottom: "2.25rem", fontSize: "1.05rem" }}>
          {t.ctaText}
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
          {t.ctaReserve} <ArrowRight size={16} />
        </Link>
      </section>

      <Footer />
    </div>
  );
}
