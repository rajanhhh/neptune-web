import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Field from './';
// import Checkbox from '../../checkbox';

let props;
describe('Field', () => {
  beforeEach(() => {
    props = {
      errors: null,
      help: 'help message',
      id: 'id',
      model: 'initial value',
      onChange: jest.fn(),
      submitted: null,
      type: 'text',
      validation: {
        maxLength: { value: 10, message: 'Must be less 10 or smaller' },
        minLength: { value: 3, message: 'Must be 3 or more' },
        required: { value: true, message: 'This field is required' },
      },
      title: 'title',
    };
  });
  afterEach(() => {
    cleanup();
  });
  it('renders title', () => {
    render(
      <Field {...props}>
        <input type="text" />
      </Field>,
    );
    expect(screen.getByText(props.title)).toBeTruthy();
  });

  it('renders children', () => {
    render(
      <Field {...props}>
        <input type="text" />
      </Field>,
    );

    expect(screen.getByLabelText(props.title)).toBeTruthy();
  });

  describe('when manual errors are provided', () => {
    it('renders error alert', () => {
      const errorMessage = 'an error message';
      render(
        <Field {...props} errors={errorMessage}>
          <input type="text" />
        </Field>,
      );
      const alert = screen.getByText(errorMessage);

      expect(alert).toBeTruthy();
      expect(alert.className).toContain('alert-danger');
    });

    it('manual errors have priority over validation errors', () => {
      const errorMessage = 'an error message';
      render(
        <Field {...props} errors={errorMessage}>
          <input type="text" />
        </Field>,
      );
      const alert = screen.getByText(errorMessage);
      triggerValidationError();

      expect(alert).toBeTruthy();
      expect(alert.className).toContain('alert-danger');
    });

    it('manual errors have priority over help and validation messages', () => {
      const errorMessage = 'an error message';
      const helpMessage = 'an help message';
      render(
        <Field {...props} errors={errorMessage} help={helpMessage}>
          <input type="text" />
        </Field>,
      );
      userEvent.click(screen.getByLabelText(props.title));

      expect(() => screen.getByText(helpMessage)).toThrow('Unable to find an element');
      const alert = screen.getByText(errorMessage);

      triggerValidationError();

      expect(alert).toBeTruthy();
      expect(alert.className).toContain('alert-danger');
    });

    it('switches to info alert when user types', () => {
      const errorMessage = 'an error message';
      const helpMessage = 'an help message';
      render(
        <Field {...props} errors={errorMessage} help={helpMessage} model="">
          <input type="text" />
        </Field>,
      );

      expect(() => screen.getByText(helpMessage)).toThrow('Unable to find an element');
      let alert = screen.getByText(errorMessage);

      expect(alert).toBeTruthy();
      expect(alert.className).toContain('alert-danger');
      const input = screen.getByLabelText(props.title);
      input.focus();
      userEvent.type(input, 'a');

      expect(() => screen.getByText(errorMessage)).toThrow('Unable to find an element');
      alert = screen.getByText(helpMessage);

      expect(alert).toBeTruthy();
      expect(alert.className).toContain('alert-info');
    });
  });

  describe('when errors are not provided', () => {
    it('when help is provided renders info alert', () => {
      const helpMessage = 'an help message';
      render(
        <Field {...props} help={helpMessage}>
          <input type="text" />
        </Field>,
      );
      screen.getByLabelText(props.title).focus();
      const alert = screen.getByText(helpMessage);

      expect(alert).toBeTruthy();
      expect(alert.className).toContain('alert-info');
    });

    it('when user types wrong value renders validation alert', () => {
      render(
        <Field {...props}>
          <input type="text" />
        </Field>,
      );
      triggerValidationError();
      const alert = screen.getByText(props.validation.minLength.message).parentElement;

      expect(alert).toBeTruthy();
      expect(alert.className).toContain('alert-danger');
    });

    it('show validation if field has wrong value and submitted', () => {
      render(
        <Field {...props} model="a" submitted>
          <input type="text" />
        </Field>,
      );
      const alert = screen.getByText(props.validation.minLength.message).parentElement;

      expect(alert).toBeTruthy();
      expect(alert.className).toContain('alert-danger');
    });
  });

  it('attaches form-group class by default', () => {
    render(
      <Field {...props} model="a">
        <input type="text" />
      </Field>,
    );

    expect(screen.getByText(props.title).parentElement.className).toContain('form-group');
  });

  it('attaches has-error class when errrors are provided', () => {
    render(
      <Field {...props} model="a" errors="an error">
        <input type="text" />
      </Field>,
    );

    expect(screen.getByText(props.title).parentElement.className).toContain('has-error');
  });

  it('returns a wrapper with correct classes', () => {
    const { rerender } = render(
      <Field {...props} model="a">
        <input type="text" />
      </Field>,
    );

    expect(screen.getByText(props.title).parentElement.className).toContain('form-group');

    rerender(
      <Field {...props} model="a" errors="an error">
        <input type="text" />
      </Field>,
    );

    expect(screen.getByText(props.title).parentElement.className).toContain('has-error');
  });

  it('attaches info class when help is provided and input is focused', () => {
    render(
      <Field {...props} model="a" help="a message">
        <input type="text" />
      </Field>,
    );
    const input = screen.getByLabelText(props.title);
    input.focus();
    expect(input.parentElement.className).toContain('has-info');
  });

  it('attaches error class when validation has been triggered', () => {
    render(
      <Field {...props} model="a" help="a message">
        <input type="text" />
      </Field>,
    );
    triggerValidationError();

    expect(screen.getByText(props.title).parentElement.className).toContain('has-error');
  });

  it('attaches error class when submit is true and value is wrong', () => {
    render(
      <Field {...props} model="a" submit="a message">
        <input type="text" />
      </Field>,
    );
    triggerValidationError();

    expect(screen.getByText(props.title).parentElement.className).toContain('has-error');
  });

  it('broadcast model onChange', () => {
    render(
      <Field {...props} model="">
        <input type="text" />
      </Field>,
    );
    const input = screen.getByLabelText(props.title);
    userEvent.type(input, 'aaa');

    expect(props.onChange).toHaveBeenNthCalledWith(1, 'a', false);
    expect(props.onChange).toHaveBeenNthCalledWith(2, 'aa', false);
    expect(props.onChange).toHaveBeenNthCalledWith(3, 'aaa', true);
  });
  // Checkbox needs to be revisited.
  // it('broadcast model onChange for type checkbox', () => {
  //   const { container } = render(
  //     <Field {...props} type="checkbox" checked={false}>
  //       <Checkbox label="label" onChange={jest.fn()} />
  //     </Field>,
  //   );
  //   userEvent.click(container.querySelector('button'));
  //   expect(props.onChange).toHaveBeenCalledWith(false);
  // });
});

const triggerValidationError = () => {
  const input = screen.getByLabelText(props.title);
  userEvent.clear(input);
  userEvent.type(input, 'a');
  input.blur();
};
