"use client";
import Navigation from "./navigation/navigation";
import MobileMenu from "./mobile-menu/mobile-menu";
import Button from "../button/button";
import "./header.scss";

export default function Header() {
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
        <Button className="header__button " />
      </header>
    </>
  );
}
