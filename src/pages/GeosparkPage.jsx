import React from 'react'
import geosparkBgImg from "../assets/geosparkBgImg.jpg";
import geosparkLogo from "../assets/geosparkLogo.svg";
import GeosparkNavbar from '../components/GeosparkNavbar';
import Contacts from '../components/Contacts';

const GeosparkPage = ({ lang }) => {
  const t = (ru, en, kz, zh) => (lang === 'ru' ? ru : lang === 'en' ? en : lang === 'kz' ? kz : zh);

  return (
            <div className='text-dark bg-white h-100' style={{ fontFamily: 'Montserrat' }}>
                <div
                    className='d-flex w-100 mx-auto text-white fw-bold align-items-center justify-content-between position-relative'
                    style={{
                        backgroundImage: `url(${geosparkBgImg})`,
                        backgroundAttachment: "fixed",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: '500px',
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
                            zIndex: 1
                        }}
                    />


   
                    <div style={{ zIndex: 2 }}>

                        <h1 style={{ paddingLeft: "50px"}}>
                            {t(
                                "GeoSpark — Геологическая клубная институция",
                                "GeoSpark — A Geological Club Institution",
                                "GeoSpark — Геология бағытындағы клубтық институция",
                                "GeoSpark —— 地质学俱乐部机构"
                            )}
                            
                        </h1>
    
                        <h3 className='history-quote'>
                            {t(
                                "Пространство при Институте геологических наук им. К. И. Сатпаева, где геология, данные и гуманитарное мышление объединяются для создания будущего.",
                                "A space at the Satbayev Institute of Geological Sciences where geology, data, and humanistic thinking come together to shape the future.",
                                "К. И. Сәтбаев атындағы Геологиялық ғылымдар институтындағы геология, деректер және гуманитарлық ойлау болашақты қалыптастыру үшін тоғысатын кеңістік.",
                                "在萨特巴耶夫地质科学研究所，地质、数据与人文思维在此交汇，共同塑造未来。"
                            )}</h3>
                    </div>


                    <img src={geosparkLogo} alt="geospark-logo" width={400} height={400} style={{ marginRight: "100px"}}/>

                </div>
                <div className='w-100 mx-auto'>
                    <GeosparkNavbar lang={lang}/>
                </div>
                <hr className='text-dark my-0 mx-auto' style={{ height: '1px' }}/>
                <section id="contacts">
                    <Contacts lang={lang}/>
                </section>
          </div>
  )
}

export default GeosparkPage