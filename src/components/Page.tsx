import React, { useEffect } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components/macro';
import { StylesProvider } from '@material-ui/core';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
};

const GlobalStyle = createGlobalStyle`
	body {
    padding: 0;
		margin: 0;
		font-size: 1rem;
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
    document.title = 'project kut-ku | 0.1.0';
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
