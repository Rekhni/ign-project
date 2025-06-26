import { Tabs, Tab, Container } from 'react-bootstrap';
import aboutUsData from '../aboutUsData.json';
import HistoryTimeline from './HistoryTimeline';



export default function AboutUsNavbar({ lang }) {
    const t = (ru, en, kz, zh) => (lang === 'ru' ? ru : lang === 'en' ? en : lang === 'kz' ? kz : zh);
    const missionList = aboutUsData.missionAndValues[lang].slice(2);
      
  return (
    <Container className="my-4">
      <Tabs
        defaultActiveKey="overview"
        id="scientist-tabs"
        className="w-100 mx-auto border-0 justify-content-evenly"
        style={{ color: "black" }}
      >
        <Tab
          eventKey="overview"
          title={`${t("Обзор", "Overview", "Шолу", "概览")}`}
        >
          <div className="lab-review-tab-content d-lg-flex gap-3 gap-lg-3 mt-3 w-100 justify-content-between">
            <div
              className="p-3 w-100 w-lg-75 "
              style={{
                border: "2px solid rgb(22, 158, 255)",
                borderRadius: "20px",
                boxShadow: "12px 12px 2px 1px rgba(73, 153, 218, 0.2)",
                maxHeight: 500,
                overflowY: 'auto'
              }}
            >
              {/* <h3>{t("Обзор", "Overview", "Шолу", "概览")}</h3> */}
              {aboutUsData.review[lang].map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>
        </Tab>
        <Tab
          eventKey="missionsAndValues"
          title={`${t("Миссии и ценности", "Missions and values", "Жарияланымдар", "出版物")}`}
        >
          <div
            className="mt-3 mx-auto p-3 lab-content"
            style={{
              border: "2px solid rgb(22, 158, 255)",
              borderRadius: "20px",
              boxShadow: "12px 12px 2px 1px rgba(73, 153, 218, 0.2)",
              maxHeight: 500,
              overflowY: 'auto'
            }}
          >
            <p>{aboutUsData.missionAndValues[lang][0]}</p>
            <p>{aboutUsData.missionAndValues[lang][1]}</p>
            <ul className='d-flex flex-wrap w-100 gap-3 p-0 justify-content-center' style={{listStyle: 'none'}}>
                <li className='mission-items fw-bold d-flex gap-3 rounded p-3' style={{backgroundColor: 'rgb(148, 216, 248)'}}><i className="bi-compass" style={{fontSize: '40px'}}></i> {missionList[0]}</li>
                <li className='mission-items fw-bold d-flex gap-3 rounded p-3' style={{backgroundColor: 'rgb(148, 216, 248)'}}><i className="bi-gear" style={{fontSize: '40px'}}></i> {missionList[1]}</li>
                <li className='mission-items fw-bold d-flex gap-3 rounded p-3' style={{backgroundColor: 'rgb(148, 216, 248)'}}><i className="bi-mortarboard" style={{fontSize: '40px'}}></i> {missionList[2]}</li>
                <li className='mission-items fw-bold d-flex gap-3 rounded p-3' style={{backgroundColor: 'rgb(148, 216, 248)'}}><i className="bi-people" style={{fontSize: '40px'}}></i> {missionList[3]}</li>
                <li className='mission-items fw-bold d-flex gap-3 rounded p-3' style={{backgroundColor: 'rgb(148, 216, 248)'}}><i className="bi-globe " style={{fontSize: '40px'}}></i> {missionList[4]}</li>
            </ul>
          </div>
        </Tab>
        <Tab
          eventKey="chronology"
          title={`${t("Хронология", "Chronology", "Хронология", "项目")}`}
        >
          <div 
            className="mt-3 lab-content" 
        >
            <HistoryTimeline />
          </div>
        </Tab>
        <Tab
          eventKey="founderOrigin"
          title={`${t("K.И.Сатпаев ", "K.I. Satpayev", "Қ.И.Сәтпаев", "媒体")}`}
        >
          <div 
            className="mt-3 mx-auto p-3 lab-content"
            style={{
              border: "2px solid rgb(22, 158, 255)",
              borderRadius: "20px",
              boxShadow: "12px 12px 2px 1px rgba(73, 153, 218, 0.2)",
              maxHeight: 500,
              overflowY: 'auto'
            }}
        >
          <div className='founder-content d-flex gap-3 p-3'>
            <div className='founder-text mx-auto' >
              <p>{aboutUsData.satpaevHistory[lang][0]}</p>
              <p>{aboutUsData.satpaevHistory[lang][1]}</p>
            </div>
            <img className='mx-auto' height="200" width="200" style={{ borderRadius: '80px' }} src={`${import.meta.env.BASE_URL}${aboutUsData.images[0].slice(1)}`}   alt="" />
          </div>
          <div className='founder-content d-flex gap-3 p-3'>
            <img className='mx-auto' height="200" width="200" style={{ borderRadius: '80px' }} src={`${import.meta.env.BASE_URL}${aboutUsData.images[1].slice(1)}`}   alt="" />
            <div className='founder-text mx-auto'>
              <p>{aboutUsData.satpaevHistory[lang][2]}</p>
              <p>{aboutUsData.satpaevHistory[lang][3]}</p>
            </div>
          </div>
          <div className='founder-content d-flex gap-3 p-3'>
            <div className='founder-text mx-auto'>
              <p>{aboutUsData.satpaevHistory[lang][4]}</p>
              <p>{aboutUsData.satpaevHistory[lang][5]}</p>
            </div>
            <img className='mx-auto' height="200" width="200" style={{ borderRadius: '80px' }} src={`${import.meta.env.BASE_URL}${aboutUsData.images[2].slice(1)}`}   alt="" />
          </div>
          <div className='founder-content d-flex gap-3 p-3'>
            <img className='mx-auto' height="200" width="200" style={{ borderRadius: '80px' }} src={`${import.meta.env.BASE_URL}${aboutUsData.images[3].slice(1)}`}   alt="" />
            <div className='founder-text mx-auto'>
              <p>{aboutUsData.satpaevHistory[lang][6]}</p>
              <p>{aboutUsData.satpaevHistory[lang][7]}</p>
            </div>
          </div>
          <div className='founder-content d-flex gap-3 p-3 align-items-center'>
            <div className='founder-text mx-auto'>
              <p>{aboutUsData.satpaevHistory[lang][8]}</p>
              <p>{aboutUsData.satpaevHistory[lang][9]}</p>
            </div>
            <img className='mx-auto' height="200" width="200" style={{ borderRadius: '80px' }} src={`${import.meta.env.BASE_URL}${aboutUsData.images[4].slice(1)}`}   alt="" />
          </div>
          </div>
        </Tab>
      </Tabs>
    </Container>
  );
}
