import React, { useState } from 'react';
import Field from './Field';
import FormControl from '../formControl';
import { select, text } from '@storybook/addon-knobs';

export default {
  component: Field,
  title: 'Field',
};

export const basic = () => {
  const value = {
    text: 'a value',
    'date-lookup': new Date(),
    date: new Date(),
    'date-time': new Date(),
    tel: '+447573135343',
    number: 123456,
  };
  const control = select('control', Object.values(FormControl.Type));
  const [model, setModel] = useState(value[control] || '');

  const label = text('label', 'label');

  return (
    <Field
      value={model}
      errorMessage=""
      warningMessage=""
      label={label}
      name="text"
      field={{
        control,
        type: 'string',
        displayPattern: '',
        help: {
          message: '',
          image: '',
          list: [],
          do: ['good', 'much better'],
          dont: ['uhm not so good', 'erm no!'],
        },
        options: [
          { label: 'Mars', value: 'mars' },
          { label: 'Earth', value: 'earth' },
        ],
        label: 'a label',
        required: false,
        disabled: false,
        hidden: false,
        readOnly: false,
        autoComplete: false,
        placeholder: 'a placeholder',
        searchPlaceholder: 'search',
        minLength: 3,
        maxLength: 10,
        validationMessages: {
          required: 'Number is required',
          minLength: 'Must be 10 or greater',
          maxLength: 'Must be 99 or less',
        },
      }}
      onChange={(val) => setModel(val)}
    />
  );
};
