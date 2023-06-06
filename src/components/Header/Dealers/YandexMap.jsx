import React, { useEffect, useRef } from 'react';

function YandexMap({ apiKey, selectedAddress, addresses }) {
  const mapRef = useRef(null);
  const placemarksRef = useRef([]);

  useEffect(() => {
    let map;
    let placemarks = [];

    const loadMap = async () => {
      try {
        if (!window.ymaps && !window.ymapsReady) {
          await loadScript(
            `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`
          );
          window.ymapsReady = true;
        }

        if (window.ymaps && !map) {
          window.ymaps.ready(() => {
            map = new window.ymaps.Map(mapRef.current, {
              center: [55.751574, 37.573856],
              zoom: 10
            });

            addPlacemarks();
          });
        }
      } catch (error) {
        console.error('Не удалось загрузить скрипт Yandex Maps:', error);
      }
    };

    const addPlacemarks = () => {
      clearPlacemarks();

      for (let i = 0; i < addresses.length; i++) {
        const address = addresses[i];
        const geocodeUrl = `https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&format=json&geocode=${address}`;

        fetch(geocodeUrl)
          .then(response => response.json())
          .then(data => {
            const coordinates = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
            const lat = parseFloat(coordinates[1]);
            const lng = parseFloat(coordinates[0]);
            const placemark = new window.ymaps.Placemark([lat, lng], {
              balloonContent: address
            });
            placemarks.push(placemark);
            map.geoObjects.add(placemark);

            placemark.events.add('click', () => {
              map.setCenter(placemark.geometry.getCoordinates(), 15);
            });
          })
          .catch(error => {
            console.error(`Ошибка геокодирования адреса "${address}":`, error);
          });
      }

      placemarksRef.current = placemarks;
    };

    const clearPlacemarks = () => {
      placemarks.forEach(placemark => map.geoObjects.remove(placemark));
      placemarks = [];
    };

    const loadScript = (url) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    loadMap();
  }, [apiKey, addresses]);

  useEffect(() => {
    if (selectedAddress && mapRef.current) {
      const selectedPlacemark = placemarksRef.current.find(
        placemark => placemark.properties.get('balloonContent') === selectedAddress
      );

      if (selectedPlacemark) {
        selectedPlacemark.events.fire('click');
      }
    }
  }, [selectedAddress]);

  return <div id="map" ref={mapRef} style={{ width: '800px', height: '600px' }}></div>;
}

export default YandexMap;
