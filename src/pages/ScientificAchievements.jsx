import achieveImg1 from '../assets/achieve1.jpg';
import achieveImg2 from '../assets/achieve2.jpg';
import Contacts from '../components/Contacts';

export default function ScientificAchievements({ lang }) {
    const t = (ru, en, kz, zh) => (lang === 'ru' ? ru : lang === 'en' ? en : lang === 'kz' ? kz : zh);
    return (
      <>
            <div className="w-100 mx-auto text-dark bg-white" style={{ fontFamily: "Montserrat", padding: '20px 0' }}>
        <div className="d-flex flex-column text-center gap-3 mb-3 w-75 mx-auto">
          <div className='d-flex justify-content-center align-items-center mx-auto w-75 gap-3'>
            <hr className="bg-white rounded" style={{ height: '5px', width: '30%' }}/>
            <h1 className='w-75' style={{fontSize: '30px'}}>
              {t(
                "Основные научные достижения",

                "Key Scientific Achievements",

                "Негізгі ғылыми жетістіктер",

                "主要科研成果"
              )}
            </h1>
            <hr className="bg-white rounded" style={{ height: '5px', width: '30%' }}/>
          </div>
          <h3 className='w-75 mx-auto'>
              {t(
                "В области региональной геологии:",

                "In the field of regional geology:",

                "Өңірлік геология саласында:",

                "区域地质学领域:"
              )}
          </h3>
        </div>
        <ul className='w-75 mx-auto'>
          <li>
            {t(
              "Атлас опорных стратиграфических разрезов Казахстана. 2010 г.",
              "Atlas of reference stratigraphic sections of Kazakhstan. 2010",
              "Қазақстанның стратиграфиялық тірек қималарының атласы. 2010 ж.",
              "哈萨克斯坦参考地层剖面图集。2010年"
            )}
          </li>
          <li>
            {t(
                "Каталог стратотипов общих, региональных и зональных подразделений палеозоя, и их границ. 2010 г.",
                "Catalog of stratotypes of general, regional, and zonal Paleozoic subdivisions and their boundaries. 2010",
                "Палеозой дәуірінің жалпы, аймақтық және аймақтық бөлімдерінің стратотиптер каталогы және олардың шекаралары. 2010 ж.",
                "古生代一般、区域和带状分层及其界限的标准地层单位目录。2010年"
            )}
          </li>
          <li>
            {t(
                "Присвоение международного статуса «9-й ярус Серебряный гвоздь» кембрийскому ярусу сузакской системы разреза Кыршабакты г. Малого Каратау. 2010 г.",
                "Awarding international status '9th Stage Silver Nail' to the Cambrian stage of the Suzac system in the Kyrshabakty section, Small Karatau. 2010",
                "Кіші Қаратау жотасындағы Қыршабақты қимасының Сузақ жүйесінің кембрий ярусына «9-саты Күміс шеге» халықаралық мәртебесінің берілуі. 2010 ж.",
                "小卡拉套克尔沙巴克提剖面苏扎克体系寒武阶被授予“第九阶银钉”国际地位。2010年"
            )}
          </li>
          <li>
            {t(
                "Составлены металогенограммы по 78 структурно-формационным зонам (СФЗ) палеозойских складчатых систем (СС) Казахстана: Уральской, Зайсанской, Кокшетау-Северо-Тяньшанской, Жонгаро-Балхашской, Шынгыс-Тарбагатайской.",
                "Metallogenic diagrams created for 78 structural-formational zones of Paleozoic fold systems in Kazakhstan: Ural, Zaysan, Kokshetau-North Tien Shan, Dzungaro-Balkhash, Shyngys-Tarbagatai.",
                "Қазақстанның палеозой қатпарлы жүйелерінің 78 құрылымдық-формациялық аймағы бойынша металлогендік диаграммалар жасалды: Орал, Зайсан, Көкшетау-Солтүстік Тянь-Шань, Жоңғар-Балқаш, Шыңғыс-Тарбағатай.",
                "为哈萨克斯坦古生代褶皱系统的78个构造-成因区绘制了成矿图：乌拉尔、扎伊桑、科克舍套-北天山、准噶尔-巴尔喀什、申格斯-塔尔巴盖台。"
            )}
          </li>
          <li>
            {t(
                "Составлена Тектоническая карта Казахстана масштаба 1:1 000 000, на 3-х языках с пояснительной запиской.",
                "A tectonic map of Kazakhstan at a scale of 1:1,000,000 was compiled in 3 languages with an explanatory note.",
                "Қазақстанның 1:1 000 000 масштабтағы тектоникалық картасы 3 тілде түсіндірме жазбасымен жасалды.",
                "编制了1:1 000 000比例的哈萨克斯坦构造图，附有三种语言的说明。"
            )}
          </li>
          <li>
            {t(
                "Составлена Карта альпийской тектоники Казахстана масштаба 1:1 000 000 с объяснительной запиской и внедрена Комитетом геологии и недропользования МИНТ РК. 2012 год.",
                "A map of Alpine tectonics of Kazakhstan at a scale of 1:1,000,000 with an explanatory note was compiled and implemented by the Geology Committee of the Ministry of Industry and New Technologies of the Republic of Kazakhstan. 2012",
                "Қазақстанның альпілік тектоникасының 1:1 000 000 масштабтағы картасы түсіндірме жазбасымен жасалып, ҚР ИЖТМ Геология комитетімен енгізілді. 2012 ж.",
                "编制了哈萨克斯坦阿尔卑斯构造图，比例尺为1:1 000 000，并附有说明书，由哈萨克斯坦共和国工业和新技术部地质委员会采纳。2012年"
            )}
          </li>
        </ul>
        <div className="d-lg-flex justify-content-center w-75 mx-auto text-center">
          <div>
            <img loading="lazy" className='achieve-img' src={achieveImg1} alt="achieve-img-1" height="400" />
            <p className="w-75 mx-auto mt-3" style={{ fontSize: "15px" }}>
              {t(
                "Минерагеническая карта Казахстана (палеозой) в 2009 году была удостоена Государственной премии Республики Казахстан.",
                
                "The metallogenic map of Kazakhstan (Paleozoic) was awarded the State Prize of the Republic of Kazakhstan in 2009.",
                
                "Қазақстанның (палеозой) минерагендік картасы 2009 жылы Қазақстан Республикасының Мемлекеттік сыйлығына ие болды.",
                
                "哈萨克斯坦（古生代）成矿图于2009年获得哈萨克斯坦共和国国家奖。"
              )}
            </p>
          </div>
          <div>
            <img loading="lazy" className='achieve-img' src={achieveImg2} alt="achieve-img-2" height="400" />
            <p className="w-75 mx-auto mt-3" style={{ fontSize: "15px" }}>
              {t(
                "Составлена Минерагеническая карта мезозой-кайнозойского чехла Казахстана в масштабе 1:1 000 000 (на трех языках).",

                "A metallogenic map of the Mesozoic-Cenozoic cover of Kazakhstan at a scale of 1:1,000,000 was created (in three languages).",

                "Қазақстанның мезозой-кайнозой жабынының минерагендік картасы 1:1 000 000 масштабта (үш тілде) жасалды.",

                "编制了哈萨克斯坦中生代-新生代盖层的成矿图，比例尺为1:1 000 000（使用三种语言）。"
              )}
            </p>
          </div>
        </div>
        <h3 className='text-center' style={{marginTop: '60px'}}>
            {t(
              "В области металлогении и рудообразования:",

              "In the field of metallogeny and ore formation:",

              "Металлогения және кен түзілу саласында:",

              "在成矿学和矿床形成领域："
            )}
        </h3>
        <ul className='w-75 mx-auto'>
          <li>
            {t(
              '- Составлена Минерагеническая карта Казахстана в масштабе 1:1000000 (на трех языках) и внедрена Комитетом геологии и недропользования МИНТ РК, в 2009 году была удостоена Государственной премии Республики Казахстан.',
              '- A Metallogenic Map of Kazakhstan at a scale of 1:1,000,000 (in three languages) was compiled and implemented by the Committee of Geology and Subsoil Use of the Ministry of Industry and Infrastructure Development of the Republic of Kazakhstan, and was awarded the State Prize of Kazakhstan in 2009.',
              '- Қазақстанның минерагениялық картасы (1:1 000 000 масштабта, үш тілде) жасалып, ҚР ИИДМ Геология және жер қойнауын пайдалану комитеті тарапынан енгізілді және 2009 жылы Қазақстан Республикасының Мемлекеттік сыйлығымен марапатталды.',
              '- 编制了哈萨克斯坦的成矿图，比例尺为1:1000000（使用三种语言），并由哈萨克斯坦共和国工业和基础设施发展部下属的地质与矿产使用委员会实施，2009年获得哈萨克斯坦国家奖。'
            )}
          </li>
          <li>
            {t(
              '- Составлена Минерагеническая карта мезозой-кайнозойского чехла Казахстана в масштабе 1:1000000 (на трех языках) и внедрена Комитетом геологии и недропользования МИНТ РК.',
              '- A Metallogenic Map of the Mesozoic-Cenozoic Cover of Kazakhstan at a scale of 1:1,000,000 (in three languages) was compiled and implemented by the Committee of Geology and Subsoil Use of the Ministry of Industry and Infrastructure Development of the Republic of Kazakhstan.',
              '- Қазақстанның мезозой-кайнозой жамылғысының минерагениялық картасы (1:1 000 000 масштабта, үш тілде) жасалып, ҚР ИИДМ Геология және жер қойнауын пайдалану комитеті тарапынан енгізілді.',
              '- 编制了哈萨克斯坦中生代—新生代盖层的成矿图，比例尺为1:1000000（使用三种语言），并由哈萨克斯坦共和国地质与矿产使用委员会实施。'
            )}
          </li>
        </ul>
        <h3 className="text-center" style={{marginTop: '60px'}}>
            {t(
              "В области геологии месторождений нефти и газа:",

              "In the field of petroleum and gas deposit geology:",

              "Мұнай мен газ кен орындарының геологиясы саласында:",

              "在石油和天然气矿床地质领域："
            )}
        </h3>
        <ul className='w-75 mx-auto'>
          <li>
            {t(
              "Оценены прогнозные ресурсы углеводородов по зонам нефтегазонакопления в пределах Прикаспийского, Устюртского, Мангышлакского и Торгайского осадочных бассейнов.",

              "Estimated hydrocarbon resources by oil and gas accumulation zones within the Pre-Caspian, Ustyurt, Mangyshlak, and Torgai sedimentary basins.",

              "Каспий маңы, Үстірт, Маңғышлақ және Торғай шөгінді алаптарындағы мұнай-газ жиналу аймақтары бойынша көмірсутектердің болжамды ресурстары бағаланды.",

              "评估了里海、乌斯秋尔特、曼格什拉克和托尔盖沉积盆地内油气聚集区的碳氢化合物预测资源。"
            )}
          </li>
          <li>
            {t(
              "Выделены первоочередные объекты в Прикаспийской впадине:",
              "Identified priority targets in the Pre-Caspian basin:",
              "Каспий маңы ойпатындағы басты нысандар анықталды:",
              "确定了里海盆地的优先勘探目标："
            )}
          </li>
          <li>
            {t(
              "Акватория Каспийского моря: Тенгиз-Кашаганский, Прорвинский (в пределах Жамбайско-Забурунского и Мартышинского нефтегазоносных районов);",
              "Caspian Sea area: Tengiz-Kashagan, Prorva (within Zhambai-Zaburun and Martyshin oil and gas regions);",
              "Каспий теңізі акваториясы: Теңіз-Қашаған, Прорва (Жамбай-Забурун және Мартышин мұнай-газ аймақтарында);",
              "里海海域：腾吉兹-卡沙甘、普罗尔瓦（位于赞拜-扎布鲁恩和马尔特申油气区）;"
            )}
          </li>
          <li>
            {t(
              "В пределах суши: Сагизский, Южно-Эмбинский, Шубаркудук-Акжарский и Мартышинский объекты.",
              "Onshore: Sagiz, South Embi, Shubarkuduk-Akzhar, and Martyshin targets.",
              "Құрлықта: Сагиз, Оңтүстік Ембі, Шубаркудук-Ақжар және Мартышин нысандары.",
              "陆上：萨吉兹、南恩比、舒巴尔库杜克-阿克扎尔和马尔特申勘探目标。"
            )}
          </li>
        </ul>
        <h3 className="text-center" style={{marginTop: '60px'}}>
            {t(
              "В области минералогии и геохимии:",

              "In the field of mineralogy and geochemistry:",

              "Минералогия және геохимия саласында:",

              "在矿物学和地球化学领域："
            )}
        </h3>
        <p className='w-75 mx-auto'>
          {t(
            "За последние 25 лет сотрудниками сектора минералогии ИГН им. К.И. Сатпаева было открыто, изучено и описано 15 новых минеральных видов,\nутвержденных Комиссией по новым минералам, классификации и номенклатуре Международной минералогической ассоциации.",

            "Over the past 25 years, 15 new mineral species have been discovered, studied, and described by the mineralogy sector of the Satbayev Institute of Geological Sciences,\napproved by the Commission on New Minerals, Nomenclature and Classification of the International Mineralogical Association.",

            "Соңғы 25 жылда Қ.И. Сәтбаев атындағы Геологиялық ғылымдар институтының минералогия секторы 15 жаңа минерал түрін ашып, зерттеп, сипаттады.\nБұл түрлер Халықаралық минералогиялық қауымдастықтың жаңа минералдар, номенклатура және жіктеу жөніндегі комиссиясы арқылы мақұлданды.",

            "在过去的25年里，萨特帕耶夫地质科学研究所矿物学部门发现、研究并描述了15种新的矿物类型，\n并获得了国际矿物学协会新矿物、命名和分类委员会的批准。"
          )}<br/> 
          {t(
            "За последние годы в Институте были открыты новые минеральные виды, утвержденные Комиссией по новым минералам, номенклатуре и классификации Международной минералогической ассоциации:",

            "In recent years, new mineral species have been discovered at the Institute, approved by the Commission on New Minerals, Nomenclature and Classification of the International Mineralogical Association:",

            "Соңғы жылдары Институтта Халықаралық минералогиялық қауымдастықтың жаңа минералдар, номенклатура және жіктеу жөніндегі комиссиясымен мақұлданған жаңа минерал түрлері ашылды:",

            "近年来，研究所发现了新的矿物种类，并获得了国际矿物学协会新矿物、命名和分类委员会的批准："
          )}
        </p>
        <ul className='w-75 mx-auto my-0' style={{ paddingBottom: '20px' }}>
            <li>
              {t(
                "Камараит Ba₃NaTi₄(Fe²⁺,Mn)₈(Si₂O₇)₄O₄(OH,F)₇",
                "Kamarait Ba₃NaTi₄(Fe²⁺,Mn)₈(Si₂O₇)₄O₄(OH,F)₇",
                "Камарайт Ba₃NaTi₄(Fe²⁺,Mn)₈(Si₂O₇)₄O₄(OH,F)₇",
                "卡马拉石 Ba₃NaTi₄(Fe²⁺,Mn)₈(Si₂O₇)₄O₄(OH,F)₇"
              )}
            </li>
            <li>
              {t(
                "Флюоролейкит NaNa₂(Mg₂Fe³⁺₂Li)Si₈O₂₂F₂",
                "Fluoroleakeite NaNa₂(Mg₂Fe³⁺₂Li)Si₈O₂₂F₂",
                "Флюоролейкит NaNa₂(Mg₂Fe³⁺₂Li)Si₈O₂₂F₂",
                "氟镁角闪石 NaNa₂(Mg₂Fe³⁺₂Li)Si₈O₂₂F₂"
              )}
            </li>
            <li>
              {t(
                "Натротитанит (Na,Ca,Y)TiSiO₄(O,F,OH)",
                "Natrotitanite (Na,Ca,Y)TiSiO₄(O,F,OH)",
                "Натротитанит (Na,Ca,Y)TiSiO₄(O,F,OH)",
                "钠钛硅酸盐 (Na,Ca,Y)TiSiO₄(O,F,OH)"
              )}
            </li>
            <li>
              {t(
                "Тарбагатаит (K)CaFe²⁺₇Ti₂(Si₄O₁₂)₂O₂(OH)₅",
                "Tarbagataite (K)CaFe²⁺₇Ti₂(Si₄O₁₂)₂O₂(OH)₅",
                "Тарбагатайит (K)CaFe²⁺₇Ti₂(Si₄O₁₂)₂O₂(OH)₅",
                "塔尔巴加泰石 (K)CaFe²⁺₇Ti₂(Si₄O₁₂)₂O₂(OH)₅"
              )}
            </li>
        </ul>
      </div>
      <hr className='text-dark my-0 mx-auto' style={{ height: '1px' }}/>
      <section id="contacts" style={{ fontFamily: 'Montserrat' }}>
        <Contacts lang={lang}/>
      </section>
      </>
    );
}