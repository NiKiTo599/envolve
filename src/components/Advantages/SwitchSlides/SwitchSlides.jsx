import React from "react";
import cn from "classnames";

import "./SwitchSlides.scss";

export const SwitchSlides = ({ slide, setSlider }) => (
  <div className="switch">
    {new Array(4).fill(0).map((_, idx) => (
      <div
        onClick={() => setSlider(idx)}
        className={cn("switcher", { switcher_active: slide === idx })}
      />
    ))}
  </div>
);
