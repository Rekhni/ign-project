import { Tabs, Tab, Container } from 'react-bootstrap';
import scientistsData from '../scientistsData.json'
import { useParams } from 'react-router-dom';


export default function ScientistNavbar({ lang }) {
    const { id } = useParams();
    const scientist = scientistsData.find((item) => item.id.toString() === id);
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
          <div 
            className="mt-3 w-75 mx-auto p-3"
            style={{
              border: "2px solid rgb(22, 158, 255)",
              borderRadius: "20px",
              boxShadow: "12px 12px 2px 1px rgba(73, 153, 218, 0.2)",
            }}
          >
            {scientist.review[lang].map((line, idx) => (
                <p key={idx}>{line}</p> 
            ))}
            <div className='d-flex gap-3 flex-wrap justify-content-center'>
                {scientist.quotes[lang][0] !== "" && scientist.quotes[lang].map((item, idx) => (
                    <p className='scientist-quote text-white rounded shadow w-75' style={{ fontSize: '15px', padding: '20px', backgroundColor: 'rgb(129, 181, 246)'}} key={idx}>{item}</p>
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
            <ol>
              {scientist.publications[lang].map((publication, idx) => (
                  <li className='m-3' key={idx}>{publication}</li>
              ))}
            </ol>
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
            {scientist.activeProjects[lang].map((proj, idx) => (
                <p key={idx}>{proj}</p>
            ))}
            <h3>{t('Завершенные проекты', 'Completed Projects', 'Аяқталған жобалар', '已完成的项目')}</h3>
            {scientist.finishedProjects[lang].map((proj, idx) => (
                <p key={idx}>{proj}</p>
            ))}
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
              {scientist.teachings[lang].map((item, idx) => (
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
              {scientist.achievements[lang].map((item, idx) => (
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
            <p>Требует заполнения</p>
          </div>
        </Tab>
      </Tabs>
    </Container>
  );
}
