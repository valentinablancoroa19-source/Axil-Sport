// @ts-nocheck
// Task: Conectar frontend con backend (HU-001)
// Descripción: Listado de productos obtenido desde el backend.

export function ProductoList() {
  const productos = ["Proteína", "Creatina", "Aminoácidos"];

  return (
    <ul>
      {productos.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ul>
  );
}

