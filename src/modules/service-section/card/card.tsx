import Image, { StaticImageData } from "next/image";
import Button from "@/modules/button/button";
import "./card.scss";

interface CardData {
  title: string;
  image_src: StaticImageData;
  lists: string[];
}

export default function Card({ serviceList }: { serviceList: CardData[] }) {
  return (
    <>
      {serviceList.map((list, i) => (
        <div className="card" key={i}>
          <div className="card__image">
            <Image
              src={list.image_src}
              alt="image"
              width={400}
              height={165}
              className="card-image"
            />
          </div>
          <h3 className="card__title">{list.title}</h3>
          <div className="card__lists">
            <ul>
              {list.lists.map((list, i) => (
                <li key={i}>{list}</li>
              ))}
            </ul>
          </div>
          <p className="card__price">Средняя стоимость: от 300 рублей</p>
          <div className="card__button-wrapper">
            <Button className="card__button" />
          </div>
        </div>
      ))}
    </>
  );
}
