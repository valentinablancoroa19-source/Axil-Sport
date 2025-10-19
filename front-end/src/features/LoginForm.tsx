// @ts-nocheck
// Task: Crear formulario de login (HU-003)
// Descripción: Componente formulario de login (usuario + contraseña).

export function LoginForm({ onSubmit }: { onSubmit?: (data: any) => void }) {
  function handleSubmit(e: any) {
    e.preventDefault();
    const form = e.target;
    const data = {
      username: form.username.value,
      password: form.password.value,
    };
    if (onSubmit) onSubmit(data);
    // placeholder: aquí se llamaría al backend
    console.log('Login submit', data);
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 360, margin: '0 auto' }}>
      <h3>Iniciar sesión</h3>
      <div>
        <input name="username" placeholder="Usuario" />
      </div>
      <div>
        <input name="password" type="password" placeholder="Contraseña" />
      </div>
      <div style={{ marginTop: 8 }}>
        <button type="submit">Ingresar</button>
      </div>
    </form>
  );
}
