import React from 'react';
import { shallow } from 'enzyme';

import SchemaFormControl from '.';

import FormControl from '../../formControl';

describe('Given a component for rendering a form control based on a schema', () => {
  let component;
  let props;
  let events;
  let sharedProps;

  let onChange;
  let onFocus;
  let onBlur;

  let schema;
  let value;

  let formControlComponent;

  const id = 'id';
  const locale = 'en-GB';
  const translations = {
    translationKey: 'example',
  };

  beforeEach(() => {
    onChange = jest.fn();
    onFocus = jest.fn();
    onBlur = jest.fn();
    events = { onChange, onFocus, onBlur };
    sharedProps = { id, locale, translations };
    schema = { type: 'string' };

    props = { ...events, ...sharedProps, value, schema };

    component = shallow(<SchemaFormControl {...props} />);
    formControlComponent = component.find(FormControl);
  });

  it('should render a FormControl', () => {
    expect(formControlComponent.length).toBe(1);
  });

  it('should pass the id to the FormControl', () => {
    expect(formControlComponent.prop('id')).toBe(id);
  });

  it('should pass the locale to the FormControl', () => {
    expect(formControlComponent.prop('locale')).toBe(locale);
  });

  it('should tell the FormControl to allow autoComplete', () => {
    expect(formControlComponent.prop('autoComplete')).toBe(true);
  });

  // TODO translations need to be broken out to separate props for FormControl
  // it('should pass the translations to the FormControl', () => {
  //   expect(formControlComponent.prop('translations')).toBe(translations);
  // });

  describe('when a string schema is supplied', () => {
    beforeEach(() => {
      component.setProps({ schema: { type: 'string' } });
    });

    it('should ask the FormControl for a text control', () => {
      expect(component.find(FormControl).prop('type')).toEqual('text');
    });
  });

  describe('when a string schema with date format is supplied', () => {
    beforeEach(() => {
      component.setProps({ schema: { type: 'string', format: 'date' } });
    });

    it('should ask the FormControl for a date control', () => {
      expect(component.find(FormControl).prop('type')).toEqual('date');
    });
  });

  describe('when a string schema with phone format is supplied', () => {
    beforeEach(() => {
      component.setProps({ schema: { type: 'string', format: 'phone' } });
    });

    it('should ask the FormControl for a telephone control', () => {
      expect(component.find(FormControl).prop('type')).toEqual('tel');
    });
  });

  describe('when a string schema with base64url format is supplied', () => {
    beforeEach(() => {
      component.setProps({ schema: { type: 'string', format: 'base64url' } });
    });

    it('should ask the FormControl for a file upload control', () => {
      expect(component.find(FormControl).prop('type')).toEqual('file');
    });
  });

  describe('when a number schema is supplied', () => {
    beforeEach(() => {
      component.setProps({ schema: { type: 'number' } });
    });

    it('should ask the FormControl for a number control', () => {
      expect(component.find(FormControl).prop('type')).toEqual('number');
    });
  });

  describe('when an integer schema is supplied', () => {
    beforeEach(() => {
      component.setProps({ schema: { type: 'integer' } });
    });

    it('should ask the FormControl for a number control', () => {
      expect(component.find(FormControl).prop('type')).toEqual('number');
    });
  });

  describe('when a boolean schema is supplied', () => {
    beforeEach(() => {
      component.setProps({ schema: { type: 'boolean' } });
    });

    it('should ask the FormControl for a checkbox control', () => {
      expect(component.find(FormControl).prop('type')).toEqual('checkbox');
    });
  });

  describe('when a schema with two values is supplied', () => {
    beforeEach(() => {
      component.setProps({
        schema: {
          values: [
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },
          ],
          enum: ['one', 'two'],
        },
      });
    });

    it('should ask the FormControl for a radio control', () => {
      expect(component.find(FormControl).prop('type')).toEqual('radio');
    });
  });

  describe('when a schema with three values is supplied', () => {
    beforeEach(() => {
      component.setProps({
        schema: {
          values: [
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },
            { value: 'three', label: 'Three' },
          ],
          enum: ['one', 'two', 'three'],
        },
      });
    });

    it('should ask the FormControl for a select control', () => {
      expect(component.find(FormControl).prop('type')).toEqual('select');
    });
  });

  describe('when a schema has a control value', () => {
    beforeEach(() => {
      component.setProps({
        schema: {
          control: 'select',
          values: [
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },
          ],
          enum: ['one', 'two'],
        },
      });
    });

    it('should override the default and ask for the specified control', () => {
      expect(component.find(FormControl).prop('type')).toEqual('select');
    });
  });

  describe('when the schema contains help information ', () => {
    beforeEach(() => {
      component.setProps({ schema: { type: 'string', help: { message: 'help!' } } });
    });

    it('should disable autoComplete', () => {
      expect(component.find(FormControl).prop('autoComplete')).toBe(false);
    });
  });

  describe('when a null value is passed in', () => {
    beforeEach(() => {
      component.setProps({ value: null });
    });

    it('should pass an empty string to the FormControl', () => {
      expect(component.find(FormControl).prop('value')).toEqual('');
    });
  });

  describe('when the FormControl triggers onChange', () => {
    let option;
    beforeEach(() => {
      option = { value: 'new', label: 'NEW!' };
      component.find(FormControl).simulate('change', 'new', option);
    });

    it('should trigger the components onChange handler', () => {
      expect(onChange).toHaveBeenCalledWith('new', option);
    });
  });

  describe('when the FormControl triggers onChange with an invalid value', () => {
    let option;
    beforeEach(() => {
      option = { value: 2, label: 'TWO!' };
      component.find(FormControl).simulate('change', 2, option);
    });

    it('should trigger the components onChange handler with null', () => {
      expect(onChange).toHaveBeenCalledWith(null, option);
    });
  });

  describe('when the FormControl trigger onFocus', () => {
    beforeEach(() => {
      component.find(FormControl).simulate('focus');
    });

    it('should trigger the components onChange handler', () => {
      expect(onFocus).toHaveBeenCalled();
    });
  });

  describe('when the FormControl trigger onBlur', () => {
    beforeEach(() => {
      component.find(FormControl).simulate('blur');
    });

    it('should trigger the components onBlur handler', () => {
      expect(onBlur).toHaveBeenCalled();
    });
  });
});
