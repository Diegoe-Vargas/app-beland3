import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(email, password);
      navigate("/login"); // Después de registrarse, va a login
    } catch (error) {
      console.error("Error al registrarse:", error.message);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-4">Registrarse</h2>
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-green-500 text-white p-2 rounded">
          Registrarme
        </button>
      </form>
    </div>
  );
};

export default Register;

