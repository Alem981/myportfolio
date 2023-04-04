import React from 'react'
import styled from 'styled-components';
import resume from '../img/img2.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Alem</span></h4>
                <p className="paragraph">
                I have started researching web design in high school, but I have learned most
          things from the internet and the people around me. I am currently
          working as a freelancer and studying Master degree at the Faculty of Transport and
          Traffic Engineering in Sarajevo. I hate to work alone, so contact me
          if you are looking for cooperation or it is cool and say hello.
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>                        
                        <p>Languages </p>                      
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Alem Krbezlija</p>
                        <p>: 24</p>
                         <p>: Bosnian, English </p>                       
                        <p>: Freelance</p>
                    </div>
                </div>
                <PrimaryButton title={'Download Cv'} />
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
