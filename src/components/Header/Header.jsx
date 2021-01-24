import React from "react";
import { Typography } from "../../ui/Typography/Typography";
import { Phone } from "../Phone/Phone";
import Marafon1 from "../../images/marafon1.svg";
import Marafon2 from "../../images/marafon2.svg";
import Marafon3 from "../../images/marafon3.svg";

import "./Header.scss";

export const Header = ({ width }) => (
  <div className="header">
    <div className="header__image">
      <div className="header__image_overlay">
        <div className="header__main">
          <div className="header__column">
            <div className="header__logo" />
            <Typography
              className="header__title"
              size={90}
              weight="medium"
              color="primary"
              align="center">
              CHALLENGE NEVER ENDS
            </Typography>
            {width > 930 && <div className="header__app" />}
          </div>
          <div className="header__column header__column_right">
            <Phone className="header__phone header__phone_left">
              <img className="photo-screen" src={Marafon1} alt="screen phone" />
            </Phone>
            <Phone className="header__phone header__phone_center">
              <img className="photo-screen" src={Marafon3} alt="screen phone" />
            </Phone>
            {!(width < 990 && width > 930) && (
              <Phone className="header__phone header__phone_right">
                <img
                  className="photo-screen"
                  src={Marafon2}
                  alt="screen phone"
                />
              </Phone>
            )}
            {width < 930 && <div className="header__app" />}
          </div>
        </div>
      </div>
    </div>
  </div>
);
