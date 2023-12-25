"use client";
import * as React from "react";
import Link from "next/link";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import "./speed-dial-button.scss";

const actions = [
  { icon: <WhatsAppIcon />, name: "Copy" },
  { icon: <TelegramIcon />, name: "Save" },
  { icon: <InstagramIcon />, name: "Print" },
  { icon: <EmailIcon />, name: "Share" },
];

export default function SpeedDialButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </div>
  );
}
