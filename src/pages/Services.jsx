
export default function Services({ lang }) {
    const t = (ru, en, kz, zh) => (lang === 'ru' ? ru : lang === 'en' ? en : lang === 'kz' ? kz : zh);

    return (
        <div className='bg-white text-dark mx-auto' style={{fontFamily: 'Montserrat', paddingBottom: '100px'}}>
          <div
            className="d-flex justify-content-center align-items-center gap-3 w-75 mx-auto"
            style={{ padding: "40px 0", margin: '0 20px'}}
          >
            <hr className="bg-dark rounded" style={{ height: '2px', width: '30%'}}/>
            <h1 style={{fontSize: '30px'}}>{t(
              'Услуги', 
              'Services', 
              'Қызметтеріміз', 
              '我们的服务'
            )}</h1>
            <hr className="bg-dark" style={{ height: '2px', width: '30%' }}/>
          </div>
          <div className="d-flex w-75 flex-wrap justify-content-center mx-auto gap-3">
            <div className="services-item">
              <h2>01</h2>
              <div style={{padding: '80px 20px 30px 20px'}}>
                <h4 className="fw-bold">
                  {t(
                    'Аналитические лабораторные услуги',
                    'Analytical Laboratory Services',
                    'Аналитикалық зертханалық қызметтер',
                    '分析实验室服务'
                  )}
              </h4>
              <ul>
                    <li>
                      {t(
                        'Спектральный анализ (ICP-MS, ААS и др.)',
                        'Spectral analysis (ICP-MS, AAS, etc.)',
                        'Спектрлік талдау (ICP-MS, AAS және т.б.)',
                        '光谱分析（如 ICP-MS、AAS 等）'
                      )}
                    </li>
                    <li>
                      {t(
                        'Рентгенофазовый и рентгеноструктурный анализ',
                        'X-ray phase and X-ray structural analysis',
                        'Рентгенфазалық және рентгенқұрылымдық талдау',
                        'X 射线物相分析与结构分析'
                      )}
                    </li>
                    <li>
                      {t(
                        'Петрографическое, минералогическое и гранулометрическое описание образцов',
                        'Petrographic, mineralogical, and granulometric sample description',
                        'Үлгілердің петрографиялық, минералогиялық және гранулометриялық сипаттамасы',
                        '岩石薄片、矿物及颗粒组成描述'
                      )}
                    </li>
                    <li>
                      {t(
                        'Химический анализ горных пород, руд, воды, почв',
                        'Chemical analysis of rocks, ores, water, and soils',
                        'Жыныстардың, кендердің, судың және топырақтың химиялық талдауы',
                        '岩石、矿石、水样与土壤的化学分析'
                      )}
                    </li>
              </ul>
              </div>
            </div>
            <div className="services-item">
              <h2>02</h2>
              <div style={{padding: '80px 20px 30px 20px'}}>
                <h4 className="fw-bold">
                    {t(
                      'Геолого-съёмочные и поисково-оценочные работы',
                      'Geological Surveying and Prospecting Services',
                      'Геологиялық түсіру және іздеу-бағалау жұмыстары',
                      '地质测绘与勘查评估工作'
                    )}
                </h4>
                <ul>
                      <li>
                        {t(
                          'Геологическая съёмка различных масштабов (1:25 000, 1:50 000 и др.)',
                          'Geological mapping at various scales (1:25,000, 1:50,000, etc.)',
                          'Әртүрлі масштабтағы геологиялық түсіру (1:25 000, 1:50 000 және т.б.)',
                          '不同比例尺的地质测绘（1:25,000、1:50,000等）'
                        )}
                      </li>
                      <li>
                        {t(
                          'Поиски и разведка месторождений полезных ископаемых (рудных, нерудных, углеводородов)',
                          'Prospecting and exploration of mineral deposits (metallic, non-metallic, hydrocarbons)',
                          'Пайдалы қазбалар кен орындарын іздеу және барлау (рудалар, бейруда, көмірсутектер)',
                          '矿产资源（有矿物、非矿物、烃类）的勘查与评价'
                        )}
                      </li>
                      <li>
                        {t(
                          'Стратиграфические и литолого-фациальные исследования',
                          'Stratigraphic and litho-facial studies',
                          'Стратиграфиялық және литофациялық зерттеулер',
                          '地层学与岩性相研究'
                        )}
                      </li>
                </ul>
              </div>
            </div>
            <div className="services-item">
              <h2>03</h2>
              <div style={{padding: '80px 20px 30px 20px'}}>
              <h4 className="fw-bold">
                  {t(
                    'Геофизические и геохимические исследования',
                    'Geophysical and Geochemical Research',
                    'Геофизикалық және геохимиялық зерттеулер',
                    '地球物理与地球化学研究'
                  )}
              </h4>
                <ul>
                  <li>
                    {t(
                      'Магниторазведка, гравиразведка, электротомография',
                      'Magnetic, gravity, and electrical tomography surveys',
                      'Магниттік, гравиметриялық және электротомографиялық барлау',
                      '磁力勘探、重力勘探、电阻层析成像'
                    )}
                  </li>
                  <li>
                    {t(
                      'Геохимическая съемка и картирование аномалий',
                      'Geochemical mapping and anomaly charting',
                      'Геохимиялық түсіру және аномалияларды карталау',
                      '地球化学测绘与异常区划分'
                    )}
                  </li>
                  <li>
                    {t(
                      'Комплексное моделирование рудных полей и месторождений',
                      'Integrated modeling of ore fields and deposits',
                      'Рудалы алаңдар мен кен орындарының кешенді модельдеуі',
                      '矿田与矿床的综合建模'
                    )}
                  </li>
                </ul>
              </div>
            </div>
            <div className="services-item">
              <h2>04</h2>
              <div style={{padding: '80px 20px 30px 20px'}}>
              <h4 className="fw-bold">
                  {t(
                    'Палеонтологические и стратиграфические исследования',
                    'Paleontological and Stratigraphic Research',
                    'Палеонтологиялық және стратиграфиялық зерттеулер',
                    '古生物与地层学研究'
                  )}
              </h4>
              <ul>
                <li>
                  {t(
                    'Датировка и описание стратиграфических разрезов',
                    'Dating and description of stratigraphic sections',
                    'Стратиграфиялық қималарды мерзімдеу және сипаттау',
                    '地层剖面的年代测定与描述'
                  )}
                </li>
                <li>
                  {t(
                    'Палеонтологический анализ (включая трилобиты, фораминиферы и др.)',
                    'Paleontological analysis (including trilobites, foraminifera, etc.)',
                    'Палеонтологиялық талдау (трилобиттер, фораминифералар және т.б.)',
                    '古生物分析（包括三叶虫、有孔虫等）'
                  )}
                </li>
                <li>
                  {t(
                    'Разработка стратиграфических схем и атласов',
                    'Development of stratigraphic charts and atlases',
                    'Стратиграфиялық схемалар мен атластарды әзірлеу',
                    '地层学图表和图集的编制'
                  )}
                </li>
              </ul>
              </div>
            </div>
            <div className="services-item">
              <h2>05</h2>
              <div style={{padding: '80px 20px 30px 20px'}}>
              <h4 className="fw-bold">
                  {t(
                    'Инженерно-геологические изыскания',
                    'Engineering Geological Surveys',
                    'Инженерлік-геологиялық зерттеулер',
                    '工程地质调查'
                  )} 
              </h4>
              <ul>
                <li>
                  {t(
                    'Оценка устойчивости склонов, берегов, зданий и сооружений',
                    'Assessment of slope, shoreline, building, and structure stability',
                    'Жағалау, еңістер, ғимараттар мен құрылыстардың орнықтылығын бағалау',
                    '边坡、岸边、建筑物和构筑物的稳定性评估'
                  )}
                </li>
                <li>
                  {t(
                    'Изучение геологических рисков (оползни, сейсмика и др.)',
                    'Study of geological hazards (landslides, seismicity, etc.)',
                    'Геологиялық қауіптерді зерттеу (жер көшкіні, сейсмикалық қауіп және т.б.)',
                    '地质灾害研究（滑坡、地震等）'
                  )}
                </li>
                <li>
                  {t(
                    'Геотехнический мониторинг',
                    'Geotechnical monitoring',
                    'Геотехникалық мониторинг',
                    '岩土技术监测'
                  )}
                </li>
              </ul>
              </div>
            </div>
            <div className="services-item">
              <h2>06</h2>
              <div style={{ padding: '80px 20px 30px 20px' }}>
              <h4 className="fw-bold">
                  {t(
                    'ГИС и дистанционное зондирование',
                    'GIS and Remote Sensing',
                    'Геоақпараттық жүйелер (ГАЖ) және қашықтықтан зондтау',
                    '地理信息系统与遥感'
                  )}
              </h4>
              <ul>
                <li>
                  {t(
                    'Создание геоинформационных систем (ГИС)',
                    'Development of Geographic Information Systems (GIS)',
                    'Геоақпараттық жүйелерді (ГАЖ) жасау',
                    '建立地理信息系统（GIS）'
                  )}
                </li>
                <li>
                  {t(
                    'Интерпретация спутниковых снимков',
                    'Satellite image interpretation',
                    'Жерсеріктік суреттерді интерпретациялау',
                    '卫星图像解译'
                  )}
                </li>
                <li>
                  {t(
                    'Картографические работы',
                    'Cartographic works',
                    'Картографиялық жұмыстар',
                    '制图工作'
                  )}
                </li>
              </ul>
              </div>
            </div>
            <div className="services-item">
              <h2>07</h2>
              <div style={{ padding: '80px 20px 30px 20px' }}>
              <h4 className="fw-bold">
                  {t(
                    'Консультационные и научно-экспертные услуги',
                    'Consulting and Scientific Expertise Services',
                    'Кеңес беру және ғылыми-сараптамалық қызметтер',
                    '咨询与科学专家服务'
                  )}
              </h4>
              <ul>
                <li>
                  {t(
                    'Оценка перспектив недропользования',
                    'Assessment of subsoil use prospects',
                    'Жер қойнауын пайдаланудың болашағын бағалау',
                    '矿产资源开发前景评估'
                  )}
                </li>
                <li>
                  {t(
                    'Разработка прогнозных моделей',
                    'Development of predictive models',
                    'Болжау модельдерін әзірлеу',
                    '预测模型开发'
                  )}
                </li>
                <li>
                  {t(
                    'Подготовка отчетов по проектам и НИР',
                    'Preparation of project and research reports',
                    'Жобалар мен ҒЗЖ бойынша есептерді дайындау',
                    '项目和科研报告编写'
                  )}
                </li>
                <li>
                  {t(
                    'Научное рецензирование и экспертиза',
                    'Scientific reviewing and expert evaluation',
                    'Ғылыми рецензиялау және сараптама',
                    '科学评审与专家评估'
                  )}
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
    )
}