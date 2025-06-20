import { NavLink } from 'react-router-dom';
import labsData from '../labsData.json';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar({ lang, onToggleLanguage }) {
  const t = (ru, en, kz, zh) => (lang === 'ru' ? ru : lang === 'en' ? en : lang === 'kz' ? kz : zh);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top text-white" style={{backgroundColor: 'rgb(0, 53, 118)', fontFamily: 'Montserrat', fontSize: '15px'}}>
      <div className="container-fluid" styles={{ padding: '0 50px' }}>
      <select
        className="form-select text-white"
        style={{ width: '75px', backgroundColor: 'rgb(0, 53, 118)' }}
        value={lang}
        onChange={(e) => onToggleLanguage(e.target.value)}
      >
        <option value="ru">RU</option>
        <option value="en">EN</option>
        <option value="kz">KZ</option>
        <option value="zh">CN</option>
      </select>
        {/* <NavLink className="navbar-brand fw-bold" to="/"><img src={logo} alt="Логотип" height="70"/></NavLink> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-4">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/ign-project/" end>
              {t('Главная', 'Home', 'Басты бет', '首页')}
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink 
                className="nav-link dropdown-toggle"
                to="#"
                id="aboutDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >{t('O нас', 'About us', 'Біз туралы', '关于我们')}
              
              </NavLink>
                <ul className="dropdown-menu gap-3" aria-labelledby="aboutDropdown" style={{backgroundColor: 'rgb(0, 53, 118)'}}>
                   <li><NavLink className="dropdown-item text-white" to="/history" style={{backgroundColor: 'rgb(0, 53, 118)'}}>
                    {t('История', 'History', 'Тарих', '历史')}
                    </NavLink></li>
                    <li><NavLink className="dropdown-item text-white" to="/management" style={{backgroundColor: 'rgb(0, 53, 118)'}}>
                      {t('Руководство', 'Management', 'Басшылық', '管理层')}
                      </NavLink></li>
                    <li><NavLink className="dropdown-item text-white" to="/institute-structure" style={{backgroundColor: 'rgb(0, 53, 118)'}}>
                      {t('Структура Института', 'Institute Structure', 'Институт құрылымы', '研究所结构')}
                      </NavLink></li>
                    <li><NavLink className="dropdown-item text-white" to="/scientific-achievements" style={{backgroundColor: 'rgb(0, 53, 118)'}}>
                      {t('Научные достижения', 'Scientific Achievements', 'Ғылыми жетістіктер', '科学成果')}
                    </NavLink></li>
                    <li><NavLink className="dropdown-item text-white" to="/partners" style={{backgroundColor: 'rgb(0, 53, 118)'}}>
                      {t('Партнеры', 'Partners', 'Серіктестер', '合作伙伴')}
                      </NavLink></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink 
                className="nav-link dropdown-toggle" 
                to="#"
                id="labsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {t('Научные лаборатории', 'Laboratories', 'Зертханалар', '实验室')}
                </NavLink>
                <ul className="dropdown-menu gap-3" aria-labelledby="labsDropdown" style={{backgroundColor: 'rgb(0, 53, 118)'}}>
                    {labsData.map((lab) => (
                      <li><NavLink className="dropdown-item text-white" to={`/laboratories/${lab.id - 1}`} style={{backgroundColor: 'rgb(0, 53, 118)'}}>
                        {lab.name[lang]}
                      </NavLink></li>
                    ))}
                </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink 
                className="nav-link dropdown-toggle" 
                to="#"
                id="libraryDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >
                    {t('Библиотека и Архив', 'Library & Archive', 'Кітапхана және мұрағат', '图书馆与档案馆')}
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="libraryDropdown" style={{backgroundColor: 'rgb(0, 53, 118)'}}>
                   <li><NavLink className="dropdown-item text-white" to="/library" style={{backgroundColor: 'rgb(0, 53, 118)'}}>
                    {t('Библиотека', 'Library', 'Кітапхана', '图书馆')}
                    </NavLink></li>
                   <li><NavLink className="dropdown-item text-white" to="/archive" style={{backgroundColor: 'rgb(0, 53, 118)'}}>
                    {t('Архив', 'Archive', 'Мұрағат', '档案馆')}
                    </NavLink></li>
                </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/museum">
                {t('Музей', 'Museum', 'Мұражай', '博物馆')}
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link text-white" to="/scientists-gallery">
                {t('Галерея ученых', 'Scientists', 'Ғалымдар', '科学家画廊')}
                </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/media">
                {t('Медиа', 'Media Gallery', 'Медиа', '媒体画廊')}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/news">
                {t('Новости', 'News', 'Жаңалықтар', '新闻')}
                </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contacts">
                {t('Контакты', 'Contacts', 'Байланыс', '联系方式')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
