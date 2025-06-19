import { useEffect } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

const PartnersSlider = ({ logos }) => {
  useEffect(() => {
    const glide = new Glide('.glide', {
      type: 'carousel',
      perView: 5,
      focusAt: 'center',
      autoplay: 2000,
      gap: 20,
      breakpoints: {
        1024: { perView: 4 },
        768: { perView: 3 },
        480: { perView: 2 },
      }
    });

    glide.mount();

    // Cleanup
    return () => {
      glide.destroy();
    };
  }, []);

  return (
    <div className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides d-flex text-center">
          {logos.logos.map((logo, index) => (
            <li className="glide__slide" key={index}>
              
              <img src={`${import.meta.env.BASE_URL}${logo.slice(1)}`} alt={`Partner ${index}`} style={{ maxWidth: '200px', maxHeight: '80px', objectFit: 'contain' }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PartnersSlider;
