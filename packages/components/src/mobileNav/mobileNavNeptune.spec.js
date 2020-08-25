import React from 'react';
import { render } from '@testing-library/react';
import MobileNavNeptune from './mobileNavNeptune';
import { Items } from './__mocks__/items';

describe('MobileNavNeptune', () => {
  it('renders', () => {
    expect(() =>
      render(<MobileNavNeptune items={Items} activeItemPath={Items[0].path} />),
    ).not.toThrow();
  });
});
