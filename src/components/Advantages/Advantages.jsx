import React from "react";
import Swiper from "react-id-swiper";

import Marafon1 from "../../images/marafon1.svg";

const params = {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 30,
};

export const Advanteges = () => (
  <Swiper {...params}>
    <div>
      <img src={Marafon1} />
    </div>
    <div>
      <img src={Marafon1} />
    </div>
    <div>
      <img src={Marafon1} />
    </div>
    <div>
      <img src={Marafon1} />
    </div>
  </Swiper>
);
