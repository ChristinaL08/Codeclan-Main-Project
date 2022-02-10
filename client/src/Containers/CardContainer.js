import React from 'react';
import styled from 'styled-components';

import Card from '../Components/Card';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;

  width: 1200px;
  margin: auto;
`;

const CardContainer = () => {
  return (
    <Grid>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ Grid>
  );
};

export default CardContainer;
