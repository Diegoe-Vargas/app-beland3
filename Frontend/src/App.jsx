import React, { useEffect, useState } from 'react';
import { builder, BuilderComponent } from '@builder.io/react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

builder.init(process.env.REACT_APP_BUILDER_API_KEY);

function BuilderPage() {
  const location = useLocation();
  const [content, setContent] = useState(null);

  useEffect(() => {
    console.log("📍 Cargando ruta:", location.pathname);
    builder
      .get('page', { url: location.pathname })
      .toPromise()
      .then((data) => setContent(data));
  }, [location.pathname]);

  if (!content) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>😕 Página no encontrada</h2>
        <p>No hay contenido publicado en Builder.io para: <code>{location.pathname}</code></p>
      </div>
    );
  }

  return <BuilderComponent model="page" content={content} />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<BuilderPage />} />
      </Routes>
    </Router>
  );
}

export default App;

