import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import requiredIf from 'react-required-if';
import { Size, MessageType, ArrowPosition } from '../common';

/**
 * Alerts give users an important message about their current task within the context of the page.
 *
 * @param {boolean} [arrow=null] - Set arrow position.
 * @param {string} className - Extra classnames to be apllied to the main container.
 * @param {boolena} [dismissible=false] - Boolean that controls if the alert can be dismess or not by showing or hiding the close button.
 * @param {function} [onDismiss] - Callback invoked on close button click. Required for dismissable alert only.
 * @param {string} [size=Alert.Size.LARGE] - Size of the Alert.
 * @param {object} [translations] - map of keys to translated labels
 * @param {string} [translations.ariaLabel] - Provides an aria label for the close button.
 * @param {string} type - Controls what type of alert to display: Success, Warning, Error, Info.
 *
 * @usage '<Alert
 *    dismissible={dismissible}
 *    onDismiss={() => setDismissed(true)}
 *    size={size}
 *    arrow={arrow}
 *    type={type}
 *    translations={{ ariaLabel: 'Close' }}
 *   >
 *     {content}
 *   </Alert>'
 * */

const Alert = ({
  arrow,
  children,
  className,
  dismissible,
  onDismiss,
  size,
  translations,
  type,
}) => {
  const alertConfigClasses = {
    'alert-success': type === MessageType.SUCCESS,
    'alert-info': type === MessageType.INFO,
    'alert-warning': type === MessageType.WARNING,
    'alert-danger': type === MessageType.ERROR,
    small: size === Size.SMALL,
    'p-x-2': size === Size.SMALL,
    'p-y-1': size === Size.SMALL,
  };

  return (
    <div
      role="alert"
      className={classNames(
        'alert',
        'alert-detach',
        alertConfigClasses,
        arrowClasses(arrow),
        className,
      )}
    >
      {dismissible && (
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          onClick={onDismiss}
          aria-label={translations.ariaLabel}
        >
          <span aria-hidden="true">×</span>
        </button>
      )}
      {children}
    </div>
  );
};

function arrowClasses(arrow) {
  if (arrow) {
    const classes = ['arrow'];
    const { BOTTOM, BOTTOM_LEFT, BOTTOM_RIGHT, TOP, TOP_RIGHT, TOP_LEFT } = Alert.ArrowPosition;

    switch (arrow) {
      case BOTTOM:
        return classes.concat('arrow-bottom', 'arrow-center');
      case BOTTOM_LEFT:
        return classes.concat('arrow-bottom', 'arrow-left');
      case BOTTOM_RIGHT:
        return classes.concat('arrow-bottom', 'arrow-right');
      case TOP:
        return classes.concat('arrow-center');
      case TOP_RIGHT:
        return classes.concat('arrow-right');
      case TOP_LEFT:
      default:
        return classes;
    }
  }
  return null;
}

Alert.Size = Size;
Alert.Type = MessageType;
Alert.ArrowPosition = ArrowPosition;

Alert.propTypes = {
  type: Types.oneOf([Alert.Type.INFO, Alert.Type.WARNING, Alert.Type.ERROR, Alert.Type.SUCCESS]),
  children: Types.node.isRequired,
  size: Types.oneOf([Alert.Size.SMALL, Alert.Size.LARGE]),
  dismissible: Types.bool,
  // eslint-disable-next-line
  onDismiss: requiredIf(Types.func, ({ dismissible }) => dismissible),
  arrow: Types.oneOf([
    Alert.ArrowPosition.TOP_LEFT,
    Alert.ArrowPosition.TOP,
    Alert.ArrowPosition.TOP_RIGHT,
    Alert.ArrowPosition.BOTTOM_LEFT,
    Alert.ArrowPosition.BOTTOM,
    Alert.ArrowPosition.BOTTOM_RIGHT,
  ]),
  translations: Types.shape({
    ariaLabel: Types.string.isRequired,
  }).isRequired,
  className: Types.string,
};

Alert.defaultProps = {
  type: Alert.Type.INFO,
  size: Alert.Size.LARGE,
  dismissible: false,
  arrow: null,
  className: '',
};

export default Alert;
