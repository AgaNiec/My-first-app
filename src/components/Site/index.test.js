import React from 'react'
import { shallow } from 'enzyme'

import Site from '.'
import { SiteContentContainer } from './components'

describe('Site', () => {
  const SITE_FOOTER_CONTAINER = '[data-test="siteFooterContainer"]'
  const SITE_HEADEDR_CONTAINER = '[data-test="siteHeaderContainer"]'
  const buttonId = 'Custom Button Id'
  const buttonLabel = 'Custom Button Label'
  const children = 'Custom Children'
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
        <Site
          {...defaultProps}
          children={children} />
      )

      expect(wrapper.find(SiteContentContainer).text()).toEqual(children)
    })

    describe('Props', () => {
      test.each([
        ['buttonId', { buttonId: buttonId }, SITE_HEADEDR_CONTAINER, buttonId],
        ['buttonLabel', { buttonLabel: buttonLabel }, SITE_HEADEDR_CONTAINER, buttonLabel],
        ['buttonOnClick', { buttonOnClick: onClickSpy }, SITE_HEADEDR_CONTAINER, onClickSpy],
        ['linkHref', { linkHref: linkHref }, SITE_HEADEDR_CONTAINER, linkHref],
        ['linkLabel', { linkLabel: linkLabel }, SITE_HEADEDR_CONTAINER, linkLabel],
        ['linksListCenter', { linksListCenter: linksListCenter }, SITE_FOOTER_CONTAINER, linksListCenter],
        ['linksListLeft', { linksListLeft: linksListLeft }, SITE_FOOTER_CONTAINER, linksListLeft],
        ['linksListRight', { linksListRight: linksListRight }, SITE_FOOTER_CONTAINER, linksListRight],
        ['logo', { logo: logo }, SITE_FOOTER_CONTAINER, logo],
        ['logo', { logo: logo }, SITE_HEADEDR_CONTAINER, logo],
        ['socialItemsList', { socialItemsList: socialItemsList }, SITE_FOOTER_CONTAINER, socialItemsList],
        ['titleCenter', { titleCenter: titleCenter }, SITE_FOOTER_CONTAINER, titleCenter],
        ['titleLeft', { titleLeft: titleLeft }, SITE_FOOTER_CONTAINER, titleLeft],
        ['titleRight', { titleRight: titleRight }, SITE_FOOTER_CONTAINER, titleRight]
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
