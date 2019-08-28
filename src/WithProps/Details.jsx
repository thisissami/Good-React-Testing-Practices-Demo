/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { Libraries } from '../libraries';

type Props = { libId: string, libraries: Libraries };

const Details = ({ libId, libraries }: Props): JSX.Element => {
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
