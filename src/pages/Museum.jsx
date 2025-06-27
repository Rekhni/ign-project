import museumImg1RU from '../assets/museumImg1RU.jpg';
import museumImg2RU from '../assets/museumImg2RU.jpg';
import museumImg1EN from '../assets/museumImg1EN.jpg';
import museumImg2EN from '../assets/museumImg2EN.jpg';
import museumImg1CN from '../assets/museumImg1CN.jpg';
import museumImg2CN from '../assets/museumImg2CN.jpg';
import museumImg1KZ from '../assets/museumImg1KZ.jpg';
import museumImg2KZ from '../assets/museumImg2KZ.jpg';
import museumData from '../museumData.json';
import Contacts from '../components/Contacts';

export default function Museum({ lang }) {    
    const t = (ru, en, kz, zh) => (lang === 'ru' ? ru : lang === 'en' ? en : lang === 'kz' ? kz : zh);

    const museumImgs = lang === 'ru'
            ? [museumImg1RU, museumImg2RU]
            : lang === 'kz'
            ? [museumImg1KZ, museumImg2KZ]
            : lang === 'zh'
            ? [museumImg1CN, museumImg2CN]
            : [museumImg1EN, museumImg2EN];
    

    return (
      <div className='bg-white text-dark' style={{ fontFamily: "Montserrat", padding: '20px 0' }}>
        <div
          className="d-flex justify-content-center align-items-center w-75 gap-3 mx-auto"
          style={{margin: '20px 0'}}
        >
          <hr className="bg-white" style={{ height: '5px', width: '25%'}}/>
          <h1>
            {t(
              "Музей",
              "Museum",
              "Мұражай",
              '博物馆'
            )}
          </h1>
          <hr className="bg-white" style={{ height: '5px', width: '25%'}}/>
        </div>

              <div className="w-75 d-flex flex-column mx-auto">
                <p className='text-center'> 
                  {t(
                    "Геологический научно-исследовательский музей Института геологических наук им. К.И. Сатпаева в г. Алматы — это удивительный по красоте и неоценимый по богатству мир камней. " +
                      "Музей основан в 1942 году по инициативе и при непосредственном участии академика К.И. Сатпаева — выдающегося организатора науки, лидера металлогении, государственного и общественного деятеля. " +
                      "Создавая эту уникальную кладовую недр Казахстана, Каныш Имантаевич предвидел научную и практическую важность сбора и сохранения в музее эталонных образцов руд и минералов с месторождений, исчезающих в процессе промышленного освоения.",

                    "The Geological Research Museum of the Satpayev Institute of Geological Sciences in Almaty is a stunning and invaluable world of stones. " +
                      "It was founded in 1942 on the initiative and with the direct involvement of academician K.I. Satpayev — a renowned organizer of science, a pioneer in metallogeny, and a prominent public figure. " +
                      "By establishing this unique treasure trove of Kazakhstan's subsurface, Kanysh Imantaevich foresaw the scientific and practical importance of collecting and preserving reference samples of ores and minerals from deposits vanishing due to industrial development.",

                    "Алматы қаласындағы Қ.И. Сәтпаев атындағы Геология ғылымдары институтының Геологиялық ғылыми-зерттеу мұражайы — тас әлемінің ерекше әсем әрі бай дүниесі. " +
                      "Мұражай 1942 жылы академик Қаныш Имантаевич Сәтпаевтың бастамасымен және тікелей қатысуымен құрылған. " +
                      "Қазақстан қойнауының бұл бірегей қазынасын жасай отырып, Қаныш Имантаевич өндірістік игеру барысында жоғалып бара жатқан кен орындары мен минералдардың үлгілерін жинау мен сақтау ісінің ғылыми және практикалық маңыздылығын алдын ала болжай білді.",

                    "位于阿拉木图的卡·伊·萨特帕耶夫地质科学研究所地质科研博物馆，是一个美丽而丰富的矿石世界。" +
                      "博物馆于1942年由著名学者、金属成矿学的奠基人、国家与社会活动家卡尼什·萨特帕耶夫倡议并亲自参与创建。" +
                      "他预见到，在共和国矿产资源工业开发过程中逐渐消失的矿床中收集并保存标准矿石和矿物样本具有重大的科学和实践价值，从而建立了这一独特的自然宝库。"
                  )}
                </p>
                <div
                  id="carouselExampleAutoplaying2"
                  className="carousel slide w-100 w-lg-75"
                  data-bs-ride="carousel"
                  style={{ margin: "30px auto", maxHeight: '500px' }}
                >
                  <div className="carousel-inner">
                    {museumData[0].images.map((img, index) => (
                      <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                        <img
                          loading="lazy"
                          src={`${import.meta.env.BASE_URL}${img.slice(1)}`}
                          className="d-block w-100 carousel-img"
                          alt={`museum-${index}`}
                          style={{ filter: "brightness(60%)" }}
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying2"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying2"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>

                <p className='text-center'>
                  {t(
                    "Геологический научно-исследовательский музей ИГН им. К.И. Сатпаева является сегодня одним из известных в мире коллекционных фондов и единственным, где наиболее полно и систематизированно представлены эталонные экспонаты каменных материалов, характеризующих геологическое строение и типовые месторождения территории Казахстана. Экспозиция размещена на площади 1000 м² и содержит более 60 000 эталонных образцов.",

                    "The Geological Research Museum of the Satpayev Institute of Geological Sciences is one of the world’s renowned geological collections and the only one that fully and systematically presents reference stone specimens reflecting the geological structure and key deposits of Kazakhstan. The exhibition covers 1000 m² and features over 60,000 reference samples.",

                    "Қ.И. Сәтпаев атындағы Геология ғылымдары институтының Геологиялық ғылыми-зерттеу мұражайы — әлемге танымал геологиялық коллекциялық қорлардың бірі және Қазақстан аумағының геологиялық құрылымы мен типтік кен орындарын сипаттайтын эталонды тас материалдар ең толық әрі жүйелі түрде ұсынылған жалғыз мұражай. Көрме 1000 м² аумақта орналасқан және 60 000-нан астам эталон үлгілерін қамтиды.",

                    "卡·伊·萨特帕耶夫地质科学研究所地质科研博物馆是世界著名的收藏馆之一，也是唯一一个系统性地展示反映哈萨克斯坦地质结构与典型矿床的标准岩石标本的地方。展区面积达1000平方米，藏有超过60,000件标准标本。"
                  )}
                </p>
                <p className='text-center'>
                  {t(
                    'Научно-систематизированная экспозиция Музея представлена отделами: вводным, геологического строения, палеонтологии, минералогии и самым крупным отделом полезных ископаемых. В каждом из этих отделов приведен полный комплекс научно систематизированных монографических коллекций.',

                    'The museum’s scientifically structured exposition is divided into departments: introductory, geological structure, paleontology, mineralogy, and the largest — mineral resources. Each department showcases a complete set of scientifically organized monographic collections.',

                    'Мұражай экспозициясы ғылыми түрде жүйеленіп, мынадай бөлімдерден тұрады: кіріспе, геологиялық құрылым, палеонтология, минералогия және ең үлкені — пайдалы қазбалар бөлімі. Әр бөлімде ғылыми жүйеге келтірілген монографиялық коллекциялар толық ұсынылған.',

                    '博物馆的科学展区由以下几个部分组成：导览区、地质构造区、古生物区、矿物学区以及最大的矿产资源区。每个部分都展示了完整的科学系统化专著收藏。'
                  )}
                </p>
                <img
                  loading="lazy"
                  src={museumImgs[0]}
                  className="w-75 mx-auto rounded"
                  alt="museum-img-1"
                />
                <img
                  loading="lazy"
                  src={museumImgs[1]}
                  className="w-75 mx-auto mt-3 mb-3 rounded"
                  alt="museum-img-2"
                />
              </div>
        <hr className='text-dark my-0 mx-auto' style={{ height: '1px' }}/>
        <section id="contacts">
          <Contacts lang={lang}/>
        </section>
      </div>
    );
}