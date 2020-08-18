import React from 'react';
import Field from './Field';
import { Checkbox, Radio } from '@transferwise/components';

import { text } from '@storybook/addon-knobs';

export default {
  component: Field,
  title: 'Field',
};

export const basic = () => {
  const title = text('title', 'title');

  return (
    <>
      <Field
        errors={null}
        help="help message"
        id="id"
        model="a"
        onChange={(val) => console.log(val)}
        submitted={false}
        title={title}
        type="text"
        validation={{
          maxLength: { value: 10, message: 'Must be less 10 or smaller' },
          minLength: { value: 3, message: 'Must be 3 or more' },
          required: { value: true, message: 'This field is required' },
        }}
      >
        <input type="text" className="form-control" />
      </Field>
      <Field
        errors={null}
        help="help message"
        id="id1"
        model
        onChange={(val) => console.log(val)}
        submitted={false}
        title={title}
        type="checkbox"
        validation={{
          required: { value: true, message: 'This field is required' },
        }}
      >
        <Checkbox label="label" onChange={(val) => console.log(val)} checked={false} />
      </Field>
      <Field
        errors={null}
        help="help message"
        id="id2"
        model="a value"
        checked={false}
        onChange={(val) => console.log(val)}
        submitted={false}
        title={title}
        type="radio"
        validation={{
          required: { value: true, message: 'This field is required' },
        }}
      >
        <Radio label="label" name="name" onChange={(val) => console.log('val', val)} />
      </Field>
    </>
  );
};
