import InstituteMap from "./InstituteMap"

export default function Contacts({ lang }) {
    const t = (ru, en, kz, zh) => (lang === 'ru' ? ru : lang === 'en' ? en : lang === 'kz' ? kz : zh);
    return (
      <div
        className="contacts-content d-lg-flex justify-content-between bg-white text-dark"
        style={{ padding: '30px'}}
        
      >
        <div className="contacts-text w-75" style={{ margin: "20px auto" }}>
          <h3 className="mb-4">
            {t(
              "Наши контакты",
              "Our Contacts",
              "Мекен жайымыз",
              "我们的联系方式"
            )}
          </h3>
          <p style={{ fontSize: "20px", width: '80%' }}>
            {t(
              "Приемный телефон: ",
              "Reception phone: ",
              "Қабылдау телефоны: ",
              "接待电话: "
            )}{" "}
            <a
              className=" text-decoration-none"
              style={{color: 'rgb(0, 115, 255)'}}
              href="tel:+77272915608"
            >
              +7 727 291 56 08
            </a>
            <br />{" "}
            {t(
              "Ученый секретарь: ",
              "Academic secretary: ",
              "Ғылыми хатшы: ",
              "科研秘书: "
            )}
            <a
              className="text-decoration-none"
              style={{color: 'rgb(0, 115, 255)'}}
              href="tel:+772729143"
            >
              +7 727 291 43
            </a>
            <br />
            {t("Почта: ", "Email: ", "Электрондық пошта: ", "电子邮箱: ")}
            <a
              className="text-decoration-none"
              style={{color: 'rgb(0, 115, 255)'}}
              href="mailto:ignkis@mail.ru"
            >
              Info@ign.kz
            </a>
            <br />
            {t(
              "050010, Республика Казахстан, г. Алматы,",
              "050010, Republic of Kazakhstan, Almaty",
              "050010, Қазақстан Республикасы, Алматы қ.",
              "050010，哈萨克斯坦共和国，阿拉木图市"
            )}
            <br /> {t('ул. Кабанбай батыра, уг. ул. Валиханова, 69/94',
                '69/94, Kabanbay Batyr St., corner of Valikhanov St.',
                'Қабанбай батыр көшесі, Валиханов көшесімен қиылысы, 69/94',
                '哈萨克斯坦阿拉木图市卡班拜·巴提尔街与瓦利哈诺夫街交汇处 69/94号'
            )}
          </p>
        </div>
        <InstituteMap />
      </div>
    );
}