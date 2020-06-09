import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import './Badge.css';

const Badge = ({
  badge,
  className,
  children,
}) => {
  const classes = classNames('tw-badge', className);

  return (
    <div className={classes}>
      {children}
      <div className='tw-badge__content'>
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
