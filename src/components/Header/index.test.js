import React from 'react'
import { shallow } from 'enzyme'

import Header from '.'

describe('Header', () => {
  const HEADER_BUTTON = '[data-test="headerButton"]'
  const HEADER_LINK = '[data-test="headerLink"]'
  const HEADER_LINK_H4 = '[data-test="headerLinkH4"]'
  const HEADER_LOGO = '[data-test="headerLogo"]'
  const buttonId = 0
  const buttonLabel = 'Custom Button Label'
  const buttonOnClickSpy = jest.fn()
  const linkHref = 'Custom Link Href'
  const linkLabel = 'Custom Link Label'
  const logo = 'Custom Logo'
  const defaultProps = {
    buttonId: buttonId
  }

  describe('Logic', () => {
    test.each([
      ['linkLabel', { linkLabel: linkLabel }, HEADER_LINK_H4, linkLabel],
      ['logo', { logo: logo }, HEADER_LOGO, logo]
    ])(
      'Should pass proper %s property',
      (_, props, selector, expected) => {
        const wrapper = shallow(
          <Header
            {...defaultProps}
            {...props} />
        )

        expect(wrapper.find(selector).text()).toEqual(expected)
      })

    describe('Props', () => {
      test.each([
        ['buttonId', 'id', { buttonId: buttonId }, HEADER_BUTTON, buttonId],
        ['buttonLabel', 'label', { buttonLabel: buttonLabel }, HEADER_BUTTON, buttonLabel],
        ['buttonOnClick', 'onClick', { buttonOnClick: buttonOnClickSpy }, HEADER_BUTTON, buttonOnClickSpy],
        ['linkHref', 'href', { linkHref: linkHref }, HEADER_LINK, linkHref]
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
})