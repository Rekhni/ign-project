import { useEffect, useRef } from 'react';

const DG_SCRIPT_ID = 'dg-maps-script';
const DG_SRC = 'https://maps.api.2gis.ru/2.0/loader.js?pkg=full';

export default function InstituteMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    const init = () => {
      if (cancelled || mapRef.current) return;
      const el = document.getElementById('map');
      if (!el || !window.DG) return;

      const map = window.DG.map('map', {
        center: [43.250602, 76.953002],
        zoom: 13,
      });

      window.DG.marker([43.250602, 76.953002])
        .addTo(map)
        .bindPopup('Институт геологических наук');

      mapRef.current = map;

      // Nudge layout if container was hidden initially
      setTimeout(() => {
        if (mapRef.current && mapRef.current.invalidateSize) {
          mapRef.current.invalidateSize();
        }
      }, 150);
    };

    const initWhenReady = () => {
      if (cancelled || mapRef.current) return;

      const DG = window.DG;
      if (!DG) return; // script not loaded yet

      // If DG is a thenable, wait; otherwise, init immediately
      if (typeof DG.then === 'function') {
        DG.then(() => {
          if (!cancelled) init();
        });
      } else {
        init();
      }
    };

    if (window.DG) {
      initWhenReady();
    } else {
      let script = document.getElementById(DG_SCRIPT_ID);
      if (!script) {
        script = document.createElement('script');
        script.id = DG_SCRIPT_ID;
        script.src = DG_SRC;
        script.async = true;
        script.defer = true;
        script.onload = initWhenReady;
        document.head.appendChild(script);
      } else {
        script.addEventListener('load', initWhenReady, { once: true });
      }
    }

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div
      id="map"
      className="contacts-map w-100 w-xl-50"
      style={{ height: 450, minHeight: 300 }}
    />
  );
}
