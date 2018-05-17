import React from 'react';
import { mount } from 'enzyme';
import Star from '../Star';

const props = {
  rating: 1,
  totalStars: 5,
  updateRating() {},
};

describe('Star Annimation on mouseEnter and mouseLeave', () => {
  const wrapper = mount(<Star {...props} />);
  const id = 1;

  it('Star is entered', () => {
    wrapper.instance().setRating(id);
    wrapper.instance().forceUpdate();
    wrapper.update();
    expect(
      wrapper
        .find('div')
        .parent()
        .at(id)
        .debug(),
    ).toContain('val={1}');
  });

  it('Star is leave', () => {
    wrapper.instance().reset();
    wrapper.instance().forceUpdate();
    wrapper.update();
    expect(
      wrapper
        .find('div')
        .parent()
        .at(id)
        .debug(),
    ).toContain('val={0}');
  });
});
