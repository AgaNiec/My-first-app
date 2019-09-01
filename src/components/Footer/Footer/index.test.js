import React from 'react'
import { mount, shallow } from 'enzyme'
import 'jest-styled-components'

import Footer from '.'

describe('Footer', () => {
  const FOOTER_CONTAINER = '[data-test="footerContainer"]'
  const FOOTER_LEFT = '[data-test="footerLeft"]'
  const FOOTER_LOGO = '[data-test="footerLogo"]'
  const FOOTER_LOGO_LINK = '[data-test="footerLogoLink"]'
  const FOOTER_MENU_CENTER = '[data-test="footerMenuCenter"]'
  const FOOTER_MENU_LEFT = '[data-test="footerMenuLeft"]'
  const FOOTER_MENU_RIGHT = '[data-test="footerMenuRight"]'
  const FOOTER_RIGHT = '[data-test="footerRight"]'
  const FOOTER_SOCIAL_LIST = '[data-test="footerSocialList"]'
  const linksListCenter = []
  const linksListLeft = []
  const linksListRight = []
  const logo = 'Custom Logo'
  const socialItemsList = []
  const titleCenter = ''
  const titleLeft = ''
  const titleRight = ''

  describe('Logic', () => {
    describe('LinksList', () => {
      test.each([
        ['linksListCenter', { linksListCenter }, FOOTER_MENU_CENTER, linksListCenter],
        ['linksListLeft', { linksListLeft }, FOOTER_MENU_LEFT, linksListLeft],
        ['linksListRight', { linksListRight }, FOOTER_MENU_RIGHT, linksListRight]
      ])(
        'Should pass proper %s propperties',
        (_, props, selector, expected) => {
          const wrapper = shallow(
            <Footer {...props} />
          )

          expect(wrapper.find(selector).prop('linksList')).toEqual(expected)
        })
    })

    it('Should pass proper logo property', () => {
      const wrapper = shallow(
        <Footer logo={logo} />
      )

      expect(wrapper.find(FOOTER_LOGO).prop('src')).toEqual(logo)
    })

    it('Should pass proper socialItemsList propperties', () => {
      const wrapper = shallow(
        <Footer socialItemsList={socialItemsList} />
      )

      expect(wrapper.find(FOOTER_SOCIAL_LIST).prop('itemsList')).toEqual(socialItemsList)
    })

    describe('Title', () => {
      test.each([
        ['titleCenter', { titleCenter }, FOOTER_MENU_CENTER, titleCenter],
        ['titleLeft', { titleLeft }, FOOTER_MENU_LEFT, titleLeft],
        ['titleRight', { titleRight }, FOOTER_MENU_RIGHT, titleRight]
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

  describe('UI', () => {
    describe('MediaQueries', () => {
      describe('FooterContainer', () => {
        test.each([
          ['(min-width: 992px)', 'display', 'flex'],
          ['(min-width: 992px)', 'margin', '0 auto'],
          ['(min-width: 992px)', 'max-width', '1200px'],
          ['(min-width: 992px)', 'padding', '50px 0'],
          ['(min-width: 768px) and (max-width: 991px)', 'padding', '40px 0'],
          ['(max-width: 767px)', 'padding', '30px 0']
        ])(
          'Should render proper styles for %s resolution',
          (mediaQueries, property, propertyValue) => {
            const wrapper = mount(
              <Footer />
            )

            expect(wrapper.find(FOOTER_CONTAINER)).toHaveStyleRule(property, propertyValue, { media: mediaQueries })
          })
      })

      describe('FooterLeft', () => {
        test.each([
          ['(min-width: 992px)', 'flex', '1'],
          ['(min-width: 992px)', 'margin', '0 30px 0 0'],
          ['(min-width: 576px) and (max-width: 991px)', 'margin', '0 0 40px'],
          ['(max-width: 575px)', 'margin', '0 0 30px']
        ])(
          'Should render proper styles for %s resolution',
          (mediaQueries, property, propertyValue) => {
            const wrapper = mount(
              <Footer />
            )

            expect(wrapper.find(FOOTER_LEFT)).toHaveStyleRule(property, propertyValue, { media: mediaQueries })
          })
      })

      describe('FooterLogoLink', () => {
        test.each([
          ['(min-width: 992px)', 'margin', '0 0 20px'],
          ['(min-width: 992px)', 'text-align', 'left'],
          ['(max-width: 991px)', 'margin', '0 auto 20px'],
          ['(max-width: 991px)', 'text-align', 'center'],
          ['(min-width: 768px)', 'max-width', '150px'],
          ['(min-width: 576px) and (max-width: 767px)', 'max-width', '140px'],
          ['(min-width: 480px) and (max-width: 575px)', 'max-width', '130px'],
          ['(max-width: 479px)', 'max-width', '120px']
        ])(
          'Should render proper styles for %s resolution',
          (mediaQueries, property, propertyValue) => {
            const wrapper = mount(
              <Footer />
            )

            expect(wrapper.find(FOOTER_LOGO_LINK)).toHaveStyleRule(property, propertyValue, { media: mediaQueries })
          })
      })

      describe('FooterRight', () => {
        test.each([
          ['(min-width: 992px)', 'flex', '3'],
          ['(max-width: 991px)', 'flex-wrap', 'wrap'],
          ['(min-width: 568px)', 'display', 'flex']
        ])(
          'Should render proper styles for %s resolution',
          (mediaQueries, property, propertyValue) => {
            const wrapper = mount(
              <Footer />
            )

            expect(wrapper.find(FOOTER_RIGHT)).toHaveStyleRule(property, propertyValue, { media: mediaQueries })
          })
      })
    })
  })
})
