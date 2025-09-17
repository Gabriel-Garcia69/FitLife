
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  // Simulación de autenticación (reemplazar por lógica real de auth)
  const [isAuthenticated] = useState(false); // Cambia a true para simular usuario logeado
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("pointerdown", handleClickOutside);
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="bg-white shadow-md py-4 px-4 md:px-8 flex justify-between items-center relative">
      {/* Logo y menú hamburguesa */}
      <div className="flex items-center gap-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          FitLife
        </Link>
        {/* Menú desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/workouts" className="text-gray-700 hover:text-blue-600 font-medium">Planes de Ejercicio</Link>
          <Link to="/nutrition" className="text-gray-700 hover:text-green-600 font-medium">Nutrición</Link>
          <Link to="/wearables" className="text-gray-700 hover:text-purple-600 font-medium">Wearables</Link>
          <Link to="/community" className="text-gray-700 hover:text-yellow-600 font-medium">Comunidad</Link>
        </div>
      </div>
      {/* Botones de usuario desktop */}
      <div className="hidden md:flex gap-2">
        {isAuthenticated ? (
          <Link to="/profile" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium">
            Mi Perfil
          </Link>
        ) : (
          <>
            <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium">
              Iniciar Sesión
            </Link>
            <Link to="/register" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 font-medium">
              Registrarse
            </Link>
          </>
        )}
      </div>
      {/* Menú hamburguesa mobile */}
      <button
        ref={buttonRef}
        className="md:hidden flex items-center px-2 py-1 border rounded text-gray-700 border-gray-300 focus:outline-none"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Abrir menú"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Menú mobile desplegable */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 gap-4 z-50 md:hidden animate-fade-in"
        >
          <Link to="/workouts" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setMenuOpen(false)}>Planes de Ejercicio</Link>
          <Link to="/nutrition" className="text-gray-700 hover:text-green-600 font-medium" onClick={() => setMenuOpen(false)}>Nutrición</Link>
          <Link to="/wearables" className="text-gray-700 hover:text-purple-600 font-medium" onClick={() => setMenuOpen(false)}>Wearables</Link>
          <Link to="/community" className="text-gray-700 hover:text-yellow-600 font-medium" onClick={() => setMenuOpen(false)}>Comunidad</Link>
          {isAuthenticated ? (
            <Link to="/profile" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium" onClick={() => setMenuOpen(false)}>
              Mi Perfil
            </Link>
          ) : (
            <>
              <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium" onClick={() => setMenuOpen(false)}>
                Iniciar Sesión
              </Link>
              <Link to="/register" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 font-medium" onClick={() => setMenuOpen(false)}>
                Registrarse
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
