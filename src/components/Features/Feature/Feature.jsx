import React from "react";
import cn from "classnames";
import { Typography } from "../../../ui/Typography/Typography";

import "./Feature.scss";

export const Feature = ({ title, info, logo, deleteMargin, width }) => (
  <div
    className={cn("feature", {
      "feature_without-margin": deleteMargin && width > 768,
    })}>
    <div className={`feature__logo feature__logo_${logo}`} />
    <Typography
      className="feature__title"
      size={20}
      color="primary"
      weight="medium"
      align="center">
      {title}
    </Typography>
    <Typography size={16} color="secondary" align="center">
      {info}
    </Typography>
  </div>
);
