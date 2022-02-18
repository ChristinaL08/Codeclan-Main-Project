import React from 'react';
import styled from 'styled-components';

import Card from '../Components/Card';

const Grid = styled.div`
   display: grid;
   max-height: flex;
   grid-template-columns: repeat(4, 1fr);
   row-gap: 15px;
   column-gap: 15px;
   justify-items: center;
`
;

const CardContainer = ({ cardsToDisplay, cardBack, flippedCards, onCardClick }) => {
  var cardId = -1;
  const cardsNode = cardsToDisplay.map((card) => {
    cardId = cardId + 1;
    return (
      <Card
        key={cardId}
        id={cardId}
        isFlipped={flippedCards[cardId]}
        cardImg={card.link}
        cardBack={cardBack}
        cardLabel={card.label}
        onCardClick={onCardClick}
      />
    );
  });

  return <Grid>{cardsNode}</Grid>;
};

export default CardContainer;
