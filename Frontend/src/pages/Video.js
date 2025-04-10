import { Link } from 'react-router-dom';

const Video = () => {
  return (
    <>
      <div className="text-green-400">¡Hola, Tailwind!</div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
        <h1 className="text-4xl font-bold text-green-400 mb-6">¡Comparte o descarga tu video y gana monedas!</h1>
        <video className="mb-6 w-full max-w-lg" controls>
          <source src="video.mp4" type="video/mp4" />
          Tu navegador no soporta el formato de video.
        </video>
        <div className="space-x-4 mb-6">
          <button className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition duration-300">
            Compartir
          </button>
          <button className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition duration-300">
            Descargar
          </button>
          <button className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition duration-300">
            Ganar Monedas
          </button>
        </div>
        <div>
          <Link to="/login" className="text-blue-400 hover:underline">
            ¿Ya tienes cuenta? Inicia sesión.
          </Link>
        </div>
        <div>
          <Link to="/register" className="text-blue-400 hover:underline mt-2">
            ¿No tienes cuenta? Regístrate.
          </Link>
        </div>
      </div>
    </>
  );
};

export default Video;

