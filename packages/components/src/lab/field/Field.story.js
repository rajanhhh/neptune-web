import React from 'react';
import Field from './Field';
import { Checkbox, DateInput } from '@transferwise/components';
import { action } from '@storybook/addon-actions';

export default {
  component: Field,
  label: 'Field',
};

export const basic = () => {
  return (
    <>
      <Field
        errors={null}
        help="Please fill this form with a value length between 3 and 10"
        id="id"
        model="Neptune is cool"
        onChange={(val) => action(val)}
        submitted={false}
        label="Input type text"
        type="text"
        validation={{
          maxLength: { value: 10, message: 'The value should be shorter than 10 characters' },
          minLength: { value: 3, message: 'The value should be longer than 3 characters' },
          required: { value: true, message: 'This field is required' },
        }}
      >
        <input type="text" className="form-control" />
      </Field>
      <Field
        errors={null}
        help="Please fill this form with a value between 3 and 10"
        id="id"
        model={null}
        onChange={(val) => action(val)}
        submitted={false}
        label="Input type number"
        validation={{
          minimum: { value: 3, message: 'The value should bigger than 3' },
          maximum: { value: 10, message: 'The value should smaller than 10' },
          required: { value: true, message: 'This field is required' },
        }}
      >
        <input type="number" className="form-control" />
      </Field>

      <Field
        errors={null}
        help="Please insert a date."
        id="id"
        label="Date Input field"
        model={null}
        onChange={(val) => action(val)}
        submitted={false}
        type="checkbox"
        validation={{
          required: { value: true, message: 'This field is required' },
        }}
      >
        <DateInput
          onChange={(val) => action(val)}
          size={DateInput.Size.MEDIUM}
          value={new Date()}
          placeholders={{
            day: 'dd',
            month: 'mm',
            year: 'YYYY',
          }}
        />
      </Field>
      <Field
        errors={null}
        help="Please check to accept the Neptune Web conditions."
        id="id"
        model={null}
        onChange={(val) => action(val)}
        submitted={false}
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
