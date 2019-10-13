import React from 'react';
import styled from 'styled-components/macro';

import { CreateRoom } from '../components';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Home: React.FC = () => (
  <Wrapper>
    <CreateRoom />
  </Wrapper>
);
