import React from "react";
import { Typography } from "../../ui/Typography/Typography";
import { Phone } from "../Phone/Phone";
import { features } from "./constants";
import { Feature } from "./Feature";
import Screen from "../../images/features-phone.png";

import "./Features.scss";

export const Features = ({ width }) => (
  <section className="features">
    <div className="features__title-container">
      <Typography
        className="features__title-container_bold"
        size={36}
        color="primary"
        weight="medium"
        align="center">
        Features
      </Typography>
      <Typography size={36} color="secondary" align="center">
        our users love
      </Typography>
    </div>
    <Typography className="features__info" size={18} align="center">
      Here are several causes to consider using our application
    </Typography>
    <div className="columns">
      <div className="features__container">
        {features.slice(0, 2).map((feature) => (
          <Feature key={feature.title} {...feature} />
        ))}
      </div>
      {width > 650 && (
        <Phone>
          <img className="photo-screen" src={Screen} alt="screen phone" />
        </Phone>
      )}
      <div className="features__container">
        {features.slice(2, 4).map((feature) => (
          <Feature key={feature.title} {...feature} />
        ))}
      </div>
    </div>
    {features.slice(4).map((feature) => (
      <Feature key={feature.title} {...feature} deleteMargin width={width} />
    ))}
  </section>
);
