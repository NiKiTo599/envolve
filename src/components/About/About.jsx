import React from "react";
import { Typography } from "../../ui/Typography/Typography";
import { aboutCards } from "./constants";

import "./About.scss";

const AboutCard = ({ title, info }) => (
  <div className="about__card">
    <div className="about__logo-litle" />
    <Typography className="about__title" component="p" size={28} weight="medium">
      {title}
    </Typography>
    <Typography component="p" size={20} color="secondadry" align="center">
      {info}
    </Typography>
  </div>
);

export const About = () => (
  <div className="about">
    <div className="header-title about__logo" />
    <Typography
      className="features__title-container_bold"
      size={42}
      color="primary"
      weight="medium"
      align="center">
      is
    </Typography>
    <div className="about__cards">
      {aboutCards.map((card) => (
        <AboutCard {...card} />
      ))}
    </div>
  </div>
);
