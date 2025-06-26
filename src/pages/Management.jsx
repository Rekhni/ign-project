import managementData from '../managementData.json';
import Contacts from '../components/Contacts';
import ManagementNavbar from '../components/ManagementNavbar';


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
        <ManagementNavbar lang={lang}/>
        <hr className='text-dark my-0 mx-auto' style={{ height: '1px'}}/>
        <section id="contacts">
          <Contacts lang={lang}/>
        </section>
      </div>
    );
}