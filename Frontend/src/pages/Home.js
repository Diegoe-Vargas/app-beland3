import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-white via-[#f58d38] to-[#69a84a]">
      {/* Header - Saludo */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-white">Bienvenid@ al mundo Beland 🌎</h1>
      </div>

      {/* Botones en el medio */}
      <div className="flex justify-center space-x-6 mb-12">
        <Link
          to="/video"
          className="bg-white text-[#69a84a] font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-[#f58d38] hover:text-white transition duration-300"
        >
          Ver Video
        </Link>
        <Link
          to="/home"
          className="bg-white text-[#69a84a] font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-[#f58d38] hover:text-white transition duration-300"
        >
          Mis Videos
        </Link>
        <Link
          to="/rewards"
          className="bg-white text-[#69a84a] font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-[#f58d38] hover:text-white transition duration-300"
        >
          Mis Premios
        </Link>
      </div>

      {/* Línea de separación entre el cuerpo y el footer */}
      <hr className="border-t-2 border-[#f58d38] mb-12" />

      {/* Footer */}
      <div className="flex justify-between items-center px-8 py-6 bg-white">
        <div className="flex justify-center w-full">
          <img src="/logo.png" alt="Logo" className="h-10" />
        </div>
        <div className="text-right">
          <p className="text-[#69a84a] font-bold">Contacto:</p>
          <p className="text-gray-600">email@beland.com</p>
          <p className="text-gray-600">Tel: +123 456 789</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

