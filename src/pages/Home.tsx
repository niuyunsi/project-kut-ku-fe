import React from 'react';
import styled from 'styled-components/macro';

import { CreateRoom } from '../components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Home: React.FC = () => (
  <Wrapper>
    <CreateRoom />
  </Wrapper>
);
