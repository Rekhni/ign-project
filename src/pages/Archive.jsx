import Contacts from '../components/Contacts';

export default function Archive({ lang }) {
    const t = (ru, en, kz, zh) => (lang === 'ru' ? ru : lang === 'en' ? en : lang === 'kz' ? kz : zh);

    return (
      <div
        className="w-100 mx-auto text-dark bg-white"
        style={{
          fontFamily: "Montserrat",
          paddingTop: "30px",
        }}
      >
        <div className='d-flex w-75 mx-auto justify-content-center align-items-center gap-3' style={{margin: '20px 0'}}>
          <hr className="bg-white" style={{ height: '5px', width: '30%'}}/>
          <h1 className="text-center">
            {t(
              'Архив',
              'Archive',
              'Мұрағат',
              '档案馆'

            )}
          </h1>
          <hr className="bg-white" style={{ height: '5px', width: '30%'}}/>
        </div>
        <p className="w-75 mx-auto">
          {t(
            'Архив института является ключевым звеном в сохранении научного наследия и документальных материалов за всю историю деятельности учреждения. Он включает:',
            "The institute's archive is a key element in preserving scientific heritage and documentary materials throughout the history of the institution. It includes:",
            'Институт архиві – мекеменің бүкіл тарихында жинақталған ғылыми мұралар мен құжаттық материалдарды сақтаудағы негізгі буын. Оның құрамына кіреді:',
            '研究所的档案馆在保存整个机构历史期间积累的科学遗产和文献资料方面发挥着关键作用。它包括：'
          )}
        </p>
        <ul className="w-75 mx-auto">
          <li>
                {t(
                    'Отчеты о научных исследованиях, составленные сотрудниками института за более чем 85 лет.',
                    "Research reports compiled by the institute's staff over more than 85 years;",
                    '85 жылдан астам уақыт ішінде институт қызметкерлері жасаған ғылыми зерттеу есептері;',
                    '研究所工作人员在85年期间撰写的科研报告；'
                )}
          </li>
          <li>
                {t(
                    'Геологические карты различного масштаба (1:200 000, 1:50 000 и др.), включая топографические и стратиграфические схемы.',
                    'Geological maps of various scales (1:200,000, 1:50,000, etc.), including topographic and stratigraphic diagrams;',
                    'Әртүрлі масштабтағы геологиялық карталар (1:200 000, 1:50 000 және т.б.), топографиялық және стратиграфиялық схемалар;',
                    '各种比例尺的地质图（1:200,000、1:50,000等），包括地形图和地层图；'
                )}
          </li>
          <li>
                {t(
                    'Документы, отражающие научные экспедиции, полевые работы и важнейшие открытия в области геологии.',
                    'Documents reflecting scientific expeditions, fieldwork, and major discoveries in geology;',
                    'Ғылыми экспедициялар, далалық жұмыстар мен геология саласындағы маңызды жаңалықтарды қамтитын құжаттар;',
                    '记录科学考察、野外工作和地质学重大发现的文件；'
                )}
          </li>
          <li>
                {t(
                    'Все материалы систематизированы и доступны для научного использования по запросу.',
                    'All materials are systematized and available for scientific use upon request.',
                    'Барлық материалдар жүйеленіп, сұраныс бойынша ғылыми мақсатта қолжетімді.',
                    '所有资料都已系统化，可根据请求提供科研用途。'
                )}
          </li>
        </ul>
        <p className="w-75 mx-auto pb-3">
            {t(
                'Архив выполняет не только функцию хранения, но и служит источником данных для новых геологоразведочных проектов и аналитических исследований.',
                'The archive serves not only a storage function but also acts as a data source for new geological exploration projects and analytical research.',
                'Архив тек сақтау қызметін ғана атқарып қоймай, сонымен қатар жаңа геологиялық барлау жобалары мен талдамалық зерттеулер үшін дерек көзі болып табылады.',
                '该档案不仅仅是保存功能的体现，它也是新地质勘探项目和分析研究的数据来源。'
            )}
        </p>
        <hr className='text-dark my-0 mx-auto' style={{ height: '1px' }}/>
        <section id="contacts" style={{ fontFamily: 'Montserrat' }}>
            <Contacts lang={lang}/>
        </section>
      </div>
    );
}