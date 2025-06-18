import Contacts from '../components/Contacts';

export default function Media({ lang }) {
    const t = (ru, en, kz, zh) => (lang === 'ru' ? ru : lang === 'en' ? en : lang === 'kz' ? kz : zh);
    return (
        <div className="d-flex flex-column justify-content-center w-100 text-dark bg-white" style={{fontFamily: 'Montserrat', paddingTop: '30px'}}>
            <div className="d-flex justify-content-center align-items-center gap-3">
                <hr className="bg-white" style={{ height: '5px', width: '30%'}}/>
                <h1>
                {t('Медиа', 'Media', 'Медиа', '媒体画廊')}
                </h1>
                <hr className="bg-white" style={{ height: '5px', width: '30%'}}/>
            </div>
            <div className="video-section  w-75 mx-auto" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '30px', marginBottom: '40px' }}>
                <iframe
                    width="500"
                    height="300"
                    src="https://www.youtube.com/embed/W594R6QGr9o"
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <iframe
                    width="500"
                    height="300"
                    src="https://www.youtube.com/embed/AV1XGnSXbYo"
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <hr className="bg-dark my-0 mx-auto" style={{ height: '2px', width: '100%' }}/>
            <section id="contacts">
                <Contacts lang={lang}/>
            </section>
        </div>
    )
}