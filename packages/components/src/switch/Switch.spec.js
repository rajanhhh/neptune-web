import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Switch from './Switch';

import KeyCodes from '../common/keyCodes';

const props = {
  checked: true,
  onClick: jest.fn(),
  id: 'id',
  className: 'a-class-name',
  translations: { ariaDescription: 'a label' },
};

describe('Switch', () => {
  it('renders component when checked', () => {
    const { asFragment } = render(
      <Switch
        checked={props.checked}
        onClick={props.onClick}
        className={props.className}
        id={props.id}
        translations={props.translations}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders component when unchecked', () => {
    const { asFragment } = render(
      <Switch
        checked={false}
        onClick={props.onClick}
        className={props.className}
        id={props.id}
        translations={props.translations}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls onClick when user press space key', () => {
    const { getAllByRole } = render(
      <Switch
        checked={props.checked}
        onClick={props.onClick}
        className={props.className}
        id={props.id}
        translations={props.translations}
      />,
    );

    const input = getAllByRole('checkbox')[0];
    fireEvent.keyDown(input, { key: '33', keyCode: KeyCodes.ENTER });
    expect(props.onClick).not.toHaveBeenCalled();
    fireEvent.keyDown(input, { key: '32', keyCode: KeyCodes.SPACE });
    expect(props.onClick).toHaveBeenCalled();
  });
});
