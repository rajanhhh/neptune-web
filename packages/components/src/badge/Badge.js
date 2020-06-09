import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import './Badge.css';

const BASE_CLASS_NAME = 'tw-badge';

const Badge = ({
  badge,
  className,
  children,
  ...rest
}) => {
  const classes = classNames(BASE_CLASS_NAME, className);

  return (
    <div className={classes} {...rest}>
      {children}
      <div className={`${BASE_CLASS_NAME}__content`}>
        {badge}
      </div>
    </div>
  );
};

Badge.propTypes = {
  badge: Types.node.isRequired,
  className: Types.string,
  children: Types.node.isRequired,
};

Badge.defaultProps = {
  className: null,
};

export default Badge;
