import React from 'react';
import Field from './Field';
import { Checkbox } from '@transferwise/components';
import { action } from '@storybook/addon-actions';

export default {
  component: Field,
  title: 'Field',
};

export const basic = () => {
  return (
    <>
      <Field
        errors={null}
        help="help message"
        id="id"
        model="a"
        onChange={(val) => action(val)}
        submitted={false}
        title="Input text"
        type="text"
        validation={{
          maxLength: { value: 10, message: 'String should be shorter than 10 characters' },
          minLength: { value: 3, message: 'String should be longer than 3 characters' },
          required: { value: true, message: 'This field is required' },
        }}
      >
        <input type="text" className="form-control" />
      </Field>
      <Field
        errors={null}
        help="help message"
        id="id1"
        model="a"
        onChange={(val) => action(val)}
        submitted={false}
        title="Input number"
        type="number"
        validation={{
          minimum: { value: 3, message: 'Value must be bigger than 3' },
          maximum: { value: 10, message: 'Value must be smaller than 10' },
          required: { value: true, message: 'This field is required' },
        }}
      >
        <input type="number" className="form-control" />
      </Field>
      <Field
        errors={null}
        help="help message"
        id="id2"
        model
        onChange={(val) => action(val)}
        submitted={false}
        title="Input checkbox"
        type="checkbox"
        validation={{
          required: { value: true, message: 'This field is required' },
        }}
      >
        <Checkbox label="label" onChange={(val) => action(val)} checked={false} />
      </Field>
    </>
  );
};
