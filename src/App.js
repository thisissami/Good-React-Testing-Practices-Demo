/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';

import libraries from './libraries';
import Main from './1/Main';

const AppCSS = {
  textAlign: 'center'
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

const App = () => (
  <div css={AppCSS}>
    <main css={AppMainCSS}>
      <LibContext.Provider value={libraries}>
        <Main />
      </LibContext.Provider>
    </main>
  </div>
);

export const LibContext = React.createContext(libraries);
export default App;
