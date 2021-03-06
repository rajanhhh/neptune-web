// Creates Test file.

const { capitalizeFirstLetter } = require('@transferwise/files-scaffold/utils/index.js');

module.exports = {
  type: 'jest',
  path: 'packages/components/src',
  ext: 'spec.js',
  createDir: true,
  name: (name) => capitalizeFirstLetter(name),
  template: (name) => `import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ${capitalizeFirstLetter(name)} from './';

describe('${capitalizeFirstLetter(name)}', () => {
  it('your test here', () => {});
});
`,
};
