import React from 'react'
import { shallow } from 'enzyme'

import Header from '.'

describe('Header', () => {
  const HEADER_BUTTON = '[data-test="headerButton"]'
  const HEADER_LINK = '[data-test="headerLink"]'
  const HEADER_LINK_H4 = '[data-test="headerLinkH4"]'
  const HEADER_LOGO_ICON = '[data-test="headerLogoIcon"]'
  const buttonLabel = 'Custom Button Label'
  const href = 'Custom Href'
  const icon = 'Custom Icon'
  const id = 0
  const linkLabel = 'Custom Link Label'
  const onClickSpy = jest.fn()
  const defaultProps = {
    id: id
  }

  describe('Logic', () => {
    test.each([
      ['icon', { icon: icon }, HEADER_LOGO_ICON, icon],
      ['linkLabel', { linkLabel: linkLabel }, HEADER_LINK_H4, linkLabel]
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
        ['buttonLabel', 'label', { buttonLabel: buttonLabel }, HEADER_BUTTON, buttonLabel],
        ['href', 'href', { href: href }, HEADER_LINK, href],
        ['id', 'id', { id: id }, HEADER_BUTTON, id],
        ['onClick', 'onClick', { onClick: onClickSpy }, HEADER_BUTTON, onClickSpy]
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
