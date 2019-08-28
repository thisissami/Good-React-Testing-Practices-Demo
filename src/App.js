/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { Router } from '@reach/router';

// 1 - With Context
// import List from './WithContext/List';
// import Details from './WithContext/Details';

// 1 - With Props
import List from './WithProps/List';
import Details from './WithProps/Details';

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
          <List path="/" libraries={libraries} />
          <Details path="/:libId" libraries={libraries} />
        </Router>
      </LibContext.Provider>
    </main>
  </div>
);

export default App;
