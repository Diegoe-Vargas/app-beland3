import React, { useEffect, useState } from 'react';
import { builder, BuilderComponent } from '@builder.io/react';

builder.init(process.env.REACT_APP_BUILDER_API_KEY); // clave segura desde .env

function App() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    builder
      .get('page', { url: window.location.pathname }) // busca contenido según la URL
      .toPromise()
      .then((data) => {
        setContent(data);
      });
  }, []);

  if (!content) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>🚧 Página no encontrada</h2>
        <p>Asegurate de tener una página publicada en Builder.io con la URL: <code>{window.location.pathname}</code></p>
      </div>
    );
  }

  return <BuilderComponent model="page" content={content} />;
}

export default App;

