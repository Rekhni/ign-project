import managementData from '../managementData.json';
import Contacts from '../components/Contacts';
import ManagementNavbar from '../components/ManagementNavbar';
import linkedinLogo from '../assets/linkedin.png';
import clarivateLogo from '../assets/clarivate.png';
import googleScholarLogo from '../assets/google-scholar.png';
import scopusLogo from '../assets/scopus.png';
import researchGateLogo from '../assets/research-gate.png';
import libraryRuLogo from '../assets/library-ru.png';
import { NavLink } from 'react-router-dom';


export default function Management({ lang }) {
    // const t = (ru, en, kz, zh) => (lang === 'ru' ? ru : lang === 'en' ? en : lang === 'kz' ? kz : zh);

    return (
      <div className='text-dark bg-white' style={{fontFamily: 'Montserrat'}}>
        <div className="d-lg-flex w-75 mx-auto justify-content-center" style={{ paddingTop: "30px", gap: '30px' }}>
            <div className='text-center'>
              
              <img src={`${import.meta.env.BASE_URL}${managementData.image.slice(1)}`} alt={managementData.name} height="300" className='rounded'/>
            </div>
            <div className="management-descr w-lg-50">
              <h1>{managementData.name[lang]}</h1>
              <p className='fs-lg-4'>{managementData.title[lang]}</p>
              {managementData.moreTitles[lang].map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
              <div className="management-spec-tags d-flex flex-wrap" style={{fontSize: '15px'}}>
                {managementData.specTags[lang].split('\n').map((tag, idx) => (
                  <p className="text-dark rounded" style={{backgroundColor: 'rgb(148, 216, 248)', padding: '5px 8px', fontSize: '12px', marginRight: '15px'}} key={idx} >{tag}</p>
                ))}
              </div>
              <blockquote>{managementData.quotes[lang][0]}</blockquote>
              <cite>{managementData.name[lang]}</cite>
              {/* {managementData.quotes[lang][0] !== '' ? <p className='p-3' style={{borderRadius: '30px', backgroundColor: 'rgb(239, 227, 188)'}} >{managementData.quotes[lang][0]}</p> : null} */}
            </div>
        </div>
        <div className='d-flex flex-wrap  justify-content-evenly align-items-center'>
          <NavLink to="https://www.scopus.com/authid/detail.uri?authorId=57211373829"><img height={30} width={100} src={scopusLogo} alt="scopus-logo" /></NavLink>
          <NavLink to="https://scholar.google.ru/citations?hl=ru&user=rGBK2noAAAAJ"><img height={40} width={180} src={googleScholarLogo} alt="google-scholar-logo" /></NavLink>
          <NavLink to="https://www.webofscience.com/wos/author/record/AAC-2784-2020"><img height={50} width={200} src={clarivateLogo} alt="clarivate-logo" /></NavLink>
          <NavLink to="https://www.linkedin.com/in/%D0%B0%D1%81%D0%BA%D0%B0%D1%80-%D1%81%D1%8B%D0%B7%D0%B4%D1%8B%D0%BA%D0%BE%D0%B2-512259220/"><img height={70} width={120} src={linkedinLogo} alt="linkedin-logo" /></NavLink>
          <NavLink to="https://www.researchgate.net/profile/Askar-Syzdykov"><img height={30} width={130} src={researchGateLogo} alt="research-gate-logo" /></NavLink>
          <NavLink to="https://elibrary.ru/author_profile.asp?authorid=446781"><img height={30} width={130} src={libraryRuLogo} alt="library-ru-logo" /></NavLink>
        </div>
        <ManagementNavbar lang={lang}/>
        <hr className='text-dark my-0 mx-auto' style={{ height: '1px'}}/>
        <section id="contacts">
          <Contacts lang={lang}/>
        </section>
      </div>
    );
}