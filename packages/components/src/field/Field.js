import React, { useState } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import Alert from '../alert';
// @TODO To be imported in components
import { getValidationFailures } from '@transferwise/dynamic-flows/src/common/validation/validation-failures';
import { getValidModelParts } from '@transferwise/dynamic-flows/src/common/validation/valid-model';
import WithNormaliser from '../withNormaliser';

const Field = (props) => {
  const [model, setModel] = useState(props.model);
  const [lastModel, setLastModel] = useState(props.model);
  const [changed, setChanged] = useState(false);
  const [focused, setFocused] = useState(false);
  const [blurred, setBlurred] = useState(false);
  const [validations, setValidations] = useState([]);

  const onChange = (newModel) => {
    setChanged(true);
    setModelAndBroadcast(sanitiseModel(newModel));
  };

  const getValidationKeys = (newModel) =>
    getValidationFailures(newModel, props.schema, props.required);

  const setModelAndBroadcast = (newModel) => {
    setModel(newModel);
    const validationKeys = getValidationKeys(newModel);
    setValidations(validationKeys);

    const broadcastModel = validationKeys.length ? null : newModel;

    setLastModel(broadcastModel);

    if (broadcastModel !== lastModel) {
      props.onChange(broadcastModel, props.schema);
    }
  };

  // const sanitiseModel = (newModel) => [];
  const sanitiseModel = (newModel) => getValidModelParts(newModel, props.schema);

  const onFocus = () => setFocused(true);
  const onBlur = () => {
    setFocused(false);
    setBlurred(true);
  };

  const formGroupClasses = {
    'form-group': true,
    'has-error':
      (!changed && props.errors) ||
      ((props.submitted || (changed && blurred)) && validations.length),
    'has-info': focused && props.schema.help,
  };

  const fieldProps = {
    onChange,
    onBlur,
    onFocus,
    value: model,
  };

  const getValidationsProps = () => {
    let messageType = null;
    let message = [];

    const isErrorVisible = !changed && props.errors;
    const isValidationVisible = (props.submitted || (changed && blurred)) && !!validations.length;
    const isHelpVisible = focused && props.schema.help && !isValidationVisible;

    if (isErrorVisible) {
      messageType = 'error';
      message = props.errors;
    } else if (isValidationVisible) {
      messageType = 'error';
      message = validations.map((validation) => (
        <div key={validation}>{props.schema.validationMessages[validation]}</div>
      ));
    } else if (isHelpVisible) {
      messageType = 'info';
      message = props.schema.help;
    }

    return { messageType, message };
  };
  const { messageType, message } = getValidationsProps();

  return (
    !props.isHidden && (
      <div className={classNames(formGroupClasses)}>
        {props.schema.title && (
          <label className="control-label" htmlFor={props.id}>
            {props.schema.title}
          </label>
        )}
        <WithNormaliser>{React.cloneElement(props.children, fieldProps)}</WithNormaliser>
        {messageType && (
          <Alert type={messageType} size="sm">
            {message}
          </Alert>
        )}
      </div>
    )
  );
};

Field.propTypes = {
  schema: Types.shape({
    title: Types.string,
    type: Types.oneOf(['string', 'number', 'integer', 'boolean']),
    hidden: Types.bool,
    minLength: 3,
    maxLength: 10,
    validationMessages: Types.shape({}),
    help: Types.node,
  }).isRequired,
  errors: Types.string,
  onChange: Types.func.isRequired,
  submitted: Types.bool.isRequired,
  model: Types.oneOfType([Types.string, Types.number, Types.bool]),
  required: Types.bool,
  id: Types.string,
  children: Types.node.isRequired,
  isHidden: Types.bool,
};

Field.defaultProps = {
  model: null,
  errors: null,
  required: false,
  id: '',
  isHidden: false,
};

export default Field;
