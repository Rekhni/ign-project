import { Tabs, Tab, Container } from 'react-bootstrap';
import scientistsData from '../scientistsData.json'
import { useParams } from 'react-router-dom';


export default function ScientistNavbar({ lang }) {
    const { id } = useParams();
    const scientist = scientistsData.find((item) => item.id.toString() === id);
    const quotes = scientist.quotes[lang].slice(1);
    const t = (ru, en, kz, zh) => (lang === 'ru' ? ru : lang === 'en' ? en : lang === 'kz' ? kz : zh);
  return (
    <Container className="my-4">
      <Tabs 
        defaultActiveKey="overview" 
        id="scientist-tabs" 
        className="w-75 mx-auto border-0 justify-content-evenly"
        style={{color: 'black'}}
     >
        <Tab eventKey="overview" title={`${t('Обзор', 'Overview', 'Шолу', '概览')}`}>
          <div 
            className="scientist-content mt-3 mx-auto"
            style={{
              border: "1px solid rgb(14, 106, 171)",
              borderRadius: "20px",
              maxHeight: '350px',
              overflowY: 'auto',
              padding: '20px 60px'
            }}
          >
            {scientist.review[lang].map((line, idx) => (
                <p key={idx}>{line}</p> 
            ))}
            <div className='scientist-quotes'>
                {quotes[0] !== "" && quotes.map((item, idx) => (
                    <p className='scientist-quote text-white rounded shadow w-75' style={{ fontSize: '15px', padding: '20px', backgroundColor: 'rgb(129, 181, 246)'}} key={idx}>{item}</p>
                ))}
            </div>
          </div>
        </Tab>
        <Tab eventKey="publications" title={`${t('Публикации', 'Publications', 'Жарияланымдар', '出版物')}`}>
          <div 
            className="scientist-content mt-3 mx-auto p-3"
            style={{
              border: "1px solid rgb(14, 106, 171)",
              borderRadius: "20px",
            }}
          >
            <ol style={{ maxHeight: '300px', overflowY: 'auto', paddingRight: '10px' }}>
              {scientist.publications[lang].map((publication, idx) => (
                  <li className='m-3' key={idx}>{publication}</li>
              ))}
            </ol>
          </div>
        </Tab>
        <Tab eventKey="projects" title={`${t('Проекты', 'Projects', 'Жобалар', '项目')}`}>
          <div 
            className="scientist-content mt-3 mx-auto p-3"
            style={{
              border: "1px solid rgb(14, 106, 171)",
              borderRadius: "20px",
              maxHeight: '350px',
              overflowY: 'auto',
              paddingRight: '10px'
            }}
          >
            <h3>{t('Активные проекты', 'Active Projects', 'Белсенді жобалар', '正在进行的项目')}</h3>
            {scientist.activeProjects[lang].map((proj, idx) => (
                <p key={idx}>{proj}</p>
            ))}
            <h3>{t('Завершенные проекты', 'Completed Projects', 'Аяқталған жобалар', '已完成的项目')}</h3>
            {scientist.finishedProjects[lang].map((proj, idx) => (
                <p key={idx}>{proj}</p>
            ))}
          </div>
        </Tab>
        <Tab eventKey="teaching" title={`${t('Преподавание', 'Teachings', 'Оқыту', '教学')}`}>
          <div 
            className="scientist-content mt-3 mx-auto p-3"
            style={{
              border: "1px solid rgb(14, 106, 171)",
              borderRadius: "20px",
            }}
          >
            <ul>
              {scientist.teachings[lang].map((item, idx) => (
                  <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </Tab>
        <Tab eventKey="awards" title={`${t('Награды', 'Awards', 'Марапаттар', '奖项')}`}>
          <div 
            className="scientist-content mt-3 mx-auto p-3"
            style={{
              border: "1px solid rgb(14, 106, 171)",
              borderRadius: "20px",
              maxHeight: '350px',
              overflowY: 'auto',
              paddingRight: '10px'
            }}
          >
            <ul className='d-flex flex-wrap gap-3 justify-content-center'>
              {scientist.achievements[lang].map((item, idx) => (
                <li className='text-white p-3 text-center' style={{backgroundColor: 'rgb(2, 158, 193)', listStyleType: 'none', borderRadius: '30px'}} key={idx}><i class="bi bi-award-fill"></i>{item}</li>
              ))}
            </ul>
          </div>
        </Tab>
        <Tab eventKey="media"  title={`${t('Медиа', 'Media', 'Медиа', '媒体')}`}>
          <div 
            className="mt-3 p-3"
            style={{
              borderRadius: "20px" 
               }}
          >
            <div id="carouselExampleIndicators" class="carousel slide mx-auto" style={{ maxWidth: '600px' }} data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                {scientist.media.map((img, idx) => (
                  <div className={`carousel-item ${idx === 0 ? 'active' : ''}`} key={idx}>
                    <img 
                      src={`${import.meta.env.BASE_URL}${img.slice(1)}`}  
                      className="d-block w-100"
                      style={{ objectFit: 'contain', maxHeight: '400px' }}
                      alt={`${scientist.name['en']}-${idx}`} 
                    />
                  </div>
                ))}
              </div>
              <button 
                class="carousel-control-prev" 
                type="button" 
                data-bs-target="#carouselExampleIndicators" 
                style={{ width: '5%', left: '100px' }} 
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button 
                class="carousel-control-next" 
                type="button" 
                data-bs-target="#carouselExampleIndicators" 
                data-bs-slide="next"
                style={{ width: '5%', right: '100px' }}
                >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </Tab>
      </Tabs>
    </Container>
  );
}
