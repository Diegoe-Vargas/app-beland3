import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <h1 className="text-5xl font-bold mb-8">404</h1>
      <p className="text-2xl mb-8">Página no encontrada</p>
      <Link to="/" className="text-[#69a84a] hover:text-[#f58d38] font-bold">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;

