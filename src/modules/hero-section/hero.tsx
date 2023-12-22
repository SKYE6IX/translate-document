import Image from "next/image";
import heroImage from "./asset/hero.png";
import "./hero.scss";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__text-content">
        <div className="hero__titles">
          <h1>
            Профессиональный <span>перевод документов</span> для иностранных
            граждан в один клик
          </h1>
          <button className="hero__button hero__button-mobile">
            Заказать перевод
          </button>
          <h2>
            Агентство переводов имеет офис в центре Екатеринбурга и осуществляет
            языковые переводы целого ряда документов
          </h2>
        </div>
        <div>
          <button className="hero__button">Заказать перевод</button>
        </div>
      </div>

      <div className="hero__image-container">
        <h1 className="background-letter">А</h1>
        <h1 className="background-letter">Б</h1>
        <Image
          src={heroImage}
          alt="hero-image"
          width={500}
          height={500}
          className="hero__image"
        />
      </div>
    </div>
  );
}
