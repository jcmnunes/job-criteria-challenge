import React from 'react';
import { shallow } from 'enzyme';

import Form from './Form';
import fixture from './Form.fixture';
import { ERRORS } from '../../../shared/constants';

describe('Components', () => {
  const props = {
    ...fixture,
    handleSubmitSuccess: jest.fn(),
    onChange: jest.fn(),
  };

  const formValidProps = {
    ...props,
    formState: {
      ...props.formState,
      experience: '5',
      educations: ['bachelor'],
      hours: {
        min: '1',
        max: '2',
      },
    },
  };

  jest.useFakeTimers();

  describe('Form', () => {
    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<Form {...props} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should not submit the form if it is not valid', () => {
      const wrapper = shallow(<Form {...props} />);

      wrapper.find('form').simulate('submit', {
        preventDefault: () => {},
      });
      expect(props.handleSubmitSuccess).not.toHaveBeenCalled();
    });

    it('should submit the form if the form is valid', () => {
      const newProps = {
        ...props,
        formState: {
          ...props.formState,
          experience: '5',
          educations: ['bachelor'],
          hours: {
            min: '1',
            max: '2',
          },
        },
      };
      const wrapper = shallow(<Form {...newProps} />);

      wrapper.find('form').simulate('submit', {
        preventDefault: () => {},
      });
      jest.runAllTimers();

      expect(props.handleSubmitSuccess).toHaveBeenCalled();
    });

    it('should set the error message', () => {
      const wrapper = shallow(<Form {...props} />);
      wrapper.find('form').simulate('submit', {
        preventDefault: () => {},
      });

      expect(wrapper.state().experienceError).toBe('The field is required.');
      expect(wrapper.state().educationsError).toBe('The field is required.');
      expect(wrapper.state().hoursMinError).toBe('The field is required.');
    });

    it('should set the error message (hours errors)', () => {
      const newProps = {
        ...props,
        formState: {
          ...props.formState,
          experience: '',
          educations: [],
          hours: {
            min: '10',
            max: '5',
          },
        },
      };
      const wrapper = shallow(<Form {...newProps} />);
      wrapper.find('form').simulate('submit', {
        preventDefault: () => {},
      });

      expect(wrapper.state().hoursMinError).toBe(`Minimum value must be less than ${5}`);
    });

    it('should check that form is invalid (isValid method)', () => {
      const wrapper = shallow(<Form {...props} />);
      const result = wrapper.instance().isFormValid();

      expect(result).toBeFalsy();
    });

    it('should check that form is valid (isValid method)', () => {
      const wrapper = shallow(<Form {...formValidProps} />);
      const result = wrapper.instance().isFormValid();

      expect(result).toBeTruthy();
    });

    it('should reset errors on input change', () => {
      const wrapper = shallow(<Form {...props} />);
      wrapper.find('form').simulate('submit', {
        preventDefault: () => {},
      });

      expect(wrapper.state()).not.toEqual({ ...ERRORS, isSubmitting: false });
      wrapper.instance().handleOnChange();
      expect(wrapper.state()).toEqual({ ...ERRORS, isSubmitting: false });
    });
  });
});
