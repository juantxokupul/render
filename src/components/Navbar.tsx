'use client';

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/menu", label: "Menú" },
    { href: "/fiestas", label: "Fiestas" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <>
      <header style={{
        background: "rgba(10, 10, 10, 0.85)",
        backdropFilter: "saturate(140%) blur(12px)",
        WebkitBackdropFilter: "saturate(140%) blur(12px)",
        borderBottom: "1px solid var(--border)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <nav style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "1.1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        }}>
          <Link href="/" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.7rem",
              fontWeight: 800,
              color: "var(--gold)",
              margin: 0,
              whiteSpace: "nowrap",
              letterSpacing: "-0.01em",
            }}>
              Villa Nabo
            </h1>
          </Link>

          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    textDecoration: "none",
                    color: active ? "var(--text)" : "var(--text-muted)",
                    fontWeight: active ? 600 : 500,
                    position: "relative",
                    paddingBottom: "4px",
                    transition: "color 0.2s ease",
                  }}
                >
                  {label}
                  {active && (
                    <span style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 0,
                      height: "2px",
                      background: "var(--gold)",
                      borderRadius: "var(--r-pill)",
                    }} />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>
      </header>

      {pathname !== "/inauguracion" && (
        <Link href="/inauguracion" style={{ textDecoration: "none", display: "block" }}>
          <div style={{
            background: "linear-gradient(90deg, var(--gold) 0%, var(--ember) 100%)",
            padding: "0.85rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.1rem",
            flexWrap: "wrap",
            boxShadow: "var(--shadow-ember)",
            cursor: "pointer",
          }}>
            <Sparkles size={18} color="#0a0a0a" className="pulse-soft" strokeWidth={2.5} />
            <p style={{
              margin: 0,
              fontWeight: 700,
              fontSize: "0.95rem",
              color: "#0a0a0a",
              letterSpacing: "0.03em",
              textAlign: "center",
            }}>
              GRAN FIESTA DE INAUGURACIÓN · <span style={{ fontWeight: 800 }}>Sábado 6 de Junio</span>
            </p>
            <span style={{
              background: "#0a0a0a",
              color: "var(--gold)",
              padding: "0.4rem 1rem",
              borderRadius: "var(--r-pill)",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              whiteSpace: "nowrap",
            }}>
              Más info <ArrowRight size={14} />
            </span>
          </div>
        </Link>
      )}
    </>
  );
}
