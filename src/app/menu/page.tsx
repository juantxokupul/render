import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { Flame, Salad, UtensilsCrossed, IceCream, Wine, ArrowRight, type LucideIcon } from "lucide-react";

type Section = {
  id: string;
  titulo: string;
  Icon: LucideIcon;
  platos: { nombre: string; desc: string; precio: string }[];
};

const sections: Section[] = [
  {
    id: "carnes",
    titulo: "Carnes a la Brasa",
    Icon: Flame,
    platos: [
      { nombre: "Entrecot de Vaca", desc: "400g de carne madurada, brasa de leña", precio: "28€" },
      { nombre: "Costillas BBQ", desc: "Costillar entero con salsa de la casa", precio: "24€" },
      { nombre: "Chuletón Wagyu", desc: "600g, pieza premium importada", precio: "45€" },
      { nombre: "Asado Argentino", desc: "Cortes mixtos al estilo pampeano", precio: "32€" },
      { nombre: "Pinchos Mixtos", desc: "Brocheta de res, cerdo y pollo", precio: "18€" },
    ],
  },
  {
    id: "entrantes",
    titulo: "Entrantes",
    Icon: Salad,
    platos: [
      { nombre: "Tabla de Embutidos", desc: "Selección de ibéricos de la región", precio: "14€" },
      { nombre: "Pan de Brasa", desc: "Hogaza artesana con mantequilla de hierbas", precio: "5€" },
      { nombre: "Ensalada de Temporada", desc: "Verduras frescas del huerto propio", precio: "9€" },
      { nombre: "Croquetas de Jamón", desc: "Elaboración casera, 6 unidades", precio: "8€" },
    ],
  },
  {
    id: "guarniciones",
    titulo: "Guarniciones",
    Icon: UtensilsCrossed,
    platos: [
      { nombre: "Patatas Bravas", desc: "Con alioli y salsa brava", precio: "6€" },
      { nombre: "Verduras a la Brasa", desc: "Calabacín, pimiento y berenjena", precio: "7€" },
      { nombre: "Arroz con Setas", desc: "Setas de temporada salteadas", precio: "8€" },
      { nombre: "Patatas Fritas Caseras", desc: "Corte grueso, fritas en aceite de oliva", precio: "5€" },
    ],
  },
  {
    id: "postres",
    titulo: "Postres",
    Icon: IceCream,
    platos: [
      { nombre: "Coulant de Chocolate", desc: "Con helado de vainilla artesano", precio: "7€" },
      { nombre: "Tarta de Queso", desc: "Al horno, estilo vasco", precio: "6€" },
      { nombre: "Fruta de Temporada", desc: "Selección del día con miel", precio: "5€" },
      { nombre: "Helados Artesanos", desc: "3 bolas a elegir", precio: "5€" },
    ],
  },
  {
    id: "cocktails",
    titulo: "Cocktails & Bebidas",
    Icon: Wine,
    platos: [
      { nombre: "Mojito de la Casa", desc: "Ron blanco, lima, menta y azúcar moreno", precio: "9€" },
      { nombre: "Sangría Villa Nabo", desc: "Receta propia con frutas de temporada", precio: "8€" },
      { nombre: "Gin Tonic Premium", desc: "Ginebra artesana con botánicas seleccionadas", precio: "10€" },
      { nombre: "Refresco / Agua", desc: "Variedad de refrescos y agua mineral", precio: "3€" },
      { nombre: "Vino de la Casa", desc: "Tinto, blanco o rosado", precio: "4€/copa" },
    ],
  },
];

export default function MenuPage() {
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
          La carta
        </p>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.25rem, 5vw, 3rem)",
          fontWeight: 700,
          color: "var(--text)",
          marginBottom: "1rem",
        }}>
          Nuestra Carta
        </h2>
        <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
          Ingredientes frescos, técnicas artesanales y el sabor único del fuego. Todo preparado con cariño para ti.
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
          {sections.map(({ id, titulo, Icon }) => (
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
          ))}
        </div>
      </nav>

      {/* Menu Sections */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 2rem" }}>
        {sections.map(({ id, titulo, Icon, platos }) => (
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
        ))}
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
          ¿Listo para reservar?
        </h3>
        <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>Reserva ahora y asegura tu experiencia en Villa Nabo</p>
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
      </section>

      <Footer />
    </div>
  );
}
