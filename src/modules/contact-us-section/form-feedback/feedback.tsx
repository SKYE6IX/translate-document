"use client";
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import "./feedbak.scss";

type FeedBackType = {
  status: string;
  closeFeedBack: () => void;
};
export function Progress() {
  return (
    <div className="progress">
      <CircularProgress />
    </div>
  );
}
export function FeedBack({ status, closeFeedBack }: FeedBackType) {
  if (status === "OK") {
    return (
      <div className="feedback">
        <Alert severity="success" />
        <p className="feedback__message">
          Thank you! We will contact you soon!
        </p>
        <button onClick={closeFeedBack} className="feedback__button">
          Close
        </button>
      </div>
    );
  } else {
    return (
      <div className="feedback">
        <Alert severity="error" />
        <p className="feedback__message">
          We are sorry! Your request didn't go through. You can give us a call
          yourself.
        </p>
        <address>1223345558</address>
        <button onClick={closeFeedBack} className="feedback__button">
          Close
        </button>
      </div>
    );
  }
}
