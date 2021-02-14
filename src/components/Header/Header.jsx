import React, { useEffect, useState } from "react";
import {
  MDBAnimation,
  MDBBtn,
  MDBCol,
  MDBCollapse,
  MDBContainer,
  MDBFormInline,
  MDBIcon,
  MDBMask,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavItem,
  MDBNavLink,
  MDBRow,
  MDBView,
} from "mdbreact";
import { withRouter } from "react-router-dom";

import { Typography } from "../../ui/Typography/Typography";
import Fon from "../../images/fon.jpeg";
import { Phone } from "../Phone/Phone";
import Marafon1 from "../../images/marafon1.svg";
import Marafon2 from "../../images/marafon2.svg";
import Marafon3 from "../../images/marafon3.svg";

import "./Header.scss";

const Header = ({ width, ...props }) => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    document.querySelector("nav").style.height = "65px";
    return () => {
      document.querySelector("nav").style.height = "auto";
    };
  }, []);

  useEffect(() => {
    if (!props.history || props.history.action === "POP") {
      return;
    }

    let hash = props.location.hash;
    if (hash) {
      let element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }
  }, [props]);

  const overlay = (
    <div
      id="sidenav-overlay"
      style={{
        backgroundColor:
          "radial-gradient(197.07% 86.62% at 26.34% 83.93%,#39c4ff59 0%,rgba(138, 97, 255, 0) 100%),linear-gradient(338.26deg, #3366ff4b 49.15%, #00207f42 108.42%), #ffffff4b",
      }}
      onClick={() => setCollapsed(!collapsed)}
    />
  );

  return (
    <div id="caltoaction">
      <div>
        <MDBNavbar
          color="blue"
          dark
          expand="md"
          fixed="top"
          scrolling
          transparent>
          <MDBContainer>
            <MDBNavbarBrand>
              <div className="header__logo" />
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={() => setCollapsed(!collapsed)} />
            <MDBCollapse isOpen={collapsed} navbar className="blue-text">
              <MDBNavbarNav right>
                <MDBNavItem active>
                  <MDBNavLink link to="#caltoaction">
                    Home
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink to="#about">About</MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink to="#activities">Activities</MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink to="#functionality">Functionality</MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink to="#features">Features</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
        {collapsed && overlay}
      </div>

      <MDBView src={Fon}>
        <MDBMask className="rgba-blue-slight " />
        <MDBContainer
          style={{ height: "100%", width: "100%" }}
          className="d-flex justify-content-center white-text align-items-center">
          <MDBRow>
            <MDBCol
              md="6"
              className="text-center text-md-left mt-xl-5 mb-5 d-flex flex-column justify-content-center align-items-center">
              <MDBAnimation type="fadeInLeft" delay=".3s">
                <Typography
                  className="header__title"
                  size={70}
                  weight="bold"
                  color="gradient"
                  align="center">
                  CHALLENGE
                </Typography>
              </MDBAnimation>
              <MDBAnimation type="fadeInLeft" delay=".6s">
                <Typography
                  className="header__title"
                  size={70}
                  weight="bold"
                  color="gradient"
                  align="center">
                  NEVER ENDS
                </Typography>
              </MDBAnimation>
              <MDBAnimation type="fadeInLeft" delay="1s">
                <Typography
                  className="header__app-text mt-5"
                  component="p"
                  size={28}
                  weight="medium"
                  color="gradient"
                  align="center">
                  Let's join us at AppStore!
                </Typography>
                <MDBBtn
                  className="btn-blue btn-rounded d-flex justify-content-center align-items-center"
                  style={{ margin: "0 auto" }}
                  rounded={true}>
                  <Typography size={36}>
                    <MDBIcon fab icon="app-store-ios" className="mr-2" />
                  </Typography>
                  <Typography size={20}>Join!</Typography>
                </MDBBtn>
              </MDBAnimation>
            </MDBCol>

            <MDBCol md="6" xl="5" className="mt-xl-5 pb-md-10  d-flex flex-column justify-content-center align-items-center">
              <MDBAnimation type="fadeInRight" delay=".3s">
                <div className="header__column header__column_right">
                  <Phone className="header__phone header__phone_left">
                    <img
                      className="photo-screen"
                      src={Marafon1}
                      alt="screen phone"
                    />
                  </Phone>
                  <Phone className="header__phone header__phone_center">
                    <img
                      className="photo-screen"
                      src={Marafon3}
                      alt="screen phone"
                    />
                  </Phone>
                  <Phone className="header__phone header__phone_right">
                    <img
                      className="photo-screen"
                      src={Marafon2}
                      alt="screen phone"
                    />
                  </Phone>
                </div>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBView>
    </div>
  );
};

export default withRouter(Header);
