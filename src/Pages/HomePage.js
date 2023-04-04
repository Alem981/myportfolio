import React from "react";
import styled from "styled-components";
//import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
//import YoutubeIcon from "@material-ui/icons/YouTube";
 
function HomePage() {
  return (
    <HomePageStyled>
      <div className="typography">
        <h1>
        We Build, Integrate & Optimize <span> </span>
        </h1>
        <p>
        I am motivated and hard-working person who is excellent in  a team building and working; also I am very curious and fast learner.
        </p>
        <div className="icons">
         
          <a rel="noreferrer" href="https://github.com/Alem981" target="_blank" className="icon i-github">
            <GithubIcon />
          </a>
         
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;

export default HomePage;
