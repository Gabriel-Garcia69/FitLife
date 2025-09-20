import React from "react";


function MetricCard({ label, value, unit, color }) {
  return (
    <div className={`bg-white border rounded-xl p-4 shadow-sm flex flex-col items-center gap-2 border-${color}/20`}>
      <span className={`text-sm font-medium text-${color}`}>{label}</span>
      <span className={`text-2xl font-bold text-${color}`}>{value} <span className="text-base font-normal">{unit}</span></span>
    </div>
  );
}

function SleepCard({ hours, quality }) {
  return (
    <div className="bg-white border border-accent/20 rounded-xl p-4 shadow-sm flex flex-col items-center gap-2">
      <span className="text-sm font-medium text-accent">Sueño</span>
      <span className="text-2xl font-bold text-accent">{hours} <span className="text-base font-normal">h</span></span>
      <span className="text-xs text-gray-500">Calidad: {quality}</span>
    </div>
  );
}

export default function Wearables() {
  // Datos simulados
  const metrics = [
    { label: 'Pasos', value: 8234, unit: 'pasos', color: 'primary' },
    { label: 'Ritmo cardíaco', value: 74, unit: 'bpm', color: 'secondary' },
    { label: 'Calorías activas', value: 540, unit: 'kcal', color: 'accent' },
  ];
  const sleep = { hours: 7.2, quality: 'Buena' };

  return (
    <div className="min-h-screen bg-background p-6">
      <h1 className="text-3xl font-bold mb-4 text-accent">Wearables</h1>
      <p className="text-gray-700 mb-6">Visualiza y analiza las métricas de tus dispositivos inteligentes, como pulseras o relojes.</p>

      <div className="grid gap-4 md:grid-cols-3 mb-6">
        {metrics.map((m, idx) => (
          <MetricCard key={idx} {...m} />
        ))}
        <SleepCard {...sleep} />
      </div>

      <div className="bg-white border border-primary/10 rounded-xl p-4 shadow-sm mt-8">
        <h2 className="text-lg font-semibold text-primary mb-2">Consejo saludable</h2>
        <p className="text-gray-700">¡Sigue moviéndote! Intenta alcanzar los 10,000 pasos diarios y mantén un ritmo cardíaco saludable durante tus entrenamientos.</p>
      </div>
    </div>
  );
}
