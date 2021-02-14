import React from "react";
import { Typography } from "../../ui/Typography/Typography";
import { aboutCards } from "./constants";

import "./About.scss";
import { MDBCol, MDBContainer, MDBPopper, MDBRow } from "mdbreact";

const AboutCard = ({ title, info }) => (
  <MDBPopper material domElement tag="span" placement="bottom">
    <span className="about__tooltip-text">{title}</span>
    <span>{info}</span>
  </MDBPopper>
);

export const About = ({ width }) => (
  <div className="about" id="about">
    <Typography
      className="features__title-container_bold header-title about__title"
      size={42}
      color="primary"
      weight="medium"
      align="center">
      Why is it so great?
    </Typography>
    <MDBContainer className="about__cards">
      <MDBRow>
        {width >= 1024 &&
          aboutCards.map((card) => (
            <MDBCol md="4" className="d-flex justify-content-center">
              <AboutCard {...card} />
            </MDBCol>
          ))}

        {width < 1024 &&
          width > 770 &&
          aboutCards.slice(0, 2).map((card) => (
            <MDBCol md="6" className="d-flex justify-content-center">
              <AboutCard {...card} />
            </MDBCol>
          ))}

        {width <= 770 &&
          aboutCards.slice(0, 1).map((card) => (
            <MDBCol md="6" className="d-flex justify-content-center">
              <AboutCard {...card} />
            </MDBCol>
          ))}
      </MDBRow>

      {width < 770 && (
        <MDBRow style={{ paddingTop: 32 }}>
          {aboutCards.slice(1, 2).map((card) => (
            <MDBCol sm="12" className="d-flex justify-content-center">
              <AboutCard {...card} />
            </MDBCol>
          ))}
        </MDBRow>
      )}

      {width < 1024 && (
        <MDBRow style={{ paddingTop: 32 }}>
          {width < 1024 &&
            aboutCards.slice(2).map((card) => (
              <MDBCol sm="12" className="d-flex justify-content-center">
                <AboutCard {...card} />
              </MDBCol>
            ))}
        </MDBRow>
      )}
    </MDBContainer>
  </div>
);
