import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { Size } from '../common';

import './Badge.css';

const Badge = ({ badge, className, size, bordered, variant, children }) => {
  const classes = classNames(
    'tw-badge',
    {
      'tw-badge-bordered': bordered,
      [`tw-badge-${variant}`]: bordered,
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

Badge.Size = Size;
Badge.Variant = {
  DARK: 'darl',
};

Badge.propTypes = {
  badge: Types.node.isRequired,
  bordered: Types.bool,
  size: Types.oneOf([Badge.Size.LARGE]),
  variant: Types.oneOf([Badge.Variant.DARK]),
  className: Types.string,
  children: Types.node.isRequired,
};

Badge.defaultProps = {
  size: 'sm',
  bordered: false,
  variant: 'light',
  className: null,
};

export default Badge;
