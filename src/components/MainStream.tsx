import React from 'react';
import { ConferenceStream } from 'react-conf-webrtc';
import styled from 'styled-components/macro';

import { Stream } from './Stream';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

interface MainStreamProps {
  stream?: ConferenceStream;
}

export const MainStream: React.FC<MainStreamProps> = props => {
  if (!props.stream) {
    return <div>loading</div>;
  }
  return (
    <Wrapper>
      <Stream stream={props.stream.stream} muted={props.stream.local} mirror={props.stream.local} />
    </Wrapper>
  );
};
