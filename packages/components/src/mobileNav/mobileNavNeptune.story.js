import React from 'react';
import MobileNavNeptune from '.';
import { Items } from './__mocks__/items';

export default {
  component: MobileNavNeptune,
  title: 'MobileNavNeptune',
};

export const basic = () => {
  return <MobileNavNeptune items={Items} activeItemPath />;
};
