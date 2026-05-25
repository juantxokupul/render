import Link from "next/link";

export default function InauguracionBanner() {
  return (
    <div style={{
      background: "linear-gradient(90deg, #7c1d6f 0%, #c0392b 50%, #e67e22 100%)",
      padding: "0.85rem 2rem",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "1.5rem",
      flexWrap: "wrap"
    }}>
      <span style={{ fontSize: "1.3rem" }}>🎉</span>
      <p style={{ margin: 0, fontWeight: "800", fontSize: "1rem", color: "#fff", letterSpacing: "0.5px" }}>
        GRAN FIESTA DE INAUGURACIÓN · <span style={{ color: "#ffe066" }}>Viernes 6 de Junio</span>
      </p>
      <Link href="/inauguracion" style={{
        background: "#fff",
        color: "#c0392b",
        padding: "0.35rem 1.1rem",
        borderRadius: "20px",
        fontWeight: "700",
        fontSize: "0.85rem",
        textDecoration: "none",
        whiteSpace: "nowrap"
      }}>
        Más info →
      </Link>
      <span style={{ fontSize: "1.3rem" }}>🎉</span>
    </div>
  );
}
