import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path ? "active" : "";

  return (
    <nav className="navbar">
      <div className="logo">🏋️‍♂️ Axil-Sport</div>
      <ul className="nav-links">
        <li>
          <Link className={isActive("/")} to="/">Inicio</Link>
        </li>
        <li>
          <Link className={isActive("/productos")} to="/productos">Suplementos</Link>
        </li>
        <li>
          <Link className={isActive("/promociones")} to="/promociones">Promociones</Link>
        </li>
        <li>
          <Link className={isActive("/contacto")} to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

