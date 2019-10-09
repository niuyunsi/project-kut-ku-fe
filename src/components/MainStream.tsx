import React from 'react';
import { ConferenceStream } from 'react-conf-webrtc';
import styled from 'styled-components/macro';

import { Stream } from './Stream';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

interface Props {
  stream?: ConferenceStream;
}

export const MainStream: React.FC<Props> = ({ stream }) => {
  if (!stream) {
    return <div>loading</div>;
  }
  return (
    <Wrapper>
      <Stream stream={stream.stream} muted={stream.local} mirror={stream.local} />
    </Wrapper>
  );
};
