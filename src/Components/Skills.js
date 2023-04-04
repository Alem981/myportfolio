import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import ProgressBar from "./ProgressBar";

function Skills() {
  return (
    <SkillsStyled>

      <Title title={'Skill Highlights'} span={'Skill Highlights'} />
      <InnerLayout>

       

        <div className="skills">
        <li>HTML,CSS, JS</li>
        <li>JAVA</li>
        <li>WORDPRESS</li>
        <li>PHP</li>
        <li>REACTJS</li>
        
        <li>C#</li>
         
        </div>
      </InnerLayout>

    </SkillsStyled>
  );
}
const SkillsStyled = styled.section`
.skills{
    display:grid;
    grid-template-columns:repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap:3rem;
    li{
      list-style-type:square;
    }
    @media screen and (max-width:700px){
      grid-template-columns:repeat(2, 1fr);
      margin:auto;
    

    }
 
}
`;

export default Skills;
