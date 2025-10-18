// @ts-nocheck
// Task: Integrar HomePage al router principal (HU-002)
// Descripción: Se agrega la ruta '/' que muestra la HomePage.

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages-app/HomePage";
import { Navbar } from "../widgets/Navbar";

export function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Aquí más adelante se agregarán rutas para productos, dashboard, etc. */}
      </Routes>
    </Router>
  );
}
