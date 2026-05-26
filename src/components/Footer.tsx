'use client';

import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/menu", label: "Menú" },
  { href: "/fiestas", label: "Fiestas & Eventos" },
  { href: "/contacto", label: "Contacto & Reservas" },
];

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16.6 5.82a4.28 4.28 0 0 1-2.5-2.82h-2.95v11.5a2.45 2.45 0 1 1-2.45-2.45c.27 0 .53.05.77.13V9.1a5.55 5.55 0 1 0 4.7 5.5V9.46a7.2 7.2 0 0 0 4.2 1.34V7.85a4.32 4.32 0 0 1-1.77-2.03Z" />
  </svg>
);

type Red = { label: string; href: string; Icon: () => React.ReactElement };

const redes: Red[] = [
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookIcon },
  { label: "TikTok", href: "https://tiktok.com", Icon: TikTokIcon },
];

export default function Footer() {
  return (
    <footer style={{
      background: "var(--bg-elevated)",
      borderTop: "1px solid var(--border)",
      color: "var(--text-muted)",
    }}>
      <div className="grid-footer" style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 2rem 2.5rem", gap: "3.5rem" }}>

        {/* Brand */}
        <div>
          <h3 style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.6rem",
            fontWeight: 800,
            color: "var(--gold)",
            marginBottom: "0.85rem",
          }}>
            Villa Nabo
          </h3>
          <p style={{ fontSize: "0.92rem", lineHeight: 1.7, maxWidth: "320px", marginBottom: "1.5rem" }}>
            Un refugio rural donde las mejores carnes a la brasa se fusionan con música, cocktails y diversión bajo el atardecer.
          </p>
          <div style={{ display: "flex", gap: "0.6rem" }}>
            {redes.map((r) => (
              <a
                key={r.label}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={r.label}
                title={r.label}
                style={{
                  width: "40px",
                  height: "40px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "var(--bg-elevated-2)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--r-sm)",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  transition: "color 0.2s, border-color 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--gold)";
                  e.currentTarget.style.borderColor = "var(--gold)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <r.Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Navegación */}
        <div>
          <p style={{
            fontWeight: 600,
            color: "var(--text)",
            marginBottom: "1.25rem",
            fontSize: "0.78rem",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
          }}>
            Páginas
          </p>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  style={{ textDecoration: "none", color: "var(--text-muted)", fontSize: "0.92rem", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto rápido */}
        <div>
          <p style={{
            fontWeight: 600,
            color: "var(--text)",
            marginBottom: "1.25rem",
            fontSize: "0.78rem",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
          }}>
            Encuéntranos
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem", fontSize: "0.9rem" }}>
            <p style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
              <MapPin size={16} color="var(--gold)" style={{ flexShrink: 0, marginTop: "2px" }} />
              <span>Camino Rural de Villa Nabo, s/n<br /><span style={{ color: "var(--text-dim)" }}>Arauzo de Torre, Burgos</span></span>
            </p>
            <p style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
              <Phone size={16} color="var(--gold)" style={{ flexShrink: 0 }} />
              <a href="tel:+34666666666" style={{ color: "var(--text-muted)", textDecoration: "none" }}>+34 666 666 666</a>
            </p>
            <p style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
              <Mail size={16} color="var(--gold)" style={{ flexShrink: 0 }} />
              <a href="mailto:hola@villanabo.es" style={{ color: "var(--text-muted)", textDecoration: "none" }}>hola@villanabo.es</a>
            </p>
            <p style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
              <Clock size={16} color="var(--gold)" style={{ flexShrink: 0, marginTop: "2px" }} />
              <span>Lun–Jue 12–22h<br /><span style={{ color: "var(--ember)" }}>Vie–Sáb hasta las 3:00</span></span>
            </p>
          </div>
        </div>
      </div>

      <div style={{
        borderTop: "1px solid var(--border)",
        padding: "1.5rem 2rem",
        textAlign: "center",
        fontSize: "0.82rem",
        color: "var(--text-dim)",
      }}>
        © 2026 Villa Nabo · Carnes a la Brasa Artesanales
      </div>
    </footer>
  );
}
