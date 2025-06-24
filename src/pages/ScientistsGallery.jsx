import scientistsData from '../scientistsData.json'
import { NavLink } from 'react-router-dom';
import Contacts from '../components/Contacts';

export default function ScientistsGallery({ lang }) {
    const t = (ru, en, kz, zh) => (lang === 'ru' ? ru : lang === 'en' ? en : lang === 'kz' ? kz : zh);
    return (
        <div className='text-dark bg-white' style={{ fontFamily: 'Montserrat' }}>
            <div className="d-flex justify-content-center gap-3 align-items-center w-75 mx-auto text-center pt-3 pb-3">
                <hr className="bg-white" style={{ height: '5px', width: '30%'}} />
                <h1>
                    {t('Ученые', 'Scientists', 'Ғалымдар', '科学家')}
                </h1>
                <hr className="bg-white" style={{ height: '5px', width: '30%'}}/>
            </div>
            <div className='d-flex flex-wrap justify-content-evenly w-75 gap-3 mx-auto' style={{ paddingBottom: '30px' }}>
                {scientistsData.map((scientist) => (
                    <div className="scientist-card card position-relative text-white shadow border-white" style={{boxShadow: '0 4px 10px rgba(85, 85, 217, 0.71)', backgroundColor: 'rgb(0, 53, 118)'}} key={scientist.id}>
                            <NavLink to={`/scientists-gallery/${scientist.id}`} className="text-decoration-none text-white">
                                <img src={`${import.meta.env.BASE_URL}${scientist.image.slice(1)}`} className="card-img-top scientist-image object-cover" alt="news-img" height="280" />
                                <div className="card-body">
                                    <p className="card-text">
                                        {scientist.name[lang]}
                                    </p>
                                    <p style={{ fontSize: '12px' }}>
                                        {scientist.title[lang].length > 10 ? scientist.title[lang].slice(0, 55) + '...' : scientist.title[lang]}
                                    </p>
                                </div>
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