import React from 'react'
import { mount, shallow } from 'enzyme'
import 'jest-styled-components'

import SocialItem from '.'

describe('SocialItem', () => {
  const Icon = () => null
  const SOCIAL_ITEM_ICON = '[data-test="SocialItemIcon"]'
  const SOCIAL_ITEM_LINK = '[data-test="SocialItemLink"]'
  const bgColor = 'red'
  const href = 'Custom Href'

  describe('Logic', () => {
    describe('Props', () => {
      test.each([
        ['Icon', { Icon: Icon }, SOCIAL_ITEM_ICON, Icon],
        ['bgColor', { bgColor: bgColor }, SOCIAL_ITEM_LINK, bgColor],
        ['href', { href: href }, SOCIAL_ITEM_LINK, href]
      ])(
        'Should pass proper %s property',
        (propName, props, selector, expected) => {
          const wrapper = shallow(
            <SocialItem {...props} />
          )

          expect(wrapper.find(selector).prop(propName)).toEqual(expected)
        })
    })
  })

  describe('UI', () => {
    it('Should render proper bgColor property', () => {
      const wrapper = mount(
        <SocialItem bgColor={bgColor} />
      )

      expect(wrapper.find(SOCIAL_ITEM_LINK)).toHaveStyleRule('background-color', bgColor)
    })
  })
})
