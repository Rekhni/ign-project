
import logo from '../assets/logo.svg';
import backgroundImg2 from '../assets/bg-img5.png';
import Contacts from '../components/Contacts.jsx';
import { NavLink } from 'react-router-dom';
import PartnersSlider from '../components/PartnersSlider.jsx';
import partnersData from '../partnersData.json';
import mainBgImg from '../assets/main-bg.png';
export default function Home({ lang }) {
    const t = (ru, en, kz, zh) => (lang === 'ru' ? ru : lang === 'en' ? en : lang === 'kz' ? kz : zh);
    return (
      <div className="home-page w-100" style={{ fontFamily: "Montserrat" }}>
        <div
          className="hero-image"
          style={{
            backgroundColor: "rgb(1, 44, 97)",
            paddingTop: "25px",
          }}
        >
          <div
            className="main-header d-flex justify-content-evenly center align-items-center"
            style={{ fontFamily: "Montserrat" }}
          >
            <img
              src={logo}
              alt=""
              className="z-2 m-0 hero-image-logo"
              height="200"
              style={{ color: "white", paddingRight: "30px" }}
            />
            <div
              className="z-2 m-0 hero-image-logo-divider"
              style={{
                width: "2px",
                height: "100px",
                backgroundColor: "white", // or any color
                margin: "0 auto",
              }}
            ></div>
            <p
              className="logo-text text-white w-100 z-2"
              style={{
                marginLeft: "15px",
                fontSize: "clamp(14px, 4vw, 20px)",
                paddingLeft: "30px",
              }}
            >
              {t(
                "Институт геологических наук имени К. И. Сатпаева",
                "Kanysh Satpayev Institute of geological sciences",
                "Қ.И.Сәтбаев атындағы Геологиялық ғылымдар институты",
                "萨特帕耶夫地质科学研究所"
              )}
            </p>
            <div className="w-100"></div>
            <div className=" mx-auto d-flex justify-content-center z-2 w-100 w-lg-50 mt-3">
              <button className="button-33" role="button">
                <a href="#form" className="text-dark text-decoration-none">
                  {t("Связаться с нами", "Contact Us", "Байланысу", "联系我们")}
                </a>
              </button>
            </div>
          </div>
          <div></div>
        </div>
        <div style={{ position: 'relative' }}>
              <img src={mainBgImg} alt="main-img"  className='w-100'/>
                <div
                  className='main-img-overlay'
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 21, 64, 0.5)', // dark-blue with 50% opacity
                    zIndex: 1
                  }}
                ></div>

        </div>
        <div
          className="justify-content-center w-100 text-dark"
          style={{
            padding: "30px 0",
            backgroundColor: "rgb(0, 53, 118)",
            fontFamily: "Montserrat",
          }}
        >
          <div className="d-flex justify-content-center flex-wrap p-4 gap-3 gap-lg-5">
            <NavLink
              to="/services"
              className="button-92 text-decoration-none"
              style={{ display: "block" }}
            >
              <div
                className=" rounded d-flex bg-white justify-content-center align-items-center position-relative z-1"
                style={{
                  borderRadius: "20px 20px 0 0",
                  overflow: "hidden",
                  height: "100%", // optional: set height if needed
                  width: "100%", // optional: set width if needed
                }}
              >
                {/* Centered text */}
                <div
                  style={{
                    zIndex: 2,
                    position: "relative",
                    color: "rgb(0, 53, 118)"
                  }}
                >
                  {t("Услуги", "Services", "Қызметтер", "服务")}
                </div>
              </div>
            </NavLink>

            <NavLink
              to="#"
              className="button-92 text-decoration-none"
              style={{ display: "block" }}
            >
              <div
                className=" rounded d-flex bg-white justify-content-center align-items-center position-relative z-1"
                style={{
                  borderRadius: "20px 20px 0 0",
                  overflow: "hidden",
                  height: "100%", // optional: set height if needed
                  width: "100%",
                  color: "rgb(0, 53, 118)"
                }}
              >
                {/* Centered text */}
                <div
                  style={{
                    zIndex: 2,
                    position: "relative",
                    color: "rgb(0, 53, 118)"
                  }}
                >
                  GeoSpark
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/museum"
              className="button-92 text-decoration-none"
              style={{ display: "block" }}
            >
              <div
                className=" rounded d-flex bg-white justify-content-center align-items-center position-relative z-1"
                style={{
                  borderRadius: "20px 20px 0 0",
                  overflow: "hidden",
                  height: "100%", // optional: set height if needed
                  width: "100%", // optional: set width if needed
                }}
              >
                {/* Centered text */}
                <div
                  style={{
                    zIndex: 2,
                    position: "relative",
                    color: "rgb(0, 53, 118)"
                  }}
                >
                  {t("Музей", "Museum", "Мұражай", "博物馆")}
                </div>
              </div>
            </NavLink>
          </div>
        </div>
        {/* <div className="d-flex flex-column justify-content-center w-100 text-dark bg-white" style={{fontFamily: 'Montserrat', paddingTop: '30px'}}>
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
        </div> */}
        <div style={{ margin: "40px 0" }}>
          <PartnersSlider logos={partnersData} />
        </div>
        <section
          id="form"
          style={{
            position: "relative",
            backgroundImage: `url(${backgroundImg2})`,
            backgroundSize: "cover", // or 'contain' or specific px
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            padding: "50px 0",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(4, 53, 82, 0.66)", // dark green, 60% opacity
              zIndex: 1,
            }}
          ></div>
          <form
            action="https://formspree.io/f/xldnbery"
            method="POST"
            className="w-75 mx-auto bg-white p-4 rounded shadow"
            style={{ position: "relative", zIndex: 2 }}
          >
            <h1>
              {t(
                "Свяжитесь с нами!",
                "Contact us!",
                "Бізбен байланысыңыз!",
                "联系我们!"
              )}
            </h1>
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label">
                {t("Имя", "Name", "Атыңыз", '您的姓名"')}
              </label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                name="name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputEmail" className="form-label">
                {t("Почта", "Email", "Пошта", "您的电子邮件")}
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                name="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputPhone" className="form-label">
                {t("Телефон", "Phone", "Телефон", "电话")}
              </label>
              <input
                type="tel"
                className="form-control"
                id="inputPhone"
                name="phone"
                placeholder="+7 777 123 4567"
              />
            </div>
            <button
              type="submit"
              className="btn text-white"
              style={{ backgroundColor: "rgb(37, 122, 161)" }}
            >
              {t("Отправить", "Submit", "Жіберу", "提交")}
            </button>
          </form>
        </section>
        <section id="contacts">
          <Contacts lang={lang} />
        </section>
      </div>
    );
}