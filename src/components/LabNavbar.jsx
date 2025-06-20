import { Tabs, Tab, Container } from 'react-bootstrap';
import labsData from '../labsData.json';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';



export default function LabNavbar({ lang }) {
    const { id } = useParams();
    const lab = labsData[id];
    const t = (ru, en, kz, zh) => (lang === 'ru' ? ru : lang === 'en' ? en : lang === 'kz' ? kz : zh);
    const scientistsList = [
        { name: 'О. И. Никитина', id: 1},
        { name: 'С. М. Оздоев', id: 2},  
        { name: 'Э. Ю. Сейтмуратова', id: 3}, 
        { name: 'А. А. Антоненко', id: 4}, 
        { name: 'Г. К. Бекенова', id: 5}, 
        { name: 'В. Я. Жаймина', id: 6}, 
        { name: 'С. А. Нигматова', id: 7}, 
        { name: 'Н. М. Жуков', id: 8}, 
        { name: 'В. А. Глаголев', id: 9}, 
        { name: 'В. Л. Левин', id: 10}, 
        { name: 'В. С. Горяева', id: 11}, 
        { name: 'Г. Ж. Жолтаев', id: 12}
      ]

      
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
              <h3>Oбзор</h3>
              {lab.review[lang].map((line, idx) => (
                <p style={{ fontFamily: "Montserrat" }} key={idx}>
                  {line}
                </p>
              ))}
            </div>
            <div
              className="p-3 h-75 w-100 w-lg-25"
              style={{
                border: "2px solid rgb(22, 158, 255)",
                borderRadius: "20px",
                boxShadow: "12px 12px 2px 1px rgba(73, 153, 218, 0.2)",
              }}
            >
              <h3 className='mb-3 text-center'>Команда</h3>
              <ul className='d-flex flex-wrap gap-3 justify-content-center'>
                {lab.team[lang].map((item, idx) => {
                  // Find matching scientist object by name
                  const matchedScientist = scientistsList.find(scientist => item === scientist.name);

                  if (matchedScientist) {
                    return (
                      <li key={idx} style={{backgroundColor: idx === 0 ? 'rgb(191, 169, 3)' : 'rgb(2, 158, 193)', listStyleType: 'none', borderRadius: '30px'}} className='p-3'>
                        <Link to={`/scientists-gallery/${matchedScientist.id}`} className="text-white text-decoration-none">
                          {item}
                        </Link>
                      </li>
                    );
                  } else {
                    return (
                      <li key={idx} style={{backgroundColor: idx === 0 ? 'rgb(191, 169, 3)' : 'rgb(2, 158, 193)', listStyleType: 'none', borderRadius: '30px'}} className='text-white p-3'>
                        {item}
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
        </Tab>
        <Tab
          eventKey="publications"
          title={`${t("Услуги", "Publications", "Жарияланымдар", "出版物")}`}
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
              {lab.services[lang].map((service, idx) => (
                <li key={idx}>{service}</li>
              ))}
            </ul>
          </div>
        </Tab>
        <Tab
          eventKey="projects"
          title={`${t("Проекты", "Projects", "Жобалар", "项目")}`}
        >
          <div 
            className="mt-3 mx-auto p-3 lab-content" 
            style={{
              border: "2px solid rgb(22, 158, 255)",
              borderRadius: "20px",
              boxShadow: "12px 12px 2px 1px rgba(73, 153, 218, 0.2)",
            }}
        >
            <div>
            <h3>
              {t(
                "Активные проекты",
                "Active Projects",
                "Белсенді жобалар",
                "正在进行的项目"
              )}
            </h3>
            {lab.projects[lang].map((proj, idx) => (
              <p key={idx}>{proj}</p>
            ))}
            </div>
          </div>
        </Tab>
        <Tab
          eventKey="contacts"
          title={`${t("Контакты", "Media", "Медиа", "媒体")}`}
        >
          <div 
            className="mt-3 mx-auto p-3 lab-content"
            style={{
              border: "2px solid rgb(22, 158, 255)",
              borderRadius: "20px",
              boxShadow: "12px 12px 2px 1px rgba(73, 153, 218, 0.2)",
            }}
        >
            <p>{lab.contacts[lang]}</p>
          </div>
        </Tab>
      </Tabs>
    </Container>
  );
}
