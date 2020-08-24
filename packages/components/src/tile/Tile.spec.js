import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Tile from '.';

describe(Tile, () => {
  const onClick = jest.fn();
  const defaultProps = {
    title: 'Receive money',
    content: <span>Receive money from friends and familty like a local.</span>,
    media: <svg data-testid="illustration" />,
    onClick: () => onClick(),
  };

  beforeEach(() => jest.clearAllMocks());

  it('matches snapshot when regular size', () => {
    const { asFragment } = render(<Tile {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches snapshot when small size', () => {
    const { asFragment } = render(<Tile size={Tile.Size.SMALL} {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls onClick when anchor is clicked', async () => {
    render(<Tile {...defaultProps} />);

    expect(onClick).not.toHaveBeenCalled();

    const title = await screen.findByText('Receive money');

    expect(onClick).not.toHaveBeenCalled();

    fireEvent.click(title);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
