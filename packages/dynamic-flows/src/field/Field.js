import React, { useState } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import { Alert } from '@transferwise/components';

import { getValidationFailures } from '../common/validation/validation-failures';
import { getValidModelParts } from '../common/validation/valid-model';
import WithNormalizer from '../WithNormalizer';

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
      // Refactor and let props.schema.help only and manage list type from outside.
      messageType = 'info';
      if (props.schema.help.message) {
        message.push(<div>{props.schema.help.message}</div>);
      }
      if (props.schema.help.list) {
        message.push(
          <ul className="list-unstyled">
            {props.schema.help.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>,
        );
      }
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
        <WithNormalizer>{React.cloneElement(props.children, fieldProps)}</WithNormalizer>
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
    type: Types.oneOf(['string', 'number', 'integer', 'boolean']),
    enum: Types.arrayOf(Types.oneOfType([Types.string, Types.number, Types.bool])),
    const: Types.oneOfType([Types.string, Types.number, Types.bool]),
    format: Types.string,
    title: Types.string,
    values: Types.arrayOf(Types.shape({})),
    default: Types.oneOfType([Types.string, Types.number, Types.bool]),
    disabled: Types.bool,
    hidden: Types.bool,
    help: Types.shape({}),
  }).isRequired,
  model: Types.oneOfType([Types.string, Types.number, Types.bool]),
  errors: Types.string,
  translations: Types.shape({}),
  onChange: Types.func.isRequired,
  submitted: Types.bool.isRequired,
  required: Types.bool,

  id: Types.string,
  children: Types.node.isRequired,
  isHidden: Types.bool,
};

Field.defaultProps = {
  model: null,
  errors: null,
  translations: {},
  required: false,

  id: '',
  isHidden: false,
};

export default Field;
