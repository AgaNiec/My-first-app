import React from 'react'
import { mount, shallow } from 'enzyme'
import 'jest-styled-components'

import InnerWrapper from '.'

import { InnerWrapperContainer } from './components'

describe('InnerWrapper', () => {
  const CONTENT = 'Custom Content'
  const INNER_WRAPPER_CONTAINER = '[data-test="innerWrapperContainer"]'

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

  describe('UI', () => {
    describe('MediaQueries', () => {
      describe('InnerWrapperContainer', () => {
        test.each([
          ['(min-width: 992px)', 'margin', '0 auto'],
          ['(min-width: 992px)', 'max-width', '1500px'],
          ['(min-width: 992px)', 'padding', '0 50px'],
          ['(min-width: 576px) and (max-width: 991px)', 'padding', '0 40px'],
          ['(max-width: 575px)', 'padding', '0 20px']
        ])(
          'Should render proper styles for %s resolution',
          (mediaQueries, property, propertyValue) => {
            const wrapper = mount(
              <InnerWrapper />
            )

            expect(wrapper.find(INNER_WRAPPER_CONTAINER)).toHaveStyleRule(property, propertyValue, { media: mediaQueries })
          })
      })
    })
  })
})
