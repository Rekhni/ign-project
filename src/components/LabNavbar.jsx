import { Tabs, Tab, Container } from 'react-bootstrap';
import labsData from '../labsData.json';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';



export default function LabNavbar({ lang }) {
    const { id } = useParams();
    const lab = labsData[id];
    const t = (ru, en, kz, zh) => (lang === 'ru' ? ru : lang === 'en' ? en : lang === 'kz' ? kz : zh);
    const scientistsList = [
        { name: {
          ru: 'Г. Ж. Жолтаев',
          en: "G. Zh. Zholtaev",
          kz: "Г. Ж. Жолтаев",
          zh: "G. Zh. 乔尔塔耶夫"
        }, id: 1},
        { name: {
          ru: 'С. М. Оздоев',
          en: "S. M. Ozdoev",
          kz: "С. М. Оздоев",
          zh: "N. M. 奥兹多耶夫"
        }, id: 2},  
        { name: { 
          ru: 'Э. Ю. Сейтмуратова',
          en: "E. Y. Seitmuratova",
          kz: "Э. Ю. Сейтмуратова",
          zh: "E. Y. 赛特穆拉托娃"
        }, id: 3}, 
        { name: {
          ru: 'Г. К. Бекенова',
          en: "G. K. Bekenova",
          kz: "Г. К. Бекенова",
          zh: "G. K. 贝肯诺娃"
        }, id: 4}, 
        { name: {
          ru: 'В. Я. Жаймина',
          en: "V. Y. Zhaimina",
          kz: "В. Я. Жаймина",
          zh: "V. Y. 瓦莲京娜"
        }, id: 5}, 
        { name: {
          ru: 'С. А. Нигматова',
          en: "S. A. Nigmatova",
          kz: "С. А. Нигматова",
          zh: "S. A. 尼格马托娃"
        }, id: 6}, 
        { name: {
          ru: 'А. А. Антоненко',
          en: 'A. A. Antonenko',
          kz: 'А. А. Антоненко',
          zh: "А. А. 安东年科"
        }, id: 7}, 
        { name: {
          ru: 'Н. М. Жуков',
          en: "N. M. Zhukov",
          kz: "Н. М. Жуков",
          zh: "N. M. 朱科夫"
        }, id: 8}, 
        { name: {
          ru: 'В. А. Глаголев',
          en: "V. A. Glagolev",
          kz: "В. А. Глаголев",      
          zh: "V. A. 格拉戈列夫"
        }, id: 9}, 
        { name: {
          ru: 'В. Л. Левин',
          en: "V. L. Levin",
          kz: "В. Л. Левин",
          zh: "V. L. 列文"
        }, id: 10}, 
        { name: {
          ru: 'В. С. Горяева',
          en: "V. S. Goryaeva",
          kz: "В. С. Горяева",
          zh: "V. S. 戈里亚耶娃"
        }, id: 11}, 
        { name: {
          ru: 'Т. Е. Пирогова',
          en: "T. E. Pirogova",
          kz: "T. E. Пирогова",
          zh: "T. E. 皮罗戈娃"
        }, id: 12},
        { name: {
          ru: 'О. И. Никитина',
          en: "O. I. Nikitina",
          kz: "О. И. Никитина",
          zh: "O. I. 尼基金娜"
        }, id: 13},
        { name: {
          ru: 'З. Т. Умарбекова',
          en: "Z. T. Umarbekova",
          kz: "З. Т. Умарбекова",
          zh: "Z. T. 乌马尔别科娃"
        }, id: 14},
        { name: {
          ru: "К. С. Тогизов",
          en: "K. S. Togizov",
          kz: "Қ. С. Тоғызов",
          zh: "K. S. 托吉佐夫"
        }, id: 15},
        { name: {
          ru: "Б. Б. Тогаева",
          en: "B. B. Togaeva",
          kz: "Б. Б. Тогаева",
          zh: "B. B. 托加耶娃"
        }, id: 16},
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
              <h3>{t("Обзор", "Overview", "Шолу", "概览")}</h3>
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
              <h3 className='mb-3 text-center'>{t('Команда', 'Team', 'Ұжым', '团队')}</h3>
              <ul className='d-flex flex-wrap gap-3 justify-content-center'>
                {lab.team[lang].map((item, idx) => {
                  // Find matching scientist object by name 
                  const matchedScientist = scientistsList.find(scientist => item === scientist.name[lang]);

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
