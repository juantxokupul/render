'use client';

import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#0f0f0f", color: "#fff", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{
        background: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22><rect fill=%22%23d4a574%22 opacity=%220.1%22 width=%221200%22 height=%22600%22/></svg>')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "8rem 2rem",
        textAlign: "center",
        borderBottom: "3px solid #d4a574"
      }}>
        <h2 style={{ fontSize: "4rem", fontWeight: "900", marginBottom: "1rem", letterSpacing: "-2px", color: "#f5e6d3" }}>
          Villa Nabo
        </h2>
        <p style={{ fontSize: "1.5rem", color: "#d4a574", marginBottom: "1.5rem", fontWeight: "500" }}>
          🔥 Carnes a la Brasa Artesanales 🔥
        </p>
        <p style={{ fontSize: "1.1rem", color: "#c9a876", maxWidth: "700px", margin: "0 auto 2.5rem", lineHeight: "1.6" }}>
          Un refugio rural donde la tradición se encuentra con la pasión. Disfruta de nuestras mejores carnes a la brasa en un ambiente acogedor y auténtico.
        </p>
      </section>

      {/* Main Content */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center", marginBottom: "6rem" }}>
          <div>
            <h3 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#d4a574", marginBottom: "1.5rem" }}>
              Nuestras Carnes
            </h3>
            <p style={{ fontSize: "1.1rem", color: "#b0a090", lineHeight: "1.8", marginBottom: "1.5rem" }}>
              En Villa Nabo preparamos las mejores carnes a la brasa con técnicas tradicionales. Cada pieza es seleccionada cuidadosamente para garantizar la máxima calidad y sabor.
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {["Costillas BBQ", "Asado Argentino", "Carne Wagyu", "Pinchos Mixtos", "Carnes de Temporada"].map((item) => (
                <li key={item} style={{ padding: "0.75rem 0", color: "#c9a876", fontSize: "1rem", borderBottom: "1px solid #333", fontWeight: "500" }}>
                  ✓ {item}
                </li>
              ))}
            </ul>
          </div>
          <img src="https://images.pexels.com/photos/5374014/pexels-photo-5374014.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Carnes a la brasa" style={{ borderRadius: "15px", border: "3px solid #d4a574", objectFit: "cover", width: "100%", height: "400px" }} />
        </div>

        {/* Fiestas Section */}
        <div style={{
          background: "linear-gradient(135deg, #3d1a0a 0%, #2d1810 100%)",
          padding: "4rem",
          borderRadius: "15px",
          border: "2px solid #ff6b35",
          marginTop: "4rem"
        }}>
          <h3 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#ff6b35", marginBottom: "1.5rem", textAlign: "center" }}>
            🎉 Atardeceres Inolvidables 🎉
          </h3>
          <p style={{ fontSize: "1.1rem", color: "#f5a96f", lineHeight: "1.8", textAlign: "center", marginBottom: "2rem" }}>
            Cuando cae el sol en Villa Nabo, la magia comienza. Nuestros atardeceres se transforman en fiestas vibrantes llenas de energía, música en vivo, deliciosos cocktails y gente joven lista para pasarlo bien.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", marginTop: "2rem" }}>
            {[
              { icon: "🎵", titulo: "Música en Vivo", desc: "DJ's y bandas en vivo", img: "https://images.pexels.com/photos/4218028/pexels-photo-4218028.jpeg?auto=compress&cs=tinysrgb&w=400", link: "/fiestas" },
              { icon: "🍹", titulo: "Cocktails Premium", desc: "Bebidas artesanales", img: "https://images.pexels.com/photos/36366519/pexels-photo-36366519.jpeg?auto=compress&cs=tinysrgb&w=400", link: "/menu#cocktails" },
              { icon: "🌅", titulo: "Atardecer Mágico", desc: "Vistas incomparables", img: "https://images.pexels.com/photos/36697295/pexels-photo-36697295.jpeg?auto=compress&cs=tinysrgb&w=400", link: "/fiestas" },
              { icon: "👥", titulo: "Ambiente Jóven", desc: "Diversión garantizada", img: "https://images.pexels.com/photos/13902051/pexels-photo-13902051.jpeg?auto=compress&cs=tinysrgb&w=400", link: "/fiestas" }
            ].map((item) => (
              <Link key={item.titulo} href={item.link} style={{ textDecoration: "none" }}>
              <div style={{
                padding: "1.5rem",
                background: "rgba(255, 107, 53, 0.1)",
                borderRadius: "10px",
                border: "1px solid #ff6b35",
                textAlign: "center",
                transition: "all 0.3s ease",
                cursor: "pointer"
              }} onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"} onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
                <img src={item.img} alt={item.titulo} style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "8px", marginBottom: "1rem" }} />
                <p style={{ fontSize: "1.1rem", fontWeight: "700", color: "#ff6b35", marginBottom: "0.5rem" }}>{item.titulo}</p>
                <p style={{ color: "#f5a96f", fontSize: "0.9rem" }}>{item.desc}</p>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Horarios */}
      <section style={{ background: "#1a1a1a", padding: "4rem 2rem", marginTop: "4rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h3 style={{ fontSize: "2rem", fontWeight: "800", color: "#d4a574", marginBottom: "2rem" }}>
            Horarios
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
            <div>
              <p style={{ fontSize: "1.2rem", fontWeight: "700", color: "#d4a574", marginBottom: "0.5rem" }}>Servicio de Día</p>
              <p style={{ color: "#b0a090" }}>12:00 - 18:00</p>
            </div>
            <div>
              <p style={{ fontSize: "1.2rem", fontWeight: "700", color: "#d4a574", marginBottom: "0.5rem" }}>Servicio de Noche</p>
              <p style={{ color: "#b0a090" }}>19:00 - 02:00</p>
            </div>
            <div>
              <p style={{ fontSize: "1.2rem", fontWeight: "700", color: "#ff6b35", marginBottom: "0.5rem" }}>Fiestas & Eventos</p>
              <p style={{ color: "#f5a96f" }}>Viernes a Domingo</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: "linear-gradient(135deg, #d4a574 0%, #ff6b35 100%)",
        padding: "4rem 2rem",
        textAlign: "center"
      }}>
        <h3 style={{ fontSize: "2.2rem", fontWeight: "800", color: "#fff", marginBottom: "1rem" }}>
          ¿Listo para disfrutar?
        </h3>
        <p style={{ fontSize: "1.1rem", color: "#f5e6d3", marginBottom: "2rem", maxWidth: "600px", margin: "0 auto 2rem" }}>
          Reserva tu mesa o ven a celebrar nuestras increíbles fiestas nocturnas
        </p>
        <Link href="/contacto" style={{
          display: "inline-block",
          padding: "1rem 2.5rem",
          fontSize: "1rem",
          fontWeight: "700",
          background: "#fff",
          color: "#d4a574",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginRight: "1rem",
          textDecoration: "none"
        }}>
          Reservar Mesa
        </Link>
        <Link href="/contacto" style={{
          display: "inline-block",
          padding: "1rem 2.5rem",
          fontSize: "1rem",
          fontWeight: "700",
          background: "transparent",
          color: "#fff",
          border: "2px solid #fff",
          borderRadius: "8px",
          textDecoration: "none"
        }}>
          Contáctanos
        </Link>
      </section>

      <Footer />
    </div>
  );
}
