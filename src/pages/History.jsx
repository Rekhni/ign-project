import satbayevImg from '../assets/SatpaevKI.webp';
import satbayevImg1 from '../assets/satpaev-soveshchanie.jpg.webp';
import satbayevImg2 from '../assets/satpaev3.webp';
import Contacts from '../components/Contacts';

export default function History({ lang }) {
  const t = (ru, en, kz, zh) => (lang === 'ru' ? ru : lang === 'en' ? en : lang === 'kz' ? kz : zh);
  return (
    <div className='text-dark bg-white' style={{margin: '0', fontFamily: 'Montserrat'}}>
      <div
        className="d-flex flex-column justify-content-center fw-bold w-75 mx-auto"
        style={{ margin: "0 50px 0 50px", padding: '30px 0' }}
      >
        <div className='d-flex gap-3 justify-content-center align-items-center w-75 mx-auto'>
            <hr className="bg-white" style={{ height: '5px', width: '30%'}}/>
            <h1 className="text-center fs-3 fs-lg-9">
              {t(
                'История',
                
                'History',

                'Тарих',

                '历史'
              )}
            </h1>
            <hr className="bg-white" style={{ height: '5px', width: '30%'}}/>
        </div>
        <hr className='text-dark' style={{ width: '100%', height: '2px' }}/>
        <p className="text-center fst-italic fw-semibold w-100 w-lg-50 mx-auto " >
          {t(
            '«Геологическая наука развивается в Казахстане на основе творческого содружества с практикой, на базе практики и для практики»',

            '“Geological science in Kazakhstan develops through a creative partnership with practice — based on practice and for practice.”',

            '«Қазақстанда геологиялық ғылым тәжірибемен шығармашылық серіктестік арқылы, тәжірибе негізінде және тәжірибе үшін дамуда»',

            '“哈萨克斯坦的地质科学是在与实践的创造性合作基础上发展起来的，基于实践，也服务于实践。”'
          )}
        </p>
        <hr className='text-dark' style={{ width: '100%', height: '2px' }}/>
        <p className="text-end fw-semibold" style={{ paddingRight: '80px'}}>
          {t(
            'Академик К.И. Сатпаев',
            'Scientist K. I. Satpayev',
            'Академик Қ.И. Сәтпаев',
            '卡·伊·萨特帕耶夫院士'
          )}
        </p>
      </div>
      <div className="d-lg-flex gap-3 w-75 justify-content-between mx-auto">
        <div className='w-100 w-lg-75'>
          <p>
            {t(
              'Институт геологических наук основан в 1940 году на базе Геологического сектора Казахского филиала Академии наук СССР. В 1964 году Постановлением Совета Министров КазССР Институту было присвоено имя Каныша Имантаевича Сатпаева, первого директора нашего Института.\n' +
              'С 1940 по 1964 гг. первым руководителем был Каныш Имантаевич Сатпаев. Выдающийся ученый и государственный деятель, основатель и первый президент Академии наук республики, академик Академии наук СССР и Казахской ССР, Почетный академик ряда академий зарубежных стран, лауреат Ленинской и Государственных премий, выдающаяся личность. С его именем связаны развитие науки Казахстана, становление народного хозяйства Республики, развитие геологической отрасли.\n' +
              'Накопленный Институтом кадровый потенциал и огромные фактические данные позволили выделить из его состава:\n' +
              '1. Институт горного дела (в 1945 г.)\n' +
              '2. Институт химии (в 1945 г.)\n' +
              '3. Институт металлургии и обогащения (в 1946 г.)\n' +
              '4. Институт гидрогеологии и гидрофизики (в 1965 г.)\n' +
              '5. Институт сейсмологии (в 1976 г.)',

              'The Institute of Geological Sciences was founded in 1940 based on the Geological Sector of the Kazakh branch of the USSR Academy of Sciences. In 1964, by resolution of the Council of Ministers of the Kazakh SSR, the Institute was named after Kanysh Imantaevich Satpayev, the first director of the Institute.\n' +
              'From 1940 to 1964, it was led by Kanysh Imantaevich Satpayev — an outstanding scientist and statesman, the founder and first president of the Academy of Sciences of the Republic, academician of the USSR and Kazakh SSR academies, honorary member of several foreign academies, laureate of the Lenin and State Prizes, and a remarkable personality. His name is associated with the development of science in Kazakhstan, the foundation of the Republic’s economy, and the growth of the geological sector.\n' +
              'Thanks to the Institute’s scientific staff and rich data base, the following institutes were created from it:\n' +
              '1. Institute of Mining (1945)\n' +
              '2. Institute of Chemistry (1945)\n' +
              '3. Institute of Metallurgy and Enrichment (1946)\n' +
              '4. Institute of Hydrogeology and Hydrophysics (1965)\n' +
              '5. Institute of Seismology (1976)',

              'Геология ғылымдары институты 1940 жылы КСРО Ғылым академиясының Қазақ филиалының Геология секторы негізінде құрылды. 1964 жылы ҚазКСР Министрлер Кеңесінің қаулысымен институтқа оның алғашқы директоры Қаныш Имантаевич Сәтпаевтың есімі берілді.\n' +
              '1940–1964 жылдары Институтты Қаныш Имантаевич Сәтпаев басқарды. Ол – көрнекті ғалым және мемлекет қайраткері, республиканың Ғылым академиясының негізін қалаушы және тұңғыш президенті, КСРО және Қазақ КСР академияларының академигі, шетел академияларының құрметті мүшесі, Ленин және Мемлекеттік сыйлықтардың лауреаты, ұлы тұлға. Оның есімі Қазақстан ғылымының дамуы, халық шаруашылығының қалыптасуы және геология саласының дамуы сияқты істермен тығыз байланысты.\n' +
              'Институттың жинақтаған ғылыми әлеуеті мен дерекқоры негізінде төмендегі ғылыми мекемелер құрылды:\n' +
              '1. Тау-кен ісі институты (1945 ж.)\n' +
              '2. Химия институты (1945 ж.)\n' +
              '3. Металлургия және байыту институты (1946 ж.)\n' +
              '4. Гидрогеология және гидрофизика институты (1965 ж.)\n' +
              '5. Сейсмология институты (1976 ж.)',

              '地质科学研究所于1940年在苏联科学院哈萨克分院地质部门的基础上成立。1964年，哈萨克苏维埃社会主义共和国部长会议决定将研究所以首任所长卡尼什·伊曼塔耶维奇·萨特帕耶夫的名字命名。\n' +
              '从1940年到1964年，该所由萨特帕耶夫领导。他是杰出的科学家和政治家，哈萨克斯坦科学院的创始人和首任主席，苏联和哈萨克科学院的院士，多个国家科学院的荣誉院士，列宁奖与国家奖获得者。萨特帕耶夫的名字与哈萨克斯坦科学的发展、国家经济体系的形成以及地质领域的兴起密不可分。\n' +
              '研究所积累的科研潜力和大量数据成为多个新机构的基础：\n' +
              '1. 采矿研究所（1945年）\n' +
              '2. 化学研究所（1945年）\n' +
              '3. 冶金与选矿研究所（1946年）\n' +
              '4. 水文地质与水物理研究所（1965年）\n' +
              '5. 地震研究所（1976年）'
            ).split('\n').map((line, index) => <span key={index}>{line}<br /></span>)}
          </p>

        </div>
        <img className="satbayev-img rounded w-lg-25" src={satbayevImg} alt="satbayev-img" height="400" />
      </div>
      <div className="d-lg-flex gap-3 w-75 mt-3" style={{ margin: "0 auto" }}>
        <img src={satbayevImg1} alt="satbayev-img-2" height="200" className='rounded mb-3'/>
        <p>
          {t(
            'Итогом исследований первого поколения казахстанских геологов советского периода стало создание первой геологической карты Восточного Казахстана и крупной монографии «Восточный Казахстан», опубликованной в 1941 г. в виде 20-го тома «Геологии СССР» под редакцией Н.Г. Кассина. Это выдающееся достижение в познании геологии Восточного Казахстана в 1946 г. было отмечено Государственной премией СССР.\n' +
            'В послевоенные годы в Институте стали активно развиваться все направления геологической науки — металлогения, палеонтология, стратиграфия, геотектоника, минералогия, геохимия, геофизика, гидрогеология.\n' +
            'Развитие этих направлений неразрывно связано с такими выдающимися геологами, как Р.А. Борукаев, Н.Г. Кассин, А.К. Каюпов, И.И. Бок, И.П. Новохатский, Д.Н. Казанли, Г.Ц. Медоев, Г.Н. Щерба, П.Я. Авров, П.Т. Тажибаева, Г.Б. Жилинский, В.Ф. Беспалов, Н.К. Ившин, Г.Ф. Ляпичев, И.Ф. Никитин, С.М. Бандалетов, С.А. Кенесарин, М.В. Тащинин, В.В. Галицкий, У.М. Ахметсафин, В.К. Монич, А.А. Абдулин, Е.Д. Тапалов, В.М. Шужанов, Л.А. Мирошниченко, В.М. Пилифосов, В.Н. Любецкий, М.С. Быкова и многими другими.',

            'The result of the first generation of Soviet-era Kazakh geologists’ work was the creation of the first geological map of Eastern Kazakhstan and a major monograph titled "Eastern Kazakhstan", published in 1941 as volume 20 of the “Geology of the USSR” series, edited by N.G. Kassin. This outstanding achievement in understanding the geology of Eastern Kazakhstan was awarded the USSR State Prize in 1946.\n' +
            'In the postwar years, all areas of geological science began to actively develop at the Institute — including metallogeny, paleontology, stratigraphy, geotectonics, mineralogy, geochemistry, geophysics, and hydrogeology.\n' +
            'The development of these fields is closely linked to outstanding geologists such as R.A. Borukaev, N.G. Kassin, A.K. Kayupov, I.I. Bok, I.P. Novokhatsky, D.N. Kazanli, G.Ts. Medoev, G.N. Shcherba, P.Ya. Avrov, P.T. Tazhibaeva, G.B. Zhilinsky, V.F. Bespalov, N.K. Ivshin, G.F. Lyapichev, I.F. Nikitin, S.M. Bandaletov, S.A. Kenesarin, M.V. Tashchinin, V.V. Galitsky, U.M. Akhmetsafin, V.K. Monich, A.A. Abdulin, E.D. Tapalov, V.M. Shuzhanov, L.A. Miroshnichenko, V.M. Pilifosov, V.N. Lyubetsky, M.S. Bykova, and many others.',

            'Кеңестік кезеңдегі қазақстандық геологтардың алғашқы буынының зерттеу нәтижесі — Шығыс Қазақстанның алғашқы геологиялық картасының жасалуы және 1941 жылы жарық көрген, Н.Г. Кассиннің редакциясымен шыққан «КСРО геологиясы» жинағының 20-томы ретінде жарияланған «Шығыс Қазақстан» атты көлемді монография болды. Бұл Шығыс Қазақстан геологиясын зерттеудегі аса маңызды жетістік 1946 жылы КСРО Мемлекеттік сыйлығымен марапатталды.\n' +
            'Соғыстан кейінгі жылдары Институтта геологиялық ғылымның барлық салалары: металлогения, палеонтология, стратиграфия, геотектоника, минералогия, геохимия, геофизика және гидрогеология белсенді дамыды.\n' +
            'Бұл бағыттардың дамуы Р.А. Борукаев, Н.Г. Кассин, А.К. Каюпов, И.И. Бок, И.П. Новохатский, Д.Н. Казанли, Г.Ц. Медоев, Г.Н. Щерба, П.Я. Авров, П.Т. Тажибаева, Г.Б. Жилинский, В.Ф. Беспалов, Н.К. Ившин, Г.Ф. Ляпичев, И.Ф. Никитин, С.М. Бандалетов, С.А. Кенесарин, М.В. Тащинин, В.В. Галицкий, У.М. Ахметсафин, В.К. Монич, А.А. Абдулин, Е.Д. Тапалов, В.М. Шужанов, Л.А. Мирошниченко, В.М. Пилифосов, В.Н. Любецкий, М.С. Быкова және басқа да көптеген ғалымдармен тығыз байланысты.',

            '苏联时期首批哈萨克地质学家的研究成果之一，是绘制了东哈萨克斯坦的第一张地质图，并出版了重要专著《东哈萨克斯坦》（由N.G. 卡辛主编），该书于1941年作为《苏联地质》第20卷出版。这一在认识东哈萨克地质方面的重要成就于1946年荣获苏联国家奖。\n' +
            '战后年代，研究所的地质学各分支如成矿学、古生物学、地层学、构造地质学、矿物学、地球化学、地球物理学和水文地质学迅速发展。\n' +
            '这些方向的发展与以下著名地质学家紧密相关：R.A. 博鲁卡耶夫、N.G. 卡辛、A.K. 卡尤波夫、I.I. 博克、I.P. 诺沃哈茨基、D.N. 卡赞利、G.Ts. 梅多耶夫、G.N. 谢尔巴、P.Ya. 阿夫罗夫、P.T. 塔日巴耶娃、G.B. 日林斯基、V.F. 别斯帕洛夫、N.K. 伊夫辛、G.F. 廖皮切夫、I.F. 尼基京、S.M. 班达列托夫、S.A. 克内萨林、M.V. 塔希宁、V.V. 加利茨基、U.M. 阿赫梅特萨芬、V.K. 莫尼奇、A.A. 阿卜杜林、E.D. 塔帕洛夫、V.M. 舒让诺夫、L.A. 米罗什尼琴科、V.M. 皮利福索夫、V.N. 柳别茨基、M.S. 比科娃及众多其他专家。'
          ).split('\n').map((line, index) => <span key={index}>{line}<br /></span>)}
        </p>

      </div>
      <div className="d-lg-flex gap-3 w-75 mt-3" style={{ margin: "0 auto" }}>
        <p>
          {t(
            'В 60–70–ые годы Институт геологических наук стал флагманом геологии Казахстана. Казахстанские геологи впервые составили металлогенические и прогнозные карты Центрального Казахстана, некоторых районов Рудного Алтая и Калбы, не имевшие в то время аналогов в мировой практике по комплексности, детальности и полноте обоснования.\n' +
            'Признанием этому стало проведение в г. Алма-Ате первого Всесоюзного металлогенического совещания и присуждение творческому коллективу (К.И. Сатпаев, И.И. Бок, Р.А. Борукаев, Г.Б. Жилинский, Д.Н. Казанли, Г.Ц. Медоев, И.П. Новохатский, Г.Н. Щерба) Ленинской премии.',

            'In the 1960s–70s, the Institute of Geological Sciences became a flagship of geology in Kazakhstan. For the first time, Kazakhstani geologists compiled metallogenic and forecast maps of Central Kazakhstan, some areas of Rudny Altai and Kalba, which had no equivalents in the world at that time in terms of complexity, detail, and scientific justification.\n' +
            'This achievement was recognized by hosting the first All-Union Metallogenic Conference in Almaty and awarding the creative team (K.I. Satpayev, I.I. Bok, R.A. Borukaev, G.B. Zhilinsky, D.N. Kazanli, G.Ts. Medoev, I.P. Novokhatsky, G.N. Shcherba) the Lenin Prize.',

            '1960–70 жылдары Геология ғылымдары институты Қазақстан геологиясының флагманына айналды. Қазақстандық геологтар алғаш рет Орталық Қазақстанның, Рудалы Алтай мен Қалбының кейбір аудандарының металлогендік және болжамдық карталарын жасап, олар кешенділігі, нақтылығы мен негіздемесінің толықтығы жағынан сол кезеңдегі дүниежүзінде теңдесі жоқ жұмыстар болды.\n' +
            'Бұл жетістіктің мойындалуы ретінде Алматы қаласында алғашқы Одақтық металлогендік кеңестің өтуі және (Қ.И. Сәтпаев, И.И. Бок, Р.А. Боруқаев, Г.Б. Жилинский, Д.Н. Казанли, Г.Ц. Медоев, И.П. Новохатский, Г.Н. Щерба) шығармашылық ұжымына Ленин сыйлығының берілуі болды.',

            '在20世纪60–70年代，地质科学研究所成为哈萨克斯坦地质研究的旗帜。哈萨克地质学家首次编制了中哈地区、鲁德内阿尔泰和卡尔巴部分区域的成矿与预测图，这些地图在复杂性、详细性和理论依据的完整性方面在当时的国际上堪称无与伦比。\n' +
            '这一成就得到了高度认可：第一届全苏成矿会议在阿拉木图举行，创作团队（卡·伊·萨特帕耶夫、伊·伊·博克、拉·阿·博鲁卡耶夫、吉·比·日林斯基、德·恩·卡赞利、格·采·梅多耶夫、伊·彼·诺沃哈茨基、格·恩·谢尔巴）获得了列宁奖。'
          ).split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}
        </p>
        <img src={satbayevImg2} alt="satbayev-img-3" height="200" className='rounded'/>
      </div>
        <p className="w-75 mt-3" style={{ margin: "0 auto" }}>
          {t(
            '60–90 гг. прошлого века стали периодом открытия и разведки целой серии редкометалльных объектов в Центральном (Коктенколь, Верхнее Кайракты, Байназар, Селтей, Жанет, Батыстау и др.), Южном (Богуты, Карагайлыактас), а впоследствии и в Северном (Баян, Аксоран, Сырымбет, Донецкое) Казахстане.\n' +
            'Комплексное изучение Успенской зоны завершилось выделением крупного рудного пояса. Результаты исследований были опубликованы в шеститомной монографии, удостоенной Государственной премии Казахской ССР (1972 г.).\n' +
            'В последующие годы (1974–1979 гг.) были организованы исследования Чу-Илийского рудного пояса совместно с большим коллективом геологов АН КазССР и Министерства геологии КазССР. Результаты этих работ отражены в опубликованной шеститомной монографии и вместе с другими работами Института были удостоены Государственной премии СССР за 1980 г.\n' +
            'В Институте в разные годы работали и продолжают работать 11 лауреатов Ленинской премии, 16 лауреатов Государственной премии СССР, 17 человек награждены Государственной премией Казахстана, 9 — премией Совета Министров КазССР, 5 — лауреаты премии К.И. Сатпаева, 3 — премии Ч. Валиханова.\n' +
            'В числе первооткрывателей месторождений — 38 сотрудников, имена ряда ученых занесены в «Золотую книгу почета» Республики, трое сотрудников удостоены звания «Заслуженный геолог-разведчик Казахской ССР», 11 — «Заслуженный деятель науки Казахской ССР».',

            'The 1960s–1990s became a period of discovery and exploration of numerous rare-metal deposits in Central (Koktenkol, Verkhnee Kairakty, Bainazar, Seltei, Zhanet, Batystau, etc.), Southern (Boguty, Karagaylyaktas), and later Northern (Bayan, Aksoran, Syrymbet, Donetsk) Kazakhstan.\n' +
            'Comprehensive study of the Uspenskaya zone led to the identification of a large ore belt. The results were published in a six-volume monograph, awarded the State Prize of the Kazakh SSR in 1972.\n' +
            'From 1974 to 1979, studies of the Chu-Ili ore belt were conducted jointly with a large group of geologists from the Academy of Sciences and the Ministry of Geology of the Kazakh SSR. The results, also published in a six-volume monograph, earned the USSR State Prize in 1980.\n' +
            'Throughout its history, the Institute has employed 11 Lenin Prize winners, 16 USSR State Prize laureates, 17 State Prize of Kazakhstan recipients, 9 awarded by the Council of Ministers of the Kazakh SSR, 5 Satpayev Prize laureates, and 3 Valikhanov Prize winners.\n' +
            'Among the Institute’s staff were 38 deposit discoverers, several scientists honored in the “Golden Book of Honor” of the Republic, 3 awarded the title “Honored Geologist-Explorer of the Kazakh SSR”, and 11 recognized as “Honored Scientists of the Kazakh SSR.”',

            'Өткен ғасырдың 60–90-жылдары Орталық (Көктенкөл, Жоғарғы Қайрақты, Байназар, Селтей, Жанет, Батыстау), Оңтүстік (Боғұты, Қарағайлыақтас), кейінірек Солтүстік (Баян, Ақсоран, Сырымбет, Донецк) Қазақстанда сирек металды кен орындары ашылып, зерттелген кезең болды.\n' +
            'Успен аймағын кешенді зерттеу нәтижесінде ірі кен белдеуі анықталып, зерттеу нәтижелері алты томдық монографияда жарияланып, 1972 жылы Қазақ КСР Мемлекеттік сыйлығына ие болды.\n' +
            '1974–1979 жылдары Чу-Іле кен белдеуін зерттеу жұмыстары ҚазКСР ҒА және Геология министрлігінің геологтар ұжымымен бірлесе ұйымдастырылды. Бұл еңбектер де алты томдық монографияда жарық көріп, 1980 жылы КСРО Мемлекеттік сыйлығымен марапатталды.\n' +
            'Институтта әр жылдары Ленин сыйлығының 11 лауреаты, КСРО Мемлекеттік сыйлығының 16 лауреаты, Қазақстан Мемлекеттік сыйлығының 17 иегері, ҚазКСР Министрлер Кеңесі сыйлығының 9 лауреаты, Қ.И. Сәтпаев атындағы сыйлықтың 5 лауреаты, Ш. Уәлиханов атындағы сыйлықтың 3 иегері жұмыс істеді.\n' +
            '38 қызметкер кен орындарының алғашқы ашушылары ретінде танылып, көптеген ғалымдардың есімі Республика «Құрмет кітабына» енгізілді, 3 қызметкерге «Қазақ КСР-нің еңбек сіңірген геолог-барлаушысы», 11 адамға «Қазақ КСР-нің ғылымға еңбегі сіңген қайраткері» атағы берілді.',

            '上世纪60至90年代，是哈萨克斯坦中部（科克滕科尔、上卡伊拉克提、拜纳扎尔、塞尔泰、贾内特、巴特斯陶等）、南部（博古提、卡拉盖利阿克塔斯）以及后来北部（巴彦、阿克索兰、瑟林别特、顿涅茨克）一系列稀有金属矿床被发现和勘探的时期。\n' +
            '对乌斯彭矿带的综合研究确立了大型矿产带，其研究成果编入六卷本专著，并于1972年获哈萨克苏维埃社会主义共和国国家奖。\n' +
            '1974至1979年间，研究所与哈萨克苏维埃科学院和地质部组织的地质学家联合开展了对楚伊利矿带的研究，成果亦被编入六卷本并荣获1980年苏联国家奖。\n' +
            '研究所曾有11位列宁奖获得者、16位苏联国家奖得主、17位哈萨克斯坦国家奖获得者、9位获得哈萨克苏维埃部长会议奖、5位萨特帕耶夫奖获得者和3位瓦利哈诺夫奖获得者。\n' +
            '共有38位职工为矿床的首批发现者，一些科学家的名字被载入共和国《荣誉金册》，3位被授予“哈萨克苏维埃共和国功勋地质勘探员”称号，11位获得“功勋科学工作者”荣誉。'
          ).split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}
        </p>

        <p className="w-75 mt-3" style={{ margin: "0 auto", padding: '20px 0' }}>
          {t(
            'Международный авторитет Института и уровень научных исследований подтверждается совместными работами по программам и проектам с компаниями и учреждениями дальнего и ближнего зарубежья. Так например, в проведении совместных геологических исследований со странами СНГ, Россией, Украиной, Узбекистаном, Кыргызстаном и др., по линии ЮНЕСКО, по проектам "Литосфера", "ЭЛАС", "КУФ"; осуществляли прямое двустороннее сотрудничество с КНР (СУАР), Польшей, Югославией, США, Англией, Японией, Турцией, Бельгией; принимали и принимают активное участие в международных геологических форумах (МГК, 1964, 1968, 1976, 1980, 1984, 1988, 1992, 1996, 2000), комиссиях по стратиграфии и геологии карбона (1975), палеонтологии (1971), геохимии (1971), участвовали в международных конференциях по изучению глин и глинистых минералов, тектонике докембрия, в симпозиумах по ордовику и силуру, в ассамблеях международного геофизического союза и т.д. На базе Института активно работает Комитет по международной геологической корреляции ЮНЕСКО.',

            'The Institute’s international authority and level of scientific research are confirmed by joint programs and projects with institutions and companies from both near and far abroad. For example, joint geological studies have been conducted with CIS countries such as Russia, Ukraine, Uzbekistan, and Kyrgyzstan under UNESCO projects like "Lithosphere", "ELAS", and "CUF". Bilateral cooperation has also been carried out with China (Xinjiang), Poland, Yugoslavia, the USA, the UK, Japan, Turkey, and Belgium. The Institute has actively participated in international geological forums (IGC in 1964, 1968, 1976, 1980, 1984, 1988, 1992, 1996, 2000), as well as commissions on stratigraphy and Carboniferous geology (1975), paleontology (1971), and geochemistry (1971). It has contributed to international conferences on clays and clay minerals, Precambrian tectonics, Ordovician and Silurian symposia, assemblies of the International Geophysical Union, and more. The UNESCO International Geological Correlation Committee actively operates on the basis of the Institute.',

            'Институттың халықаралық беделі мен ғылыми зерттеу деңгейі алыс және жақын шетел компаниялары мен мекемелерімен бірлескен бағдарламалар мен жобалар арқылы дәлелденеді. Мысалы, ТМД елдері, Ресей, Украина, Өзбекстан, Қырғызстан және т.б. елдермен бірлескен геологиялық зерттеулер жүргізілді, ЮНЕСКО желісі бойынша "Литосфера", "ЭЛАС", "КУФ" жобалары аясында; ҚХР (ШҰАР), Польша, Югославия, АҚШ, Англия, Жапония, Түркия, Бельгиямен тікелей екіжақты ынтымақтастық орнатылды. Институт халықаралық геологиялық форумдарға (МГК, 1964, 1968, 1976, 1980, 1984, 1988, 1992, 1996, 2000), стратиграфия және карбон геологиясы (1975), палеонтология (1971), геохимия (1971) комиссияларына белсенді қатысты. Сонымен қатар, саздар мен саз минералдарын зерттеу бойынша халықаралық конференцияларға, протерозойлық тектоника бойынша симпозиумдарға, ордовик пен силурға қатысты симпозиумдарға, Халықаралық геофизикалық одақ ассамблеяларына қатысты. Институт базасында ЮНЕСКО Халықаралық геологиялық корреляция комитеті белсенді жұмыс істейді.',

            '研究所的国际声誉和科研水平通过与海内外机构和公司的联合项目得到印证。例如，与独联体国家（如俄罗斯、乌克兰、乌兹别克斯坦、吉尔吉斯斯坦）开展了联合地质研究，并参与了联合国教科文组织的“岩石圈”、“ELAS”、“CUF”等项目；还与中国（新疆）、波兰、南斯拉夫、美国、英国、日本、土耳其和比利时建立了双边合作关系。研究所积极参与国际地质论坛（IGC，1964、1968、1976、1980、1984、1988、1992、1996、2000年），以及关于地层学和石炭纪地质（1975年）、古生物学（1971年）、地球化学（1971年）的委员会；并参加了有关粘土及其矿物、前寒武纪构造、奥陶纪和志留纪研讨会、国际地球物理联盟大会等。联合国教科文组织国际地质对比委员会在研究所设有常设机构并积极开展工作。'
          )}
        </p>
        <hr className="bg-dark my-0 mx-auto" style={{ height: '2px', width: '100%' }}/>
        <section id="contacts">
            <Contacts lang={lang}/>
        </section>
    </div>
    
  );
}
