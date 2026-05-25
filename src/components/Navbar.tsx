'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/menu", label: "Menú" },
    { href: "/fiestas", label: "Fiestas" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <header style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2d1810 100%)", borderBottom: "3px solid #d4a574", position: "sticky", top: 0, zIndex: 100 }}>
      <nav style={{ maxWidth: "1200px", margin: "0 auto", padding: "1.5rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: "900", background: "linear-gradient(135deg, #d4a574 0%, #e8c4a0 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: 0 }}>
            Villa Nabo
          </h1>
        </Link>
        <div style={{ display: "flex", gap: "2.5rem", fontSize: "1rem" }}>
          {links.map(({ href, label }) => (
            <Link key={href} href={href} style={{
              textDecoration: "none",
              color: pathname === href ? "#fff" : "#d4a574",
              fontWeight: pathname === href ? "700" : "500",
              borderBottom: pathname === href ? "2px solid #d4a574" : "none",
              paddingBottom: "2px"
            }}>
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
