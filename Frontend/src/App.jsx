import React, { useEffect, useState } from 'react';
import { BuilderComponent, builder } from '@builder.io/react';

builder.init('ed5c41e69f62495eb1d85113a14c01c8'); // Tu API Key de Builder

const App = () => {
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const urlPath = window.location.pathname;
        const host = window.location.host;

        // Asegúrate de que la URL del fetch esté correcta
        const result = await builder
          .get('page', {
            userAttributes: {
              urlPath: window.location.pathname,
              host: window.location.host,
              device: 'desktop',
            },
          })
          .toPromise();

        setContent(result);
      } catch (error) {
        console.error('Error al cargar contenido:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (!content) {
    return <div>No se encontró contenido</div>;
  }

  return (
    <div>
      <BuilderComponent model="page" content={content} />
    </div>
  );
};

export default App;

