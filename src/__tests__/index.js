import React from 'react';
import { mount } from 'enzyme';
import StarRating from '../../StarRating';

const props = {
  id: '3',
  display_order: '2',
  title: 'Please rate your Experience with us',
  type: 'rating',
  choices: {
    '1': "It's ok!",
    '2': "It's ok!",
    '3': "It's ok!",
    '4': 'Loved It!',
    '5': 'Loved It!',
  },
  storeAnswers() {},
};

describe('Star Rating', () => {
  const id = 1; // star selected-- index starts from 0

  const wrapper = mount(<StarRating {...props} />);

  it('Should Exist', () => {
    expect(wrapper).toBeTruthy();
  });

  it('Should show question text', () => {
    expect(wrapper.text()).toContain('Please rate your Experience with us');
  });

  it('Should show star widget to rate', () => {
    expect(wrapper.find('Star').exists()).toBe(true);
  });

  describe('Should show Hunkydory Image', () => {
    it('Default Hunkydory image is shown', () => {
      expect(wrapper.find('#hunkydory').exists()).toBe(true);
    });

    it('should show hunkydory-1.svg when First Star is clicked ', () => {
      wrapper.instance().updateRating(id);
      wrapper.instance().forceUpdate();
      wrapper.update();
      expect(
        wrapper
          .find('#hunkydory')
          .parent()
          .debug(),
      ).toContain('hunkydory-1.svg');
    });
  });
});
