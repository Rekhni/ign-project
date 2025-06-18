import smallLogo from '../assets/logo.svg';


export default function Footer({ lang }) {
    const t = (ru, en, kz, zh) => (lang === 'ru' ? ru : lang === 'en' ? en : lang === 'kz' ? kz : zh);
    return (
        <div className='footer-content d-lg-flex justify-content-between align-items-center p-3' style={{backgroundColor: 'rgb(0, 53, 118)', padding: '0 30px', fontFamily: 'Montserrat'}}>
            <img className='footer-logo' src={smallLogo} alt="small-logo" height="150"/>
            <p className='footer-text text-white fw-bold'>
                {t('Институт геологических наук им. К. И. Сатпаева',
                    'Satpayev Institute of geological sciences',
                    'Қ.И.Сәтбаев атындағы Геологиялық ғылымдар институты',
                    '萨特帕耶夫地质科学研究所',
                )}
            </p>
            <div className='footer-logos d-lg-flex gap-lg-3'>
                <a href="https://www.facebook.com/profile.php?id=61577074686525&_rdc=2&_rdr#" className='fs-lg-4'><i class="bi bi-facebook text-white fs-4"></i></a>
                <a href="mailto: Info@ign.kz"><i class="bi bi-envelope-at-fill text-white fs--2 fs-4"></i></a>
                <a href="https://www.instagram.com/instituteofgeologyandsciene/"><i class="bi bi-instagram text-white fs-4"></i></a>
                <a href="https://wa.me/7007473891?text=Здравствуйте%2C+у+меня+есть+вопрос"><i class="bi bi-whatsapp text-white fs-4"></i></a>
                <a href="https://www.youtube.com/@satbayev-geo-university"><i class="bi bi-youtube text-white fs-4"></i></a>
            </div>
        </div>
    )
}
