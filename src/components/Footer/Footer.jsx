import React from "react";
import { Typography } from "../../ui/Typography/Typography";

import "./Footer.scss";

export const Footer = () => (
  <footer className="footer">
    <div className="footer__overlay" />
    <div className="footer__content">
      <div className="footer__row">
        <div className="footer__column footer__left">
          <Typography size={70} color="white" component="p">
            START
          </Typography>
          <Typography size={70} color="white" component="p">
            YOUR
          </Typography>
          <Typography size={70} color="white" component="p">
            ENVOLVE
          </Typography>
          <Typography size={70} color="white" component="p">
            NOW
          </Typography>
        </div>
        <div className="footer__column footer__right">
          <div style={{ opacity: 0.7 }} className="logo-google" />
          <Typography
            className="footer__app-text"
            size={18}
            color="white"
            align="center">
            Available for iOS 13 and above
          </Typography>
        </div>
      </div>
      <div className="footer__logo header__logo" />
    </div>
  </footer>
);
