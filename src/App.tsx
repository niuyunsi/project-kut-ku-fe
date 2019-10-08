import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Page, Routes } from './components';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Page>
        <Routes />
      </Page>
    </BrowserRouter>
  );
};

export default App;
