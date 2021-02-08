import React from "react";
import { Typography } from "../../ui/Typography/Typography";

import Sport from "../../images/categories/sport.jfif";
import Hobby from "../../images/categories/hobbies.webp";
import Food from "../../images/categories/food.jfif";
import Skills from "../../images/categories/skills.jfif";
import Mindfullness from "../../images/categories/MINDFULLNESS.jfif";
import Health from "../../images/categories/health.jfif";
import Social from "../../images/categories/social.jfif";

import "./Categories.scss";

export const Categories = ({ width }) => (
  <div className="categories">
    <Typography
      className="header-title features__title-container_bold"
      size={42}
      color="primary"
      weight="medium"
      align="center">
      Everyone will find something for themselves
    </Typography>
    <div className="categories__container">
      <div className="categories__row">
        <div className="image-container">
          <div className="image-overlay">
            <Typography
              className="image__title"
              size={28}
              weight="medium"
              align="center"
              color="white">
              SPORTS
            </Typography>
            <Typography
              className="image__title_hover"
              size={28}
              weight="medium"
              align="center"
              color="white">
              Don't sit still
            </Typography>
          </div>
          <img src={Sport} alt="sport" />
        </div>
        <div className="image-container">
          <div className="image-overlay">
            <Typography
              className="image__title"
              size={28}
              weight="medium"
              align="center"
              color="white">
              HOBBBIES
            </Typography>
            <Typography
              className="image__title_hover"
              size={28}
              weight="medium"
              align="center"
              color="white">
              Spend your time profitably
            </Typography>
          </div>
          <img src={Hobby} alt="hobby" />
        </div>
      </div>
      <div className="categories__row">
        <div className="image-container">
          <div className="image-overlay">
            <Typography
              className="image__title"
              size={28}
              weight="medium"
              align="center"
              color="white">
              EATING
            </Typography>
            <Typography
              className="image__title_hover"
              size={28}
              weight="medium"
              align="center"
              color="white">
              Eat less and better
            </Typography>
          </div>
          <img src={Food} alt="food" />
        </div>
        <div className="image-container">
          <div className="image-overlay">
            <Typography
              className="image__title"
              size={28}
              weight="medium"
              align="center"
              color="white">
              SKILLS
            </Typography>
            <Typography
              className="image__title_hover"
              size={28}
              weight="medium"
              align="center"
              color="white">
              Develop yourself
            </Typography>
          </div>
          <img src={Skills} alt="skills" />
        </div>
        {width > 1020 && (
          <div className="image-container">
            <div className="image-overlay">
              <Typography
                className="image__title"
                size={28}
                weight="medium"
                align="center"
                color="white">
                MINDFULLNESS
              </Typography>
              <Typography
                className="image__title_hover"
                size={28}
                weight="medium"
                align="center"
                color="white">
                Know yourself
              </Typography>
            </div>
            <img src={Mindfullness} alt="mindfullness" />
          </div>
        )}
      </div>
      <div className="categories__row">
        <div className="image-container">
          <div className="image-overlay">
            <Typography
              className="image__title"
              size={28}
              weight="medium"
              align="center"
              color="white">
              HEALTH
            </Typography>
            <Typography
              className="image__title_hover"
              size={28}
              weight="medium"
              align="center"
              color="white">
              Become better yourself
            </Typography>
          </div>
          <img src={Health} alt="health" />
        </div>
        <div className="image-container">
          <div className="image-overlay">
            <Typography
              className="image__title"
              size={28}
              weight="medium"
              align="center"
              color="white">
              SOCIAL
            </Typography>
            <Typography
              className="image__title_hover"
              size={28}
              weight="medium"
              align="center"
              color="white">
              Make the world a better place
            </Typography>
          </div>
          <img src={Social} alt="social" />
        </div>
      </div>
      {width < 1020 && (
        <div className="categories__row">
          <div className="image-container">
            <div className="image-overlay">
              <Typography
                className="image__title"
                size={28}
                weight="medium"
                align="center"
                color="white">
                MINDFULLNESS
              </Typography>
              <Typography
                className="image__title_hover"
                size={28}
                weight="medium"
                align="center"
                color="white">
                Know yourself
              </Typography>
            </div>
            <img src={Mindfullness} alt="mindfullness" />
          </div>
        </div>
      )}
    </div>
  </div>
);
