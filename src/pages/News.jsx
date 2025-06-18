import newsData from '../newsData.json';
import { NavLink } from 'react-router-dom';
import Contacts from '../components/Contacts';


export default function News({ lang }) {
    const t = (ru, en, kz, zh) => (lang === 'ru' ? ru : lang === 'en' ? en : lang === 'kz' ? kz : zh);
    return (
        <div className='text-dark bg-white' style={{ fontFamily: 'Montserrat' }}>
            <div className="d-flex justify-content-center gap-3 align-items-center w-75 mx-auto text-center pt-3 pb-3">
                <hr className="bg-white" style={{ height: '5px', width: '30%'}} />
                <h1>
                    {t('Новости', 'News', 'Жаңалықтар', '新闻')}
                </h1>
                <hr className="bg-white" style={{ height: '5px', width: '30%'}}/>
            </div>
            <div className='d-flex flex-wrap justify-content-evenly w-75 gap-3 mx-auto' style={{ paddingBottom: '30px' }}>
                {newsData.map((news) => (
                    <div className="card position-relative text-white" style={{width: '17rem', height: '320px', backgroundColor: 'rgb(0, 53, 118)'}} key={news.id}>
                            <NavLink to={`/news/${news.id}`} className="text-decoration-none text-white">
                                <img src={news.images[0]} className="card-img-top" alt="news-img" style={{height: '180px'}} />
                                <div className="card-body">
                                    <p className="card-text">
                                        {news.title[lang]}
                                    </p>
                                </div>
                                <p className='text-white position-absolute' style={{bottom: '0', right: '10px'}}>{news.date}</p>
                            </NavLink>

                    </div>
                ))}
            </div>
            <hr className='text-dark my-0 mx-auto' style={{ height: '1px' }}/>
            <section id="contacts">
                <Contacts lang={lang}/>
            </section>
        </div>
    )
}