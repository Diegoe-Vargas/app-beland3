import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BuilderComponent } from '@builder.io/react';
import { builder } from '@builder.io/react';
import './styles.css';  // Asegúrate de tener los estilos correctos cargados.

builder.init('ed5c41e69f62495eb1d85113a14c01c8'); // Asegúrate de usar la API Key correcta.

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BuilderPage model="home" />} />
        <Route path="/login-modal" element={<BuilderPage model="login-modal" />} />
      </Routes>
    </Router>
  );
}

const BuilderPage = ({ model }) => {
  return (
    <div>
      <BuilderComponent model={model} />
    </div>
  );
};

export default App;

