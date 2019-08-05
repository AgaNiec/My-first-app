import React from 'react'
import { shallow } from 'enzyme'

import InnerWrapper from '.'

import { InnerWrapperContainer } from './components'

describe('InnerWrapper', () => {
  const customChildren = 'Custom Children'

  describe('Logic', () => {
    it('Should pass proper children property', () => {
      const wrapper = shallow(
        <InnerWrapper children={customChildren} />
      )

      expect(wrapper.find(InnerWrapperContainer).text()).toEqual(customChildren)
    })
  })
})
