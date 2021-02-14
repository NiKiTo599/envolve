import React from "react";
import { Typography } from "../../ui/Typography/Typography";
import { AboutCard } from "../About";

import "./Categories.scss";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { categoriesCards } from "./constant";

export const Categories = ({ width }) => (
  <div className="categories" id="activities">
    <Typography
      className="header-title features__title-container_bold"
      size={42}
      color="primary"
      weight="medium"
      align="center">
      Everyone will find something for themselves
    </Typography>
    <MDBContainer className="about__cards">
      <MDBRow className="d-flex justify-content-center">
        {categoriesCards.map((card) => (
          <MDBCol className="d-flex justify-content-center mt-3">
            <AboutCard {...card} />
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  </div>
);
