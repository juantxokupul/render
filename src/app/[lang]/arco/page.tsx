import Link from "next/link";
import Image from "next/image";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { Leaf, AlertTriangle, ArrowRight } from "lucide-react";
import { getDictionary } from "@/src/i18n/dictionaries";
import type { Locale } from "@/src/i18n/config";

export default async function ArcoPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const t = getDictionary(lang).arco;

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ position: "relative", isolation: "isolate", overflow: "hidden" }}>
        <Image
          src="/images/arco-ramas.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 30%", zIndex: -2 }}
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
          <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.7 }}>
            {t.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Intro + facts */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 2rem 3rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <h3 style={{
            fontFamily: "var(--font-display)",
            fontSize: "2rem",
            fontWeight: 700,
            color: "var(--text)",
            marginBottom: "1.5rem",
          }}>
            {t.introTitle}
          </h3>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.25rem" }}>{t.introP1}</p>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>{t.introP2}</p>
        </div>

        <div className="grid-footer" style={{ marginTop: "3.5rem", gap: "1rem" }}>
          {t.facts.map((f) => (
            <div key={f.label} style={{
              background: "var(--bg-elevated)",
              border: "1px solid var(--border)",
              borderRadius: "var(--r-md)",
              padding: "1.75rem 1rem",
              textAlign: "center",
              boxShadow: "var(--shadow-sm)",
            }}>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.85rem",
                fontWeight: 800,
                color: "var(--gold)",
                marginBottom: "0.35rem",
              }}>
                {f.valor}
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {f.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Materiales */}
      <section style={{ background: "var(--bg-elevated)", padding: "5rem 2rem", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h3 style={{
            fontFamily: "var(--font-display)",
            fontSize: "2rem",
            fontWeight: 700,
            color: "var(--text)",
            marginBottom: "0.75rem",
          }}>
            {t.materialsTitle}
          </h3>
          <p style={{ color: "var(--text-muted)" }}>{t.materialsSubtitle}</p>
        </div>
        <div className="grid-3col" style={{ maxWidth: "1100px", margin: "0 auto", gap: "1.25rem" }}>
          {t.materials.map((m) => (
            <div key={m.nombre} className="card-lift" style={{
              background: "var(--bg-elevated-2)",
              border: "1px solid var(--border)",
              borderRadius: "var(--r-md)",
              padding: "1.75rem",
              boxShadow: "var(--shadow-sm)",
            }}>
              <div style={{
                width: "42px",
                height: "42px",
                borderRadius: "var(--r-sm)",
                background: "rgba(212, 165, 116, 0.12)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--gold)",
                marginBottom: "1rem",
              }}>
                <Leaf size={20} />
              </div>
              <h4 style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "var(--text)",
                marginBottom: "0.6rem",
              }}>
                {m.nombre}
              </h4>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "0.95rem" }}>{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pasos */}
      <section style={{ maxWidth: "820px", margin: "0 auto", padding: "5rem 2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <h3 style={{
            fontFamily: "var(--font-display)",
            fontSize: "2rem",
            fontWeight: 700,
            color: "var(--text)",
            marginBottom: "0.75rem",
          }}>
            {t.stepsTitle}
          </h3>
          <p style={{ color: "var(--text-muted)" }}>{t.stepsSubtitle}</p>
        </div>
        <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {t.steps.map((step, i) => (
            <li key={step.titulo} style={{
              display: "flex",
              gap: "1.25rem",
              alignItems: "flex-start",
              background: "var(--bg-elevated)",
              border: "1px solid var(--border)",
              borderRadius: "var(--r-md)",
              padding: "1.6rem 1.75rem",
              boxShadow: "var(--shadow-sm)",
            }}>
              <span style={{
                flexShrink: 0,
                width: "44px",
                height: "44px",
                borderRadius: "var(--r-pill)",
                background: "var(--gold)",
                color: "var(--bg)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "1.25rem",
              }}>
                {i + 1}
              </span>
              <div>
                <h4 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: "0.4rem",
                }}>
                  {step.titulo}
                </h4>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Consejos y seguridad */}
      <section style={{ background: "var(--bg-elevated)", padding: "5rem 2rem", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <h3 style={{
            fontFamily: "var(--font-display)",
            fontSize: "2rem",
            fontWeight: 700,
            color: "var(--text)",
            marginBottom: "2rem",
            textAlign: "center",
          }}>
            {t.tipsTitle}
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
            {t.tips.map((tip) => (
              <li key={tip} style={{
                display: "flex",
                gap: "0.9rem",
                alignItems: "flex-start",
                background: "var(--bg-elevated-2)",
                border: "1px solid var(--border)",
                borderLeft: "3px solid var(--ember)",
                borderRadius: "var(--r-sm)",
                padding: "1.1rem 1.4rem",
              }}>
                <AlertTriangle size={18} color="var(--ember)" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span style={{ color: "var(--text-muted)", lineHeight: 1.65 }}>{tip}</span>
              </li>
            ))}
          </ul>
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
          {t.ctaButton} <ArrowRight size={16} />
        </Link>
      </section>

      <Footer />
    </div>
  );
}
