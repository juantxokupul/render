import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { Flame, Salad, UtensilsCrossed, IceCream, Wine, ArrowRight, type LucideIcon } from "lucide-react";
import { getDictionary } from "@/src/i18n/dictionaries";
import type { Locale } from "@/src/i18n/config";

// Icons pair with each menu section by its stable id.
const sectionIcons: Record<string, LucideIcon> = {
  carnes: Flame,
  entrantes: Salad,
  guarniciones: UtensilsCrossed,
  postres: IceCream,
  cocktails: Wine,
};

export default async function MenuPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const t = getDictionary(lang).menu;
  const sections = t.sections;

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
          {t.heroKicker}
        </p>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.25rem, 5vw, 3rem)",
          fontWeight: 700,
          color: "var(--text)",
          marginBottom: "1rem",
        }}>
          {t.heroTitle}
        </h2>
        <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
          {t.heroSubtitle}
        </p>
      </section>

      {/* Anchor nav */}
      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(10, 10, 10, 0.85)",
        backdropFilter: "saturate(140%) blur(12px)",
        WebkitBackdropFilter: "saturate(140%) blur(12px)",
        borderBottom: "1px solid var(--border)",
        padding: "0.85rem 1rem",
      }}>
        <div style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          gap: "0.5rem",
          overflowX: "auto",
          justifyContent: "center",
          flexWrap: "wrap",
        }}>
          {sections.map(({ id, titulo }) => {
            const Icon = sectionIcons[id];
            return (
            <a key={id} href={`#${id}`} style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.45rem 0.95rem",
              border: "1px solid var(--border-strong)",
              borderRadius: "var(--r-pill)",
              color: "var(--text-muted)",
              fontSize: "0.85rem",
              fontWeight: 500,
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "color 0.2s, border-color 0.2s",
            }}>
              <Icon size={14} />
              {titulo}
            </a>
            );
          })}
        </div>
      </nav>

      {/* Menu Sections */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 2rem" }}>
        {sections.map(({ id, titulo, platos }) => {
          const Icon = sectionIcons[id];
          return (
          <div key={id} id={id} style={{ marginBottom: "4.5rem", scrollMarginTop: "5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "1px solid var(--border)" }}>
              <Icon size={24} color="var(--gold)" />
              <h3 style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.75rem",
                fontWeight: 700,
                color: "var(--text)",
              }}>
                {titulo}
              </h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {platos.map((plato) => (
                <div key={plato.nombre} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1.25rem 0",
                  borderBottom: "1px solid var(--border)",
                  gap: "1rem",
                }}>
                  <div>
                    <p style={{ fontWeight: 600, color: "var(--text)", fontSize: "1.05rem", marginBottom: "0.25rem" }}>{plato.nombre}</p>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.92rem" }}>{plato.desc}</p>
                  </div>
                  <span style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--gold)",
                    whiteSpace: "nowrap",
                    fontFamily: "var(--font-display)",
                  }}>
                    {plato.precio}
                  </span>
                </div>
              ))}
            </div>
          </div>
          );
        })}
      </section>

      {/* CTA */}
      <section style={{ background: "var(--bg-elevated)", padding: "5rem 2rem", textAlign: "center", borderTop: "1px solid var(--border)" }}>
        <h3 style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.75rem",
          fontWeight: 700,
          color: "var(--text)",
          marginBottom: "0.75rem",
        }}>
          {t.ctaTitle}
        </h3>
        <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>{t.ctaText}</p>
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
