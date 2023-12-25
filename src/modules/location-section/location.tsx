import MapLocation from "./map";
import "./location.scss";

export default function Location() {
  return (
    <div className="location">
      <div className="address-block">
        <h3>Наш офис находится рядом с Миграционный центр или УФМС</h3>
        <div className="address-block__contacts">
          <a href="tel:+79326099099">+7 932 609 90 99</a>
          <a href="mailto:agentstvo.perevodov@bk.ru">
            agentstvo.perevodov@bk.ru
          </a>
        </div>
        <div className="address-block__addresses">
          <p>г.Екатеринбург</p>
          <p>улица Чекистов 7</p>
        </div>
        <div className="address-block__working-time">
          <p>Время работы:</p>
          <p>пн-сб с 9:00.00 до 18.00</p>
        </div>
      </div>
      <MapLocation className="map" />
    </div>
  );
}
