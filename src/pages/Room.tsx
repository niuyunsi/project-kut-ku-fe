import * as React from 'react';
import { useParams } from 'react-router-dom';

import { Conf } from '../components/Conf';

export const Room: React.FC = () => {
  const { roomName } = useParams();
  if (!roomName) {
    return <div>loading</div>;
  }
  return <Conf roomName={roomName} />;
};
