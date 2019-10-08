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
  width: 150px;
  height: 150px;
`;

const StreamFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;

interface Props {
  streams?: ConferenceStream[];
}

export const StreamList: React.FC<Props> = props => {
  if (!props.streams) {
    return null;
  }

  const renderStream = (stream: ConferenceStream) => {
    const name = stream.id.substring(0, 10);

    return (
      <StreamWrapper key={stream.id}>
        <Stream stream={stream.stream} />
        <StreamFooter>{name}</StreamFooter>
      </StreamWrapper>
    );
  };

  return <Wrapper>{props.streams.map(renderStream)}</Wrapper>;
};
