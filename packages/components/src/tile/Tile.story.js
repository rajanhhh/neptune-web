import React from 'react';
import { text } from '@storybook/addon-knobs';

import Tile from '.';

export default {
  component: Tile,
  title: 'Tile',
};

export const basic = () => {
  const title = text('title', 'Send money');
  const body = text('body', 'Click here to be redirected to transferflow.');

  return (
    <Tile
      title={title}
      content={body}
      illustration={
        <img
          src="https://transferwise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg"
          alt="illustration"
        />
      }
      onClick={() => alert('onClick')}
    />
  );
};
