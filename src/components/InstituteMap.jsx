
import { useEffect, useRef } from 'react';

export default function InstituteMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    const DG = window.DG;
    if (!DG || mapRef.current) return;

    mapRef.current = DG.map('map', {
      center: [43.250602, 76.953002],
      zoom: 13,
    });

    DG.marker([43.250602, 76.953002])
      .addTo(mapRef.current)
      .bindPopup('Институт геологических наук');

    // Cleanup
    return () => {
      if (mapRef.current) {
        mapRef.current.remove(); // this destroys the map instance
        mapRef.current = null;
      }
    };
  }, []);

  return <div className='contacts-map w-100 w-xl-50' id="map" style={{ height: '450px' }}></div>;
}
