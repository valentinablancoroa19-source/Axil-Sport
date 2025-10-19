// src/app/App.tsx
import { Routes, Route } from "react-router-dom";

// IMPORTS COMO DEFAULT 
import HomePage from "../pages-app/HomePage";
import ProductosPage from "../pages-app/ProductosPage"; // ✅ sin llaves
import NosotrosPage from "../pages-app/NosotrosPage";
import PromocionesPage from "../pages-app/PromocionesPage";
import ContactoPage from "../pages-app/ContactoPage";

// NavBar como default import (asegúrate que NavBar.tsx exporte default)
import NavBar from "../widgets/NavBar";
import "../widgets/NavBar.css"; 

function App() {
  return (
    <>
      <NavBar />

      <main style={{ padding: "40px", textAlign: "center", minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductosPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/promociones" element={<PromocionesPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </main>

      <footer
        style={{
          backgroundColor: "#111827",
          color: "white",
          textAlign: "center",
          padding: "15px 0",
          fontSize: "14px",
        }}
      >
        © {new Date().getFullYear()} Axil-Sport — Todos los derechos reservados 🏋‍♂
      </footer>
    </>
  );
}

export default App;