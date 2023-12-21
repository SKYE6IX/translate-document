import "./footer.scss";
export default function Footer() {
  const year = new Date().getFullYear().toString();
  return (
    <footer className="footer">
      <div className="footer__title">
        <h3>Logo And Name</h3>
        <p>Все права защищены, {year}</p>
      </div>
      <div>
        <button className="footer__button">Заказать перевод</button>
      </div>
      <div className="footer__address">
        <p>г.Екатеринбург</p>
        <address>+7 932 609 90 99</address>
      </div>
    </footer>
  );
}
