() => {
  const [value, setValue] = React.useState('a value');
  return (
    <Field
      errors={null}
      help="help message"
      id="id"
      model={value}
      onChange={(val) => setValue(val)}
      submitted={false}
      title="title"
      type="text"
      validation={{
        maxLength: { value: 10, message: 'Must be less 10 or smaller' },
        minLength: { value: 3, message: 'Must be 3 or more' },
        required: { value: true, message: 'This field is required' },
      }}
    >
      <input type="text" className="form-control" />
    </Field>
  );
};
