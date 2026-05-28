'use client';

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { Flame, Check, Music, Wine, Sunset, Users, Clock, ArrowRight } from "lucide-react";

const carnes = ["Costillas BBQ", "Asado Argentino", "Carne Wagyu", "Pinchos Mixtos", "Carnes de Temporada"];

const atardeceres = [
  { Icon: Music, titulo: "Música en Vivo", desc: "DJ's y bandas en vivo", img: "/images/4218028.jpg", link: "/fiestas" },
  { Icon: Wine, titulo: "Cocktails Premium", desc: "Bebidas artesanales", img: "/images/36366519.jpg", link: "/menu#cocktails" },
  { Icon: Sunset, titulo: "Atardecer Mágico", desc: "Vistas incomparables", img: "/images/36697295.jpg", link: "/fiestas" },
  { Icon: Users, titulo: "Ambiente Joven", desc: "Diversión garantizada", img: "/images/13902051.jpg", link: "/fiestas" },
];

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ position: "relative", isolation: "isolate", overflow: "hidden" }}>
        <Image
          src="/images/5374014.jpg"
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
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "9rem 2rem 7rem", textAlign: "center" }}>
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.4rem 0.9rem",
            border: "1px solid var(--border-strong)",
            borderRadius: "var(--r-pill)",
            color: "var(--gold)",
            fontSize: "0.8rem",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "2rem",
            background: "rgba(212,165,116,0.06)",
          }}>
            <Flame size={14} /> Carnes a la brasa · Arauzo de Torre
          </span>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 8vw, 5rem)",
            fontWeight: 800,
            marginBottom: "1.25rem",
            color: "var(--text)",
            letterSpacing: "-0.02em",
          }}>
            Villa Nabo
          </h2>
          <p style={{
            fontSize: "1.15rem",
            color: "var(--text)",
            maxWidth: "620px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.7,
            textShadow: "0 2px 12px rgba(0,0,0,0.6)",
          }}>
            Un refugio rural donde la tradición de la brasa se encuentra con noches de música, cocktails y atardeceres inolvidables.
          </p>
          <div className="cta-buttons">
            <Link href="/contacto" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.95rem 2rem",
              background: "var(--gold)",
              color: "var(--bg)",
              borderRadius: "var(--r-sm)",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "0.95rem",
              letterSpacing: "0.01em",
              boxShadow: "var(--shadow-gold)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}>
              Reservar Mesa <ArrowRight size={16} />
            </Link>
            <Link href="/menu" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.95rem 2rem",
              background: "transparent",
              color: "var(--text)",
              border: "1px solid var(--border-strong)",
              borderRadius: "var(--r-sm)",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "0.95rem",
              letterSpacing: "0.01em",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-strong)"; e.currentTarget.style.color = "var(--text)"; }}>
              Ver la carta
            </Link>
          </div>
        </div>
      </section>

      {/* Carnes */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "6rem 2rem 4rem" }}>
        <div className="grid-2col" style={{ gap: "4rem", alignItems: "center" }}>
          <div>
            <p style={{
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "var(--ember)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}>
              La casa
            </p>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "2.5rem",
              fontWeight: 700,
              color: "var(--text)",
              marginBottom: "1.25rem",
            }}>
              Nuestras Carnes
            </h3>
            <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "1.75rem" }}>
              En Villa Nabo preparamos las mejores carnes a la brasa con técnicas tradicionales. Cada pieza es seleccionada cuidadosamente para garantizar la máxima calidad y sabor.
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {carnes.map((item) => (
                <li key={item} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.85rem 0",
                  color: "var(--text)",
                  fontSize: "1rem",
                  borderBottom: "1px solid var(--border)",
                }}>
                  <Check size={18} color="var(--gold)" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="/images/5374014.jpg"
            alt="Carnes a la brasa"
            width={800}
            height={520}
            sizes="(max-width: 768px) 100vw, 600px"
            style={{
              borderRadius: "var(--r-md)",
              objectFit: "cover",
              width: "100%",
              height: "520px",
              boxShadow: "var(--shadow-lg)",
            }}
          />
        </div>
      </section>

      {/* Atardeceres */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 2rem" }}>
        <div className="section-inner-padded" style={{
          background: "var(--bg-elevated)",
          padding: "4.5rem 3rem",
          borderRadius: "var(--r-md)",
          boxShadow: "var(--shadow-md)",
        }}>
          <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
            <p style={{
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "var(--ember)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}>
              Después de las 19:00
            </p>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "2.5rem",
              fontWeight: 700,
              color: "var(--text)",
              marginBottom: "1rem",
            }}>
              Atardeceres Inolvidables
            </h3>
            <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
              Cuando cae el sol en Villa Nabo, la magia comienza. Música en vivo, cocktails y gente joven lista para pasarlo bien.
            </p>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
          }}>
            {atardeceres.map(({ Icon, titulo, desc, img, link }) => (
              <Link key={titulo} href={link} style={{ textDecoration: "none" }}>
                <div className="card-lift" style={{
                  background: "var(--bg-elevated-2)",
                  borderRadius: "var(--r-md)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-sm)",
                  border: "1px solid var(--border)",
                }}>
                  <div style={{ position: "relative", width: "100%", height: "180px" }}>
                    <Image src={img} alt={titulo} fill sizes="(max-width: 768px) 100vw, 250px" style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "1.25rem 1.25rem 1.5rem" }}>
                    <Icon size={20} color="var(--gold)" style={{ marginBottom: "0.6rem" }} />
                    <p style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.35rem" }}>{titulo}</p>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Horarios */}
      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <Clock size={28} color="var(--gold)" style={{ marginBottom: "1rem" }} />
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 700, color: "var(--text)" }}>
              Horarios
            </h3>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
          }}>
            {[
              { titulo: "Servicio de Día", horas: "12:00 – 18:00", accent: false },
              { titulo: "Servicio de Noche", horas: "19:00 – 02:00", accent: false },
              { titulo: "Fiestas & Eventos", horas: "Viernes a Domingo", accent: true },
            ].map((h) => (
              <div key={h.titulo} style={{
                background: "var(--bg-elevated)",
                padding: "1.75rem",
                borderRadius: "var(--r-md)",
                textAlign: "center",
                border: h.accent ? "1px solid rgba(224,120,86,0.35)" : "1px solid var(--border)",
                boxShadow: "var(--shadow-sm)",
              }}>
                <p style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: h.accent ? "var(--ember)" : "var(--gold)",
                  marginBottom: "0.5rem",
                }}>
                  {h.titulo}
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "1rem" }}>{h.horas}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 2rem", textAlign: "center", background: "var(--bg-elevated)", borderTop: "1px solid var(--border)" }}>
        <h3 style={{
          fontFamily: "var(--font-display)",
          fontSize: "2.25rem",
          fontWeight: 700,
          color: "var(--text)",
          marginBottom: "1rem",
        }}>
          ¿Listo para disfrutar?
        </h3>
        <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", marginBottom: "2.25rem", maxWidth: "560px", margin: "0 auto 2.25rem" }}>
          Reserva tu mesa o ven a celebrar nuestras noches inolvidables
        </p>
        <div className="cta-buttons">
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
            Reservar Mesa <ArrowRight size={16} />
          </Link>
          <Link href="/contacto" style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.95rem 2rem",
            background: "transparent",
            color: "var(--text)",
            border: "1px solid var(--border-strong)",
            borderRadius: "var(--r-sm)",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "0.95rem",
            letterSpacing: "0.01em",
          }}>
            Contáctanos
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
