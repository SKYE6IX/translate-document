"use client";
import * as React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/modules/button/button";
import logo from "../../asset/company-logo.jpeg";
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
  { name: "Услуги и цены", href: "service" },
  { name: "Акции", href: "languages" },
  { name: "О нас", href: "about_us" },
  { name: "Контакты", href: "contact" },
];

export default function MenuItem({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.ul variants={listContainerVariants} className="nav">
      {isOpen && (
        <div className="nav__logo">
          <Image src={logo} alt="company-logo" width={120} height={120} />
        </div>
      )}
      <div className="nav__list">
        {navLists.map((list, i) => (
          <motion.li key={i} variants={listVariants}>
            <Link to={list.href} smooth={true} offset={50} spy={true}>
              {list.name}
            </Link>
          </motion.li>
        ))}
      </div>
      {isOpen && (
        <>
          <div className="nav__contact">
            <p>г.Екатеринбург</p>
            <a href="tel:+79326099099" target="_blank">
              +7 932 609 90 99
            </a>
          </div>
          <Button className="nav__button" />
        </>
      )}
    </motion.ul>
  );
}
