/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { Router } from '@reach/router';

import List from './1/List';
import Details from './1/Details';

import libraries from './libraries';

const AppCSS = {
  textAlign: 'center',
  a: {
    color: '#61dafb'
  }
};

const AppMainCSS = {
  backgroundColor: '#282c34',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
  fontSize: 'calc(10px + 2vmin)',
};

export const LibContext = React.createContext(libraries);

const App = () => (
  <div css={AppCSS}>
    <main css={AppMainCSS}>
      <LibContext.Provider value={libraries}>
        <h2><u>
          Useful React Libraries
        </u></h2>
        <Router>
          <List path="/" />
          <Details path="/:libId" />
        </Router>
      </LibContext.Provider>
    </main>
  </div>
);

export default App;
