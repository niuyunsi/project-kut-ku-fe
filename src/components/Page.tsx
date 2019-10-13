import React, { useEffect } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components/macro';
import { StylesProvider } from '@material-ui/core';

const theme = {
  black: '#393939',
  lightgrey: '#E1E1E1'
};

const GlobalStyle = createGlobalStyle`
	body {
    padding: 0;
		margin: 0;
  }
`;

const StyledPage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  color: ${props => props.theme.black};
  background-color: ${props => props.theme.lightgrey};
  display: flex;
  flex-direction: column;
`;

const Inner = styled.div`
  flex: 1;
`;

interface Props {
  children: JSX.Element;
}

export const Page: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    document.title = `project kut-ku | ${process.env.REACT_APP_VERSION}`;
  });

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <StyledPage>
            <Inner>{children}</Inner>
          </StyledPage>
        </>
      </ThemeProvider>
    </StylesProvider>
  );
};
