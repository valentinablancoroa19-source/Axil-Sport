// @ts-nocheck
// Task: Crear HomePage (HU-002)


import { Navbar } from "../widgets/Navbar";

export function HomePage() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: 20, textAlign: "center" }}>
        <h1>¡Bienvenido a Axil-Sport!</h1>
        <p>Gestiona y controla tus ventas de suplementos deportivos de manera fácil y rápida.</p>
      </main>
    </div>
  );
}


