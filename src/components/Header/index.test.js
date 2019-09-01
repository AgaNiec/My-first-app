import React from 'react'
import { mount, shallow } from 'enzyme'
import 'jest-styled-components'

import Header from '.'

describe('Header', () => {
  const HEADER_BUTTON = '[data-test="headerButton"]'
  const HEADER_LINK = '[data-test="headerLink"]'
  const HEADER_LINK_H4 = '[data-test="headerLinkH4"]'
  const HEADER_LOGO = '[data-test="headerLogo"]'
  const HEADER_LOGO_LINK = '[data-test="headerLogoLink"]'
  const HEADER_MENU_LIST = '[data-test="headerMenuList"]'
  const MENU_LIST = '[data-test="menuList"]'
  const buttonId = 0
  const buttonLabel = 'Custom Button Label'
  const buttonOnClickSpy = jest.fn()
  const linkHref = 'Custom Link Href'
  const linkLabel = 'Custom Link Label'
  const linksList = []
  const logo = 'Custom Logo'
  const defaultProps = {
    buttonId: buttonId
  }

  describe('Logic', () => {
    it('Should pass proper linkLabel property', () => {
      const wrapper = shallow(
        <Header
          {...defaultProps}
          linkLabel={linkLabel} />
      )

      expect(wrapper.find(HEADER_LINK_H4).text()).toEqual(linkLabel)
    })

    describe('Props', () => {
      test.each([
        ['buttonId', 'id', { buttonId }, HEADER_BUTTON, buttonId],
        ['buttonLabel', 'label', { buttonLabel }, HEADER_BUTTON, buttonLabel],
        ['buttonOnClick', 'onClick', { buttonOnClick: buttonOnClickSpy }, HEADER_BUTTON, buttonOnClickSpy],
        ['linkHref', 'href', { linkHref }, HEADER_LINK, linkHref],
        ['linksList', 'linksList', { linksList }, MENU_LIST, linksList],
        ['src', 'src', { logo }, HEADER_LOGO, logo]
      ])(
        'Should pass proper %s property',
        (_, propName, props, selector, expected) => {
          const wrapper = shallow(
            <Header
              {...defaultProps}
              {...props}
            />
          )

          expect(wrapper.find(selector).prop(propName)).toEqual(expected)
        })
    })
  })

  describe('UI', () => {
    describe('MediaQueries', () => {
      describe('HeaderLogoLink', () => {
        test.each([
          ['(min-width: 768px)', 'max-width', '150px'],
          ['(min-width: 576px) and (max-width: 767px)', 'max-width', '140px'],
          ['(min-width: 480px) and (max-width: 575px)', 'max-width', '130px'],
          ['(max-width: 479px)', 'max-width', '120px']
        ])(
          'Should render proper styles for %s resolution',
          (mediaQueries, property, propertyValue) => {
            const wrapper = mount(
              <Header {...defaultProps} />
            )

            expect(wrapper.find(HEADER_LOGO_LINK)).toHaveStyleRule(property, propertyValue, { media: mediaQueries })
          })
      })

      describe('HeaderMenuList', () => {
        it('Should render proper styles for (max-width: 991px) resolution', () => {
          const wrapper = mount(
            <Header {...defaultProps} />
          )

          expect(wrapper.find(HEADER_MENU_LIST)).toHaveStyleRule('display', 'none', { media: '(max-width: 991px)' })
        })
      })
    })
  })
})
