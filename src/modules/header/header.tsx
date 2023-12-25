"use client";
import Image from "next/image";
import Navigation from "./navigation/navigation";
import MobileMenu from "./mobile-menu/mobile-menu";
import Button from "../button/button";
import logo from "./asset/company-logo.jpeg";
import "./header.scss";

export default function Header() {
  return (
    <>
      <MobileMenu />
      <header className="header-large">
        <div className="header__logo">
          <Image src={logo} alt="company-logo" width={190} height={190} />
        </div>
        <Navigation />
        <div className="header__contact">
          <p>г.Екатеринбург</p>
          <a href="tel:+79326099099" target="_blank">
            +7 932 609 90 99
          </a>
        </div>
        <Button className="header__button " />
      </header>
    </>
  );
}
