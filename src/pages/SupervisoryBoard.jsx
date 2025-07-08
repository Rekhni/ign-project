import { Card } from "primereact/card";

export default function SupervisoryBoard({ lang }) {
  const t = (ru, en, kz, zh) =>
    lang === "ru" ? ru : lang === "en" ? en : lang === "kz" ? kz : zh;

  return (
    <div className="board-container d-flex flex-column m-auto" style={{fontFamily: 'Montserrat'}}>
      <h1 className="board-title text-center mb-3 mt-3">{t('Наблюдательный совет', 'Supervisory Board', 'Бақылау кеңесі', '监事会')}</h1>

      <h3 className="board-chief-title mb-3 mt-3">{t(
            'Председатель Наблюдательного совета',
            'Chair of the Supervisory Board',
            'Бақылау кеңесінің төрағасы',
            '监事会主席'
            )}</h3>
      <Card className="p-3" style={{backgroundColor: 'rgb(228, 238, 239)', borderRadius: '30px'}}>
        <h3>{t('Темиртай Рымтаевич Избастин', 'Temirtai Rymtaevich Izbastin', 'Теміртай Рымтаевич Избастин', '铁米尔泰·雷姆塔耶维奇·伊兹巴斯廷')}</h3>
        <p className="m-0">
          {t(
            'Родился 10 сентября 1957 года в п. Баянаул Павлодарской области.',
            "Born on September 10, 1957, in the village of Bayanaul, Pavlodar region.",
            "1957 жылғы 10 қыркүйекте Павлодар облысы, Баянаул ауылында туған.",
            "1957年9月10日出生于巴甫洛达尔州巴亚瑙尔村。"
          )}
        </p>
        <p>
          {t(
          'Выпускник Алматинского государственного медицинского института, КазНПУ им. Абая (юриспруденция), Дипломатической академии МИД России и Болгарского Софийского университета (PhD).',
          'Graduate of the Almaty State Medical Institute, Abai Kazakh National Pedagogical University (Law), the Diplomatic Academy of the Russian Ministry of Foreign Affairs, and Sofia University in Bulgaria (PhD).',
          'Алматы мемлекеттік медицина институтының, Абай атындағы ҚазҰПУ-дың (құқықтану), Ресей СІМ Дипломатиялық академиясының және Болгарияның София университетінің (PhD) түлегі.',
          '毕业于阿拉木图国立医学院、阿拜哈萨克国立师范大学（法律专业）、俄罗斯外交部外交学院，以及保加利亚索菲亚大学（博士学位）。'
          )}
        </p>
        <p>
          {t(
            'С 1994 года работает в системе МИД РК, занимал дипломатические должности в Венгрии, Китае, Германии, Австрии и Болгарии. С 2019 года — Чрезвычайный и Полномочный Посол Казахстана в Болгарии. Имеет ранг Чрезвычайного и Полномочного Посланника II класса.',
            'Since 1994, he has been working in the diplomatic service of the Ministry of Foreign Affairs of the Republic of Kazakhstan. He held diplomatic posts in Hungary, China, Germany, Austria, and Bulgaria. Since 2019, he has been the Ambassador Extraordinary and Plenipotentiary of Kazakhstan to Bulgaria. He holds the rank of Envoy Extraordinary and Plenipotentiary, Class II.',
            '1994 жылдан бастап Қазақстан Республикасы Сыртқы істер министрлігінің жүйесінде қызмет атқарып келеді. Венгрияда, Қытайда, Германияда, Австрияда және Болгарияда дипломатиялық қызметтер атқарған. 2019 жылдан бастап – Қазақстанның Болгариядағы Төтенше және Өкілетті Елшісі. Төтенше және Өкілетті Елші II дәрежелі дипломатиялық дәрежесіне ие.',
            '自1994年起在哈萨克斯坦共和国外交部体系工作，曾在匈牙利、中国、德国、奥地利和保加利亚担任外交职务。自2019年起担任哈萨克斯坦驻保加利亚特命全权大使，拥有二级特命全权公使衔。'
          )}
        </p>
        <p>{t(
            'Владеет немецким, болгарским и английским языками.',
             'He is fluent in German, Bulgarian, and English.', 
             'Неміс, болгар және ағылшын тілдерін меңгерген.',
             '精通德语、保加利亚语和英语。'
             )}</p>
      </Card>

      <h3 className="board-members-title mb-3 mt-3">{t(
            'Члены Наблюдательного совета',
            'Members of the Supervisory Board',
            'Бақылау кеңесінің мүшелері',
            '监事会成员'
            )}</h3>
      <div className="d-flex flex-column gap-3 mb-3">
        <Card className="p-3" style={{backgroundColor: 'rgb(228, 238, 239)', borderRadius: '30px'}}>
          <h3>{t(
            'Булат Султанович Ужкенов',
            'Bulat Sultanovich Uzhkenov',
            'Болат Сұлтанұлы Үшкенов',
            '布拉特·苏尔坦诺维奇·乌日克诺夫'
            )}</h3>
          <p className="m-0">
            {t(
                'Родился 26 октября 1955 года в городе Актюбинск.',
                'Born on October 26, 1955, in the city of Aktobe.',
                '1955 жылғы 26 қазанда Ақтөбе қаласында туған.',
                '1955年10月26日出生于阿克托别市。'
            )}
          </p>
          <p>
            {t(
                'Выпускник Казахского политехнического института имени В.И. Ленина, горный инженер- геолог. Доктор геолого-минералогических наук, Академик Академии минеральных ресурсов Республики Казахстан, Академик казахстанской национальной академии естественных наук.',
                'Graduate of the Kazakh Polytechnic Institute named after V.I. Lenin, mining engineer-geologist. Doctor of Geological and Mineralogical Sciences, Academician of the Academy of Mineral Resources of the Republic of Kazakhstan, Academician of the Kazakh National Academy of Natural Sciences.',
                'В.И. Ленин атындағы Қазақ политехникалық институтының түлегі, тау-кен инженері-геолог. Геология-минералогия ғылымдарының докторы, Қазақстан Республикасының Минералдық ресурстар академиясының академигі, Қазақстан ұлттық жаратылыстану ғылымдары академиясының академигі.',
                '毕业于以列宁命名的哈萨克斯坦理工学院，矿业工程地质师。 地质与矿物学博士，哈萨克斯坦共和国矿产资源科学院院士， 哈萨克斯坦国家自然科学院院士。'
            )}
          </p>
          <p>
            {t(
                'Казахстанский государственный деятель, учёный, кандидат технических наук, доктор геолого-минералогических наук, Президент Академии Минеральных ресурсов, Академик Инженерной академии, Академии минеральных ресурсов РК, Международной академии минеральных ресурсов. Иностранный член Российской академии естественных наук.',
                'Kazakhstani statesman and scientist, Candidate of Technical Sciences, Doctor of Geological and Mineralogical Sciences, President of the Academy of Mineral Resources, Academician of the Engineering Academy, the Academy of Mineral Resources of Kazakhstan, and the International Academy of Mineral Resources. Foreign member of the Russian Academy of Natural Sciences.',
                'Қазақстанның мемлекет қайраткері, ғалым, техника ғылымдарының кандидаты, геология-минералогия ғылымдарының докторы, Минералдық ресурстар академиясының президенті, Инженерлік академияның, ҚР Минералдық ресурстар академиясының, Халықаралық минералдық ресурстар академиясының академигі. Ресей Жаратылыстану ғылымдары академиясының шетелдік мүшесі.',
                '哈萨克斯坦国家政治人物、科学家，技术科学副博士，地质与矿物学博士， 矿产资源科学院院长，工程科学院、哈萨克斯坦矿产资源科学院、 国际矿产资源科学院院士。俄罗斯自然科学院外籍院士。'
            )}
          </p>
          <p>
            {t(
                'Почётный разведчик недр Республики Казахстан. Первооткрыватель месторождений полезных ископаемых. Автор 9 монографий, 22 научных статей.',
                'Honored Subsoil Explorer of the Republic of Kazakhstan. Discoverer of mineral deposits. Author of 9 monographs and 22 scientific articles.',
                'Қазақстан Республикасының Құрметті жер қойнауын зерттеушісі. Пайдалы қазбалар кен орындарының алғаш ашушысы. 9 монография мен 22 ғылыми мақаланың авторы.',
                '哈萨克斯坦共和国荣誉矿产勘探者。矿产资源发现者。 著有9本专著和22篇科学论文。'
            )}
          </p>
          <p>{t(
            'Владеет казахским, русским и английским языками.',
            'Fluent in Kazakh, Russian, and English.',
            'Қазақ, орыс және ағылшын тілдерін меңгерген.',
            '精通哈萨克语、俄语和英语。'
          )}
        </p>
        </Card>
        <Card className="p-3" style={{backgroundColor: 'rgb(228, 238, 239)', borderRadius: '30px'}}>
          <h3>{t(
            'Шалабаев Азамат Женисович',
            'Azamat Zhenisovich Shalabayev',
            'Шалабаев Азамат Жеңісұлы',
            '阿扎马特·热尼索维奇·沙拉巴耶夫'
            )}</h3>
          <p className="m-0">
            {t(
                'Родился 12 октября 1980 года в Карагандинской области.',
                'Born on October 12, 1980, in Karaganda Region.',
                '1980 жылғы 12 қазанда Қарағанды облысында туған.',
                '1980年10月12日出生于卡拉干达州。'
            )}
          </p>
          <p>
            {t(
                'Выпускник Жезказганского университета им. Байконурова Специальность «Горный инженер», Карагандинский экономический университет Специальность «Экономист», Московского Горного Института НИТУ МИСИС, MBA MINING «Мастер делового администрирования» по специализации «МВА - Менеджмент горного производства».',
                'Graduate of Baikonurov Zhezkazgan University with a degree in Mining Engineering; Karaganda Economic University with a degree in Economics; Moscow State Mining University (NITU MISIS), MBA MINING – Master of Business Administration with a specialization in "MBA – Mining Management".',
                'Байқоңыров атындағы Жезқазған университетінің «Тау-кен инженері» мамандығы бойынша түлегі; Қарағанды экономикалық университетінің «Экономист» мамандығы бойынша түлегі; Мәскеу тау-кен институты НИТУ МИСИС-тің MBA MINING бағдарламасы бойынша «Іскерлік басқару магистрі»  (мамандығы – «MBA – Тау-кен өндірісін басқару»).',
                '毕业于拜科努尔夫热兹卡兹甘大学，专业为矿业工程师；毕业于卡拉干达经济大学，专业为经济学家；莫斯科国立矿业学院（NITU MISIS）MBA MINING，商业管理硕士（MBA）学位，专业为“矿业管理”。'
            )}
          </p>
          <p>{t(
            'Кандидат технических наук',
            'Candidate of Technical Sciences',
            'Техника ғылымдарының кандидаты',
            '技术科学副博士'
        )}</p>
          <p>
            {t(
                'Преподаватель Жезказганского университета им. Байконурова; Научный сотрудник ТОО «Институт проблем комплексного использования недр»; Главный инженер проекта ТОО «Корпорация Казахмыс»; Директор департамента недропользования АО «НК «СПК «Сарыарка»; Руководитель управления контрактов департамента недропользования Министерства по инвестициям и развитию РК; Заместитель директора, исполняющий обязанности директора департамента недропользования Министерства по инвестициям и развитию РК; Руководитель республиканского государственного учреждения «Центрально- Казахстанский межрегиональный департамент геологии и недропользования Комитета геологии и недропользования Министерства по инвестициям и развитию Республики Казахстан «Центрказнедра»; Генеральный директор ТОО «ERG Exploration».',
                'Lecturer at Baikonurov Zhezkazgan University; Researcher at LLP "Institute of Complex Subsoil Use Problems"; Chief Project Engineer at LLP "Kazakhmys Corporation"; Director of the Subsoil Use Department at JSC "NC SPK Saryarka"; Head of the Contracts Division of the Subsoil Use Department of the Ministry of Investments and Development of the Republic of Kazakhstan;   Deputy Director and Acting Director of the Subsoil Use Department of the Ministry of Investments and Development of the Republic of Kazakhstan;   Head of the Republican State Institution "Central Kazakhstan Interregional Department of Geology and Subsoil Use"   of the Committee of Geology and Subsoil Use of the Ministry of Investments and Development of the Republic of Kazakhstan "TsentrKazNedra";   General Director of LLP "ERG Exploration".',
                'Байқоңыров атындағы Жезқазған университетінің оқытушысы; «Жерасты ресурстарын кешенді пайдалану проблемалары институты» ЖШС-нің ғылыми қызметкері; «Қазақмыс корпорациясы» ЖШС жобасының бас инженері; «Сарыарқа» ӘКК ҰК» АҚ жер қойнауын пайдалану департаментінің директоры; ҚР Инвестициялар және даму министрлігінің жер қойнауын пайдалану департаменті келісімшарттар басқармасының басшысы; ҚР Инвестициялар және даму министрлігінің жер қойнауын пайдалану департаменті директорының орынбасары, директордың міндетін атқарушы; ҚР Инвестициялар және даму министрлігінің Геология және жер қойнауын пайдалану комитетінің «Орталық Қазақстан өңіраралық геология және жер қойнауын пайдалану департаменті» республикалық мемлекеттік мекемесінің басшысы – «ЦентрКазНедра»; «ERG Exploration» ЖШС-нің бас директоры.',
                '担任拜科努尔夫热兹卡兹甘大学讲师；有限责任公司“地下资源综合利用问题研究所”研究员；“哈萨克铜业公司”有限责任公司项目总工程师；“国家公司萨雷阿尔卡社会企业公司”股份公司矿产资源开发部主任；哈萨克斯坦共和国投资与发展部矿产资源开发部合同管理处负责人；投资与发展部矿产资源开发部副主任、代理主任；哈萨克斯坦共和国投资与发展部地质与矿产资源使用委员会 “中哈州际地质与矿产资源使用局”国家机构负责人（ЦентрКазНедра）；“ERG Exploration”有限责任公司总经理。'
            )}
          </p>
        </Card>
        <Card className="p-3" style={{backgroundColor: 'rgb(228, 238, 239)', borderRadius: '30px'}}>
          <h3>{t(
            'Жазылбеков Нурлан Абдужапарович',
            'Nurlan Abduzhaparovich Zhazylbekov',
            'Нұрлан Абдужапарұлы Жазылбеков',
            '努尔兰·阿卜杜扎帕罗维奇·扎兹勒别科夫'
            )}</h3>
          <p>{t(
            'Адвокат Алматинской городской коллегии адвокатов.',
            'Lawyer of the Almaty City Bar Association.',
            'Алматы қалалық адвокаттар алқасының адвокаты.',
            '阿拉木图市律师协会律师。'
            )}</p>
          <p className="m-0">
            {t(
                'Родился 10 декабря 1956 года в Алматинской области.',
                'Born on December 10, 1956, in Almaty Region.',
                '1956 жылғы 10 желтоқсанда Алматы облысында туған.',
                '1956年12月10日出生于阿拉木图州。'
            )}
          </p>
          <p>
            {t(
                'Выпускник Алматинского энергетического института специальность инженер-электрик, Академии экономики и права.',
                'Graduate of the Almaty Institute of Energy (Electrical Engineering) and the Academy of Economics and Law.',
                'Алматы энергетикалық институтының «Электр инженері» мамандығы бойынша, сондай-ақ Экономика және құқық академиясының түлегі.',
                '毕业于阿拉木图能源学院，专业为电气工程师；还毕业于经济与法律学院。'
            )}
          </p>
          <p>
            {t(
                'Работал научным сотрудником Алматинского энергетического института, главным энергетиком Джамбульского стекольного завода; начальником электрослужбы производственного треста жилищного хозяйства г. Джамбыл; старшим инженером НИР Джамбульского технологического института легкой и пищевой промышленности; предпринимателем; председателем ОО «Карасайский союз предпринимателей»; председателем правления «Национальная экономическая палата Казахстана «Союз «Атамекен» по Алматинской области; депутат Мажилиса Парламента Республики Казахстан пятого созыва, член Комитета по финансам и бюджету; Бизнесмен и общественный деятель Казахстана.',
                'Worked as a research fellow at the Almaty Institute of Energy; Chief Power Engineer of the Dzhambul Glass Plant; Head of the Electrical Service of the Housing Maintenance Trust in the city of Dzhambul; Senior Engineer for R&D at the Dzhambul Technological Institute of Light and Food Industry; Entrepreneur; Chairman of the NGO "Karasai Entrepreneurs\' Union"; Chairman of the Board of the National Economic Chamber of Kazakhstan "Atameken Union" for the Almaty Region; Member of the Majilis (Lower House) of the Parliament of the Republic of Kazakhstan of the fifth convocation, member of the Finance and Budget Committee; Businessman and public figure of Kazakhstan.',
                'Алматы энергетикалық институтында ғылыми қызметкер; Жамбыл шыны зауытының бас энергетигі; Жамбыл қаласының тұрғын үй шаруашылығы өндірістік тресінің электр қызметінің басшысы; Жеңіл және тамақ өнеркәсібі Жамбыл технологиялық институтының ғылыми-зерттеу бөлімінде аға инженер; Кәсіпкер; «Қарасай кәсіпкерлер одағы» қоғамдық бірлестігінің төрағасы; Алматы облысы бойынша «Атамекен» Қазақстанның Ұлттық экономикалық палатасының басқарма төрағасы; Қазақстан Республикасы Парламенті Мәжілісінің V шақырылымының депутаты, Қаржы және бюджет комитетінің мүшесі; Қазақстанның кәсіпкері және қоғам қайраткері.',
                '曾在阿拉木图能源学院担任科研人员；担任贾姆布尔玻璃厂的首席电力工程师；贾姆布尔市住宅管理企业电力部门负责人；贾姆布尔轻工与食品工业技术学院科研项目高级工程师；企业家；“卡拉赛企业家联盟”非政府组织主席；哈萨克斯坦国家经济商会“阿塔梅肯联盟”阿拉木图州分会主席；哈萨克斯坦共和国议会下院第五届议员，财政与预算委员会成员；哈萨克斯坦商人和社会活动家。'
            )}
          </p>
        </Card>
        <Card className="p-3" style={{backgroundColor: 'rgb(228, 238, 239)', borderRadius: '30px'}}>
          <h3>{t(
            'Рысбеков Канай Бахытович',
            'Kanai Bakhytovich Rysbekov',
            'Қанай Бақытұлы Рысбеков',
            '卡奈·巴赫托维奇·雷斯别科夫'
            )}</h3>
          <p>
            {t(
                'Родился 1973 году 8 января в Калининградской области, Багратионовского района, с. Корнева.',
                'Born on January 8, 1973, in Kornevo village, Bagrationovsky district, Kaliningrad Region.',
                '1973 жылғы 8 қаңтарда Калининград облысы, Багратионов ауданы, Корнево ауылында туған.',
                '1973年1月8日出生于加里宁格勒州巴格拉季奥诺夫区科尔涅沃村。'
            )}
          </p>
          <p className="m-0">
            {t(
                'Выпускник Казахского Национального Технического Университета, горный инженер- маркшейдер.',
                'Graduate of the Kazakh National Technical University, mining engineer–surveyor.',
                'Қ.И. Сәтбаев атындағы Қазақ ұлттық техникалық университетінің түлегі, тау-кен инженері — маркшейдер.',
                '毕业于卡萨克国家技术大学，矿业工程师–测量员。'
            )}
          </p>
          <p>
            {t(
                'Работал на кафедре «Маркшейдерское дело и геодезия» в качестве преподавателя-стажера. Окончил очную аспирантуру при кафедре МДиГ КазНТУ им. К.И.Сатпаева, защитил кандидатскую диссертацию по проблемам маркшейдерского обеспечения открытых горных работ. С 2000 года продолжил педагогическую деятельность в должности преподавателя, старшего преподавателя и доцента кафедры «Маркшейдерское дело и геодезия», заместителем директора, директором Горного института им. О.А..Байконурова КазНИТУ им. К.И.Сатпаева; директором Горно-металлургического института им. О.А. Байконурова. В настоящее время Директор института металлургии и промышленной инженерии НАО «КазНИТУ имени К.И.Сатпаева».',
                'Worked at the Department of Mine Surveying and Geodesy as a trainee lecturer. Completed full-time postgraduate studies at the same department of Satbayev KazNTU, and defended his PhD dissertation on issues of mine surveying support for open-pit mining. Since 2000, he has continued his academic career as lecturer, senior lecturer, and associate professor at the Department of Mine Surveying and Geodesy; served as Deputy Director and Director of the O.A. Baikonurov Mining Institute at Satbayev KazNITU; and Director of the O.A. Baikonurov Institute of Mining and Metallurgy. Currently, he is the Director of the Institute of Metallurgy and Industrial Engineering at Satbayev University.',
                '«Маркшейдерлік іс және геодезия» кафедрасында оқытушы тағылымдамашысы болып жұмыс істеген. Қ.И. Сәтбаев атындағы ҚазҰТУ-дың сол кафедрасында күндізгі аспирантураны бітіріп, ашық тау-кен жұмыстарының маркшейдерлік қамтамасыз ету мәселелері бойынша кандидаттық диссертация қорғаған. 2000 жылдан бастап «Маркшейдерлік іс және геодезия» кафедрасында оқытушы, аға оқытушы, доцент болып жұмыс істеген; О.А. Байқоңыров атындағы Тау-кен институтының директор орынбасары және директоры қызметтерін атқарған; О.А. Байқоңыров атындағы Тау-кен металлургия институтының директоры болған. Қазіргі уақытта Қ.И. Сәтбаев атындағы Қазақ ұлттық техникалық зерттеу университетінің Металлургия және өнеркәсіптік инженерия институтының директоры.',
                '曾在“矿山测量与测绘”系担任实习讲师；毕业于卡萨克国家技术大学萨特帕耶夫分校该系的全日制研究生课程， 并就露天采矿测量保障问题完成并答辩了技术科学副博士论文。 自2000年起，担任讲师、高级讲师、该系副教授； 担任卡萨克国家技术大学奥·阿·拜科努罗夫矿业学院副院长、院长； 担任奥·阿·拜科努罗夫矿冶学院院长。 现任卡萨克国家技术大学（以萨特帕耶夫命名）冶金与工业工程学院院长。'
            )}
          </p>
          <p>
            {t(
                'Действительный член Международной академии информатизации Республики Казахстан, Академии горных наук РФ и член-корреспондент Международной АН Экология и Безопасность жизнедеятельности (Санкт-Петербург).',
                'Full member of the International Academy of Informatization of the Republic of Kazakhstan, the Russian Academy of Mining Sciences, and corresponding member of the International Academy of Sciences "Ecology and Life Safety" (St. Petersburg).',
                'Қазақстан Республикасының Халықаралық ақпараттандыру академиясының толық мүшесі, Ресей Федерациясы Тау-кен ғылымдары академиясының академигі, Санкт-Петербургтегі «Экология және тіршілік қауіпсіздігі» халықаралық ғылым академиясының корреспондент-мүшесі.',
                '是哈萨克斯坦国际信息化科学院正式成员，俄罗斯矿业科学院院士，圣彼得堡“生态与生命安全”国际科学院通讯院士。'
            )}
          </p>
        </Card>
        <Card className="p-3" style={{backgroundColor: 'rgb(228, 238, 239)', borderRadius: '30px'}}>
          <h3>{t(
            'Жазылбеков Нурлан Абдужапарович',
            'Nurlan Abduzhaparovich Zhazylbekov',
            'Нұрлан Абдужапарұлы Жазылбеков',
            '努尔兰·阿卜杜扎帕罗维奇·扎兹勒别科夫'
            )}</h3>
          <p>{t(
            'Корпоративный секретарь НАО «КазНИТУ им. К.И. Сатпаева».',
            'Corporate Secretary of NJSC "Satbayev University".',
            'Қ.И. Сәтбаев атындағы ҚазҰТЗУ-дың корпоративтік хатшысы.',
            '萨特帕耶夫大学国家股份公司公司秘书。'
            )}</p>
        </Card>
      </div>
    </div>
  );
}
