import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './map.css'; // Asegúrate de tener el archivo CSS

// Configuración de Mapbox (asegúrate de reemplazar 'TU_ACCESS_TOKEN' con tu propio token)
mapboxgl.accessToken = 'pk.eyJ1IjoiZGllZ29lLTkxIiwiYSI6ImNtOWJrMjlycTA4OHMya3EwMDRxa3Q5MjAifQ.sPYU07ZfQj9CgyuLVkabaA'; // Reemplaza con tu token real

// Componente Map que será nuestro mapa
const Map = () => {
  useEffect(() => {
    // Crear el mapa
    const map = new mapboxgl.Map({
      container: 'map', // El ID del div que contendrá el mapa
      style: 'mapbox://styles/mapbox/streets-v11', // Estilo del mapa
      center: [-74.5, 40], // Coordenadas iniciales (longitud y latitud)
      zoom: 9, // Nivel de zoom inicial
    });

    // Crear un marcador
    new mapboxgl.Marker()
      .setLngLat([-74.5, 40]) // Coordenadas del marcador
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // Creamos un popup con un pequeño desplazamiento
          .setHTML('<h3>Tu Recompensa</h3><p>¡Gana monedas al usar este mapa!</p>') // Contenido HTML del popup
      )
      .addTo(map); // Añadir el marcador al mapa

    // Añadir controles de navegación al mapa
    map.addControl(new mapboxgl.NavigationControl());
  }, []);

  // Renderizamos el mapa en un div con id 'map'
  return <div id="map" className="map-container" style={{ height: '500px' }}></div>;
};

export default Map;

