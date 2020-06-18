import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import './Badge.css';

const Badge = ({ badge, className, outline, variant, children }) => {
  const classes = classNames(
    'tw-badge',
    {
      outline,
    },
    variant,
    className,
  );

  return (
    <div className={classes}>
      {children}
      <div className="tw-badge__content">{badge}</div>
    </div>
  );
};

Badge.propTypes = {
  badge: Types.node.isRequired,
  outline: Types.bool,
  variant: Types.oneOf(['light', 'dark']),
  className: Types.string,
  children: Types.node.isRequired,
};

Badge.defaultProps = {
  outline: false,
  variant: 'light',
  className: null,
};

export default Badge;
