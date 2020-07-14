import React, { useState } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import ControlFeedback from './controlFeedback';

import { getValidationFailures } from '../common/validation/validation-failures';
import { getValidModelParts } from '../common/validation/valid-model';

const Field = (props) => {
  const [model, setModel] = useState(props.model);
  const [lastModel, setLastModel] = useState(props.model);
  const [changed, setChanged] = useState(false);
  const [focused, setFocused] = useState(false);
  const [blurred, setBlurred] = useState(false);
  const [validations, setValidations] = useState([]);

  const onChange = (newModel) => {
    const newValue = getValueFromEmitted(newModel);
    setChanged(true);
    setModelAndBroadcast(sanitiseModel(newValue));
  };

  /**
   * Temporary to be removed
   */
  const getValueFromEmitted = (event) => {
    let newValue;

    if (event && typeof event === 'object') {
      if (event.target) {
        // This is a SyntheticEvent coming from React
        // Input type number target value is a string and needs to be a number.
        if (props.schema.type === 'number') {
          newValue = parseFloat(event.target.value);
        } else {
          newValue = event.target.value;
        }
      } else if (event.value || event.value === 0) {
        // If we don't have a target but the emitted event
        // has a value it's coming from our Select or Radio
        // components
        newValue = event.value;
      } else {
        // In any other case we just emit the event as it is
        newValue = event;
      }
    } else {
      // This is coming from our Checkbox component which is
      // a boolean basically, so we must emit that value
      newValue = event;
    }
    return newValue;
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

  return (
    !props.isHidden && (
      <div className={classNames(formGroupClasses)}>
        {props.schema.title && (
          <label className="control-label" htmlFor={props.id}>
            {props.schema.title}
          </label>
        )}
        {React.cloneElement(props.children, fieldProps)}
        {/* <SchemaFormControl
       
          schema={props.schema}
          value={model}
     
        
        /> */}
        <ControlFeedback
          changed={changed}
          focused={focused}
          blurred={blurred}
          submitted={props.submitted}
          errors={props.errors}
          schema={props.schema}
          validations={validations}
        />
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
