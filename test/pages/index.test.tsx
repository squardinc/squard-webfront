import * as React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import IndexPage from 'src/pages'

describe('Sample', () => {
  test('say hello', () => {
    const wrapper = shallow(<IndexPage />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
