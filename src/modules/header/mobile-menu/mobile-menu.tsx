"use client";
import React from "react";
import { useCycle, motion } from "framer-motion";
import ToggleButton from "./toggle-button/toggle-button";
import MenuItem from "./menu-item/menu-item";
import "./mobile-menu.scss";

const burgerBgVariant = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
    backgroundColor: "#fff",
    zIndex: "10",
    boxShadow: "4px 4px 8px 0px rgba(34, 60, 80, 0.2)",
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
    zIndex: "10",
  },
};
export default function MobileMenu() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <header className="mobile-menu">
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="mobile-menu__nav"
      >
        <motion.div
          className="burger-background"
          variants={burgerBgVariant}
        ></motion.div>
        <MenuItem isOpen={isOpen} />
        <ToggleButton toggle={() => toggleOpen()} isOpen={isOpen} />
      </motion.nav>
    </header>
  );
}
