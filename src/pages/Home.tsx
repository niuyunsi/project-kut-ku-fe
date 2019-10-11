import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const HomeWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputWrapper = styled.div`
  width: 20rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const StyledTextField = styled(TextField)`
  width: 100%;
`;
const StyledButton = styled(Button)`
  width: 50%;
  margin-top: 1rem;
`;

export const Home: React.FC = () => {
  const history = useHistory();
  const [roomName, setRoomName] = useState('');
  const [isDirty, setIsDirty] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (isDirty) {
      setHasError(validate());
    }
    // eslint-disable-next-line
  }, [isDirty, roomName]);

  const validate = () => {
    const re = new RegExp('^[a-zA-Z0-9]*$');
    return !roomName || !re.test(roomName);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDirty(true);
    setRoomName(e.target.value.trim());
  };

  const handleJoinClick = () => {
    history.push(`/r/${roomName}`);
  };

  return (
    <HomeWrapper>
      <InputWrapper>
        <StyledTextField
          error={hasError}
          helperText={hasError && 'Room name must include only letters and numbers'}
          label="Room Name"
          onChange={handleNameChange}
          placeholder="Please enter room name"
          value={roomName}
        />
        <StyledButton variant="contained" color="primary" onClick={handleJoinClick} disabled={!roomName}>
          Join
        </StyledButton>
      </InputWrapper>
    </HomeWrapper>
  );
};
