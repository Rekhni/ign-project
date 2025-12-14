import React from 'react'
import { Tabs, Tab, Container } from 'react-bootstrap';
import geosparkData from "../geosparkData.json";
import geosparkStructureImg from "../assets/GeoSpark_structure.png";

const GeosparkNavbar = ({ lang }) => {
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
                backgroundColor: 'rgb(233, 248, 253)',
                borderRadius: "20px",
                maxHeight: 500,
                overflowY: 'auto'
              }}
            >
              {/* <h3>{t("Обзор", "Overview", "Шолу", "概览")}</h3> */}
                <h2>{geosparkData.review.title[lang][0]}</h2>
                {geosparkData.review.text[lang].map((line, idx) => (
                    <p key={idx}>{line}</p>
                ))}
                <a href="mailto:geospark@ign.kz" className="btn">Подать заявку на вступление</a>
            </div>
          </div>
        </Tab>
        <Tab
          eventKey="architecture"
          title={`${t("Структура", "Structure", "Құрылым", "结构")}`}
        >
          <div
            className="d-flex justify-content-center mt-3 mx-auto p-3 lab-content"
            style={{
              backgroundColor: 'rgb(233, 248, 253)',
              borderRadius: "20px",
              maxHeight: 500,
              overflowY: 'auto'
            }}
          >
            <img src={geosparkStructureImg} className='geospark-structure-img' alt="geospark-img-structure" />
          </div>
        </Tab>
        <Tab
          eventKey="activity"
          title={`${t("Деятельность", "Activity", "Қызмет", "活动")}`}
        >
          <div 
            className="mt-3 mx-auto p-3 lab-content"
            style={{
              backgroundColor: 'rgb(233, 248, 253)',
              borderRadius: "20px",
              maxHeight: 500,
              overflowY: 'auto'
            }}
        >
            <h2>{geosparkData.activity.title[lang][0]}</h2>
            {geosparkData.activity.text[lang].map((line, idx) => (
                <p key={idx}>{line}</p>
            ))}
          </div>
        </Tab>
        <Tab
          eventKey="philosophy"
          title={`${t("Философия ", "Philosophy", "Философия", "哲学")}`}
        >
          <div 
            className="mt-3 mx-auto p-3 lab-content"
            style={{
              backgroundColor: 'rgb(233, 248, 253)',
              borderRadius: "20px",
              maxHeight: 500,
              overflowY: 'auto'
            }}
        >
            <h2>{geosparkData.philosophy.title[lang][0]}</h2>
            {geosparkData.philosophy.text[lang].map((line, idx) => (
                <p key={idx}>{line}</p>
            ))}
          </div>
        </Tab>
      </Tabs>
    </Container>
  )
}

export default GeosparkNavbar