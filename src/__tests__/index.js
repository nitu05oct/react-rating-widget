import React from 'react';
import { mount } from 'enzyme';
import RatingWidget from '../index';

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

  const wrapper = mount(<RatingWidget {...props} />);

  it('Should Exist', () => {
    expect(wrapper).toBeTruthy();
  });

  
  it('Should show star widget to rate', () => {
    expect(wrapper.find('Icon').exists()).toBe(true);
  });

});
