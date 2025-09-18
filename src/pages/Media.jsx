import Contacts from '../components/Contacts';
import mediaData from '../mediaData.json';

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
        <div
        className="video-section w-75 mx-auto"
        style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            marginTop: "30px",
            marginBottom: "40px",
        }}
        >
        {mediaData.map((video, idx) => (
            <div
            key={idx}
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "300px", // same as iframe width
            }}
            >
            <iframe
                width="300"
                height="200"
                src={video}
                title={`Video-${idx}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                style={{
                    flex: "0 0 300px", // ✅ keeps Facebook video aligned too
                }}
                allowFullScreen
            ></iframe>
            </div>
        ))}
        </div>
            <hr className="bg-dark my-0 mx-auto" style={{ height: '2px', width: '100%' }}/>
            <section id="contacts">
                <Contacts lang={lang}/>
            </section>
        </div>
    )
}