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
          <div className="d-flex flex-column mt-3 mx-auto" style={{ gap: '30px' }} >
            <div
              className='management-tab-content mx-auto'  
              style={{
                border: "1px solid rgb(14, 106, 171)",
                borderRadius: "20px",
                maxHeight: '350px',
                overflowY: 'auto',
              }}
            >
              <h3>
                <strong>
                  {t('Краткая история', 'Short history', 'Қысқаша тарих', '简史')}
                </strong>
              </h3>
              {managementData.review.shortBio[lang].map((line, idx) => (
                line.includes(':') 
                  ?  <p style={{ fontFamily: 'Montserrat' }} key={idx} dangerouslySetInnerHTML={{ __html: `<strong>${line}</strong>` }}/>
                  : <p style={{ fontFamily: 'Montserrat' }} key={idx} dangerouslySetInnerHTML={{ __html: line }}/>
              ))}   
            </div>
            <div
              className='management-tab-content mx-auto'
              style={{
                border: "1px solid rgb(14, 106, 171)",
                borderRadius: "20px",
                maxHeight: '350px',
                overflowY: 'auto',
              }}
            >
              <h3>
                <strong>
                {t('Полная история', 'Full history', 'Толық тарих', '全部历史')}
              </strong>
              </h3>
              {managementData.review.bigBio[lang].map((line, idx) => (
                line.includes(':') 
                  ? <p key={idx} style={{ fontFamily: 'Montserrat' }} dangerouslySetInnerHTML={{ __html: `<strong>${line}</strong>` }}/> 
                  : <p key={idx} style={{ fontFamily: 'Montserrat' }} dangerouslySetInnerHTML={{ __html: line }}/>
              ))}    
                {managementData.moreInfo[lang].map((item, idx) => (
                <p key={idx} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </div>
          </div>
        </Tab>
        <Tab eventKey="publications" title={`${t('Публикации', 'Publications', 'Жарияланымдар', '出版物')}`}>
          <div 
            className="management-tab-content mt-3 mx-auto"
            style={{
              border: "1px solid rgb(14, 106, 171)",
              borderRadius: "20px",
              maxHeight: '350px',
              overflowY: 'auto',
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
            className="management-tab-content mt-3 mx-auto"
            style={{
              border: "1px solid rgb(14, 106, 171)",
              borderRadius: "20px",
            }}
          >
            <ul>
              {managementData.projects[lang].map((proj, idx) => (
                  <li key={idx}>{proj}</li>
              ))}
            </ul>
          </div>
        </Tab>
        <Tab eventKey="teaching" title={`${t('Преподавание', 'Teachings', 'Оқыту', '教学')}`}>
          <div 
            className="management-tab-content mt-3 mx-auto"
            style={{
              border: "1px solid rgb(14, 106, 171)",
              borderRadius: "20px",
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
            className="management-tab-content mt-3 mx-auto "
            style={{
              border: "1px solid rgb(14, 106, 171)",
              borderRadius: "20px",
            }}
          >
            <ul className='d-flex flex-wrap gap-3 justify-content-center' >
            {managementData.achievements[lang].map((item, idx) => (
                <li className='text-white p-3 text-center' style={{backgroundColor: 'rgb(2, 158, 193)', listStyleType: 'none', borderRadius: '30px'}} key={idx}><i class="bi bi-award-fill"></i> {item}</li>
            ))}
            </ul>
          </div>
        </Tab>
        <Tab eventKey="media"  title={`${t('Медиа', 'Media', 'Медиа', '媒体')}`}>
          <div 
            className="management-tab-content mt-3 mx-auto"
            style={{
              border: "1px solid rgb(14, 106, 171)",
              borderRadius: "20px",
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
