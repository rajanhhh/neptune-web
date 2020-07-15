import React from 'react';

import { isNumber, isNumeric, isSyntheticEvent } from '../common/validation/type-validators';

const WithNormalizer = ({ children }) => {
  const handleOnChange = (event) => {
    let value = event;

    if (isSyntheticEvent(event)) {
      value = isNumeric(event.target.value) ? parseFloat(event.target.value) : event.target.value;
    } else if (event && (event.value || isNumber(event.value))) {
      value = event.value;
    } else if (event.status) {
      value = event.status;
    }

    if (children.props.onChange) {
      children.props.onChange(value);
    }
    // Upload
    if (children.props.onSuccess) {
      children.props.onSuccess(value);
    }
    if (children.props.onFailure) {
      children.props.onFailure(value);
    }
  };
  const attachEvents = {
    onChange: handleOnChange,
  };

  if (children.props.onSuccess) {
    attachEvents.onSuccess = handleOnChange;
  }
  if (children.props.onFailure) {
    attachEvents.onFailure = handleOnChange;
  }

  return React.cloneElement(children, {
    ...attachEvents,
  });
};

export default WithNormalizer;
