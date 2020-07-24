import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import './Tile.css';

export const Tile = ({ as: Element, className, title, content, media, onClick }) => {
  return (
    <Element
      className={classNames('tile', className)}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === 'Spacebar') {
          onClick();
        }
      }}
      tabIndex="0"
      role="button"
    >
      {/* TODO: Do we need to set a max height for the illustration? */}
      <div className="m-y-2">{media}</div>
      <h4 className="m-b-1">{title}</h4>
      {content}
    </Element>
  );
};

Tile.propTypes = {
  as: Types.elementType,
  title: Types.node.isRequired,
  content: Types.node,
  media: Types.node, // TODO: illustration or icon?
  onClick: Types.func.isRequired,
  className: Types.string,
};

Tile.defaultProps = {
  as: 'div', // TODO: clickable div – accessibility? should it be a button? or a link? Does Button support having illustrations?
  media: null,
  content: null,
  className: null,
};

export default Tile;
