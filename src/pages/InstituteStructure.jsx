import Contacts from '../components/Contacts';
import structurRUImg from '../assets/structureRU.png';
import structurENImg from '../assets/structureEN.png';
import structurKZImg from '../assets/structureKZ.png';
import structurCNImg from '../assets/structureCN.png';
import OrgChartTree from '../components/OrgChartTree';

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
            <OrgChartTree lang={lang}/>
            <hr className='text-dark my-0 mx-auto' style={{ height: '1px' }}/>
            <section id="contacts">
                <Contacts lang={lang}/>
            </section>
        </div>
    )
}