import Navigation from "./navigation/navigation";
import "./header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">Logo And Name</div>
      <Navigation />
      <div className="header__contact">
        <p>г.Екатеринбург</p>
        <address>+7 932 609 90 99</address>
      </div>
      <button className="header__button">Заказать перевод</button>
    </header>
  );
}
