import { useParams } from 'react-router-dom';
import scientistsData from '../scientistsData.json'
import Contacts from '../components/Contacts';
import ScientistNavbar from '../components/ScientistNavbar';
import { NavLink } from 'react-bootstrap';


export default function ScientistDetail({ lang }) {
    const { id } = useParams();
    const scientist = scientistsData.find((item) => item.id.toString() === id);

    return (
      <div className='text-dark bg-white' style={{fontFamily: 'Montserrat',}}>
        <div className="d-lg-flex w-75 mx-auto justify-content-center" style={{ padding: "30px 0", gap: '30px' }}>
            <div className='text-center'>
              
              <img loading="lazy" src={`${import.meta.env.BASE_URL}${scientist.image.slice(1)}`} alt={scientist.name} height="300" className='rounded scientist-image'/>
            </div>
            <div className="scientist-descr w-100 w-lg-50">
              <h1>{scientist.name[lang]}</h1>
              <p style={{fontSize: '20px'}}>{scientist.title[lang]}</p>
              <div className="d-flex justify-content-center flex-wrap" style={{fontSize: '15px'}}>
                {scientist.specTags[lang].split('\n').map((tag, idx) => (
                  <p className="text-dark rounded scientist-spec-tags" style={{backgroundColor: 'rgb(148, 216, 248)', padding: '5px 8px', fontSize: '12px', marginRight: '15px'}} key={idx} >{tag}</p>
                ))}
              </div>
              {scientist.shortInfo[lang].split('\n').map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}

              {scientist.quotes?.[lang]?.[0]?.trim() !== '' ? (
                <>
                  <blockquote>{scientist.quotes[lang][0]}</blockquote>
                  <cite>{scientist.name[lang]}</cite>
                </>
              ) : null}
            </div>  
        </div>
        <div className='d-flex flex-wrap justify-content-evenly'>
          {scientist.scientificLogos.map(([logoPath, link, height, width], idx) => {
            if (link === "#") return null; // Skip if link is "#"
            
            return (
              <a key={idx} href={link} target="_blank" rel="noopener noreferrer">
                <img loading="lazy" src={`${import.meta.env.BASE_URL}${logoPath.slice(1)}`} height={height} width={width} alt="" />
              </a>
            );
          })}
        </div>
        <ScientistNavbar lang={lang}/>
        <hr className='text-white my-0 mx-auto' style={{ height: '1px' }}/>
        <section id="contacts">
          <Contacts lang={lang}/>
        </section>
      </div>
    );
}