import React from 'react'
import { mount, shallow } from 'enzyme'
import 'jest-styled-components'

import FooterMenu from '.'

describe('FooterMenu', () => {
  const FOOTER_MENU_CONTAINER = '[data-test="footerMenuContainer"]'
  const FOOTER_MENU_TITLE_H4 = '[data-test="footerMenuTitleH4"]'
  const MENU_LIST = '[data-test="menuList"]'
  const linksList = []
  const title = 'Custom Title'

  describe('Logic', () => {
    it('Should pass proper linksList property', () => {
      const wrapper = shallow(
        <FooterMenu linksList={linksList} />
      )

      expect(wrapper.find(MENU_LIST).prop('linksList')).toEqual(linksList)
    })

    it('Should pass proper title', () => {
      const wrapper = shallow(
        <FooterMenu title={title} />
      )

      expect(wrapper.find(FOOTER_MENU_TITLE_H4).text()).toEqual(title)
    })
  })

  describe('UI', () => {
    describe('MediaQueries', () => {
      describe('FooterMenuContainer', () => {
        test.each([
          ['(max-width: 991px)', 'margin', '0 0 30px'],
          ['(min-width: 568px) and (max-width: 767px)', 'padding', '0 30px 0 0'],
          ['(min-width: 568px) and (max-width: 767px)', 'width', '50%']
        ])(
          'Should render proper styles for %s resolution',
          (mediaQueries, property, propertyValue) => {
            const wrapper = mount(
              <FooterMenu />
            )

            expect(wrapper.find(FOOTER_MENU_CONTAINER)).toHaveStyleRule(property, propertyValue, { media: mediaQueries })
          })
      })
    })
  })
})
