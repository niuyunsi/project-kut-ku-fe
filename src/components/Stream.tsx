import React, { useEffect, useRef } from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledVidoe = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
`;

interface StreamProps {
  stream: MediaStream;
  muted?: boolean;
  mirror?: boolean;
}

export const Stream: React.FC<StreamProps> = props => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = props.stream;
    }
  }, [props.stream]);

  return (
    <Wrapper>
      <StyledVidoe ref={videoRef} autoPlay muted={props.muted} />
    </Wrapper>
  );
};
