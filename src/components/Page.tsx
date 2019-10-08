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
  /* background: white; */
  /* border: 1px solid ${props => props.theme.red}; */
  /* margin: 1rem; */
  position: absolute;
  width: 100%;
  height: 100%;
  /* padding: 1rem; */
  color: ${props => props.theme.black};
  background-color: ${props => props.theme.lightgrey};
  display: flex;
	flex-direction: column;
	/* align-items: stretch; */
`;

const Inner = styled.div`
  flex: 1;
  /* max-width: ${props => props.theme.maxWidth}; */
  /* margin: 0 auto; */
  /* padding: 2rem; */
  /* border: 1px solid black; */
  /* position: absolute; */
  /* width: 100%; */
  /* height: 100%; */
`;

interface PageProps {
  children: JSX.Element;
}

export const Page = (props: PageProps) => {
  useEffect(() => {
    document.title = 'project malfestio';
  });

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <StyledPage>
            {/* <Header /> */}
            <Inner>{props.children}</Inner>
          </StyledPage>
          {/* {props.children} */}
        </>
      </ThemeProvider>
    </StylesProvider>
  );
};
