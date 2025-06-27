import Contacts from '../components/Contacts';
import structurRUImg from '../assets/structureRU.png';
import structurENImg from '../assets/structureEN.png';
import structurKZImg from '../assets/structureKZ.png';
import structurCNImg from '../assets/structureCN.png';

export default function InstituteStructure({ lang }) {
    const t = (ru, en, kz, zh) => (lang === 'ru' ? ru : lang === 'en' ? en : lang === 'kz' ? kz : zh);

    const structureImage =
        lang === 'ru'
        ? structurRUImg
        : lang === 'kz'
        ? structurKZImg
        : lang === 'zh'
        ? structurCNImg
        : structurENImg;

    return (
        <div className='text-dark bg-white' style={{fontFamily: 'Montserrat'}}>
            <div className="d-flex flex-column w-100 mx-auto text-center pt-3" style={{paddingBottom: '30px'}}>
                <div className='d-flex justify-content-center align-items-center mx-auto gap-3 w-75'>
                    <hr className="bg-white" style={{ height: '5px', width: '25%'}}/>
                    <h1 >
                            {t(
                            "Структура института",
                            
                            "Institute's structure",
                            
                            "Институттың құрылымы",
                            
                            "萨特帕耶夫地质科学研究所结构"
                            )}
                    </h1>
                    <hr className="bg-white" style={{ height: '5px', width: '25%'}}/>
                </div>
                <img loading="lazy" className='w-75 mx-auto' src={structureImage} alt="inst-structure" style={{ marginTop: '30px' }}/>
            </div>
            <hr className='text-dark my-0 mx-auto' style={{ height: '1px' }}/>
            <section id="contacts">
                <Contacts lang={lang}/>
            </section>
        </div>
    )
}