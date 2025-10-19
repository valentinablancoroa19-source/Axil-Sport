// @ts-nocheck
// Página principal de Axil-Sport

import { Navbar } from "../widgets/Navbar";

export function HomePage() {
  return (
    <div>
      <Navbar />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          height: "80vh",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Bienvenido a <strong>Axil-Sport</strong> 🏋️‍♂️
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#333" }}>
          Selecciona una opción del menú para comenzar.
        </p>
      </main>
    </div>
  );
}




