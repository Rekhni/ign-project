import partnersData from '../partnersData.json';
import { NavLink } from 'react-router-dom';
import Contacts from '../components/Contacts';


export default function Partners({ lang }) {
    const t = (ru, en, kz, zh) => (lang === 'ru' ? ru : lang === 'en' ? en : lang === 'kz' ? kz : zh);
    return (
        <div className='text-dark bg-white' style={{ fontFamily: 'Montserrat' }}>
            <div className="d-flex justify-content-center gap-3 align-items-center w-75 mx-auto text-center pt-3 pb-3">
                <hr className="bg-white" style={{ height: '5px', width: '30%'}} />
                <h1 style={{fontSize: '30px'}}>{t(
                    'Партнеры', 
                    'Our services', 
                    'Қызметтеріміз', 
                    '我们的服务'
                )}</h1>
                <hr className="bg-white" style={{ height: '5px', width: '30%'}}/>
            </div>
            <div className='d-flex flex-wrap justify-content-evenly w-75 gap-3 mx-auto' style={{ paddingBottom: '30px' }}>
                {partnersData.logos.map((logo) => (
                    <img src={`${import.meta.env.BASE_URL}${logo.slice(1)}`} height="150" alt="" />
                ))}
            </div>
            <hr className='text-dark my-0 mx-auto' style={{ height: '1px' }}/>
            <section id="contacts">
                <Contacts lang={lang}/>
            </section>
        </div>
    )
}