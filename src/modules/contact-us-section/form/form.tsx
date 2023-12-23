"use client";
import React, { ChangeEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Progress, FeedBack } from "../form-feedback/feedback";
import "./form.scss";

interface FormInputState {
  client_name: string;
  number: number | string;
  message: string;
}
export const Form = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFeedBack, setIsFeedBack] = useState(false);
  const [formState, setFormState] = useState<FormInputState>({
    client_name: "",
    number: "",
    message: "",
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };
  const resetForm = () => {
    const blankState = Object.fromEntries(
      Object.entries(formState).map(([key, value]: any) => [key, ""])
    );
    setFormState(blankState);
  };
  const handleCloseFeedback = () => {
    setIsFeedBack(false);
  };
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.EMAIL_SERVICE_ID!,
        process.env.EMAIL_TEMPLATE_ID!,
        form.current || "",
        process.env.EMAIL_PUBLIC_KEY
      )
      .then((result) => {
        setIsSubmitting(false);
        setStatus(result.text);
        setIsFeedBack(true);
        resetForm();
      })
      .catch((err) => {
        setIsSubmitting(false);
        setStatus(err.text);
        setIsFeedBack(true);
        resetForm();
      });
  };
  return (
    <div className="form">
      {isSubmitting && <Progress />}
      {isFeedBack ? (
        <FeedBack status={status} closeFeedBack={handleCloseFeedback} />
      ) : (
        <>
          <div className="form__title">
            <h3>Заявка на перевод</h3>
            <p>
              Оставьте контактные данные и мы свяжемся с вами для уточнения
              деталей
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
              value={formState.client_name}
              onChange={handleChange}
            />
            <label htmlFor="number">Номер телефона</label>
            <input
              type="tel"
              name="number"
              id="number"
              placeholder="+7 999 434 40 43"
              data-phonemask-iso="ru"
              maxLength={15}
              required
              value={formState.number}
              onChange={handleChange}
            />
            <label htmlFor="message">
              Если у вас есть дополнительные комментарии или вопросы
            </label>
            <textarea
              name="message"
              id="message"
              value={formState.message}
              onChange={handleChange}
            />
            <button type="submit" className="form__button">
              Отправить
            </button>
          </form>
        </>
      )}
    </div>
  );
};
