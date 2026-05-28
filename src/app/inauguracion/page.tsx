import Link from "next/link";
import Image from "next/image";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { DoorOpen, Wine, Flame, Headphones, Sparkles, Moon, ArrowRight, type LucideIcon } from "lucide-react";

type ProgramaItem = { hora: string; titulo: string; desc: string; Icon: LucideIcon };

const programa: ProgramaItem[] = [
  { hora: "19:00", titulo: "Apertura de puertas", desc: "Bienvenida con cocktail de inauguración para todos los asistentes", Icon: DoorOpen },
  { hora: "20:00", titulo: "Brindis Inaugural", desc: "Palabras de bienvenida y brindis oficial con cava de la casa", Icon: Wine },
  { hora: "20:30", titulo: "Servicio de Carnes", desc: "Apertura de la parrilla con los mejores cortes de la carta", Icon: Flame },
  { hora: "22:00", titulo: "DJ en Vivo", desc: "Música electrónica y sesión especial para la inauguración", Icon: Headphones },
  { hora: "00:00", titulo: "Fuegos & Sorpresas", desc: "Espectáculo especial de medianoche con sorpresas para los asistentes", Icon: Sparkles },
  { hora: "03:00", titulo: "Cierre", desc: "Fin de la fiesta inaugural. ¡Hasta la próxima!", Icon: Moon },
];

const incluye = [
  "Cocktail de bienvenida incluido",
  "Descuento especial en carta (20%)",
  "DJ en vivo toda la noche",
  "Espectáculo sorpresa a medianoche",
  "Regalo de inauguración para los primeros 50 asistentes",
  "Fotógrafo profesional en el evento",
];

export default function InauguracionPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ position: "relative", isolation: "isolate", overflow: "hidden" }}>
        <Image
          src="/images/36697295.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", zIndex: -2 }}
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.7) 60%, rgba(10,10,10,0.95) 100%)",
          zIndex: -1,
        }} />
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "8rem 2rem 6rem", textAlign: "center" }}>
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.4rem 0.95rem",
            background: "rgba(224,120,86,0.12)",
            border: "1px solid rgba(224,120,86,0.4)",
            color: "var(--ember-soft)",
            fontWeight: 600,
            fontSize: "0.78rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            borderRadius: "var(--r-pill)",
            marginBottom: "2rem",
          }}>
            <Sparkles size={14} /> Evento Especial · Entrada Libre
          </span>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.75rem, 7vw, 4.5rem)",
            fontWeight: 800,
            color: "var(--text)",
            marginBottom: "1.25rem",
            lineHeight: 1.1,
          }}>
            Gran Fiesta de<br /><span style={{ color: "var(--gold)" }}>Inauguración</span>
          </h2>
          <p style={{ fontSize: "1.2rem", color: "var(--ember-soft)", fontWeight: 500, marginBottom: "1.75rem" }}>
            Sábado 6 de Junio · Villa Nabo abre sus puertas
          </p>
          <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", maxWidth: "620px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            Una noche única para celebrar el nacimiento de Villa Nabo. Únete a nosotros en una velada llena de carnes a la brasa, música, cocktails y mucha diversión bajo el cielo de Arauzo de Torre
          </p>
          <div className="cta-buttons">
            <Link href="/contacto" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "1rem 2.25rem",
              background: "var(--gold)",
              color: "var(--bg)",
              borderRadius: "var(--r-sm)",
              fontWeight: 600,
              fontSize: "1rem",
              textDecoration: "none",
              boxShadow: "var(--shadow-gold)",
            }}>
              Reservar mi plaza <ArrowRight size={16} />
            </Link>
            <a href="#programa" style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "1rem 2.25rem",
              background: "transparent",
              color: "var(--text)",
              border: "1px solid var(--border-strong)",
              borderRadius: "var(--r-sm)",
              fontWeight: 600,
              fontSize: "1rem",
              textDecoration: "none",
            }}>
              Ver programa
            </a>
          </div>
        </div>
      </section>

      {/* Fecha destacada */}
      <section style={{
        background: "var(--bg-elevated)",
        padding: "2.75rem 2rem",
        borderBottom: "1px solid var(--border)",
        borderTop: "1px solid var(--border)",
      }}>
        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "2rem",
          textAlign: "center",
        }}>
          {[
            { valor: "6 JUN", label: "Fecha del Evento" },
            { valor: "19:00h", label: "Apertura de Puertas" },
            { valor: "LIBRE", label: "Entrada" },
            { valor: "03:00h", label: "Hasta las" },
          ].map((item) => (
            <div key={item.label}>
              <p style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                fontWeight: 700,
                color: "var(--gold)",
                marginBottom: "0.25rem",
              }}>
                {item.valor}
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.15em" }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Qué incluye */}
      <section style={{ maxWidth: "1000px", margin: "0 auto", padding: "5rem 2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h3 style={{
            fontFamily: "var(--font-display)",
            fontSize: "2rem",
            fontWeight: 700,
            color: "var(--text)",
            marginBottom: "0.5rem",
          }}>
            ¿Qué incluye la noche?
          </h3>
          <p style={{ color: "var(--text-muted)" }}>Todo lo que te espera en la gran apertura de Villa Nabo</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
          {incluye.map((texto) => (
            <div key={texto} style={{
              display: "flex",
              alignItems: "center",
              gap: "0.85rem",
              padding: "1.25rem 1.5rem",
              background: "var(--bg-elevated)",
              borderRadius: "var(--r-md)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-sm)",
            }}>
              <div style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "var(--gold)",
                flexShrink: 0,
              }} />
              <p style={{ color: "var(--text)", fontWeight: 500, fontSize: "0.98rem" }}>{texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programa */}
      <section id="programa" style={{ background: "var(--bg-elevated)", padding: "5rem 2rem", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "2rem",
              fontWeight: 700,
              color: "var(--text)",
              marginBottom: "0.5rem",
            }}>
              Programa de la Noche
            </h3>
            <p style={{ color: "var(--text-muted)" }}>Sábado 6 de Junio · Arauzo de Torre, Burgos</p>
          </div>

          <div style={{ position: "relative" }}>
            <div style={{
              position: "absolute",
              left: "76px",
              top: "20px",
              bottom: "20px",
              width: "1px",
              background: "var(--border-strong)",
            }} />

            <div style={{ display: "flex", flexDirection: "column" }}>
              {programa.map((item, i) => (
                <div key={item.hora} style={{ display: "flex", gap: "1.75rem", alignItems: "flex-start", padding: "1.5rem 0" }}>
                  <div style={{ minWidth: "60px", textAlign: "right", flexShrink: 0, paddingTop: "8px" }}>
                    <span style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "var(--gold)",
                    }}>
                      {item.hora}
                    </span>
                  </div>
                  <div style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: i === 0 ? "var(--gold)" : "var(--bg)",
                    border: `1px solid ${i === 0 ? "var(--gold)" : "var(--border-strong)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    zIndex: 1,
                  }}>
                    <item.Icon size={16} color={i === 0 ? "var(--bg)" : "var(--gold)"} />
                  </div>
                  <div style={{ paddingTop: "6px" }}>
                    <p style={{ fontWeight: 600, color: "var(--text)", fontSize: "1.05rem", marginBottom: "0.35rem" }}>{item.titulo}</p>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Imagen + texto */}
      <section className="grid-2col" style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 2rem", gap: "4rem", alignItems: "center" }}>
        <div style={{ position: "relative", width: "100%", height: "420px", borderRadius: "var(--r-md)", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
          <Image
            src="/images/4218028.jpg"
            alt="Fiesta de inauguración"
            fill
            sizes="(max-width: 768px) 100vw, 550px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <h3 style={{
            fontFamily: "var(--font-display)",
            fontSize: "2rem",
            fontWeight: 700,
            color: "var(--text)",
            marginBottom: "1.25rem",
          }}>
            Una noche que no olvidarás
          </h3>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Villa Nabo nace con la vocación de ser el punto de encuentro de la comarca: un lugar donde el fuego de la brasa, la buena música y la compañía se fusionan en una experiencia única.
          </p>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
            La noche del 6 de Junio abrimos nuestras puertas por primera vez y queremos celebrarlo a lo grande contigo. Entrada libre, pero las plazas son limitadas.
          </p>
          <Link href="/contacto" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.9rem 2rem",
            background: "var(--gold)",
            color: "var(--bg)",
            borderRadius: "var(--r-sm)",
            fontWeight: 600,
            textDecoration: "none",
            boxShadow: "var(--shadow-gold)",
          }}>
            Reservar mi plaza gratis <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA final */}
      <section style={{
        background: "var(--bg-elevated)",
        padding: "5rem 2rem",
        textAlign: "center",
        borderTop: "1px solid var(--border)",
      }}>
        <h3 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 5vw, 2.5rem)",
          fontWeight: 700,
          color: "var(--text)",
          marginBottom: "1rem",
        }}>
          ¿Nos vemos el 6 de Junio?
        </h3>
        <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", marginBottom: "2.25rem", maxWidth: "540px", margin: "0 auto 2.25rem" }}>
          Reserva tu plaza ahora — la entrada es libre pero el aforo es limitado.
        </p>
        <Link href="/contacto" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "1rem 2.5rem",
          background: "var(--gold)",
          color: "var(--bg)",
          borderRadius: "var(--r-sm)",
          fontWeight: 700,
          fontSize: "1rem",
          textDecoration: "none",
          boxShadow: "var(--shadow-gold)",
        }}>
          ¡Reservar plaza ahora! <ArrowRight size={16} />
        </Link>
      </section>

      <Footer />
    </div>
  );
}
