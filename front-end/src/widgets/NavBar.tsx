// @ts-nocheck
// Task: Crear componente NavBar (HU-002)

export function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#111827",
        padding: "10px 20px",
        color: "white",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        🏋️‍♂️
        <h2 style={{ margin: 0 }}>Axil-Sport</h2>
      </div>

      <div style={{ display: "flex", gap: "15px" }}>
        <a href="#" style={linkStyle}>Inicio</a>
        <a href="#" style={linkStyle}>Suplementos</a>
        <a href="#" style={linkStyle}>Promociones</a>
        <a href="#" style={linkStyle}>Contacto</a>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500",
};
