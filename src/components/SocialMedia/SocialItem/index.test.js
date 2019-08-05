import React from 'react'
import { mount, shallow } from 'enzyme'
import 'jest-styled-components'

import SocialItem from '.'

describe('SocialItem', () => {
  const SOCIAL_ITEM_ICON = '[data-test="SocialItemIcon"]'
  const SOCIAL_ITEM_LINK = '[data-test="SocialItemLink"]'
  const SOCIAL_ITEM_SMALL = '[data-test="SocialItemSmall"]'
  const bgColor = 'red'
  const href = 'Custom Href'
  const icon = 'Custom Icon'
  const label = 'Custom Label'

  describe('Logic', () => {
    describe('Props', () => {
      test.each([
        ['bgColor', { bgColor: bgColor }, SOCIAL_ITEM_LINK, bgColor],
        ['href', { href: href }, SOCIAL_ITEM_LINK, href],
        ['icon', { icon: icon }, SOCIAL_ITEM_ICON, icon]
      ])(
        'Should pass proper %s property',
        (propName, props, selector, expected) => {
          const wrapper = shallow(
            <SocialItem {...props} />
          )

          expect(wrapper.find(selector).prop(propName)).toEqual(expected)
        })
    })

    it('Should pass proper label property', () => {
      const wrapper = shallow(
        <SocialItem label={label} />
      )

      expect(wrapper.find(SOCIAL_ITEM_SMALL).text()).toEqual(label)
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
