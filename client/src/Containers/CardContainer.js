import React from 'react';
import styled from 'styled-components';

import Card from '../Components/Card';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: space-between;

  margin: auto;
`;

const CardContainer = ({cardsToDisplay}) => {
  const cardsNode = cardsToDisplay.map((card) => {
    return <Card key={card._id} cardImg={card.link} cardLabel={card.label}/>
  })
  
  return (
    <Grid>
      {cardsNode}
    </Grid>
  );
}


export default CardContainer;
