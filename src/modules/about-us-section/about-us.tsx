import Image from "next/image";
import aboutUsImage from "./asset/about-us.webp";
import "./about-us.scss";
export default function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-us__image">
        <Image src={aboutUsImage} alt="about-image" width={600} height={250} />
      </div>
      <h3 className="about-us__title">Почему мы?</h3>
      <p className="about-us__text">
        Сервис быстрых переводов <strong>Переводчикк</strong> предлагает
        различные переводческие услуги на пяти десяти языков мира. Главный
        принцип нашей работы — качество и скорость.
      </p>
      <div className="about-us__point">
        <div className="about__us__point-list">
          <h5>Опытные специалисты</h5>
          <p>
            В команде работают профессионалы с высшим образованием, которые
            имеют опыт общения с носителями языка, а также обширные знания в
            деталях перевода документов
          </p>
        </div>
        <div className="about__us__point-list">
          <h5>Желание помочь</h5>
          <p>
            Вы присылаете на нашу электронную почту текст или скан документа и в
            назначенный день и время забираете готовый документ. При желании
            перевод может быть отправлен на Вашу электронную почту.
          </p>
        </div>
        <div className="about__us__point-list">
          <h5>Персональный подход</h5>
          <p>
            Опыт работы с людьми из разных стран показывает, что людям
            комфортнее общаться согласно народному менталитету и традициям своей
            страны
          </p>
        </div>
      </div>
    </div>
  );
}
