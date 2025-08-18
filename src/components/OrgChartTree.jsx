import Tree from 'react-d3-tree';
import { useMemo, useRef, useState, useEffect } from 'react';

export default function OrgChartTree({ lang }) {
  const t = (ru, en, kz, zh) =>
    lang === 'ru' ? ru : lang === 'en' ? en : lang === 'kz' ? kz : zh;

  // 1) Данные: SU -> ИГН -> Наблюдательный совет -> Директор -> (дальше ваша структура)
  const data = useMemo(() => ({
    _id: 'SU',
    name: t('Satbayev University', 'Satbayev University', 'Satbayev University', '萨特帕耶夫大学'),
    children: [
      {
        name: t('Институт гидрогеологии и геоэкологии им. Ахмедсафина', 'Akhmedsafin Institute of Hydrogeology and Geoecology', 'Ахмедсафин атындағы Гидрогеология және геоэкология институты', '艾赫梅德萨芬水文地质与地球生态研究所')
      },
      {
        name: t('Институт цифровой техники и технологий', 'Institute of Digital Engineering and Technologies', 'Цифрлық техника және технологиялар институты', '数字工程与技术研究所')
      },
      {
        _id: 'IGS',
        name: t('Институт Геологических Наук им. К.И. Сатпаева', 'Institute of Geological Sciences', 'Қ.И. Сәтбаев атындағы ИҒИ', '萨特帕耶夫地质科学研究所'),
        children: [
          {
            _id: 'Board',
            name: t('Наблюдательный совет', 'Supervisory Board', 'Бақылау кеңесі', '监事会'),
            children: [
              {
                _id: 'Director',
                name: t('Директор', 'Director', 'Директор', '所长'),
                children: [
                  { _id: 'AC', name: t('Учёный совет', 'Academic Council', 'Ғылыми кеңес', '学术委员会') },
                  {
                    name: t(
                        'Центр развития бизнес-инициатив "Geo-Spark"',
                        'Geo-Spark Center for Business Initiatives',
                        '«Geo-Spark» бизнес-бастамаларды дамыту орталығы',
                        '“Geo-Spark” 商业倡议发展中心'
                    ),
                    // _collapsed: true, // ← включи, если нужно свёрнуто по умолчанию
                    children: [
                        {
                        name: t(
                            'Сектор развития цифровых технологий (в области геологии)',
                            'Digital Technologies Development Sector (Geology)',
                            'Геология саласындағы цифрлық технологияларды дамыту секторы',
                            '地质领域数字技术发展科'
                        ),
                        },
                        {
                        name: t(
                            'Сектор развития экспозиционных программ, геонаследия и геотуризма',
                            'Exhibition Programs, Geoheritage & Geotourism Development Sector',
                            'Экспозициялық бағдарламалар, геомура және геотуризмді дамыту секторы',
                            '展陈项目、地质遗产与地质旅游发展科'
                        ),
                        },
                        {
                        name: t(
                            'Сектор архивов и библиотеки',
                            'Archives & Library Sector',
                            'Архивтер мен кітапхана секторы',
                            '档案与图书馆科'
                        ),
                        },
                        {
                        name: t(
                            'Образовательный центр',
                            'Educational Center',
                            'Білім беру орталығы',
                            '教育中心'
                        ),
                        },
                    ],
                    },
                  {
                    _id: 'DeputySci',
                    name: t('Заместитель директора по науке', 'Deputy Director for Science', 'Ғылым жөніндегі орынбасар', '科研副所长'),
                    children: [
                      { name: t('Лаборатория стратиграфии', 'Stratigraphy Lab', 'Стратиграфия зертханасы', '地层学实验室') },
                      { name: t('Лаборатория геологических и рудных формаций', 'Geol. & Ore Formations Lab', 'Геол. және кентасты формациялар', '地质与矿床形成实验室') },
                      { name: t('Лаборатория мезозоя и кайнозоя', 'Mesozoic & Cenozoic Lab', 'Мезозой/кайнозой зертханасы', '中生代与新生代实验室') },
                      { name: t('Лаборатория чёрных и цветных металлов', 'Ferrous & Non-ferrous Metals', 'Қара/түсті металдар', '黑色与有色金属实验室') },
                      { name: t('Лаборатория литология и инж. геология', 'Lithology & Eng. Geology', 'Литология және инж. геология', '岩相与工程地质') },
                      { name: t('Лаборатория геодинамики', 'Geodynamics', 'Геодинамика', '地球动力学') },
                      { name: t('Лаборатория редких и редкоземельных металлы', 'Rare & Rare-earth Metals', 'Сирек/сирекжер металдары', '稀有与稀土金属') },
                      { name: t('Лаборатория благородных металлов', 'Precious Metals', 'Қымбат металдар', '贵金属') },
                      { name: t('Лаборатория минералогии', 'Mineralogy', 'Минералогия', '矿物学') },
                      { name: t('Лаборатория Физ.-хим. методов', 'Physical & Chemical Methods', 'Физ.-хим. әдістер', '物理与化学方法') },
                      { name: t('Шлиф.-дроб. мастерская', 'Grinding & Crushing Workshop', 'Жону-ұсату шеберханасы', '研磨与破碎车间') },
                    ],
                  },
                  { _id: 'Advisor', name: t('Советник директора', 'Advisor to the Director', 'Директордың кеңесшісі', '所长顾问') },
                  {
                    name: t(
                        'Заместитель директора по административным вопросам',
                        'Deputy Director for Administrative Affairs',
                        'Әкімшілік мәселелер жөніндегі директордың орынбасары',
                        '行政副所长'
                    ),
                    children: [
                        { name: t('Отдел правовой и кадровой работы',
                                'Legal & HR Department',
                                'Құқықтық және кадрлық жұмыс бөлімі',
                                '法务与人力资源部') },
                        { name: t('Отдел экономического анализа и закупок',
                                'Economic Analysis & Procurement Department',
                                'Экономикалық талдау және сатып алу бөлімі',
                                '经济分析与采购部') },
                        { name: t('Отдел бухгалтерского учета и отчетности',
                                'Accounting & Reporting Department',
                                'Бухгалтерлік есеп және есептілік бөлімі',
                                '会计与报告部') },
                        { name: t('Сектор по работе с секретными и фондовыми материалами',
                                'Classified & Archive Materials Unit',
                                'Құпия және қор материалдары секторы',
                                '机密与馆藏资料科') },
                        { name: t('Отдел по обслуживанию инфраструктуры',
                                'Infrastructure Maintenance Department',
                                'Инфрақұрылымды қызмет көрсету бөлімі',
                                '基础设施运维部') },
                    ],
                    },
                ],
              },
              { _id: 'Compliance', name: t('Комплаенс-офицер', 'Compliance Officer', 'Сәйкестік офицері', '合规官') },
            ],
          },
        ],
      },
    {
        name: t('Акционерное общество Science & Technology Solutions', 'JSC “Science & Technology Solutions”', '«Science & Technology Solutions» акционерлік қоғамы (АҚ)', '“Science & Technology Solutions” 股份公司')
    },
    {
        name: t('Физико-технический институт', 'Institute of Physics and Technology', 'Физика-техникалық институты', '物理技术研究所')
    },
    {
        name: t('Институт металлургии и обогащения', 'Institute of Metallurgy and Ore Beneficiation', 'Металлургия және кен байыту институты', '冶金与选矿研究所')
    }
    ],
  }), [lang]);

  // 2) Размер контейнера
  const ref = useRef(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  useEffect(() => {
    const onResize = () => {
      if (!ref.current) return;
      const { width, height } = ref.current.getBoundingClientRect();
      setSize({ w: width, h: height });
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // 3) Стили для пунктирной «учредительской» связи
  const pathClassFunc = (link) => {
    // пунктир только на ребре SU -> IGS
    if (link.source.data?._id === 'SU' && link.target.data?._id === 'IGS') {
      return 'link--affiliation';
    }
    return '';
  };

  return (
    <div ref={ref} style={{ width: '100%', height: '72vh', position: 'relative' }}>
      {/* Локальные стили для выделения связи */}
      <style>{`
        .rd3t-link.link--affiliation path {
          stroke-dasharray: 6 4;
          stroke-width: 2px;
          opacity: 0.9;
        }
      `}</style>

      {size.w > 0 && (
        <Tree
          data={data}
          orientation="vertical"
          pathFunc="diagonal"
          translate={{ x: size.w / 2, y: 100 }}
          nodeSize={{ x: 300, y: 170 }}
          separation={{ siblings: 1.7, nonSiblings: 1.4 }}
          pathClassFunc={pathClassFunc}
          collapsible
          zoomable
        />
      )}
    </div>
  );
}
