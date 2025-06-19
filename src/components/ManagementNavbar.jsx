import { Tabs, Tab, Container } from 'react-bootstrap';
import managementData from '../managementData.json';


export default function ManagementNavbar({ lang }) {
    const t = (ru, en, kz, zh) => (lang === 'ru' ? ru : lang === 'en' ? en : lang === 'kz' ? kz : zh);
  return (
    <Container className="my-4">
      <Tabs 
        defaultActiveKey="overview" 
        id="scientist-tabs" 
        className="w-75 mx-auto border-0 justify-content-evenly"
        style={{color: 'black'}}
     >
        <Tab eventKey="overview" title={`${t('Обзор', 'Overview', 'Шолу', '概览')}`}>
          <div className="d-flex flex-column mt-3 w-75 mx-auto" style={{ gap: '30px' }} >
            <div
              className='p-3'
              style={{
                border: "2px solid rgb(22, 158, 255)",
                borderRadius: "20px",
                boxShadow: "12px 12px 2px 1px rgba(73, 153, 218, 0.2)",
              }}
            >
              <h3>
                {t('Краткая история', 'Short history', 'Қысқаша тарих', '简史')}
              </h3>
              {managementData.review.shortBio[lang].map((line, idx) => (
                  <p style={{fontFamily: 'Montserrat'}} key={idx}>{line}</p> 
              ))}
            </div>
            <div
              className='p-3'
              style={{
                border: "2px solid rgb(22, 158, 255)",
                borderRadius: "20px",
                boxShadow: "12px 12px 2px 1px rgba(73, 153, 218, 0.2)",
              }}
            >
              <h3>
                {t('Полная история', 'Full history', 'Толық тарих', '全部历史')}
              </h3>
              {managementData.review.bigBio[lang].map((line, idx) => (
                  <p style={{fontFamily: 'Montserrat'}}ey={idx}>{line}</p> 
              ))}       
                {managementData.moreInfo[lang].map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
          </div>
        </Tab>
        <Tab eventKey="publications" title={`${t('Публикации', 'Publications', 'Жарияланымдар', '出版物')}`}>
          <div 
            className="mt-3 w-75 mx-auto p-3"
            style={{
              border: "2px solid rgb(22, 158, 255)",
              borderRadius: "20px",
              boxShadow: "12px 12px 2px 1px rgba(73, 153, 218, 0.2)",
            }}
          >
            <ul>
              {managementData.publications[lang].map((publication, idx) => (
                  <li key={idx}>{publication}</li>
              ))}
            </ul>
          </div>
        </Tab>
        <Tab eventKey="projects" title={`${t('Проекты', 'Projects', 'Жобалар', '项目')}`}>
          <div 
            className="mt-3 w-75 mx-auto p-3"
            style={{
              border: "2px solid rgb(22, 158, 255)",
              borderRadius: "20px",
              boxShadow: "12px 12px 2px 1px rgba(73, 153, 218, 0.2)",
            }}
          >
            <h3>{t('Активные проекты', 'Active Projects', 'Белсенді жобалар', '正在进行的项目')}</h3>
            <ul>
              {managementData.projects[lang].map((proj, idx) => (
                  <li key={idx}>{proj}</li>
              ))}
            </ul>
          </div>
        </Tab>
        <Tab eventKey="teaching" title={`${t('Преподавание', 'Teachings', 'Оқыту', '教学')}`}>
          <div 
            className="mt-3 w-75 mx-auto p-3"
            style={{
              border: "2px solid rgb(22, 158, 255)",
              borderRadius: "20px",
              boxShadow: "12px 12px 2px 1px rgba(73, 153, 218, 0.2)",
            }}
          >
            <ul>
              {managementData.teachings[lang].map((item, idx) => (
                  <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </Tab>
        <Tab eventKey="awards" title={`${t('Награды', 'Awards', 'Марапаттар', '奖项')}`}>
          <div 
            className="mt-3 w-75 mx-auto p-3"
            style={{
              border: "2px solid rgb(22, 158, 255)",
              borderRadius: "20px",
              boxShadow: "12px 12px 2px 1px rgba(73, 153, 218, 0.2)",
            }}
          >
            <ul>
            {managementData.achievements[lang].map((item, idx) => (
                <li key={idx}>{item}</li>
            ))}
            </ul>
          </div>
        </Tab>
        <Tab eventKey="media"  title={`${t('Медиа', 'Media', 'Медиа', '媒体')}`}>
          <div 
            className="mt-3 w-75 mx-auto p-3"
            style={{
              border: "2px solid rgb(22, 158, 255)",
              borderRadius: "20px",
              boxShadow: "12px 12px 2px 1px rgba(73, 153, 218, 0.2)",
            }}
          >
            <ul>
              {managementData.media[lang].map((item, idx) => (
                  <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </Tab>
      </Tabs>
    </Container>
  );
}
