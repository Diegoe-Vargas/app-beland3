import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './map.css'; // Asegúrate de tener el archivo CSS

// Configuración de Mapbox
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN || ''; // Asegúrate de no exponer tu token públicamente

const Map = ({ locations }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    // Solo crear el mapa si no existe aún
    if (!map) {
      const newMap = new mapboxgl.Map({
        container: 'map', // El ID del div que contendrá el mapa
        style: 'mapbox://styles/mapbox/streets-v11', // Estilo del mapa
        center: [-74.5, 40], // Coordenadas iniciales (longitud y latitud)
        zoom: 9, // Nivel de zoom inicial
      });

      // Añadir controles de navegación
      newMap.addControl(new mapboxgl.NavigationControl());

      setMap(newMap);
    }

    // Limpiar el mapa al desmontar
    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [map]);

  // Añadir las estaciones de reciclaje al mapa
  useEffect(() => {
    if (map && locations) {
      locations.forEach((location) => {
        new mapboxgl.Marker()
          .setLngLat([location.longitude, location.latitude])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 })
              .setHTML(`
                <h3>${location.name}</h3>
                <p>${location.description}</p>
              `)
          )
          .addTo(map);
      });
    }
  }, [map, locations]);

  return (
    <div className="map-container" style={{ height: '500px', width: '100%' }}>
      <div id="map" style={{ height: '100%' }} />
    </div>
  );
};

export default Map;

