import React, { useState } from "react";

export default function Profile() {
  // Datos de ejemplo, luego se pueden cargar desde el backend
  const [name, setName] = useState("Juan Pérez");
  const [email, setEmail] = useState("juan@example.com");
  const [goal, setGoal] = useState("Perder peso");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile updated:", { name, email, goal });
    // Aquí se haría la llamada a la API para actualizar datos
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-2xl font-bold text-gray-800 text-center">
          Mi Perfil
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="mb-1 block text-gray-700 font-medium">Nombre</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-gray-700 font-medium">Correo Electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-gray-700 font-medium">Meta de Bienestar</label>
            <input
              type="text"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          >
            Guardar Cambios
          </button>
        </form>
      </div>
    </div>
  );
}
