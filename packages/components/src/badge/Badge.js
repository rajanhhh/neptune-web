import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import './Badge.css';

const Badge = ({ badge, className, size, outline, variant, children }) => {
  const classes = classNames(
    'tw-badge',
    {
      outline,
      [variant]: outline,
    },
    className,
    size,
  );

  return (
    <div className={classes}>
      <div className="tw-badge__children">{children}</div>
      <div className="tw-badge__content">{badge}</div>
    </div>
  );
};

Badge.propTypes = {
  badge: Types.node.isRequired,
  outline: Types.bool,
  size: Types.oneOf(['sm', 'lg']),
  variant: Types.oneOf(['light', 'dark']),
  className: Types.string,
  children: Types.node.isRequired,
};

Badge.defaultProps = {
  size: 'sm',
  outline: false,
  variant: 'light',
  className: null,
};

export default Badge;
