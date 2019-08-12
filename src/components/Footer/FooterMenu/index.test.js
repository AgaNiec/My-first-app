import React from 'react'
import { shallow } from 'enzyme'

import FooterMenu from '.'

describe('FooterMenu', () => {
  const FOOTER_MENU_TITLE_H4 = '[data-test="footerMenuTitleH4"]'
  const FOOTER_MENU_LIST = '[data-test="footerMenuList"]'
  const linksList = []
  const title = 'Custom Title'

  describe('Logic', () => {
    it('Should pass proper linksList property', () => {
      const wrapper = shallow(
        <FooterMenu linksList={linksList} />
      )

      expect(wrapper.find(FOOTER_MENU_LIST).prop('linksList')).toEqual(linksList)
    })

    it('Should pass proper title', () => {
      const wrapper = shallow(
        <FooterMenu title={title} />
      )

      expect(wrapper.find(FOOTER_MENU_TITLE_H4).text()).toEqual(title)
    })
  })
})
