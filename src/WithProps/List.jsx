/** @jsx jsx */
import React, { useState } from 'react';
import { jsx } from '@emotion/core';
import { Link } from '@reach/router';

const buttonCSS = {
  background: 'none',
  borderColor: '#61dafb',
  fontSize: 40,
  color: '#61dafb',
  ':hover': {
    backgroundColor: '#61dafb',
    color: 'black'
  }
};

const List = ({ libraries }): JSX.Element => {
  const [numLibs, setNumLibs] = useState(3);
  const libsToDisplay = Object.entries(libraries).slice(0, numLibs);
  return (
    <>
      {libsToDisplay.map(([key, { name }]) => (
        <>
          <h3>{name} &nbsp;&nbsp; // &nbsp; <Link to={`/${key}`}>View Details</Link></h3>
        </>
      ))}
      <button onClick={() => setNumLibs(numLibs + 1)} css={buttonCSS}>
        Add A Library
      </button>
    </>
  )
}

export default List;
