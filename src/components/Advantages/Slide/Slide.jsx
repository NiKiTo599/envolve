import React from "react";

import Advantage1 from "../../../images/advantages/advantgage1.jpg";
import Advantage2 from "../../../images/advantages/advantgage2.jpg";
import Advantage3 from "../../../images/advantages/advantgage3.jpg";
import Advantage4 from "../../../images/advantages/advantgage4.jpg";

import "./Slide.scss";

const slides = [Advantage1, Advantage2, Advantage3, Advantage4];

export const Slide = ({ index, slideRef }) => (
  <div ref={slideRef} className="slide__container">
    <div className="slide__overlay" />
    <img className="slide" alt="advantages" src={slides[index]} />
  </div>
);
