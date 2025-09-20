import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-6">
        {/* Resumen principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card: Planes de Ejercicio */}
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold text-gray-700">
              Planes de Ejercicio
            </h2>
            <p className="text-gray-500">
              Aquí verás tus rutinas y progreso diario.
            </p>
            <Link
              to="/workouts"
              className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Ver Planes
            </Link>
          </div>

          {/* Card: Seguimiento Nutricional */}
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold text-gray-700">
              Seguimiento Nutricional
            </h2>
            <p className="text-gray-500">
              Registra tus comidas y controla tus calorías.
            </p>
            <Link
              to="/nutrition"
              className="mt-4 inline-block rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
            >
              Ver Nutrición
            </Link>
          </div>

          {/* Card: Wearables */}
          {/*<div className="rounded-xl bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold text-gray-700">Wearables</h2>
            <p className="text-gray-500">
              Visualiza tus métricas de pulsera o reloj inteligente.
            </p>
            <Link
              to="/wearables"
              className="mt-4 inline-block rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
            >
              Ver Métricas
            </Link>
          </div>
            */}
            
          {/* Card: Comunidad / Alertas */}
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold text-gray-700">Comunidad</h2>
            <p className="text-gray-500">
              Revisa eventos y alertas de tu comunidad FitLife.
            </p>
            <Link
              to="/community"
              className="mt-4 inline-block rounded-lg bg-yellow-600 px-4 py-2 text-white hover:bg-yellow-700"
            >
              Ver Comunidad
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
