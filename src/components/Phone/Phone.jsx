import React from "react";
import cn from "classnames";

import "./Phone.scss";

export const Phone = ({ children, className }) => (
  <div className={cn("phone", className)}>{children}</div>
);
