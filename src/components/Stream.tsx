import React, { useEffect, useRef } from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

interface StyledVideoProps {
  mirror?: boolean;
}

const StyledVideo = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: ${({ mirror }: StyledVideoProps) => mirror && 'rotateY(180deg)'};
`;

interface Props {
  stream: MediaStream;
  muted?: boolean;
  mirror?: boolean;
}

export const Stream: React.FC<Props> = ({ stream, muted, mirror }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <Wrapper>
      <StyledVideo ref={videoRef} autoPlay muted={muted} mirror={mirror} />
    </Wrapper>
  );
};
