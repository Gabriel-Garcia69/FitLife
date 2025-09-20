import React, { useState } from "react";


function WorkoutCard({ name, exercises, completed }) {
  return (
    <div className={`bg-white border rounded-xl p-4 shadow-sm flex flex-col gap-2 ${completed ? 'border-secondary/50' : 'border-primary/10'}`}>
      <h3 className="text-lg font-semibold text-primary">{name}</h3>
      <ul className="text-gray-700 text-sm mb-2 list-disc list-inside">
        {exercises.map((ex, idx) => (
          <li key={idx}>{ex}</li>
        ))}
      </ul>
      <span className={`text-xs font-medium ${completed ? 'text-secondary' : 'text-gray-400'}`}>{completed ? 'Completada' : 'Pendiente'}</span>
    </div>
  );
}

function AddWorkoutForm({ onAdd }) {
  const [name, setName] = useState("");
  const [exercises, setExercises] = useState("");
  return (
    <form
      className="bg-white border border-primary/10 rounded-xl p-4 mb-6 flex flex-col gap-2 shadow-sm"
      onSubmit={e => {
        e.preventDefault();
        if (!name || !exercises) return;
        onAdd({ name, exercises: exercises.split(',').map(e => e.trim()), completed: false });
        setName("");
        setExercises("");
      }}
    >
      <h2 className="text-lg font-semibold text-primary mb-2">Agregar rutina</h2>
      <input
        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        type="text"
        placeholder="Nombre de la rutina"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
        type="text"
        placeholder="Ejercicios (separados por coma)"
        value={exercises}
        onChange={e => setExercises(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 font-medium mt-2"
      >
        Agregar
      </button>
    </form>
  );
}

function ProgressBar({ completed, total }) {
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-primary font-medium">Progreso semanal</span>
        <span className="text-sm text-gray-500">{percent}%</span>
      </div>
      <div className="w-full bg-background rounded-full h-3">
        <div
          className="bg-secondary h-3 rounded-full transition-all"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}

export default function Workouts() {
  const [workouts, setWorkouts] = useState([
    {
      name: 'Full Body',
      exercises: ['Sentadillas', 'Flexiones', 'Burpees'],
      completed: true
    },
    {
      name: 'Piernas',
      exercises: ['Sentadillas', 'Zancadas', 'Peso muerto'],
      completed: false
    },
    {
      name: 'Cardio',
      exercises: ['Correr 5km', 'Jumping Jacks', 'Mountain Climbers'],
      completed: false
    }
  ]);

  const completedCount = workouts.filter(w => w.completed).length;

  return (
    <div className="min-h-screen bg-background p-6">
      <h1 className="text-3xl font-bold mb-4 text-primary">Planes de Ejercicio</h1>
      <p className="text-gray-700 mb-6">Aquí podrás ver y gestionar tus rutinas de ejercicio, así como tu progreso diario.</p>

      <ProgressBar completed={completedCount} total={workouts.length} />
      <AddWorkoutForm onAdd={w => setWorkouts([w, ...workouts])} />

      <h2 className="text-xl font-semibold text-primary mb-4">Tus rutinas</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {workouts.map((w, idx) => (
          <WorkoutCard key={idx} {...w} />
        ))}
      </div>
    </div>
  );
}
