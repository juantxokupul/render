'use client';

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" }}>
      {/* Header */}
      <header style={{ borderBottom: "1px solid #334155", backdropFilter: "blur(10px)" }}>
        <nav style={{ maxWidth: "1200px", margin: "0 auto", padding: "1.5rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#fff" }}>TradePro</h1>
          <div style={{ display: "flex", gap: "2rem", color: "#cbd5e1" }}>
            <a href="#" style={{ textDecoration: "none", color: "inherit", fontSize: "0.95rem" }}>Markets</a>
            <a href="#" style={{ textDecoration: "none", color: "inherit", fontSize: "0.95rem" }}>Dashboard</a>
            <a href="#" style={{ textDecoration: "none", color: "inherit", fontSize: "0.95rem" }}>About</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "6rem 2rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "3.5rem", fontWeight: "900", color: "#fff", marginBottom: "1rem", letterSpacing: "-1px" }}>
          Trade Smart, Faster Than Ever
        </h2>
        <p style={{ fontSize: "1.25rem", color: "#cbd5e1", marginBottom: "2.5rem", maxWidth: "600px", margin: "0 auto 2.5rem" }}>
          Real-time market insights, advanced analytics, and lightning-fast execution for modern traders.
        </p>
        <button style={{
          padding: "1rem 2.5rem",
          fontSize: "1rem",
          fontWeight: "600",
          background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginRight: "1rem",
          transition: "all 0.3s ease"
        }} onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"} onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
          Start Trading
        </button>
        <button style={{
          padding: "1rem 2.5rem",
          fontSize: "1rem",
          fontWeight: "600",
          background: "transparent",
          color: "#10b981",
          border: "2px solid #10b981",
          borderRadius: "8px",
          cursor: "pointer"
        }}>
          Watch Demo
        </button>
      </section>

      {/* Stats Section */}
      <section style={{ background: "rgba(15, 23, 42, 0.5)", padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
          <div style={{ padding: "2rem", borderRadius: "12px", background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
            <p style={{ fontSize: "2.5rem", fontWeight: "700", color: "#10b981", marginBottom: "0.5rem" }}>$2.5T+</p>
            <p style={{ color: "#cbd5e1", fontSize: "0.95rem" }}>Daily Trading Volume</p>
          </div>
          <div style={{ padding: "2rem", borderRadius: "12px", background: "rgba(60, 120, 216, 0.1)", border: "1px solid rgba(60, 120, 216, 0.3)" }}>
            <p style={{ fontSize: "2.5rem", fontWeight: "700", color: "#3c78d8", marginBottom: "0.5rem" }}>500K+</p>
            <p style={{ color: "#cbd5e1", fontSize: "0.95rem" }}>Active Traders</p>
          </div>
          <div style={{ padding: "2rem", borderRadius: "12px", background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.3)" }}>
            <p style={{ fontSize: "2.5rem", fontWeight: "700", color: "#a855f7", marginBottom: "0.5rem" }}>24/7</p>
            <p style={{ color: "#cbd5e1", fontSize: "0.95rem" }}>Market Access</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "6rem 2rem" }}>
        <h3 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#fff", marginBottom: "3rem", textAlign: "center" }}>
          Powerful Features
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
          {["Real-Time Charts", "AI Predictions", "Risk Management", "Portfolio Analytics", "Mobile Trading", "API Access"].map((feature) => (
            <div key={feature} style={{
              padding: "2rem",
              borderRadius: "12px",
              border: "1px solid #334155",
              background: "rgba(30, 41, 59, 0.6)",
              transition: "all 0.3s ease",
              cursor: "pointer"
            }} onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(16, 185, 129, 0.1)";
              e.currentTarget.style.borderColor = "#10b981";
            }} onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(30, 41, 59, 0.6)";
              e.currentTarget.style.borderColor = "#334155";
            }}>
              <p style={{ fontSize: "1.25rem", fontWeight: "600", color: "#fff" }}>✨ {feature}</p>
              <p style={{ color: "#94a3b8", marginTop: "0.75rem", fontSize: "0.9rem" }}>Experience next-generation trading tools</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: "linear-gradient(135deg, #10b981 0%, #059669 100%)", padding: "4rem 2rem", textAlign: "center", marginTop: "4rem" }}>
        <h3 style={{ fontSize: "2rem", fontWeight: "800", color: "#fff", marginBottom: "1rem" }}>
          Ready to revolutionize your trading?
        </h3>
        <p style={{ color: "#e0f2fe", marginBottom: "2rem", fontSize: "1.1rem" }}>
          Join thousands of successful traders using TradePro
        </p>
        <button style={{
          padding: "1rem 2rem",
          fontSize: "1rem",
          fontWeight: "600",
          background: "#fff",
          color: "#10b981",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}>
          Get Started Free
        </button>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #334155", padding: "2rem", textAlign: "center", color: "#94a3b8", fontSize: "0.9rem" }}>
        <p>© 2024 TradePro. All rights reserved.</p>
      </footer>
    </div>
  );
}
