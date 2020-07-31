import React from 'react';
import { text } from '@storybook/addon-knobs';

import Tile from '.';
import Avatar from '../avatar';

export default {
  component: Tile,
  title: 'Tile',
};

export const basic = () => {
  const title = text('title', 'Hank Miller');
  const body = <p>{text('body', 'Click here to send money to Mr. Miller')}</p>;

  return (
    <Tile
      title={title}
      content={body}
      media={
        <Avatar size="md" theme="light" type="initials" className="text-xs-center">
          HM
        </Avatar>
      }
      onClick={() => alert('onClick')}
    />
  );
};
