/** @jsx jsx */
import React, { useContext } from 'react';
import { jsx } from '@emotion/core';

import { LibContext } from '../App';

type Props = { libId: string };
const Details = ({ libId }: Props): JSX.Element => {
  const libraries = useContext(LibContext);
  return (
    <main>
      <h3>
        {libId}
      </h3>
    </main>
  )
}

export default Details;
