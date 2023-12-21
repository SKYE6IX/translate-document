"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./form.scss";

export const Form = () => {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.EMAIL_SERVICE_ID!,
        process.env.EMAIL_TEMPLATE_ID!,
        form.current || "",
        process.env.EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  return (
    <div className="form">
      <div className="form__title">
        <h3>Заявка на перевод</h3>
        <p>
          Оставьте контактные данные и мы свяжемся с вами для уточнения деталей
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="form__data">
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          name="client_name"
          id="name"
          placeholder="Иван"
          required
        />
        <label htmlFor="number">Номер телефона</label>
        <input
          type="tel"
          name="number"
          id="number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="+7 999 434 40 43"
          data-phonemask-iso="ru"
          maxLength={15}
          required
        />
        <label htmlFor="message">
          Если у вас есть дополнительные комментарии или вопросы
        </label>
        <textarea name="message" id="message" />
        <button type="submit" className="form__button">
          Отправить
        </button>
      </form>
    </div>
  );
};
