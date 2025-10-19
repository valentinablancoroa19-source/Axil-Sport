// @ts-nocheck
// Task: Crear página de Productos (HU-002)
// Descripción: Página que muestra una lista de productos simulada.

export function ProductosPage() {
  const productos = [
    { id: 1, nombre: "Balón de fútbol", marca: "Adidas", precio: 85000 },
    { id: 2, nombre: "Tenis deportivos", marca: "Nike", precio: 220000 },
    { id: 3, nombre: "Camiseta Dry-Fit", marca: "Puma", precio: 95000 },
  ];

  return (
    <main style={{ padding: 20 }}>
      <h1>Lista de Productos</h1>
      <ul>
        {productos.map((p) => (
          <li key={p.id}>
            {p.nombre} — {p.marca} — ${p.precio.toLocaleString()}
          </li>
        ))}
      </ul>
    </main>
  );
}