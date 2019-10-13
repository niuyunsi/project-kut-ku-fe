import React from 'react';
import { ConferenceStream } from 'react-conf-webrtc';
import styled from 'styled-components/macro';

import { Stream } from './Stream';

const Wrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const StreamWrapper = styled.div`
  position: relative;
  width: 10rem;
  height: 10rem;
`;

interface Props {
  streams?: ConferenceStream[];
}

export const StreamList: React.FC<Props> = ({ streams }) => {
  if (!streams) {
    return null;
  }

  const renderStream = (stream: ConferenceStream) => {
    return (
      <StreamWrapper key={stream.id}>
        <Stream stream={stream.stream} mirror={stream.local} />
      </StreamWrapper>
    );
  };

  return <Wrapper>{streams.map(renderStream)}</Wrapper>;
};
