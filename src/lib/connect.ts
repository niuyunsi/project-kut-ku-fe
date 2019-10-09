import { SpreedConnect } from 'react-conf-webrtc';

export const connect = () => {
  const url = process.env.REACT_APP_SPREED_URL
    ? process.env.REACT_APP_SPREED_URL
    : `ws://${window.location.hostname}:8080`;

  const conn = SpreedConnect(url);

  conn.onconnmessage = (msg, done) => {
    console.log('Intercepted SpreedResponse message with type: %s', msg.Data.Type);
    done();
  };

  return conn;
};
