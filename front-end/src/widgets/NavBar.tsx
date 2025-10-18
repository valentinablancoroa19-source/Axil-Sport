// @ts-nocheck
// Task: Crear componente Navbar (HU-002)
// Descripción: Navbar principal con enlaces a Home y Productos.

export function NavBar() {
  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
      <a href="/" style={{ marginRight: 12 }}>Home</a>
      <a href="/productos" style={{ marginRight: 12 }}>Productos</a>
      <a href="/dashboard" style={{ marginRight: 12 }}>Dashboard</a>
    </nav>
  );
}