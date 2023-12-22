"use client";
import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import "./menu-item.scss";

const listVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
const listContainerVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const navLists = [
  { name: "Услуги и цены", href: "#" },
  { name: "Акции", href: "#" },
  { name: "О нас", href: "#" },
  { name: "Контакты", href: "#" },
];

export default function MenuItem({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.ul variants={listContainerVariants} className="nav">
      {isOpen && <div className="nav__logo">Logo And Name</div>}
      <div className="nav__list">
        {navLists.map((list, i) => (
          <motion.li key={i} variants={listVariants}>
            <Link href={list.href}>{list.name}</Link>
          </motion.li>
        ))}
      </div>
      {isOpen && (
        <>
          <div className="nav__contact">
            <p>г.Екатеринбург</p>
            <address>+7 932 609 90 99</address>
          </div>
          <button className="nav__button">Заказать перевод</button>
        </>
      )}
    </motion.ul>
  );
}
