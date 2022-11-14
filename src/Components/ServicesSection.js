import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ServiceCard from "../Components/ServiceCard";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import gamedev from "../img/game-dev.svg";

function ServicesSection() {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"Services"} span={"services"} />
        <div className="services">
          <ServiceCard
            image={design}
            title={"WordPress"}
            paragraph={
              "Beautiful, responsive, free and premium WordPress themes for your photography site, portfolio, magazine, business website, or blog."
            }
          />
          <div className="mid-card">
            <ServiceCard
              image={intelligence}
              title={"ReactJs"}
              paragraph={
                "ReactJs is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.One of the many great parts of React is how it makes you think about apps as you build them."
              }
            />
          </div>
          <ServiceCard
            image={gamedev}
            title={"Responsive Web Design"}
            paragraph={
              "The use of mobile devices to surf the web continues to grow at an astronomical pace, and these devices are often constrained by display size and require a different approach to how content is laid out on the screen."
            }
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
}

const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    @media screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ServicesSection;
