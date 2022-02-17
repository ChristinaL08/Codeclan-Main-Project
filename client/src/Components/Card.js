import React, { useState } from 'react';
import styled from 'styled-components';
import ReactCardFlip from 'react-card-flip';

import cardBackBlue from '../Images/CardBlue.jpg';
import cardBackGreen from '../Images/CardGreen.jpg';
import cardBackOrng from '../Images/CardOrng.jpg';
import cardBackRed from '../Images/CardRed.jpg';

const CardBackground = styled.div`
  /* position: absolute; */

  -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);

  overflow: hidden;

  border: var(--medGrey) 0.5px solid;
  border-radius: 10px;
  height: 200px;
  width: 130px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const CardLabel = styled.p`
  text-align: center;
  color: var(--white);
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -50%);

  text-shadow: 0 0 8px rgba(0,0,0,1);
`;

const Card = ({ cardBack, id, cardImg, cardLabel, isFlipped, onCardClick }) => {
  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <CardBackground>
          <img src={cardBack} alt={cardLabel} onClick={() => onCardClick(id, cardLabel)} />
        </CardBackground>

        <CardBackground>
          <CardLabel>{cardLabel}</CardLabel>
          <img src={cardImg} alt={cardLabel} onClick={() => onCardClick(id, cardLabel)} />
        </CardBackground>
      </ReactCardFlip>
    </div>
  );
};

export default Card;
