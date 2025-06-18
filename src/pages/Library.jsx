import Contacts from '../components/Contacts';

export default function Library({ lang }) {
    const t = (ru, en, kz, zh) => (lang === 'ru' ? ru : lang === 'en' ? en : lang === 'kz' ? kz : zh);

    return (
      <div className="w-100 mx-auto text-dark bg-white" style={{ fontFamily: "Montserrat", paddingTop: '30px'}}>
        <div className='d-flex w-75 mx-auto gap-3 justify-content-center align-items-center' style={{margin: '20px 0'}}>
            <hr className="bg-white" style={{ height: '5px', width: '30%'}}/>
            <h1 className="text-center">
                
                {t(
                    'Библиотека',
                    'Library',
                    'Кітапхана',
                    '图书馆'
                )}
            </h1>
            <hr className="bg-white" style={{ height: '5px', width: '30%'}}/>
        </div>
        <p className="w-75 mx-auto">
        {t(
            "Библиотека Института геологических наук является ценным хранилищем научной информации и знаний, накопленных за десятилетия. Ее фонды включают:",

            "The Library of the Institute of Geological Sciences is a valuable repository of scientific knowledge accumulated over decades. Its holdings include:",

            "Геологиялық ғылымдар институтының кітапханасы ондаған жылдар бойы жинақталған ғылыми білімнің құнды қоймасы болып табылады. Оның қорында мыналар бар:",

            "地质科学研究所图书馆是数十年来积累的科学知识的重要宝库。其馆藏包括："
        )}
        </p>
        <ul className="w-75 mx-auto">
            <li>
                {t(
                "Более 25 000 – 30 000 книг и журналов по геологии и смежным дисциплинам.",
                "Over 25,000–30,000 books and journals on geology and related disciplines.",
                "25 000–30 000-нан астам геология және оған қатысты пәндер бойынша кітаптар мен журналдар.",
                "拥有超过 25,000–30,000 本关于地质及相关学科的书籍和期刊。"
                )}
            </li>
            <li>
                {t(
                "Монографии, справочники и научные труды, опубликованные как сотрудниками института, так и международными авторами.",
                "Monographs, reference books, and scientific works published by both the institute's staff and international authors.",
                "Институт қызметкерлері мен халықаралық авторлар жазған монографиялар, анықтамалар және ғылыми еңбектер.",
                "由研究所员工和国际作者出版的专著、工具书和科研成果。"
                )}
            </li>
            <li>
                {t(
                "Литература охватывает широкий спектр тем: от геологических исследований до мемуаров и воспоминаний о выдающихся геологах Казахстана.",
                "The literature covers a wide range of topics: from geological research to memoirs and recollections of prominent Kazakh geologists.",
                "Әдебиет геологиялық зерттеулерден бастап Қазақстанның көрнекті геологтары туралы естеліктерге дейінгі көптеген тақырыптарды қамтиды.",
                "馆藏文献涵盖广泛主题：从地质研究到对杰出哈萨克斯坦地质学家的回忆录与纪念文集。"
                )}
            </li>
            <li>
                {t(
                "В библиотеке можно найти уникальные издания, недоступные в других научных учреждениях страны.",
                "The library holds unique publications not available in other scientific institutions of the country.",
                "Кітапханада еліміздегі басқа ғылыми мекемелерде кездеспейтін бірегей басылымдар бар.",
                "图书馆藏有全国其他科研机构中无法获得的独特出版物。"
                )}
            </li>
        </ul>

        <p className="w-75 mx-auto pb-3">
        {t(
            "Библиотека активно используется сотрудниками института, исследователями, аспирантами и студентами, интересующимися геологией и природными ресурсами Казахстана.",
            "The library is actively used by the institute's staff, researchers, postgraduate students, and students interested in geology and Kazakhstan's natural resources.",
            "Кітапхана институт қызметкерлері, зерттеушілер, магистранттар мен студенттер тарапынан, Қазақстанның геологиясы мен табиғи ресурстарына қызығушылық танытқан жандарға белсенді қолданылады.",
            "图书馆被研究所工作人员、研究人员、研究生和对地质及哈萨克斯坦自然资源感兴趣的学生广泛使用。"
        )}
        </p>
        <hr className='text-dark my-0 mx-auto' style={{ height: '1px' }}/>
        <section id="contacts" style={{ fontFamily: 'Montserrat' }}>
            <Contacts lang={lang}/>
        </section>
      </div>
    );
}