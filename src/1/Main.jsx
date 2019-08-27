/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { Router } from '@reach/router';

import List from './List';
import Details from './Details';
import { LibContext } from '../App';

const Main = () => (
  <>
    <h2><u>
      Useful React Libraries
    </u></h2>
    <Router>
      <List path="/" />
      <Details path="/:libId" />
    </Router>
  </>
);

export default Main;
