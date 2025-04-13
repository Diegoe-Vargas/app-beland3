import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/authContext'; // Para autenticar
import { useCoin } from '../context/coinContext'; // Corregido: usa 'useCoin'

const Video = () => {
  const { user } = useAuth(); // Obtiene el estado de usuario desde el AuthContext
  const { coin, addCoins } = useCoin(); // Usa el hook 'useCoin' correctamente

  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    // Lógica de descarga
    setIsDownloading(true);
    // Simulando un proceso de descarga
    setTimeout(() => {
      setIsDownloading(false);
    }, 3000);
  };

  return (
    <div className="video-container">
      <button
        onClick={handleDownload}
        className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-6 rounded-lg transition duration-300"
      >
        Descargar
      </button>

      {/* Botón extra para ganar monedas (si está logueado) */}
      {user && (
        <button
          onClick={() => addCoins(1)} // Llama a la función addCoins
          className="bg-green-400 hover:bg-green-500 text-white py-2 px-6 rounded-lg transition duration-300"
        >
          Ganar Monedas
        </button>
      )}
  
      {/* Enlaces de login/register si no está logueado */}
      {!user && (
        <div className="flex flex-col items-center space-y-2">
          <Link to="/login" className="text-blue-400 hover:underline">
            ¿Ya tienes cuenta? Inicia sesión
          </Link>
          <Link to="/register" className="text-blue-400 hover:underline">
            ¿No tienes cuenta? Regístrate
          </Link>
        </div>
      )}
  
      {/* Marca de agua si descarga sin estar logueado */}
      {!user && isDownloading && (
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="text-5xl font-bold text-white bg-black bg-opacity-60 p-4 rounded-lg">
            Marca de Agua
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;

