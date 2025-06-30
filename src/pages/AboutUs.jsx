import Contacts from '../components/Contacts';
import aboutUsImg from '../assets/about-us.webp';
import AboutUsNavbar from '../components/AboutUsNavbar';

export default function AboutUs({ lang }) {
    const t = (ru, en, kz, zh) => (lang === 'ru' ? ru : lang === 'en' ? en : lang === 'kz' ? kz : zh);
    return (
        <div className='text-dark bg-white p-3 h-100' style={{ fontFamily: 'Montserrat' }}>
            <div
                className='d-flex w-100 mx-auto text-white fw-bold align-items-center position-relative'
                style={{
                    backgroundImage: `url(${aboutUsImg})`,
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: '500px',
                    borderRadius: '20px 20px 0 0',
                    overflow: 'hidden'
                }}
            >   
                {/* Dark overlay */}
                <div 
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.57)', // Adjust opacity here
                        borderRadius: '20px 20px 0 0',
                        zIndex: 1
                    }}
                />

                <div style={{ zIndex: 2 }}>
                    <h3 className='history-quote'>
                        {t(
                            "“Геологическая наука развивается в Казахстане на основе творческого содружества с практикой, на базе практики и для практики”",
                            "“Geological science is developing in Kazakhstan based on creative cooperation with practice, on the basis of practice, and for practice.”",
                            "«Геологиялық ғылым Қазақстанда тәжірибемен шығармашылық ынтымақтастыққа, тәжірибе негізінде және тәжірибе үшін дамып келеді.»",
                            "“哈萨克斯坦的地质科学在与实践的创造性合作基础上，在实践的基础上，为实践而发展。”"
                        )}</h3>
                </div>
            </div>
            <div className='w-100 mx-auto'>
                <AboutUsNavbar lang={lang}/>
            </div>
            <hr className='text-dark my-0 mx-auto' style={{ height: '1px' }}/>
            <section id="contacts">
                <Contacts lang={lang}/>
            </section>
        </div>
    )

}