import React, { useState } from "react";


function CalorieSummary({ consumed, goal }) {
  const percent = Math.min((consumed / goal) * 100, 100);
  return (
    <div className="bg-white border border-secondary/10 rounded-xl p-4 mb-6 flex flex-col items-center shadow-sm">
      <h2 className="text-lg font-semibold text-secondary mb-2">Resumen Diario</h2>
      <div className="w-full flex items-center justify-between mb-2">
        <span className="text-gray-700">Consumidas:</span>
        <span className="font-bold text-secondary">{consumed} kcal</span>
      </div>
      <div className="w-full flex items-center justify-between">
        <span className="text-gray-700">Meta:</span>
        <span className="font-bold text-primary">{goal} kcal</span>
      </div>
      <div className="w-full bg-background rounded-full h-3 mt-4">
        <div
          className="bg-secondary h-3 rounded-full transition-all"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <span className="text-xs text-gray-500 mt-1">{percent}% de la meta diaria</span>
    </div>
  );
}

function MealForm({ onAdd }) {
  const [meal, setMeal] = useState("");
  const [calories, setCalories] = useState("");
  return (
    <form
      className="bg-white border border-primary/10 rounded-xl p-4 mb-6 flex flex-col gap-2 shadow-sm"
      onSubmit={e => {
        e.preventDefault();
        if (!meal || !calories) return;
        onAdd({ meal, calories: Number(calories), date: new Date().toLocaleDateString() });
        setMeal("");
        setCalories("");
      }}
    >
      <h2 className="text-lg font-semibold text-primary mb-2">Registrar comida</h2>
      <input
        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        type="text"
        placeholder="Comida (ej: Desayuno, Snack...)"
        value={meal}
        onChange={e => setMeal(e.target.value)}
        required
      />
      <input
        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
        type="number"
        placeholder="Calorías"
        value={calories}
        onChange={e => setCalories(e.target.value)}
        min={0}
        required
      />
      <button
        type="submit"
        className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary/80 font-medium mt-2"
      >
        Agregar
      </button>
    </form>
  );
}

function MealHistory({ meals }) {
  return (
    <div className="bg-white border border-accent/10 rounded-xl p-4 shadow-sm">
      <h2 className="text-lg font-semibold text-accent mb-2">Historial de comidas</h2>
      {meals.length === 0 ? (
        <p className="text-gray-500">No hay comidas registradas hoy.</p>
      ) : (
        <ul className="divide-y divide-background">
          {meals.map((m, idx) => (
            <li key={idx} className="py-2 flex justify-between items-center">
              <span className="font-medium text-gray-700">{m.meal}</span>
              <span className="text-gray-500 text-sm">{m.calories} kcal</span>
              <span className="text-xs text-gray-400 ml-2">{m.date}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Nutrition() {
  const [meals, setMeals] = useState([]);
  const goal = 2000;
  const consumed = meals.reduce((acc, m) => acc + m.calories, 0);

  return (
    <div className="min-h-screen bg-background p-6">
      <h1 className="text-3xl font-bold mb-4 text-secondary">Seguimiento Nutricional</h1>
      <p className="text-gray-700 mb-6">Registra tus comidas, controla tus calorías y revisa tu historial nutricional.</p>

      <CalorieSummary consumed={consumed} goal={goal} />
      <MealForm onAdd={m => setMeals([m, ...meals])} />
      <MealHistory meals={meals} />
    </div>
  );
}
