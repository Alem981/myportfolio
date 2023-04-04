import React from 'react'
import styled from 'styled-components';

function ResumeItem({ year, title, subTitle, text }) {
    return (
        <ResumeItemStyled>
            <div className="left-content">
                <p>{year}</p>
            </div>
            <div className="right-content">
                <h5>{title}</h5>
                <h6>{subTitle}</h6>
                <p>{text}</p>
            </div>
        </ResumeItemStyled>
    )
}

const ResumeItemStyled = styled.div`
 
@media screen and (max-width: 700px){
    padding-left: 0;
    margin-right: 10%;
    .left-content {
      width: 100%;
      padding-left: 0;
      &::before {
        left: -5px;
      }
    }
    .right-content {
      padding-left: 2rem;
      &::before {
        top: 20px;
      }
      h5 {
        font-size: 1.8rem;
      }
      h6 {
        font-size: 1.4rem;
      }
    }
  }
  
  @media screen and (max-width: 421px){
    .left-content, .right-content {
      width: 100%;
      padding-left: 0;
    }
    .right-content {
      padding-left: 1rem;
      h5 {
        font-size: 1.6rem;
      }
      h6 {
        font-size: 1.2rem;
      }
    }
  }
  
    &:not(:last-child){
        padding-bottom: 3rem;
    }
    .left-content{
        width: 50%;
        padding-left: 20px;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: -10px;
            top: 5px;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: 2px solid var(--border-color);
            background-color: var(--background-dark-color);
        }
        p{
            display: inline-block;
        }
    }
    .right-content{
        padding-left: 5rem;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 15px;
            height: 2px;
            width: 3rem;
            background-color: var(--border-color);

         
        }
        h5{
            color: var(--primary-color);
            font-size: 2rem;
            padding-bottom: .4rem;
        }
        h6{
            padding-bottom: .6rem;
            font-size: 1.5rem;
        }
    }
`;
export default ResumeItem;
