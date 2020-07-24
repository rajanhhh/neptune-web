import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import NavigationOption from '../navigationOption';
import NavigationOptionList from '../navigationOptionsList';
import Tile from '../tile';

import './Picker.css';

const Picker = ({ className, items }) => {
  return (
    <div className={classNames('tw-picker', className)}>
      <div className="tw-picker__tile-container p-x-2">
        {items.map(({ title, content, media }) => (
          <Tile className="m-x-1" title={title} content={content} media={media} />
        ))}
      </div>
      <div className="tw-picker__navigation-option-container">
        <NavigationOptionList>
          {items.map(({ title, content, media }) => (
            <NavigationOption
              title={title}
              content={content}
              media={media}
              showMediaAtAllSizes
              showMediaCircle={false}
            />
          ))}
        </NavigationOptionList>
      </div>
    </div>
  );
};

// TODO: add onClick etc
Picker.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node.isRequired,
      content: PropTypes.node.isRequired,
      media: PropTypes.node.isRequired,
    }),
  ).isRequired,
};

Picker.defaultProps = {
  className: null,
};

export default Picker;
