import "./location.scss";
export default function Location() {
  return (
    <div className="location">
      <Address />
    </div>
  );
}

function Address() {
  return (
    <div className="address-block">
      <h3>Наш офис находится рядом с Миграционный центр или УФМС</h3>
      <div className="address-block__contacts">
        <address>+7 932 609 90 99</address>
        <p>agentstvo.perevodov@bk.ru</p>
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
  );
}

// TODO:
// Implement map loaction
// arrange the address to able to stay outside of the map on mobile
