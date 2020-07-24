import React from 'react';
import { text } from '@storybook/addon-knobs';

import Picker from '.';

export default {
  component: Picker,
  title: 'Picker',
};

export const basic = () => {
  const title = text('title', 'Send money');
  const content = <p>{text('body', 'Click here to be redirected to transferflow.')}</p>;
  const media = (
    <img
      src="https://transferwise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg"
      alt="illustration"
    />
  );
  const items = [
    { title, content, media },
    { title, content, media },
  ];

  return <Picker items={items} />;
};
