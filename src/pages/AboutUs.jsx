import Contacts from '../components/Contacts';
import aboutUsImg from '../assets/about-us.webp';
import AboutUsNavbar from '../components/AboutUsNavbar';

export default function AboutUs({ lang }) {
    return (
        <div className='text-dark bg-white p-3 h-100' style={{ fontFamily: 'Montserrat' }}>
            <div
                className='d-flex w-100 w-lg-75 mx-auto text-white fw-bold align-items-center position-relative'
                style={{
                    backgroundImage: `url(${aboutUsImg})`,
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
                    <h3 className='w-100 text-center'>"Геологическая наука развивается в Казахстане на основе творческого содружества с практикой, на базе практики и для практики"</h3>
                    <br/>
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