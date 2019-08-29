import React from 'react'
import { mount, shallow } from 'enzyme'
import 'jest-styled-components'

import SocialItem from '.'

describe('SocialItem', () => {
  const SOCIAL_ITEM_ICON = '[data-test="socialItemIcon"]'
  const SOCIAL_ITEM_LINK = '[data-test="SocialItemLink"]'
  const bgColor = 'red'
  const href = 'Custom Href'
  const icon = jest.fn()

  describe('Logic', () => {
    it('Shlound render default component', () => {
      const wrapper = shallow(
        <SocialItem />
      )

      expect(wrapper.find(SOCIAL_ITEM_ICON).exists()).toBeFalsy()
    })

    describe('Props', () => {
      test.each([
        ['bgColor', { bgColor }, SOCIAL_ITEM_LINK, bgColor],
        ['href', { href }, SOCIAL_ITEM_LINK, href]
      ])(
        'Should pass proper %s property',
        (propName, props, selector, expected) => {
          const wrapper = shallow(
            <SocialItem {...props} />
          )

          expect(wrapper.find(selector).prop(propName)).toEqual(expected)
        })

      it('Should pass proper icon property', () => {
        const wrapper = shallow(
          <SocialItem icon={icon} />
        )

        expect(wrapper.find(SOCIAL_ITEM_ICON).type()).toEqual(icon)
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
