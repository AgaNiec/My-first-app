import React from 'react'
import { shallow } from 'enzyme'

import SocialList from '.'

describe('SocialList', () => {
  const SOCIAL_LIST_SOCIAL_ITEM = '[data-test="socialListSocialItem"]'
  const itemsList = [
    {
      bgColor: 'Custom BgColor',
      href: 'Custom Href',
      icon: jest.fn()
    }
  ]

  describe('Logic', () => {
    it('Should render default component', () => {
      const wrapper = shallow(
        <SocialList />
      )

      expect(wrapper.find(SOCIAL_LIST_SOCIAL_ITEM).exists()).toBeFalsy()
    })

    describe('Props', () => {
      test.each([
        ['bgColor', itemsList[0].bgColor],
        ['href', itemsList[0].href],
        ['icon', itemsList[0].icon]
      ])(
        'Should pass proper itemsList property',
        (prop, expected) => {
          const wrapper = shallow(
            <SocialList itemsList={itemsList} />
          )

          expect(wrapper.find(SOCIAL_LIST_SOCIAL_ITEM).prop(prop)).toEqual(expected)
        })
    })
  })
})
