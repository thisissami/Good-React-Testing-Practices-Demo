/** @jsx jsx */
import React, { useContext } from 'react';
import { jsx } from '@emotion/core';
import { Link } from '@reach/router';

import { LibContext } from '../App';

const List = (): JSX.Element => {
  const libraries = useContext(LibContext);
  return (
    <>
      {Object.entries(libraries).map(([key, { name }]) => (
        <>
          <h3>{name} &nbsp;&nbsp; // &nbsp; <Link to={`/${key}`}>View Details</Link></h3>
        </>
      ))}
    </>
  )
}

export default List;
