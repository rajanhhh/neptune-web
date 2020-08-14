import React, { useState, useEffect } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import Alert from '../alert';
import { getValidationFailures } from './utils/getValidationFailures';
import WithNormaliser from '../withNormaliser';

const Field = (props) => {
  const getValidations = () => {
    const validations = {
      validationRules: {},
      validationMessages: {},
    };
    Object.keys(props.validation).forEach((key) => {
      validations.validationRules[key] = props.validation[key].value;
      validations.validationMessages[key] = props.validation[key].message;
    });
    return validations;
  };
  // @TODO initialize props.model correctly
  const [model, setModel] = useState(props.model);
  const [changed, setChanged] = useState(false);
  const [focused, setFocused] = useState(false);
  const [blurred, setBlurred] = useState(false);
  const [validationFailures, setValidationFailures] = useState([]);
  const [validations] = useState(() => getValidations());

  const onChange = (newModel) => {
    setChanged(true);
    setModelAndBroadcast(newModel);
  };

  const onFocus = () => setFocused(true);

  const onBlur = () => {
    setFocused(false);
    setBlurred(true);
  };

  useEffect(() => {
    const newValidationFailures = getValidationFailures(
      model,
      props.type,
      validations.validationRules,
    );
    setValidationFailures(newValidationFailures);
  }, [props.submitted]);

  const setModelAndBroadcast = (newModel) => {
    if (newModel === model) {
      return;
    }
    const newValidationFailures = getValidationFailures(
      newModel,
      props.type,
      validations.validationRules,
    );
    const isValid = newValidationFailures.length === 0;

    setValidationFailures(newValidationFailures);
    setModel(newModel);
    props.onChange(newModel, isValid);
  };
  // @TODO We need to check if our components support all these props
  const fieldProps = {
    onChange,
    onBlur,
    onFocus,
    value: model,
    id: props.id,
  };

  const getMessage = () => {
    let messageType = null;
    let message = null;
    const formGroupClasses = ['form-group'];

    const isErrorVisible = !changed && props.errors;
    const isValidationVisible =
      (props.submitted || (changed && blurred)) && !!validationFailures.length;
    const isHelpVisible = focused && props.help && !isValidationVisible;

    if (isErrorVisible) {
      formGroupClasses.push('has-error');
      messageType = 'error';
      message = props.errors;
    } else if (isValidationVisible) {
      formGroupClasses.push('has-error');
      messageType = 'error';
      message = validationFailures.map((validation) => (
        <div key={validation}>{validations.validationMessages[validation]}</div>
      ));
    } else if (isHelpVisible) {
      formGroupClasses.push('has-info');
      messageType = 'info';
      message = props.help;
    }

    return { messageType, message, formGroupClasses };
  };

  const { messageType, message, formGroupClasses } = getMessage();

  return (
    <div className={classNames(formGroupClasses)}>
      {props.title && (
        <label className="control-label" htmlFor={props.id}>
          {props.title}
        </label>
      )}
      <WithNormaliser>{React.cloneElement(props.children, fieldProps)}</WithNormaliser>
      {message && (
        <Alert type={messageType} size="sm">
          {message}
        </Alert>
      )}
    </div>
  );
};
// @TODO check if all props are correct
Field.propTypes = {
  children: Types.node.isRequired,
  errors: Types.node,
  help: Types.node,
  id: Types.string,
  model: Types.oneOfType([Types.string, Types.number]),
  onChange: Types.func.isRequired,
  submitted: Types.bool,
  title: Types.string,
  type: Types.oneOf(['text', 'number', 'checkbox', 'radio']).isRequired,
  validation: Types.shape({}),
};

Field.defaultProps = {
  errors: '',
  help: null,
  id: '',
  model: Types.oneOfType([Types.string, Types.number, Types.bool]),
  submitted: false,
  title: '',
  validation: {},
};

export default Field;
