import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "./SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        <SmallTitle icon={briefcase} title={"Working Expirience"} />
        <div className="resume-content">
          <ResumeItem
            year={"2021 - 2022"}
            title={"WordPress developer"}
            subTitle={" "}
            text={
              "In collaboration with WebAgent we create modern websites that are visible on all devices and follow trends in web design. We design all websites according to the latest Internet standards. We offer everything You need for a top web presentation."
            }
                      />

<ResumeItem
            year={"10.01.2022 -15.03.2022"}
            title={"ReactNative developer"}
            subTitle={" "}
            text={
              "In collaboration with Agile Software Design GMBH, I have started an internship in mobile application development. This practice represents an upgrade of previously acquired knowledge from ReactJS."
            }
                      />
        </div>
        
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Education"} />
          <div className="resume-content">
            <ResumeItem
              year={"2021 - 2023"}
              title={
                "Faculty of Traffic and Communications University of Sarajevo"
              }
              subTitle={
                "Master Degree of Traffic and Communication Engineering"
              }
              text={
                "Faculty of Transport and Communications graduates, depending on the cycle of studies completed, obtain one of the following titles: Bachelor Engineer of Traffic and Communications, Master of Traffic and Communications – Graduated Engineer of Traffic and Communications, PhD – Doctor of Technical Sciences."
              }
            />

            <ResumeItem
              year={"2017 - 2021"}
              title={
                "Faculty of Traffic and Communications University of Sarajevo"
              }
              subTitle={"Bachelor of Traffic and Communication Engineering"}
              text={
                "The Faculty of Transport and Communications was founded in 1977. In the past 40 years, it has acquired the status of a leading educational and scientific institution in the area of transport and transport engineering and information and communication technologies."
              }
            />

            <ResumeItem
              year={"2014 - 2017"}
              title={"Electrical Engineering High Schools"}
              subTitle={"What do electrical engineers learn in school?"}
              text={
                "Courses that you will come across in this major can include: statistics, calculus, circuit analysis and design, physics, digital systems, electrodynamics, statistics, physics, technical writing for engineering, semiconductor technology, and electric components."
              }
            />
            <ResumeItem
              year={"2022"}
              title={"Javascript programing language"}
              subTitle={"What is Javascript used for in programming?"}
              text={
                "I am currently attending a Javascript programming language course. JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user."
                 
              }
            />
          </div>
        </div>
      </InnerLayout>
    </ResumeStyled>



 
  );
}
const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }
  .resume-content {
    border-left: 2px solid var(--border-color);
    
  }
`;
export default Resume;
