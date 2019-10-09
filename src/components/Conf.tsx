import React from 'react';
import { Conference, IStreamsRendererProps } from 'react-conf-webrtc';
import styled from 'styled-components/macro';

import { Control, MainStream, StreamList } from './';
import { connect } from '../lib/connect';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.black};
`;

const config: RTCConfiguration = {
  iceServers: [{ urls: 'stun:stun1.l.google.com:19302' }, { urls: 'stun:stun2.l.google.com:19302' }]
};

interface Props {
  roomName: string;
}

export const Conf: React.FC<Props> = ({ roomName }) => {
  const renderConference = (streamProps: IStreamsRendererProps): JSX.Element | null | false => {
    const sortStreams = (streamProps: IStreamsRendererProps) => {
      const { localStream, remoteStreams } = streamProps;
      if (!remoteStreams || remoteStreams.length === 0) {
        return { mainStream: localStream };
      }
      return { mainStream: remoteStreams[0], sideStreams: [localStream, ...remoteStreams.slice(1)] };
    };

    const { mainStream, sideStreams } = sortStreams(streamProps);

    return (
      <Wrapper>
        <MainStream stream={mainStream} />
        <StreamList streams={sideStreams} />
        <Control />
      </Wrapper>
    );
  };

  const handleError = (error: any) => {
    console.log('got error', error);
  };

  return (
    <Conference
      render={renderConference}
      connect={connect}
      room={roomName}
      peerConnectionConfig={config}
      onError={handleError}
    />
  );
};
