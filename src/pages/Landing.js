import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function Landing() {
  return (
    <LandingS>
      <IvitationS>
        Get ready for battle. Click the button below to pick your robot
      </IvitationS>
      <ButtonFight>
        <Link to='/you'>🤖</Link>
      </ButtonFight>
    </LandingS>
  );
}

const LandingS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(204, 74, 8, 0.7) 80%,
      rgba(254, 88, 16, 0.9) 100%
    ),
    url('https://res.cloudinary.com/garcila/image/upload/c_scale,e_grayscale,w_1265/e_negate/e_brightness_hsb/c_scale,h_1440,o_52/v1558114780/uot2/hw4/System76-Robot-by_Kate_Hazen_of_System76-6a622a6686.png')
      no-repeat;
  background-size: cover;
`;

const IvitationS = styled.h1`
  padding: 2rem;
  border-radius: 5px;
  text-align: center;
  max-width: 80vw;
  color: #fff;
  background-color: rgba(204, 88, 16, 0.8);
  box-shadow: 0px 10px 7px 0px rgba(71, 39, 0, 0.5);
  margin-bottom: 2rem;
`;

const ButtonFight = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
  background-color: #f0f0f0;
  border: 2px solid #fafafa;
  box-shadow: 0px 6px 5px 0px rgba(64, 26, 0, 0.5);
  outline: none;
  transition: transform 0.25s cubic-bezier(0.17, 0.89, 0.37, 1.95);

  :hover {
    background-color: #e57f40;
  }

  :active {
    background-color: #c4330b;
    transform: scale(0.95);
  }
`;
