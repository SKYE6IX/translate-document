import Image from "next/image";
import Button from "../button/button";
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
          <Button
            className="hero__button"
            extraClassName="hero__button-mobile"
          />
          <h2>
            Сервис быстрых переводов <strong>Переводчикк</strong> Имеет офис
            центре Екатеринбурга и осуществляет языковые переводы
          </h2>
        </div>
        <div>
          <Button className="hero__button" />
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
