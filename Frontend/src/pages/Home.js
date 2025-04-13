import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BuilderComponent } from '@builder.io/react';

const Home = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const closeLoginModal = () => setLoginModalOpen(false);

  return (
    <div>
      {/* Botón "Mis Premios" */}
      <div className="text-center mb-8">
        <Link
          to="/rewards"
          className="bg-white text-[#69a84a] font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-[#f58d38] hover:text-white transition duration-300"
        >
          Mis Premios
        </Link>
      </div>

      {/* Botón "Ver Mapa" */}
      <div className="text-center mb-12 mt-8">
        <Link
          to="/map"
          className="bg-white text-[#69a84a] font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-[#f58d38] hover:text-white transition duration-300"
        >
          Ver Mapa
        </Link>
      </div>
  
      {/* Línea de separación */}
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
  
      {/* Modal de Login */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          {/* Renderizar el modal de Builder.io */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button  
              onClick={closeLoginModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              ✕
            </button>
            <BuilderComponent model="login-modal" />
            {/* Aquí 'login-modal' es el nombre de tu modelo en Builder.io */}
          </div>
        </div>
      )}
    </div>
  );
};
          
export default Home;

