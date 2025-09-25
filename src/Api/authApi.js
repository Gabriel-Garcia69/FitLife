// src/Api/authApi.js

export async function loginApi(email, password) {
  const res = await fetch('http://localhost:3001/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  if (!res.ok) throw new Error('Error al iniciar sesión');
  return res.json();
}

export async function registerApi(fullName, email, password) {
  const res = await fetch('http://localhost:3001/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fullName, email, password })
  });
  if (!res.ok) throw new Error('Error al registrarse');
  return res.json();
}
