import React from 'react'
import { mount } from 'enzyme'
import Rating from '../Rating'

const props = {
  rating: 1,
  text: "it's ok!"
}

describe('Rating reaction', () => {
  const wrapper = mount(<Rating {...props} />)

  it('should show Rating reaction', () => {
    expect(wrapper.text()).toContain("it's ok!")
  })
})
