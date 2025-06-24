import { Tabs, Tab, Container } from 'react-bootstrap';
import aboutUsData from '../aboutUsData.json';



export default function AboutUsNavbar({ lang }) {
    const t = (ru, en, kz, zh) => (lang === 'ru' ? ru : lang === 'en' ? en : lang === 'kz' ? kz : zh);
      
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
            }}
          >
            <ul>
                <li >1</li>
                <li >1</li>
                <li >1</li>
                <li >1</li>
            </ul>
          </div>
        </Tab>
        <Tab
          eventKey="chronology"
          title={`${t("Хронология", "Chronology", "Хронология", "项目")}`}
        >
          <div 
            className="mt-3 mx-auto p-3 lab-content" 
            style={{
              border: "2px solid rgb(22, 158, 255)",
              borderRadius: "20px",
              boxShadow: "12px 12px 2px 1px rgba(73, 153, 218, 0.2)",
            }}
        >
            <p>Хронология</p>
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
            }}
        >
            <p>История К. И. Сатпаева</p>
          </div>
        </Tab>
      </Tabs>
    </Container>
  );
}
