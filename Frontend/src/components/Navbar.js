// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCoins } from '../context/CoinContext';

const Navbar = () => {
  const { user, logout } = useAuth(); // Traemos el usuario y la función de logout
  const { coins } = useCoins(); // Traemos las monedas

  return (
    <nav className="flex items-center justify-between bg-blue-500 p-4 text-white">
      <div>
        <Link to="/" className="font-bold text-xl">MiApp</Link>
      </div>

      <div className="flex items-center space-x-4">
        {/* Si el usuario está logueado, mostramos el balance y el logout */}
        {user ? (
          <>
            <span>Hola, {user.name || 'Usuario'} 👋</span>
            <span>Monedas: {coins}</span>
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          // Si no está logueado, mostramos login y register
          <>
            <Link
              to="/login"
              className="bg-green-500 hover:bg-green-600 py-1 px-3 rounded"
            >
              Iniciar sesión
            </Link>
            <Link
              to="/register"
              className="bg-yellow-400 hover:bg-yellow-500 py-1 px-3 rounded"
            >
              Registrarse
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

