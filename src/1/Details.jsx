/** @jsx jsx */
import React, { useContext } from 'react';
import { jsx } from '@emotion/core';

import { LibContext } from '../App';

type Props = { libId: string };
const Details = ({ libId }: Props): JSX.Element => {
  const libraries = useContext(LibContext);
  const curLib = libraries[libId];
  const { name, description } = curLib;
  return (
    <>
      <h2>
        {name}
      </h2>
      <p>
        {description}
      </p>
    </>
  )
}

export default Details;
