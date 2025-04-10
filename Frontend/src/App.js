import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js'; // Asegúrate de que Home.js esté en src/pages
import Video from './pages/Video.js'; // Asegúrate de que Video.js esté en src/pages
import Login from './pages/Login.js'; // Asegúrate de que Login.js esté en src/pages
import Register from './pages/Registro.js'; // Asegúrate de que Register.js esté en src/pages
import Rewards from './pages/Rewards.js'; // Asegúrate de que Rewards.js esté en src/pages
import Footer from './components/Footer.js'; // Asegúrate de que Footer.js esté en src/components

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video" element={<Video />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/rewards" element={<Rewards />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

