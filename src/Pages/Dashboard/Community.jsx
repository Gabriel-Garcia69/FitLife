import React from "react";

function EventCard({ title, date, description }) {
  return (
    <div className="bg-white border border-primary/10 rounded-xl p-4 shadow-sm flex flex-col gap-2">
      <h3 className="text-lg font-semibold text-primary">{title}</h3>
      <span className="text-xs text-gray-500">{date}</span>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

function AlertCard({ message, type }) {
  const color = type === 'info' ? 'bg-primary/10 text-primary' : type === 'warning' ? 'bg-accent/10 text-accent' : 'bg-secondary/10 text-secondary';
  return (
    <div className={`rounded-lg px-4 py-2 mb-2 ${color} font-medium`}>
      {message}
    </div>
  );
}

export default function Community() {
  // Datos simulados
  const events = [
    {
      title: 'Reto 10K FitLife',
      date: '22 de septiembre, 2025',
      description: 'Únete al reto de correr 10 kilómetros y gana premios exclusivos.'
    },
    {
      title: 'Clase de Yoga al Aire Libre',
      date: '25 de septiembre, 2025',
      description: 'Participa en una sesión de yoga gratuita en el parque central.'
    },
    {
      title: 'Webinar: Nutrición Inteligente',
      date: '28 de septiembre, 2025',
      description: 'Aprende sobre hábitos alimenticios saludables con expertos.'
    }
  ];
  const alerts = [
    { message: '¡Nuevo evento disponible! Inscríbete al Reto 10K.', type: 'info' },
    { message: 'Recuerda registrar tu progreso semanal para ganar medallas.', type: 'warning' },
    { message: 'La comunidad ha alcanzado 1000 miembros activos. ¡Gracias!', type: 'success' }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <h1 className="text-3xl font-bold mb-4 text-primary">Comunidad</h1>
      <p className="text-gray-700 mb-6">Participa en eventos, recibe alertas y mantente conectado con la comunidad FitLife.</p>

      {/* Alertas */}
      <div className="mb-8">
        {alerts.map((alert, idx) => (
          <AlertCard key={idx} message={alert.message} type={alert.type} />
        ))}
      </div>

      {/* Eventos */}
      <h2 className="text-xl font-semibold text-primary mb-4">Próximos eventos</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, idx) => (
          <EventCard key={idx} {...event} />
        ))}
      </div>
    </div>
  );
}
