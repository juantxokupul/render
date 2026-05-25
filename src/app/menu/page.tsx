import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

const sections = [
  {
    titulo: "🔥 Carnes a la Brasa",
    color: "#d4a574",
    platos: [
      { nombre: "Entrecot de Vaca", desc: "400g de carne madurada, brasa de leña", precio: "28€" },
      { nombre: "Costillas BBQ", desc: "Costillar entero con salsa de la casa", precio: "24€" },
      { nombre: "Chuletón Wagyu", desc: "600g, pieza premium importada", precio: "45€" },
      { nombre: "Asado Argentino", desc: "Cortes mixtos al estilo pampeano", precio: "32€" },
      { nombre: "Pinchos Mixtos", desc: "Brocheta de res, cerdo y pollo", precio: "18€" },
    ],
  },
  {
    titulo: "🥗 Entrantes",
    color: "#a3d977",
    platos: [
      { nombre: "Tabla de Embutidos", desc: "Selección de ibéricos de la región", precio: "14€" },
      { nombre: "Pan de Brasa", desc: "Hogaza artesana con mantequilla de hierbas", precio: "5€" },
      { nombre: "Ensalada de Temporada", desc: "Verduras frescas del huerto propio", precio: "9€" },
      { nombre: "Croquetas de Jamón", desc: "Elaboración casera, 6 unidades", precio: "8€" },
    ],
  },
  {
    titulo: "🍟 Guarniciones",
    color: "#f5c842",
    platos: [
      { nombre: "Patatas Bravas", desc: "Con alioli y salsa brava", precio: "6€" },
      { nombre: "Verduras a la Brasa", desc: "Calabacín, pimiento y berenjena", precio: "7€" },
      { nombre: "Arroz con Setas", desc: "Setas de temporada salteadas", precio: "8€" },
      { nombre: "Patatas Fritas Caseras", desc: "Corte grueso, fritas en aceite de oliva", precio: "5€" },
    ],
  },
  {
    titulo: "🍮 Postres",
    color: "#ff8fa3",
    platos: [
      { nombre: "Coulant de Chocolate", desc: "Con helado de vainilla artesano", precio: "7€" },
      { nombre: "Tarta de Queso", desc: "Al horno, estilo vasco", precio: "6€" },
      { nombre: "Fruta de Temporada", desc: "Selección del día con miel", precio: "5€" },
      { nombre: "Helados Artesanos", desc: "3 bolas a elegir", precio: "5€" },
    ],
  },
  {
    titulo: "🍹 Cocktails & Bebidas",
    color: "#ff6b35",
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
    <div style={{ minHeight: "100vh", background: "#0f0f0f", color: "#fff", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #2d1810 0%, #1a1a1a 100%)", padding: "5rem 2rem", textAlign: "center", borderBottom: "3px solid #d4a574" }}>
        <h2 style={{ fontSize: "3rem", fontWeight: "900", color: "#d4a574", marginBottom: "1rem" }}>Nuestra Carta</h2>
        <p style={{ fontSize: "1.1rem", color: "#b0a090", maxWidth: "600px", margin: "0 auto" }}>
          Ingredientes frescos, técnicas artesanales y el sabor único del fuego. Todo preparado con cariño para ti.
        </p>
      </section>

      {/* Menu Sections */}
      <section style={{ maxWidth: "1000px", margin: "0 auto", padding: "4rem 2rem" }}>
        {sections.map((section) => (
          <div key={section.titulo} id={section.titulo.includes("Cocktails") ? "cocktails" : undefined} style={{ marginBottom: "4rem" }}>
            <h3 style={{ fontSize: "1.8rem", fontWeight: "800", color: section.color, marginBottom: "1.5rem", borderBottom: `2px solid ${section.color}`, paddingBottom: "0.75rem" }}>
              {section.titulo}
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {section.platos.map((plato, i) => (
                <div key={plato.nombre} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1.25rem 0",
                  borderBottom: "1px solid #222",
                  background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)"
                }}>
                  <div>
                    <p style={{ fontWeight: "700", color: "#f0e6d3", fontSize: "1.05rem", marginBottom: "0.25rem" }}>{plato.nombre}</p>
                    <p style={{ color: "#7a6a5a", fontSize: "0.9rem" }}>{plato.desc}</p>
                  </div>
                  <span style={{
                    fontSize: "1.1rem",
                    fontWeight: "800",
                    color: section.color,
                    background: `${section.color}18`,
                    padding: "0.35rem 0.9rem",
                    borderRadius: "20px",
                    whiteSpace: "nowrap",
                    marginLeft: "1rem"
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
      <section style={{ background: "linear-gradient(135deg, #2d1810 0%, #3d1a0a 100%)", padding: "4rem 2rem", textAlign: "center" }}>
        <h3 style={{ fontSize: "1.8rem", fontWeight: "800", color: "#d4a574", marginBottom: "0.75rem" }}>¿Listo para pedir tu mesa?</h3>
        <p style={{ color: "#b0a090", marginBottom: "2rem" }}>Reserva ahora y asegura tu experiencia en Villa Nabo</p>
        <Link href="/contacto" style={{
          display: "inline-block",
          padding: "1rem 2.5rem",
          background: "linear-gradient(135deg, #d4a574 0%, #ff6b35 100%)",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "700",
          fontSize: "1rem"
        }}>
          Reservar Mesa
        </Link>
      </section>

      <Footer />
    </div>
  );
}
