'use client';

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/src/i18n/context";

export default function Navbar() {
  const pathname = usePathname();
  const { dict } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: dict.nav.inicio },
    { href: "/menu", label: dict.nav.menu },
    { href: "/fiestas", label: dict.nav.fiestas },
    { href: "/contacto", label: dict.nav.contacto },
  ];

  return (
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
          aria-label={dict.nav.ariaMenu}
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
  );
}
