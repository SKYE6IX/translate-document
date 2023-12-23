"use client";
import { scroller } from "react-scroll";
import "./button.scss";

interface ButtonInterface {
  className: string;
  extraClassName?: string;
}
export default function Button({ className, extraClassName }: ButtonInterface) {
  const handleScroll = () => {
    scroller.scrollTo("contact", {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };
  return (
    <button
      className={`button ${className} ${extraClassName}`}
      onClick={handleScroll}
    >
      Заказать перевод
    </button>
  );
}
