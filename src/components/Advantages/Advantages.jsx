import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

import { Typography } from "../../ui/Typography/Typography";

import "./Advantages.scss";
import { Slide } from "./Slide";
import { Slider } from "./Slider";
import { SwitchSlides } from "./SwitchSlides";

export const Advantages = () => {
  const [slide, setSlider] = useState(0);
  const slideRef = useRef();

  const swithSlide = (index) => {
    const node = ReactDOM.findDOMNode(slideRef.current);
    node.classList.remove("fade-in");
    setSlider(index);
  };

  useEffect(() => {
    const node = ReactDOM.findDOMNode(slideRef.current);
    node.classList.add("fade-in");

    const interval = setInterval(() => {
      swithSlide(slide === 3 ? 0 : slide + 1);
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [slide]);

  return (
    <div className="advantages" id="functionality">
      <Typography
        className="header-title features__title-container_bold"
        size={42}
        color="primary"
        weight="medium"
        align="center">
        Functionality of our application
      </Typography>
      <Slider>
        <Slide slideRef={slideRef} index={slide} />
      </Slider>
      <SwitchSlides slide={slide} setSlider={swithSlide} />
    </div>
  );
};
