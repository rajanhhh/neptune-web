import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import './Tile.css';

export const Tile = ({ className, title, content, media, onClick }) => {
  return (
    <div className={classNames('tw-tile', className)}>
      <div className="m-y-2 m-x-auto">{media}</div>
      {/* TODO: It complains about using anchor as a button... */}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        className="tw-tile__link"
        onClick={onClick}
        tabIndex="0"
        role="button"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === 'Spacebar') {
            onClick();
          }
        }}
      >
        <h4 className="m-b-1">{title}</h4>
      </a>
      {content}
    </div>
  );
};

Tile.propTypes = {
  title: Types.node.isRequired,
  content: Types.node,
  media: Types.node,
  onClick: Types.func.isRequired,
  className: Types.string,
};

Tile.defaultProps = {
  media: null,
  content: null,
  className: null,
};

export default Tile;
