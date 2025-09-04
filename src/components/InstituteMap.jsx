import { useEffect, useRef } from 'react';

const DG_SCRIPT_ID = 'dg-maps-script';
const DG_SRC = 'https://maps.api.2gis.ru/2.0/loader.js?pkg=full';

export default function InstituteMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    const initMap = () => {
      if (cancelled || mapRef.current) return;
      const DG = window.DG;
      if (!DG) return; // script not fully initialized yet
      const el = document.getElementById('map');
      if (!el) return;

      const map = DG.map('map', { center: [43.250602, 76.953002], zoom: 13 });
      DG.marker([43.250602, 76.953002]).addTo(map).bindPopup('Институт геологических наук');
      mapRef.current = map;
    };

    // If DG is already available (cached), init immediately
    if (window.DG) {
      initMap();
    } else {
      // Inject the script once and init on load
      let script = document.getElementById(DG_SCRIPT_ID);
      if (!script) {
        script = document.createElement('script');
        script.id = DG_SCRIPT_ID;
        script.src = DG_SRC;
        script.async = true;
        script.defer = true;
        script.onload = initMap;
        document.head.appendChild(script);
      } else {
        // If the script tag exists but hasn’t fired load yet
        script.addEventListener('load', initMap, { once: true });
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

  return <div className="contacts-map w-100 w-xl-50" id="map" style={{ height: 450 }} />;
}
