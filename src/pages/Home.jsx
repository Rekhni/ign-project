
import logo from '../assets/logo.svg';
import backgroundImg2 from '../assets/bg-img5.png';
import Contacts from '../components/Contacts.jsx';
import newsData from '../newsData.json';
import museumData from '../museumData.json';
import { NavLink } from 'react-router-dom';
import PartnersSlider from '../components/PartnersSlider.jsx';
import partnersData from '../partnersData.json';

export default function Home({ lang }) {
    const t = (ru, en, kz, zh) => (lang === 'ru' ? ru : lang === 'en' ? en : lang === 'kz' ? kz : zh);
    return (
      <div className="home-page w-100" style={{ fontFamily: "Montserrat" }}>
        <div
          className="hero-image"
          style={{
            backgroundColor: 'rgb(1, 44, 97)',
            height: "200px",
            paddingTop: '25px'
          }}
        >
          <div className='d-flex justify-content-evenly center align-items-center px-3' style={{ fontFamily: 'Montserrat' }}>
            <img
              src={logo}
              alt=""
              className="z-2 mb-3 m-0 hero-image-logo"
              height="150"
              style={{ color: 'white', paddingRight: '30px' }}
            />
            <div
              className='z-2 m-0 hero-image-logo-divider'
              style={{
                width: '2px',
                height: '100px',
                backgroundColor: 'white', // or any color
                margin: '0 auto'
              }}
            ></div>
            <p className='logo-text text-white w-75 z-2' style={{marginLeft: '15px', fontSize: 'clamp(14px, 4vw, 20px)', paddingLeft: '30px'}}>
              {t(
                'Институт геологических наук им. К. И. Сатпаева',
                'Kanysh Satpayev Institute of geological sciences',
                'Қ.И.Сәтбаев атындағы Геологиялық ғылымдар институты',
                '萨特帕耶夫地质科学研究所'
              )}
            </p>
                <div className="w-100">
            </div>
            <div
              className="mx-auto d-flex justify-content-center z-2 w-100 w-lg-50 mt-3"
            >
              <button
                className="text-dark"
                style={{ fontSize: 'clamp(14px, 4vw, 20px)', backgroundColor: 'rgb(255, 255, 255)', padding: "10px 20px", borderRadius: "20px" }}
              >
                <a href="#form" className='text-dark text-decoration-none'>
                    {t(
                      'Связаться с нами',
                      'Contact Us',
                      'Байланысу',
                      '联系我们'
                    )}
                </a>
              </button>
            </div>
          </div>
          <div>
          </div>
        </div>
        <div className='text-dark'>
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide w-100 h-75"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {newsData.map((news, index) => (
                <NavLink to={`/news/${news.id}`}> 
                  <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                    <img
                      src={`${import.meta.env.BASE_URL}${news.images[0].slice(1)}`}
                      className="d-block w-100 carousel-img"
                      alt={`news-${index}`}
                      style={{ filter: "brightness(60%)" }}
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>{news.title[lang]}</h5>
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="justify-content-center w-100 text-dark" style={{ padding: '30px 0', backgroundColor: 'rgb(0, 53, 118)', fontFamily: 'Montserrat'}}>
          <div className="d-flex justify-content-center flex-wrap p-4 gap-3 gap-lg-5">
            <div className="shadow p-3 rounded text-center bg-white hover-shadow" style={{ minWidth: '150px', transition: '0.3s' }}>
              <h3 className="mb-0"><NavLink className='text-decoration-none text-dark' to="/services">{t('Услуги', 'Services', 'Қызметтер', '服务')}</NavLink></h3>
            </div>
            <div className="shadow p-3 rounded text-center bg-white hover-shadow" style={{ minWidth: '150px', transition: '0.3s' }}>
              <h3 className="mb-0"><NavLink className='text-decoration-none text-dark' to="#">GeoSpark</NavLink></h3>
            </div>
            <div className="shadow p-3 rounded text-center bg-white hover-shadow" style={{ minWidth: '150px', transition: '0.3s' }}>
              <h3 className="mb-0"><NavLink className='text-decoration-none text-dark' to="/museum">{t(
              "Музей",
              "Museum",
              "Мұражай",
              '博物馆'
            )}</NavLink></h3>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center w-100 text-dark bg-white" style={{fontFamily: 'Montserrat', paddingTop: '30px'}}>
            <div className="d-flex justify-content-center align-items-center gap-3 w-75 mx-auto">
                <hr className="bg-white rounded" style={{ height: '5px', width: '30%'}}/>
                <h1 className='fs-3 fs-lg-8'>
                {t('Медиа', 'Media', 'Медиа', '媒体画廊')}
                </h1>
                <hr className="bg-white rounded" style={{ height: '5px', width: '30%'}}/>
            </div>
            <div className="video-section w-75 mx-auto" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '30px', marginBottom: '40px' }}>
                <iframe
                    className="w-100" 
                    style={{ maxWidth: '500px', aspectRatio: '16/9' }}
                    src="https://www.youtube.com/embed/W594R6QGr9o"
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <iframe
                    className="w-100" 
                    style={{ maxWidth: '500px', aspectRatio: '16/9' }}
                    src="https://www.youtube.com/embed/AV1XGnSXbYo"
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
        <div className="d-flex flex-column justify-content-center w-100 text-white p-3" style={{backgroundColor: 'rgb(0, 53, 118)', fontFamily: 'Montserrat'}}>
            <div className="d-flex justify-content-center align-items-center gap-3 w-75 mx-auto">
                <hr className="bg-white rounded" style={{ height: '5px', width: '30%'}}/>
                <h1 className='fs-sm-3'>
                    {t(
                      "Музей",
                      "Museum",
                      "Мұражай",
                      '博物馆'
                    )}
                </h1>
                <hr className="bg-white rounded" style={{ height: '5px', width: '30%'}}/>
            </div>
          <div
            id="carouselExampleAutoplaying2"
            className="carousel slide w-75"
            data-bs-ride="carousel"
            style={{ margin: "30px auto", maxHeight: '500px' }}
          >
            <div className="carousel-inner">
              {museumData[0].images.map((img, index) => (
                <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                  <NavLink to="/museum">
                    <img
                      src={`${import.meta.env.BASE_URL}${img.slice(1)}`}
                      className="d-block w-100 carousel-img"
                      alt={`museum-${index}`}
                      style={{ filter: "brightness(60%)" }}
                    />
                    <div className="carousel-caption d-none d-md-block fs-sm-2 fs-lg-5">
                      <h5>{t(
                        'Нажмите на картину, чтобы подробнее узнать о музее',
                        'Click on the picture to learn more about the museum',
                        'Суретті басып, музей туралы толығырақ біліңіз',
                        '点击图片以了解更多关于博物馆的信息'
                      )}</h5>
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying2"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying2"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div style={{ margin: '40px 0' }}>
          <PartnersSlider logos={partnersData}/>
        </div>
        <section id="form"
          style={{
            position: 'relative',
            backgroundImage: `url(${backgroundImg2})`,
            backgroundSize: 'cover', // or 'contain' or specific px
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            padding: '50px 0',
          }}
        >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(4, 53, 82, 0.66)', // dark green, 60% opacity
                zIndex: 1,
              }}
            ></div>
            <form 
              action="https://formspree.io/f/xldnbery"
              method="POST"
              className="w-75 mx-auto bg-white p-4 rounded shadow" 
              style={{ position: 'relative', zIndex: 2 }}
            >
              <h1>{t(
                'Свяжитесь с нами!',
                'Contact us!',
                'Бізбен байланысыңыз!',
                '联系我们!'
              )}</h1>
              <div className="mb-3">
                <label htmlFor="inputName" className="form-label">{t('Имя','Name','Атыңыз', '您的姓名"')}</label>
                <input type="text" className="form-control" id="inputName" name="name" required/>
              </div>
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">{t('Почта','Email', 'Пошта', '您的电子邮件')}</label>
                <input type="email" className="form-control" id="inputEmail" name="email" required/>
              </div>
              <div className="mb-3">
                <label htmlFor="inputPhone" className="form-label">{t('Телефон','Phone', 'Телефон', '电话')}</label>
                <input type="tel" className="form-control" id="inputPhone" name="phone" placeholder="+7 777 123 4567" />
              </div>
              <button type="submit" className="btn text-white" style={{backgroundColor: 'rgb(37, 122, 161)'}}>
                  {t('Отправить','Submit', 'Жіберу', '提交')}
                </button>
            </form>
        </section>
        <section id="contacts">
          <Contacts lang={lang}/>
        </section>
      </div>
    );
}