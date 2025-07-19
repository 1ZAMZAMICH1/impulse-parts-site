import React, { useEffect } from 'react';

const YandexMap = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.async = true;
    script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A4e631aa427172a7ef3e930ab85aba3c8f636511de1429b4e3173175a70aab2ca&width=100%&height=100%&lang=ru_RU&scroll=true';
    
    const mapContainer = document.getElementById('yandex-map-container');
    mapContainer.appendChild(script);

    return () => {
      // Очищаем контейнер при размонтировании компонента, чтобы избежать дублирования
      while (mapContainer.firstChild) {
        mapContainer.removeChild(mapContainer.firstChild);
      }
    };
  }, []);

  return <div id="yandex-map-container" style={{ width: '100%', height: '100%' }} />;
};

export default YandexMap;