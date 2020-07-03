import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { Size } from '../common';

import './Badge.css';

const Badge = ({ badge, className, size, border, children }) => {
  const borderVariant = typeof border === 'string' ? border : Badge.Border.LIGHT;
  const classes = classNames(
    'tw-badge',
    {
      [`tw-badge-border-${borderVariant}`]: !!border,
    },
    `tw-badge-${size}`,
    className,
  );

  return (
    <div className={classes}>
      <div className="tw-badge__children">{children}</div>
      <div className="tw-badge__content">{badge}</div>
    </div>
  );
};

Badge.Size = {
  LARGE: Size.LARGE,
};
Badge.Border = {
  LIGHT: 'light',
  DARK: 'dark',
};

Badge.propTypes = {
  badge: Types.node.isRequired,
  size: Types.oneOf([Badge.Size.LARGE]),
  border: Types.oneOfType([Types.oneOf(Object.values(Badge.Border)), Types.bool]),
  className: Types.string,
  children: Types.node.isRequired,
};

Badge.defaultProps = {
  size: null,
  border: 'light',
  className: null,
};

export default Badge;
