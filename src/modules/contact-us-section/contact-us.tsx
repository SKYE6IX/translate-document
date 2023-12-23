import { Form } from "./form/form";
import "./contact-us.scss";

export default async function ContactUs() {
  return (
    <div className="contact-us">
      <div className="contact-us__heading">
        <h1 className="contact-us__bg-letter">А</h1>
        <h1 className="contact-us__bg-letter">Б</h1>
        <h3>Рассчитайте стоимость перевода за 5 минут</h3>
      </div>
      <div className="contact-us__form">
        <Form />
      </div>
    </div>
  );
}
