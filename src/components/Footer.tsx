'use client';

import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/menu", label: "Menú" },
  { href: "/fiestas", label: "Fiestas & Eventos" },
  { href: "/contacto", label: "Contacto & Reservas" },
];

const redes = [
  { label: "Instagram", href: "https://instagram.com", icon: "📸" },
  { label: "Facebook", href: "https://facebook.com", icon: "👥" },
  { label: "TikTok", href: "https://tiktok.com", icon: "🎵" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#111", borderTop: "3px solid #d4a574", color: "#b0a090", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <div className="grid-footer" style={{ maxWidth: "1200px", margin: "0 auto", padding: "3.5rem 2rem 2rem", gap: "3rem" }}>

        {/* Brand */}
        <div>
          <h3 style={{ fontSize: "1.8rem", fontWeight: "900", background: "linear-gradient(135deg, #d4a574 0%, #e8c4a0 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "0.75rem" }}>
            Villa Nabo
          </h3>
          <p style={{ fontSize: "0.95rem", lineHeight: "1.7", maxWidth: "300px", marginBottom: "1.5rem" }}>
            Un refugio rural donde las mejores carnes a la brasa se fusionan con música, cocktails y diversión bajo el atardecer.
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            {redes.map((r) => (
              <a key={r.label} href={r.href} target="_blank" rel="noopener noreferrer" title={r.label} style={{
                fontSize: "1.4rem",
                textDecoration: "none",
                background: "#1a1a1a",
                border: "1px solid #2d1810",
                borderRadius: "8px",
                padding: "0.4rem 0.7rem",
                transition: "border-color 0.2s"
              }}>
                {r.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navegación */}
        <div>
          <p style={{ fontWeight: "700", color: "#d4a574", marginBottom: "1.25rem", fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "1px" }}>
            Páginas
          </p>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} style={{ textDecoration: "none", color: "#b0a090", fontSize: "0.95rem", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#d4a574")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#b0a090")}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto rápido */}
        <div>
          <p style={{ fontWeight: "700", color: "#d4a574", marginBottom: "1.25rem", fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "1px" }}>
            Encuéntranos
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.9rem" }}>
            <p>📍 Camino Rural de Villa Nabo, s/n<br /><span style={{ color: "#7a6a5a" }}>Arauzo de Torre, Burgos</span></p>
            <p>📞 <a href="tel:+34666666666" style={{ color: "#b0a090", textDecoration: "none" }}>+34 666 666 666</a></p>
            <p>📧 <a href="mailto:hola@villanabo.es" style={{ color: "#b0a090", textDecoration: "none" }}>hola@villanabo.es</a></p>
            <p style={{ marginTop: "0.25rem" }}>⏰ Lun–Jue 12–22h<br /><span style={{ color: "#ff6b35" }}>Vie–Sáb hasta las 3:00 🎉</span></p>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid #222", padding: "1.25rem 2rem", textAlign: "center", fontSize: "0.85rem", color: "#555" }}>
        © 2024 Villa Nabo · Carnes a la Brasa Artesanales · Todos los derechos reservados
      </div>
    </footer>
  );
}
