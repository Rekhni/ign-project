import newsData from '../newsData.json';
import { useParams } from 'react-router-dom';
import Contacts from '../components/Contacts';


export default function NewsDetail({ lang }) {
    const { id } = useParams();
  const newsItem = newsData.find((item) => item.id.toString() === id);

      if (!newsItem) {
    return <div className="container mt-4">Новость не найдена / News not found</div>;
    }

  return (
    <div className="py-5 text-dark bg-white" style={{ fontFamily: 'Montserrat', lineHeight: '1.7'}}>
      {/* Title + Date */}
      <div className="text-center mb-4">
        <h1 className="news-title fw-bold">
          {newsItem.title[lang]}
        </h1>
        <p className="text-dark">{newsItem.date}</p>
      </div>

      {/* Bootstrap carousel */}
      {newsItem.images?.length > 0 && (
        <div id="newsImageCarousel" className="carousel slide mb-5 mx-auto" data-bs-ride="carousel" style={{ width: '90%' }}>
          <div className="carousel-inner rounded shadow">
            {newsItem.images.map((img, index) => (
              <div
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
                key={index}
              >
                <img 
                  loading="lazy"
                  src={`${import.meta.env.BASE_URL}${img.slice(1)}`}
                  className="d-block mx-auto w-75 h-75"
                  alt={`news-${index}`}
                  style={{ height: '480px', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>

          {/* Controls */}
          {newsItem.images.length > 1 && (
            <>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#newsImageCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#newsImageCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </>
          )}
        </div>
      )}

      {/* Article body */}
      <div className="mx-auto w-75" style={{ fontSize: '18px', whiteSpace: 'pre-line', marginBottom: '30px' }}>
        {newsItem.content[lang].map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>
      <hr className='text-dark my-0 mx-auto' style={{ height: '1px' }}/>
      <section id="contacts">
          <Contacts lang={lang}/>
      </section>
    </div>
  );
}