import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

const programa = [
  { hora: "19:00", titulo: "Apertura de puertas", desc: "Bienvenida con cocktail de inauguración para todos los asistentes", icon: "🚪" },
  { hora: "20:00", titulo: "Brindis Inaugural", desc: "Palabras de bienvenida y brindis oficial con cava de la casa", icon: "🥂" },
  { hora: "20:30", titulo: "Servicio de Carnes", desc: "Apertura de la parrilla con los mejores cortes de la carta", icon: "🔥" },
  { hora: "22:00", titulo: "DJ en Vivo", desc: "Música electrónica y sesión especial para la inauguración", icon: "🎧" },
  { hora: "00:00", titulo: "Fuegos & Sorpresas", desc: "Espectáculo especial de medianoche con sorpresas para los asistentes", icon: "✨" },
  { hora: "03:00", titulo: "Cierre", desc: "Fin de la fiesta inaugural. ¡Hasta la próxima!", icon: "🌙" },
];

const incluye = [
  { icon: "🍹", texto: "Cocktail de bienvenida incluido" },
  { icon: "🥩", texto: "Descuento especial en carta (20%)" },
  { icon: "🎵", texto: "DJ en vivo toda la noche" },
  { icon: "✨", texto: "Espectáculo sorpresa a medianoche" },
  { icon: "🎁", texto: "Regalo de inauguración para los primeros 50 asistentes" },
  { icon: "📸", texto: "Fotógrafo profesional en el evento" },
];

export default function InauguracionPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0f0f0f", color: "#fff", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        background: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.pexels.com/photos/36697295/pexels-photo-36697295.jpeg?auto=compress&cs=tinysrgb&w=1200')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "8rem 2rem",
        textAlign: "center",
        borderBottom: "3px solid #e67e22",
        position: "relative"
      }}>
        <span style={{
          display: "inline-block",
          background: "linear-gradient(90deg, #7c1d6f, #c0392b)",
          color: "#fff",
          fontWeight: "800",
          fontSize: "0.85rem",
          letterSpacing: "2px",
          textTransform: "uppercase",
          padding: "0.4rem 1.2rem",
          borderRadius: "20px",
          marginBottom: "1.5rem"
        }}>
          Evento Especial · Entrada Libre
        </span>
        <h2 style={{ fontSize: "4rem", fontWeight: "900", color: "#fff", marginBottom: "0.75rem", lineHeight: "1.1" }}>
          Gran Fiesta de<br /><span style={{ color: "#ffe066" }}>Inauguración</span>
        </h2>
        <p style={{ fontSize: "1.5rem", color: "#f5a96f", fontWeight: "600", marginBottom: "2rem" }}>
          Sábado 6 de Junio · Villa Nabo abre sus puertas
        </p>
        <p style={{ fontSize: "1.1rem", color: "#ccc", maxWidth: "650px", margin: "0 auto 3rem", lineHeight: "1.7" }}>
          Una noche única para celebrar el nacimiento de Villa Nabo. Únete a nosotros en una velada llena de carnes a la brasa, música, cocktails y mucha diversión bajo el cielo de Burgos.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contacto" style={{
            display: "inline-block",
            padding: "1rem 2.5rem",
            background: "linear-gradient(135deg, #c0392b, #e67e22)",
            color: "#fff",
            borderRadius: "8px",
            fontWeight: "700",
            fontSize: "1.05rem",
            textDecoration: "none"
          }}>
            Reservar mi plaza
          </Link>
          <a href="#programa" style={{
            display: "inline-block",
            padding: "1rem 2.5rem",
            background: "transparent",
            color: "#fff",
            border: "2px solid #fff",
            borderRadius: "8px",
            fontWeight: "700",
            fontSize: "1.05rem",
            textDecoration: "none"
          }}>
            Ver programa
          </a>
        </div>
      </section>

      {/* Fecha destacada */}
      <section style={{ background: "linear-gradient(90deg, #7c1d6f 0%, #c0392b 50%, #e67e22 100%)", padding: "2.5rem 2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", textAlign: "center" }}>
          {[
            { valor: "6 JUN", label: "Fecha del Evento" },
            { valor: "19:00h", label: "Apertura de Puertas" },
            { valor: "LIBRE", label: "Entrada" },
            { valor: "03:00h", label: "Hasta las" },
          ].map((item) => (
            <div key={item.label}>
              <p style={{ fontSize: "2.2rem", fontWeight: "900", color: "#ffe066", marginBottom: "0.25rem" }}>{item.valor}</p>
              <p style={{ color: "#f5e6d3", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "1px" }}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Qué incluye */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 2rem" }}>
        <h3 style={{ fontSize: "2.2rem", fontWeight: "800", color: "#e67e22", marginBottom: "0.5rem", textAlign: "center" }}>¿Qué incluye la noche?</h3>
        <p style={{ color: "#7a6a5a", textAlign: "center", marginBottom: "3rem" }}>Todo lo que te espera en la gran apertura de Villa Nabo</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {incluye.map((item) => (
            <div key={item.texto} style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "1.5rem",
              background: "#1a1a1a",
              borderRadius: "12px",
              border: "1px solid #2d1810"
            }}>
              <span style={{ fontSize: "2rem", flexShrink: 0 }}>{item.icon}</span>
              <p style={{ color: "#f0e6d3", fontWeight: "600", fontSize: "1rem" }}>{item.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programa */}
      <section id="programa" style={{ background: "#111", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h3 style={{ fontSize: "2.2rem", fontWeight: "800", color: "#e67e22", marginBottom: "0.5rem", textAlign: "center" }}>Programa de la Noche</h3>
          <p style={{ color: "#7a6a5a", textAlign: "center", marginBottom: "3.5rem" }}>Viernes 6 de Junio · Camino Rural de Villa Nabo, Arauzo de Torre</p>

          <div style={{ position: "relative" }}>
            {/* Línea vertical */}
            <div style={{ position: "absolute", left: "72px", top: 0, bottom: 0, width: "2px", background: "#2d1810" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {programa.map((item, i) => (
                <div key={item.hora} style={{ display: "flex", gap: "2rem", alignItems: "flex-start", padding: "1.75rem 0" }}>
                  <div style={{ minWidth: "60px", textAlign: "right", flexShrink: 0 }}>
                    <span style={{ fontSize: "0.85rem", fontWeight: "700", color: "#e67e22" }}>{item.hora}</span>
                  </div>
                  <div style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: i === 0 ? "#c0392b" : "#1a1a1a",
                    border: "2px solid #e67e22",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.9rem",
                    flexShrink: 0,
                    zIndex: 1,
                    marginTop: "2px"
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontWeight: "700", color: "#f0e6d3", fontSize: "1.05rem", marginBottom: "0.3rem" }}>{item.titulo}</p>
                    <p style={{ color: "#7a6a5a", fontSize: "0.9rem", lineHeight: "1.5" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Imagen + texto */}
      <section className="grid-2col" style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 2rem", gap: "4rem", alignItems: "center" }}>
        <img
          src="https://images.pexels.com/photos/4218028/pexels-photo-4218028.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Fiesta de inauguración"
          style={{ width: "100%", height: "380px", objectFit: "cover", borderRadius: "15px", border: "3px solid #e67e22" }}
        />
        <div>
          <h3 style={{ fontSize: "2rem", fontWeight: "800", color: "#ffe066", marginBottom: "1.25rem" }}>Una noche que no olvidarás</h3>
          <p style={{ color: "#b0a090", lineHeight: "1.8", marginBottom: "1.25rem" }}>
            Villa Nabo nace con la vocación de ser el punto de encuentro de la comarca: un lugar donde el fuego de la brasa, la buena música y la compañía se fusionan en una experiencia única.
          </p>
          <p style={{ color: "#b0a090", lineHeight: "1.8", marginBottom: "2rem" }}>
            La noche del 6 de Junio abrimos nuestras puertas por primera vez y queremos celebrarlo a lo grande contigo. Entrada libre, pero las plazas son limitadas.
          </p>
          <Link href="/contacto" style={{
            display: "inline-block",
            padding: "0.9rem 2rem",
            background: "linear-gradient(135deg, #c0392b, #e67e22)",
            color: "#fff",
            borderRadius: "8px",
            fontWeight: "700",
            textDecoration: "none"
          }}>
            Reservar mi plaza gratis
          </Link>
        </div>
      </section>

      {/* CTA final */}
      <section style={{ background: "linear-gradient(135deg, #7c1d6f 0%, #c0392b 100%)", padding: "5rem 2rem", textAlign: "center" }}>
        <h3 style={{ fontSize: "2.5rem", fontWeight: "900", color: "#fff", marginBottom: "1rem" }}>¿Nos vemos el 6 de Junio?</h3>
        <p style={{ color: "#f5c6c6", fontSize: "1.1rem", marginBottom: "2.5rem", maxWidth: "550px", margin: "0 auto 2.5rem" }}>
          Reserva tu plaza ahora — la entrada es libre pero el aforo es limitado.
        </p>
        <Link href="/contacto" style={{
          display: "inline-block",
          padding: "1.1rem 3rem",
          background: "#ffe066",
          color: "#7c1d6f",
          borderRadius: "8px",
          fontWeight: "900",
          fontSize: "1.1rem",
          textDecoration: "none"
        }}>
          ¡Reservar plaza ahora!
        </Link>
      </section>

      <Footer />
    </div>
  );
}
