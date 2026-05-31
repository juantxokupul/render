import Link from "next/link";
import Image from "next/image";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { DoorOpen, Wine, Flame, Headphones, Sparkles, Moon, ArrowRight, type LucideIcon } from "lucide-react";
import { getDictionary } from "@/src/i18n/dictionaries";
import type { Locale } from "@/src/i18n/config";

// Time + icon per programme entry, zipped with dict.inauguracion.programa by index.
const programaMeta: { hora: string; Icon: LucideIcon }[] = [
  { hora: "19:00", Icon: DoorOpen },
  { hora: "20:00", Icon: Wine },
  { hora: "20:30", Icon: Flame },
  { hora: "22:00", Icon: Headphones },
  { hora: "00:00", Icon: Sparkles },
  { hora: "03:00", Icon: Moon },
];

export default async function InauguracionPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const t = getDictionary(lang).inauguracion;
  const programa = t.programa.map((p, i) => ({ ...p, ...programaMeta[i] }));
  const incluye = t.incluye;
  const facts = t.facts;

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
            <Sparkles size={14} /> {t.badge}
          </span>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.75rem, 7vw, 4.5rem)",
            fontWeight: 800,
            color: "var(--text)",
            marginBottom: "1.25rem",
            lineHeight: 1.1,
          }}>
            {t.titleLine1}<br /><span style={{ color: "var(--gold)" }}>{t.titleLine2}</span>
          </h2>
          <p style={{ fontSize: "1.2rem", color: "var(--ember-soft)", fontWeight: 500, marginBottom: "1.75rem" }}>
            {t.heroDate}
          </p>
          <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", maxWidth: "620px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            {t.heroText}
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
              {t.ctaReserve} <ArrowRight size={16} />
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
              {t.ctaProgram}
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
          {facts.map((item) => (
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
            {t.includeTitle}
          </h3>
          <p style={{ color: "var(--text-muted)" }}>{t.includeSubtitle}</p>
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
              {t.programTitle}
            </h3>
            <p style={{ color: "var(--text-muted)" }}>{t.programSubtitle}</p>
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
            alt={t.storyImgAlt}
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
            {t.storyTitle}
          </h3>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            {t.storyP1}
          </p>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
            {t.storyP2}
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
            {t.storyCta} <ArrowRight size={16} />
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
          {t.finalCtaTitle}
        </h3>
        <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", marginBottom: "2.25rem", maxWidth: "540px", margin: "0 auto 2.25rem" }}>
          {t.finalCtaText}
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
          {t.finalCtaButton} <ArrowRight size={16} />
        </Link>
      </section>

      <Footer />
    </div>
  );
}
