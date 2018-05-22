import React from 'react';
import { mount } from 'enzyme';
import Icon from '../Icon';

const props = {
  rating: 1,
  iconCount: 5,
  updateRating() {},
};

describe('Icon Annimation on mouseEnter and mouseLeave', () => {
  const wrapper = mount(<Icon {...props} />);
  const id = 1;

  it('Icon - Focus In', () => {
    wrapper.instance().setRating(id);
    wrapper.instance().forceUpdate();
    wrapper.update();

    expect(
      wrapper
        .find('div[onClick]').at(id)
        .debug(),
    ).toContain('val={1}');
  });

  it('Icon - Focus Out', () => {
    wrapper.instance().reset();
    wrapper.instance().forceUpdate();
    wrapper.update();

    expect(
      wrapper
        .find('div[onClick]').at(id)
        .debug(),
    ).toContain('val={0}');
  });
});
