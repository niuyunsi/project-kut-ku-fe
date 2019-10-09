import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const ControlWrapper = styled.div`
  position: fixed;
  left: 50%;
  bottom: 1rem;
  transform: translate(-50%, 0);
`;

export const Control: React.FC = () => {
  const history = useHistory();
  const handleExit = () => {
    history.push('/');
  };

  return (
    <ControlWrapper>
      <Tooltip title="Exit">
        <Fab color="secondary" onClick={handleExit}>
          <ExitToAppIcon />
        </Fab>
      </Tooltip>
    </ControlWrapper>
  );
};
