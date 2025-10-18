// @ts-nocheck
// Task: Crear HomePage (HU-002)
// Descripción: Página principal con Navbar y texto de bienvenida.

import { Navbar } from "../widgets/Navbar";

export function HomePage() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: 20 }}>
        <h1>Bienvenido al Sistema de Ventas</h1>
        <p>Selecciona una opción del menú para comenzar.</p>
      </main>
    </div>
  );
}