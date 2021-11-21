import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeItem key={shoe.slug}>
          <ShoeCard {...shoe} />
        </ShoeItem>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 36px;
  flex-wrap: wrap;
`;

const ShoeItem = styled.div`
  flex: 1 0 340px;
`

export default ShoeGrid;
