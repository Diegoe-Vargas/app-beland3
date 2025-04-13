import React, { useState } from 'react';
import { useAuth } from '../context/authContext';
import { BuilderComponent, builder } from '@builder.io/react';

// Importa tu modelo de contenido de Builder.io
builder.init('ed5c41e69f62495eb1d85113a14c01c8'); // tu public API Key

function Login() {
  const { login } = useAuth(); // función de login real
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {/* Builder.io render */}
      <BuilderComponent model="login-page" />

      {/* Formulario "invisible" para conectar Builder.io a tu lógica */}
      <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4 mt-6">
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}

export default Login;

