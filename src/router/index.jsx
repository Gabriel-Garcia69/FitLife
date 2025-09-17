// src/router/index.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Home from "../Pages/Dashboard/Home";
import Profile from "../Pages/Profile/profile";
import Workouts from "../Pages/Dashboard/Workouts";
import Nutrition from "../Pages/Dashboard/Nutrition";
import Wearables from "../Pages/Dashboard/Wearables";
import Community from "../Pages/Dashboard/Community";
import Navbar from "../Components/Navbar/Navbar";
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Rutas de autenticación */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Ruta principal */}
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/wearables" element={<Wearables />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
}
