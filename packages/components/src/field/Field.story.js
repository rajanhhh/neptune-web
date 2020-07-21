import React from 'react';
import Field from './Field';

import { text } from '@storybook/addon-knobs';

export default {
  component: Field,
  title: 'Field',
};

export const basic = () => {
  const title = text('title', 'title');

  return (
    <Field
      schema={{
        title,
        type: 'string',
        hidden: false,
        minLength: 3,
        maxLength: 10,
        validationMessages: {
          required: 'Number is required',
          minLength: 'Must be 3 or greater',
          maxLength: 'Must be less 10 or smaller',
        },
        help: 'help message',
      }}
      isHidden={false}
      id="id"
      model="initial value"
      onChange={(val) => console.log(val)}
      required
    >
      <input type="text" className="form-control" />
    </Field>
  );
};
