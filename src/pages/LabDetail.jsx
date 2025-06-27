import labsData from '../labsData.json';
import { useParams } from 'react-router-dom';
import Contacts from '../components/Contacts';
import LabImg from '../assets/bgLabImg.webp';
import LabNavbar from '../components/LabNavbar';


export default function LabDetail({ lang }) {
    const { id } = useParams();
    const lab = labsData[id];

    return (
        <div className='text-dark bg-white p-3 h-100' style={{ fontFamily: 'Montserrat' }}>
            <div
                className='d-flex w-100 w-lg-75 mx-auto text-white fw-bold align-items-center position-relative'
                style={{
                    backgroundImage: `url(${LabImg})`,
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
                        backgroundColor: 'rgba(0,0,0,0.4)', // Adjust opacity here
                        borderRadius: '20px 20px 0 0',
                        zIndex: 1
                    }}
                />

                <div className='d-flex w-100 z-2 justify-content-between align-items-center' style={{ padding: '0 30px' }}>
                    <div style={{ marginLeft: '40px', zIndex: 2 }}>
                        <h1  className='lab-name fw-bold w-100'>{lab.name[lang]}</h1>
                        <br/>
                        <p className='lab-slogan'>{lab.slogan[lang]}</p>
                        <br/>
                    </div>
                    <img loading="lazy" className='lab-scientist-img' style={{borderRadius: '50%'}} src={`${import.meta.env.BASE_URL}${lab.image.slice(1)}`} height={300}  alt="img-lab" />
                </div>
            </div>
            <div className='w-100 mx-auto'>
                <LabNavbar lang={lang}/>
            </div>
            <hr className='text-dark my-0 mx-auto' style={{ height: '1px' }}/>
            <section id="contacts">
                <Contacts lang={lang}/>
            </section>
        </div>
    )

}