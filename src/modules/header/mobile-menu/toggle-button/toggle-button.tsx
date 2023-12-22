"use client";
import * as React from "react";
import { SVGMotionProps, motion } from "framer-motion";
import { JSX } from "react/jsx-runtime";
import "./toggle-button.scss";

const Path = (
  props: JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    React.RefAttributes<SVGPathElement>
) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="rgba(255, 255, 255, 1)"
    strokeLinecap="round"
    {...props}
  />
);
type MenuToggleProps = {
  toggle: () => any;
  isOpen: boolean;
};

export default function ToggleButton({ toggle, isOpen }: MenuToggleProps) {
  return (
    <button className="toggle-button" onClick={toggle}>
      <svg width="23" height="30" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
          stroke={isOpen ? "hsl(0, 0%, 18%)" : "rgba(255, 255, 255, 1)"}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
          stroke={isOpen ? "hsl(0, 0%, 18%)" : "rgba(255, 255, 255, 1)"}
        />
      </svg>
    </button>
  );
}
