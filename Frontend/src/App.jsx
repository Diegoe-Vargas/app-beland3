import React, { useEffect, useState } from 'react';
import { builder, BuilderComponent } from '@builder.io/react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

builder.init(process.env.REACT_APP_BUILDER_API_KEY);

function BuilderPage() {
  const location = useLocation();
  const [content, setContent] = useState(null);

  useEffect(() => {
    builder
      .get('page', { url: location.pathname }) // 👈 ahora sí usa la ruta real
      .toPromise()
      .then((data) => {
        setContent(data);
      });
  }, [location.pathname]);

  if (!content) {
    return <div>No se encontró contenido para esta URL 😕</div>;
  }

  return <BuilderComponent model="page" content={content} />;
}

function App() {
  return (
    <Router>
      <Routes>
        {/* 👇 Ruta comodín para cualquier página */}
        <Route path="*" element={<BuilderPage />} />
      </Routes>
    </Router>
  );
}

export default App;

