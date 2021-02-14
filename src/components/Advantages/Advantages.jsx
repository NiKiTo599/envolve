import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBRow,
  MDBTabContent,
  MDBTabPane,
  MDBView,
} from "mdbreact";
import React, { useState } from "react";

import { Phone } from "../Phone/Phone";
import Marafon1 from "../../images/marafon1.svg";
import Marafon3 from "../../images/marafon3.svg";
import { Typography } from "../../ui/Typography/Typography";

import "./Advantages.scss";
import { advantages } from "./constatnts";

export const Advantages = ({ width }) => {
  const [activeItemJustified, setActiveItemJustified] = useState("1");

  const toggleJustified = (tab) => (e) => {
    if (activeItemJustified !== tab) {
      setActiveItemJustified(tab);
    }
  };

  return (
    <div className="advantages" id="functionality">
      <MDBContainer>
        <MDBRow>
          <MDBCol
            sm="12"
            className="d-flex justify-content-center align-items-center">
            <Typography
              className="header-title features__title-container_bold"
              size={42}
              color="primary"
              weight="medium"
              align="center">
              Functionality of our application
            </Typography>
          </MDBCol>

          <MDBCol
            md="3"
            className="d-flex flex-column justify-content-center align-items-center">
            <MDBNav
              tabs
              className="nav-justified d-flex flex-column"
              color="indigo">
              {advantages.map((advantage, idx) => (
                <MDBNavItem>
                  <MDBNavLink
                    link
                    to="#"
                    active={activeItemJustified === `${idx + 1}`}
                    onClick={toggleJustified(`${idx + 1}`)}
                    role="tab"
                    className="advantages__link">
                    {`0${idx + 1} ${advantage.title}`}
                  </MDBNavLink>
                </MDBNavItem>
              ))}
            </MDBNav>
          </MDBCol>

          <MDBCol md="9">
            <MDBTabContent className="card" activeItem={activeItemJustified}>
              {advantages.map((advantage, idx) => (
                <MDBTabPane role="tabpanel" tabId={`${idx + 1}`}>
                  <MDBRow>
                    <MDBCol
                      md="6"
                      className="d-flex flex-column justify-content-center align-items-start">
                      <Typography
                        align="center"
                        size={32}
                        className="pb-4 mt-sm-4"
                        style={{ margin: 16 }}>
                        {advantage.title}
                      </Typography>

                      {advantage.items.map((item) => (
                        <div className="advantage__info-container p-2">
                          <MDBIcon icon="check" className="mr-2 blue-text" />
                          <Typography size={18} color="secondary">
                            {item}
                          </Typography>
                        </div>
                      ))}
                    </MDBCol>
                    <MDBCol md="6" sm="12">
                      <div className="header__column header__column_right">
                        <Phone className="header__phone header__phone_left">
                          <img
                            className="photo-screen"
                            src={Marafon1}
                            alt="screen phone"
                          />
                        </Phone>
                        {width > 680 && (
                          <Phone className="header__phone header__phone_center">
                            <img
                              className="photo-screen"
                              src={Marafon3}
                              alt="screen phone"
                            />
                          </Phone>
                        )}
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBTabPane>
              ))}
              {/* <MDBTabPane tabId="1" role="tabpanel">
                <img className="slide" alt="advantages" src={Advantage1} />
              </MDBTabPane>
              <MDBTabPane tabId="2" role="tabpanel">
                <img className="slide" alt="advantages" src={Advantage2} />
              </MDBTabPane>
              <MDBTabPane tabId="3" role="tabpanel">
                <img className="slide" alt="advantages" src={Advantage3} />
              </MDBTabPane>
              <MDBTabPane tabId="4" role="tabpanel">
                <img className="slide" alt="advantages" src={Advantage4} />
              </MDBTabPane> */}
            </MDBTabContent>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};
