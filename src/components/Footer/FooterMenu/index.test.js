import React from 'react'
import { shallow } from 'enzyme'

import FooterMenu from '.'

describe('FooterMenu', () => {
  const FOOTER_MENU_LINK = '[data-test="footerMenuLink"]'
  const FOOTER_MENU_LINKS_LIST_H5 = '[data-test="footerMenuLinksListH5"]'
  const FOOTER_MENU_TITLE_H4 = '[data-test="footerMenuTitleH4"]'
  const linksList = [
    {
      href: 'www.google.com',
      label: 'Wiedza'
    }
  ]
  const title = 'Custom Title'

  describe('Logic', () => {
    it('Should pass proper linksList', () => {
      const wrapper = shallow(
        <FooterMenu linksList={linksList} />
      )

      expect(wrapper.find(FOOTER_MENU_LINK).first().prop('href')).toEqual(linksList[0].href)
      expect(wrapper.find(FOOTER_MENU_LINKS_LIST_H5).first().text()).toEqual(linksList[0].label)
    })

    it('Should pass proper title', () => {
      const wrapper = shallow(
        <FooterMenu title={title} />
      )

      expect(wrapper.find(FOOTER_MENU_TITLE_H4).text()).toEqual(title)
    })
  })
})
