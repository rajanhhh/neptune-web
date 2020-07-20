import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { Size } from '../common';

import './Badge.css';

const Badge = ({ badge, className, size, border, children }) => {
  const classes = classNames(
    'tw-badge',
    {
      [`tw-badge-border-${border}`]: border,
      [`tw-badge-${size}`]: size,
    },
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
  SMALL: Size.SMALL,
  MEDIUM: Size.MEDIUM,
  LARGE: Size.LARGE,
};

Badge.Border = {
  LIGHT: 'light',
  DARK: 'dark',
};

Badge.propTypes = {
  badge: Types.node.isRequired,
  size: Types.oneOf(Badge.Size.LARGE),
  border: Types.oneOf(Object.values(Badge.Border)),
  className: Types.string,
  children: Types.node.isRequired,
};

Badge.defaultProps = {
  size: null,
  border: null,
  className: null,
};

export default Badge;
