import labsData from '../labsData.json';
import { useParams } from 'react-router-dom';
import Contacts from '../components/Contacts';
import LabImg from '../assets/labBgImg.png';
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

                <div style={{ marginLeft: '40px', zIndex: 2 }}>
                    <h1 className='w-50'>{lab.name[lang]}</h1>
                    <h3>Институт геологических наук им. К. И. Сатпаева</h3>
                    <p>{lab.slogan[lang]}</p>
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