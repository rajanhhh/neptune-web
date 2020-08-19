import React from 'react';
import Field from './Field';
import { Checkbox, Select, DateInput, PhoneNumberInput } from '@transferwise/components';
import { action } from '@storybook/addon-actions';

export default {
  component: Field,
  title: 'Field',
};

export const basic = () => {
  const options = [
    { header: 'Basic' },
    { value: null, label: '' },
    { value: 0, label: 'A thing', note: 'with a note' },
    { value: 1, label: 'Another thing', secondary: 'with secondary text this time' },
    { value: 2, label: 'A disabled thing', disabled: true },
  ];
  const [selected, setSelected] = React.useState(options[1]);

  const handleSelected = (val) => {
    setSelected(options.filter((option) => option.value === val)[0]);
  };

  return (
    <>
      <Field
        errors={null}
        help="Please fill this form with a value length between 3 and 10"
        id="id"
        model="Neptune is cool"
        onChange={(val) => action(val)}
        submitted={false}
        title="Input type text"
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
        title="Input type number"
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
        title="Date Input field"
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
        help="Please insert a phone number."
        id="id"
        title="Phone Number Input field"
        model={null}
        onChange={(val) => action(val)}
        submitted={false}
        type="checkbox"
        validation={{
          required: { value: true, message: 'This field is required' },
        }}
      >
        <PhoneNumberInput
          onChange={(v) => action(v)}
          initialValue={null}
          locale="en-GB"
          countryCode=""
          disabled={false}
          required={false}
          size="md"
          searchPlaceholder="searchPlaceholder"
          placeholder="placeholder"
        />
      </Field>
      <Field
        errors={null}
        help="Please select an option."
        id="id"
        title="Select Input field"
        model={selected}
        onChange={(val) => handleSelected(val)}
        submitted={false}
        type="select"
        validation={{
          required: { value: true, message: 'This field is required' },
        }}
      >
        <Select
          size="md"
          placeholder="Placeholder"
          dropdownRight="xs"
          dropdownWidth="lg"
          inverse={false}
          block
          disabled={false}
          required={false}
          searchPlaceholder="Search placeholder"
          dropdownUp={false}
          search
          options={options}
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
