"use client";
import * as React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./speed-dial-button.scss";

const actions = [
  {
    icon: <WhatsAppIcon />,
    name: "WhatApp",
    href: "https://wa.me/message/KBKPL227DESNB1",
  },
  { icon: <TelegramIcon />, name: "Telegram", href: "" },
  { icon: <InstagramIcon />, name: "Instagram", href: "" },
  { icon: <VkIcon />, name: "Vk", href: "https://vk.com/perevodchikk1" },
];

export default function SpeedDialButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = (link: string) => {
    const newWindow = window.open(link, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
    handleClose();
  };

  return (
    <div className="speed-dial-button">
      <SpeedDial
        ariaLabel="speed dial for social media link"
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleClick(action.href)}
          />
        ))}
      </SpeedDial>
    </div>
  );
}

function VkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      width="18"
      viewBox="0 0 576 512"
    >
      <path d="M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2 .1-.1 72-101.3 79.4-135.6z" />
    </svg>
  );
}
