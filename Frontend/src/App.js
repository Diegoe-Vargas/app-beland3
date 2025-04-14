import React, { useEffect, useState } from 'react';
import { builder, BuilderComponent } from '@builder.io/react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

builder.init(process.env.REACT_APP_BUILDER_API_KEY);

function BuilderPage() {
  const location = useLocation();
  const [content, setContent] = useState(null);

  useEffect(() => {
    builder
      .get('page', { url: location.pathname })
      .toPromise()
      .then((data) => setContent(data));
  }, [location.pathname]);

  if (!content) {
    return <h2>No hay contenido para {location.pathname}</h2>;
  }

  return <BuilderComponent model="page" content={content} />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<BuilderPage />} />
      </Routes>
    </Router>
  );
}

