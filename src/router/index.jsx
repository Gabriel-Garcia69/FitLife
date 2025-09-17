// src/router/index.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Home from "../Pages/Dashboard/Home";
import Profile from "../Pages/Profile/profile";
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas de autenticación */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Ruta principal */}
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}
