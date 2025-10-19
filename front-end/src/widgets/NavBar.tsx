// @ts-nocheck
// Task: Crear componente NavBar (HU-002)
import { Link } from 'react-router-dom';

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
        <Link to="/" style={linkStyle}>Inicio</Link>
        <Link to="/productos" style={linkStyle}>Suplementos</Link>
        <Link to="/promociones" style={linkStyle}>Promociones</Link>
        <Link to="/contacto" style={linkStyle}>Contacto</Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500",
};

