import React from 'react';
import { shallow, mount } from 'enzyme';

import BasicTypeSchema from './';

import SchemaFormControl from '../schemaFormControl';
import ControlFeedback from '../controlFeedback';

describe('Given a component for rendering basic type schemas', () => {
  let component;
  let props;
  let onChange;
  let formControl;
  let feedbackComponent;

  const schema = {
    type: 'string',
    minLength: 2,
    title: 'Complete all sections',
    default: 'bar',
  };

  let model;
  const errors = 'error';
  const required = true;
  const submitted = false;

  const translations = {
    translationKey: 'example',
  };

  beforeEach(() => {
    onChange = jest.fn();
  });

  describe('when initialised with a model', () => {
    beforeEach(() => {
      model = 'foo';

      props = { schema, model, errors, required, onChange, submitted, translations };
      component = shallow(<BasicTypeSchema {...props} />);

      formControl = component.find(SchemaFormControl);
      feedbackComponent = component.find(ControlFeedback);
    });

    it('should display one SchemaFormControl', () => {
      expect(formControl).toHaveLength(1);
    });

    it('should pass the model to the value of the SchemaFormControl', () => {
      expect(formControl.prop('value')).toEqual(model);
    });

    it('should pass the errors to the ControlFeedback', () => {
      expect(feedbackComponent.prop('errors')).toEqual(errors);
    });

    it('should initially tell the ControlFeedback it is unchanged', () => {
      expect(feedbackComponent.prop('changed')).toBe(false);
    });

    it('should initially tell the ControlFeedback it is unblurred', () => {
      expect(feedbackComponent.prop('blurred')).toBe(false);
    });

    it('should pass the schema to ControlFeedback', () => {
      expect(feedbackComponent.prop('schema')).toBe(schema);
    });

    describe('when control is focused', () => {
      beforeEach(() => {
        formControl.simulate('focus');
        feedbackComponent = component.find(ControlFeedback);
      });

      it('should tell the ControlFeedback it has focus', () => {
        expect(feedbackComponent.prop('focused')).toEqual(true);
      });

      it('should not tell the ControlFeedback it has been blurred', () => {
        expect(feedbackComponent.prop('blurred')).toEqual(false);
      });

      describe('and then blurred', () => {
        beforeEach(() => {
          formControl.simulate('blur');
          feedbackComponent = component.find(ControlFeedback);
        });

        it('should tell the ControlFeedback it has been blurred', () => {
          expect(feedbackComponent.prop('blurred')).toEqual(true);
        });

        it('should not tell the ControlFeedback it has focus', () => {
          expect(feedbackComponent.prop('focused')).toEqual(false);
        });
      });
    });

    describe('when control triggers onChange with a valid value', () => {
      let option;
      beforeEach(() => {
        option = { value: 'barbar', label: 'BARBAR' };
        formControl.simulate('change', 'barbar', option);
        feedbackComponent = component.find(ControlFeedback);
      });

      it('should trigger the components onChange with the new value', () => {
        expect(onChange).toHaveBeenCalledWith('barbar', schema, option);
      });

      it('should tell the ControlFeedback it has been changed', () => {
        expect(feedbackComponent.prop('changed')).toEqual(true);
      });
    });

    describe('when control triggers onChange with an invalid value', () => {
      let option;
      beforeEach(() => {
        option = { value: 'f', label: 'F' };
        formControl.simulate('change', 'f', option);
        feedbackComponent = component.find(ControlFeedback);
        formControl = component.find(SchemaFormControl);
      });

      it('should trigger the components onChange with null', () => {
        expect(onChange).toHaveBeenCalledWith(null, schema, option);
      });

      it('should pass the correct validation to ControlFeedback component', () => {
        expect(feedbackComponent.prop('validations')).toEqual(['minLength']);
      });

      it('should not reset the form control to the default', () => {
        expect(formControl.prop('value')).not.toEqual(schema.default);
      });

      it('should pass the new value to the form control', () => {
        expect(formControl.prop('value')).toBe('f');
      });
    });

    describe('when control changes to a value that resolves to false', () => {
      beforeEach(() => {
        formControl.simulate('change', '', { value: 'f', label: 'F' });
        feedbackComponent = component.find(ControlFeedback);
        formControl = component.find(SchemaFormControl);
      });

      it('should not reset the form control to the default', () => {
        expect(formControl.prop('value')).not.toEqual(schema.default);
      });

      it('should pass empty value to the form control', () => {
        expect(formControl.prop('value')).toBe('');
      });
    });
  });

  describe('when initialised without a model and there is a default', () => {
    beforeEach(() => {
      model = null;
      props = { schema, model, errors, required, onChange, submitted, translations };
      // useEffect is not currently called when using shallow
      // https://github.com/airbnb/enzyme/issues/2086
      component = mount(<BasicTypeSchema {...props} />);
    });

    it('should call the onChange handler with the default ', () => {
      expect(onChange).toHaveBeenCalledWith(schema.default, schema, undefined);
    });
  });
});
