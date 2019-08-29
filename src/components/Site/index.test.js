import React from 'react'
import { shallow } from 'enzyme'

import Site from '.'
import { SiteContentContainer } from './components'

describe('Site', () => {
  const CONTENT = 'Custom Content'
  const SITE_FOOTER_CONTAINER = '[data-test="siteFooterContainer"]'
  const SITE_HEADEDR_CONTAINER = '[data-test="siteHeaderContainer"]'
  const buttonId = 'Custom Button Id'
  const buttonLabel = 'Custom Button Label'
  const linkHref = 'Custom Link Href'
  const linkLabel = ' Custom Link Label'
  const linksListCenter = []
  const linksListLeft = []
  const linksListRight = []
  const logo = 'Custom Logo'
  const onClickSpy = jest.fn()
  const socialItemsList = []
  const titleCenter = 'Custom Title Center'
  const titleLeft = 'Custom Title Left'
  const titleRight = 'Custom Title Right'
  const defaultProps = {
    buttonId: buttonId
  }

  describe('Logic', () => {
    it('Should pass proper children property', () => {
      const wrapper = shallow(
        <Site {...defaultProps}>
          {CONTENT}
        </Site>
      )

      expect(wrapper.find(SiteContentContainer).text()).toEqual(CONTENT)
    })

    describe('Props', () => {
      test.each([
        ['buttonId', { buttonId }, SITE_HEADEDR_CONTAINER, buttonId],
        ['buttonLabel', { buttonLabel }, SITE_HEADEDR_CONTAINER, buttonLabel],
        ['buttonOnClick', { buttonOnClick: onClickSpy }, SITE_HEADEDR_CONTAINER, onClickSpy],
        ['linkHref', { linkHref }, SITE_HEADEDR_CONTAINER, linkHref],
        ['linkLabel', { linkLabel }, SITE_HEADEDR_CONTAINER, linkLabel],
        ['linksListCenter', { linksListCenter }, SITE_FOOTER_CONTAINER, linksListCenter],
        ['linksListLeft', { linksListLeft }, SITE_FOOTER_CONTAINER, linksListLeft],
        ['linksListRight', { linksListRight }, SITE_FOOTER_CONTAINER, linksListRight],
        ['logo', { logo }, SITE_FOOTER_CONTAINER, logo],
        ['logo', { logo }, SITE_HEADEDR_CONTAINER, logo],
        ['socialItemsList', { socialItemsList }, SITE_FOOTER_CONTAINER, socialItemsList],
        ['titleCenter', { titleCenter }, SITE_FOOTER_CONTAINER, titleCenter],
        ['titleLeft', { titleLeft }, SITE_FOOTER_CONTAINER, titleLeft],
        ['titleRight', { titleRight }, SITE_FOOTER_CONTAINER, titleRight]
      ])(
        'Should pass proper %s property',
        (propsName, prop, selector, expected) => {
          const wrapper = shallow(
            <Site
              {...defaultProps}
              {...prop}
            />
          )

          expect(wrapper.find(selector).prop(propsName)).toEqual(expected)
        })
    })
  })
})
