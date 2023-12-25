import Image from "next/image";
import Button from "../button/button";
import logo from "./asset/company-logo.jpeg";
import "./footer.scss";
export default function Footer() {
  const year = new Date().getFullYear().toString();
  return (
    <footer className="footer">
      <div className="footer__title">
        <div className="footer__logo">
          <Image src={logo} alt="company-logo" width={150} height={150} />
        </div>
        <p>Все права защищены, {year}</p>
      </div>
      <div>
        <Button className="footer__button" />
      </div>
      <div className="footer__address">
        <p>г.Екатеринбург</p>
        <address>+7 932 609 90 99</address>
      </div>
    </footer>
  );
}
