import React from 'react';
import { shallow } from 'enzyme';

import JobCriteria from './JobCriteria';

describe('Components', () => {
  describe('Form', () => {
    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<JobCriteria />);

      expect(wrapper).toMatchSnapshot();
    });

    it('should render the Form is form is not saved', () => {
      const wrapper = shallow(<JobCriteria />);

      expect(wrapper.find('Form')).toHaveLength(1);
    });

    it('should render the Summary component when successfully submitting the form', () => {
      const wrapper = shallow(<JobCriteria />);
      wrapper.instance().handleSubmitSuccess();

      expect(wrapper.find('Summary')).toHaveLength(1);
    });

    it('should render the Form again if user wants to edit it', () => {
      const wrapper = shallow(<JobCriteria />);
      wrapper.instance().handleSubmitSuccess();
      expect(wrapper.find('Summary')).toHaveLength(1);

      wrapper.instance().handleEdit();
      expect(wrapper.find('Form')).toHaveLength(1);
    });

    it('should save the user input on state (experience)', () => {
      const wrapper = shallow(<JobCriteria />);
      const event = {
        target: {
          type: 'number',
          value: '4',
          name: 'experience',
        },
      };

      wrapper.instance().handleInputChange(event);

      expect(wrapper.state().experience).toBe('4');
    });

    it('should save the user input on state (educations)', () => {
      const wrapper = shallow(<JobCriteria />);
      const event = {
        target: {
          type: 'checkbox',
          checked: true,
          name: 'bachelor',
        },
      };
      wrapper.instance().handleInputChange(event);
      expect(wrapper.state().educations).toEqual(['bachelor']);

      const newEvent = {
        ...event,
        target: {
          ...event.target,
          checked: false,
        },
      };

      wrapper.instance().handleInputChange(newEvent);
      expect(wrapper.state().educations).toEqual([]);
    });

    it('should save the user input on state (hours)', () => {
      const wrapper = shallow(<JobCriteria />);
      const event = {
        target: {
          type: 'number',
          value: '3',
          name: 'max',
        },
      };

      wrapper.instance().handleInputChange(event);

      expect(wrapper.state().hours).toEqual({
        min: '',
        max: '3',
      });
    });
  });
});
