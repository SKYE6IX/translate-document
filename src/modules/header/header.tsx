"use client";
import Navigation from "./navigation/navigation";
import useCurrentWidth from "./use-window-size";
import MobileMenu from "./mobile-menu/mobile-menu";
import "./header.scss";

export default function Header() {
  const { width } = useCurrentWidth();
  return (
    <>
      <MobileMenu />
      <header className="header-large">
        <div className="header__logo">Logo And Name</div>
        <Navigation />
        <div className="header__contact">
          <p>г.Екатеринбург</p>
          <address>+7 932 609 90 99</address>
        </div>
        <button className="header__button">Заказать перевод</button>
      </header>
    </>
  );
}
