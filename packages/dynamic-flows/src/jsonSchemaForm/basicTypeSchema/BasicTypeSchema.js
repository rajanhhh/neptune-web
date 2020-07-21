import React, { useState, useEffect } from 'react';
import Types from 'prop-types';

import SchemaFormControl from '../schemaFormControl';

import { Field } from '@transferwise/components';

import { getValidationFailures } from '../../common/validation/validation-failures';

const BasicTypeSchema = (props) => {
  const getValidationKeys = (newModel) =>
    getValidationFailures(newModel, props.schema, props.required);

  const setModelAndBroadcast = (newModel) => {
    setModel(newModel);
    const validationKeys = getValidationKeys(newModel);

    const broadcastModel = validationKeys.length ? null : newModel;

    setLastModel(broadcastModel);

    if (broadcastModel !== lastModel) {
      props.onChange(broadcastModel, props.schema);
    }
  };

  const generateId = () => String(Math.floor(100000000 * Math.random()));

  const [id, setId] = useState('');
  const [model, setModel] = useState(props.model);
  const [lastModel, setLastModel] = useState(props.model);

  const onSchemaChange = () => {
    // If no model, change to the default, only run this when the schema changes
    if (!model && props.schema.default) {
      setModelAndBroadcast(props.schema.default);
    }

    if (props.schema.const) {
      setModelAndBroadcast(props.schema.const);
    }

    if (props.schema.enum && props.schema.enum.length === 1) {
      setModelAndBroadcast(props.schema.enum[0]);
    }

    setId(generateId());
  };

  const isConst = props.schema.const || (props.schema.enum && props.schema.enum.length === 1);
  const isHidden = !!(props.schema.hidden || isConst);

  useEffect(onSchemaChange, [props.schema]);

  const showLabel = props.schema.format !== 'file' && props.schema.type !== 'boolean';

  return (
    <Field
      isHidden={isHidden}
      schema={{ title: showLabel && props.schema.title, help: props.schema.help }}
      id={id}
      errors={props.errors}
      submitted={props.submitted}
      onChange={() => {}}
    >
      <SchemaFormControl
        id={id}
        schema={props.schema}
        value={model}
        locale={props.locale}
        onChange={() => {}}
      />
    </Field>
  );
};

BasicTypeSchema.propTypes = {
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
  locale: Types.string,
};

BasicTypeSchema.defaultProps = {
  model: null,
  errors: null,
  translations: {},
  required: false,
  locale: 'en-GB',
};

export default BasicTypeSchema;
