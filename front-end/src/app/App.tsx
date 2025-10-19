// @ts-nocheck
// Task: Integrar HomePage al router principal (HU-002)


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages-app/HomePage";
import { ProductosPage } from "../pages-app/ProductosPage";
import NosotrosPage from "../pages-app/NosotrosPage";
import { Navbar } from "../widgets/Navbar";

export function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
      </Routes>
    </Router>
  );
}
