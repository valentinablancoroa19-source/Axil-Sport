// src/pages-app/ProductosPage.tsx
import React from "react";

export default function ProductosPage() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1 style={{ color: "#111827" }}>Productos</h1>
      <p>Explora nuestra selección de productos deportivos 🏋️‍♂️</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            backgroundColor: "#f3f4f6",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Zapatillas Pro</h3>
          <p>Comodidad y rendimiento para cada entrenamiento.</p>
        </div>

        <div
          style={{
            backgroundColor: "#f3f4f6",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Guantes Axil</h3>
          <p>Protección y agarre total para tu rutina.</p>
        </div>
      </div>
    </div>
  );
}