import React from 'react'
import { shallow } from 'enzyme'

import Footer from '.'

describe('Footer', () => {
  const FOOTER_LOGO = '[data-test="footerLogo"]'
  const FOOTER_MENU_CENTER = '[data-test="footerMenuCenter"]'
  const FOOTER_MENU_LEFT = '[data-test="footerMenuLeft"]'
  const FOOTER_MENU_RIGHT = '[data-test="footerMenuRight"]'
  const FOOTER_SOCIAL_LIST = '[data-test="footerSocialList"]'
  const icon = 'Custom Icon'
  const linksListCenter = []
  const linksListLeft = []
  const linksListRight = []
  const socialItemsList = []
  const titleCenter = ''
  const titleLeft = ''
  const titleRight = ''

  describe('Logic', () => {
    it('Should pass proper icon property', () => {
      const wrapper = shallow(
        <Footer icon={icon} />
      )

      expect(wrapper.find(FOOTER_LOGO).text()).toEqual(icon)
    })

    describe('LinksList', () => {
      test.each([
        [ 'linksListCenter', { linksListCenter: linksListCenter }, FOOTER_MENU_CENTER, linksListCenter ],
        [ 'linksListLeft', { linksListLeft: linksListLeft }, FOOTER_MENU_LEFT, linksListLeft ],
        [ 'linksListRight', { linksListRight: linksListRight }, FOOTER_MENU_RIGHT, linksListRight ]
      ])(
        'Should pass proper %s propperties',
        (_, props, selector, expected) => {
          const wrapper = shallow(
            <Footer {...props} />
          )

          expect(wrapper.find(selector).prop('linksList')).toEqual(expected)
        })
    })

    it('Should pass proper socialItemsList propperties', () => {
      const wrapper = shallow(
        <Footer socialItemsList={socialItemsList} />
      )

      expect(wrapper.find(FOOTER_SOCIAL_LIST).prop('itemsList')).toEqual(socialItemsList)
    })

    describe('Title', () => {
      test.each([
        [ 'titleCenter', { titleCenter: titleCenter }, FOOTER_MENU_CENTER, titleCenter ],
        [ 'titleLeft', { titleLeft: titleLeft }, FOOTER_MENU_LEFT, titleLeft ],
        [ 'titleRight', { titleRight: titleRight }, FOOTER_MENU_RIGHT, titleRight ]
      ])(
        'Should pass proper %s propperties',
        (_, props, selector, expected) => {
          const wrapper = shallow(
            <Footer {...props} />
          )

          expect(wrapper.find(selector).prop('title')).toEqual(expected)
        })
    })
  })
})
