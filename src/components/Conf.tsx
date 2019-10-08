import React from 'react';
import { Conference, SpreedConnect, IStreamsRendererProps } from 'react-conf-webrtc';
import styled from 'styled-components/macro';

import { MainStream } from './MainStream';
import { StreamList } from './StreamList';
import { Control } from './Control';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.black};
`;

const config: RTCConfiguration = {
  iceServers: [{ urls: 'stun:stun1.l.google.com:19302' }, { urls: 'stun:stun2.l.google.com:19302' }]
};

function connect() {
  // const webRTCUrl = env.SPREED_URL ? env.SPREED_URL : location.hostname + ":8443";
  const webRTCUrl = 'localhost:8080';
  const conn = SpreedConnect('ws://' + webRTCUrl + '/ws');
  conn.onconnmessage = (msg, done) => {
    console.log('Intercepted SpreedResponse message with type: %s', msg.Data.Type);
    done();
  };
  return conn;
}

interface ConfProps {
  roomName: string;
}

export const Conf: React.FunctionComponent<ConfProps> = props => {
  const renderConference = (streamProps: IStreamsRendererProps): JSX.Element | null | false => {
    const { localStream, remoteStreams } = streamProps;

    return (
      <Wrapper>
        <MainStream stream={localStream} />
        <StreamList streams={remoteStreams} />
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
      room={props.roomName}
      peerConnectionConfig={config}
      onError={handleError}
    />
  );
};
