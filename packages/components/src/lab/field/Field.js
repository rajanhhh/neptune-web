import React, { useState, useEffect } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import Alert from '../../alert';
import { getValidationFailures } from './utils/getValidationFailures';
import WithNormaliser from '../../withNormaliser';

/**
 * Field component performs basic validations and provides a styled message to wrapped components.
 *
 * @param {boolean} [checked=false] - Initial value for the field type checkbox.
 * @param {boolean} [submitted=false] - Flag that indicates whether the field has been submitted or not.
 * @param {boolean} [type] - Type of component wrapped. This prop switches the type of validation perfomed.
 * @param {function} [onChange] - Handler for onChange event.
 * @param {object} [children] - Element that needs to be validated.
 * @param {object} [errors=null] - Translatable message for manual error messages. If specified it has priority over validation errors.
 * @param {object} [validation] - Object that contains the value to be validated against and the translatable message that will appear on validation failure.
 * @param {string|number} [model=null] - Initial value for the field type text or number.
 * @param {string} [id] - Field id. Required for accessibility in order to couple label and field with via htmlFor attribute.
 * @param {string} [label=''] - Label associated to field.
 *
 * @usage `<Field
 *          errors={'an error message'}
 *          help="Please fill this form with a value between 3 and 10"
 *          id="id"
 *          model={1}
 *          onChange={(val) => console.log(val)}
 *          submitted={false}
 *          label="Input type number"
 *          validation={{
 *           minimum: { value: 3, message: 'The value should bigger than 3' },
 *           maximum: { value: 10, message: 'The value should smaller than 10' },
 *           required: { value: true, message: 'This field is required' },
 *          }}
 *       >
 *         <input type="number" className="form-control" />
 *     </Field>`
 * */

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

  const [model, setModel] = useState(props.model);
  const [checked, setChecked] = useState(props.checked);
  const [changed, setChanged] = useState(false);
  const [focused, setFocused] = useState(false);
  const [blurred, setBlurred] = useState(false);
  const [validationFailures, setValidationFailures] = useState([]);
  const [validations] = useState(() => getValidations());

  const onChange = (newModel) => {
    setChanged(true);
    setModelAndBroadcast(newModel);
  };

  const onFocus = () => {
    setFocused(true);
    setBlurred(false);
  };

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
    if (props.type === 'boolean') {
      if (newModel === checked) {
        return;
      }
      setChecked(newModel);
    } else {
      if (newModel === model) {
        return;
      }
      setModel(newModel);
    }
    const newValidationFailures = getValidationFailures(
      newModel,
      props.type,
      validations.validationRules,
    );
    const isValid = newValidationFailures.length === 0;
    setValidationFailures(newValidationFailures);
    props.onChange(newModel, isValid);
  };

  const getMessage = () => {
    let messageType = 'error';
    let message = null;
    const formGroupClasses = ['form-group'];

    const isErrorVisible = !changed && props.errors;
    const isValidationVisible =
      (props.submitted || (changed && blurred)) && !!validationFailures.length;
    const isHelpVisible = focused && props.help && !isValidationVisible;

    if (isErrorVisible) {
      formGroupClasses.push('has-error');
      message = props.errors;
    } else if (isValidationVisible) {
      formGroupClasses.push('has-error');
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

  const childProps = {
    onChange,
    onBlur,
    onFocus,
    id: props.id,
  };

  if (props.type === 'boolean') {
    childProps.checked = checked;
  } else {
    childProps.value = model;
  }

  return (
    <div className={classNames(formGroupClasses)}>
      {props.label && (
        <label className="control-label" htmlFor={props.id}>
          {props.label}
        </label>
      )}
      <WithNormaliser>{React.cloneElement(props.children, childProps)}</WithNormaliser>
      {message && (
        <Alert type={messageType} size="sm">
          {message}
        </Alert>
      )}
    </div>
  );
};

Field.propTypes = {
  children: Types.node.isRequired,
  errors: Types.node,
  help: Types.node,
  id: Types.string.isRequired,
  model: Types.oneOfType([Types.string, Types.number]),
  checked: Types.bool,
  onChange: Types.func.isRequired,
  submitted: Types.bool,
  label: Types.string,
  type: Types.oneOf(['string', 'number', 'boolean']).isRequired,
  validation: Types.shape({
    value: Types.oneOfType([Types.bool, Types.number]),
    message: Types.node,
  }).isRequired,
};

Field.defaultProps = {
  errors: null,
  help: null,
  model: null,
  submitted: false,
  checked: false,
  label: '',
};

export default Field;
