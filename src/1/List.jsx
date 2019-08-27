/** @jsx jsx */
import React, { useContext } from 'react';
import { jsx } from '@emotion/core';
import { Link } from '@reach/router';

import { LibContext } from '../App';

const List = (): JSX.Element => {
  const libraries = useContext(LibContext);
  return (
    <main>
      {Object.entries(libraries).map(([key, { name }]) => (
        <>
          <h3>{name}</h3> <Link to={`/${key}`}>View Details</Link>
        </>
      ))}
    </main>
  )
}

export default List;
