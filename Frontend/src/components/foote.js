import React from 'react';
import logo from '../assets/logo.png'; // Asegúrate de tener un logo en assets

const Footer = () => {
  return (
    <footer className="bg-green-400 py-4 text-white text-center">
      <img src={logo} alt="Logo" className="w-24 h-auto mx-auto mb-2" />
      <p className="text-sm">© 2025 Recicladora App. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;

