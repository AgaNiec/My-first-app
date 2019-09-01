import React from 'react'
import { mount, shallow } from 'enzyme'
import 'jest-styled-components'

import SocialList from '.'

describe('SocialList', () => {
  const SOCIAL_LIST_CONTAINER = '[data-test="socialListContainer"]'
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

  describe('UI', () => {
    describe('MediaQueries', () => {
      describe('SocialListContainer', () => {
        it('Should render proper styles for (max-width: 991px) resolution ', () => {
          const wrapper = mount(
            <SocialList />
          )

          expect(wrapper.find(SOCIAL_LIST_CONTAINER)).toHaveStyleRule('justify-content', 'center', { media: '(max-width: 991px)' })
        })
      })
    })
  })
})
