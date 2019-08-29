import React from 'react'
import { shallow } from 'enzyme'

import InnerWrapper from '.'

import { InnerWrapperContainer } from './components'

describe('InnerWrapper', () => {
  const CONTENT = 'Custom Content'

  describe('Logic', () => {
    it('Should pass proper children property', () => {
      const wrapper = shallow(
        <InnerWrapper>
          {CONTENT}
        </InnerWrapper>
      )

      expect(wrapper.find(InnerWrapperContainer).text()).toEqual(CONTENT)
    })
  })
})
