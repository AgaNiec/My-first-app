import React from 'react'
import { shallow } from 'enzyme'

import FooterMenuList from '.'

describe('FooterMenuList', () => {
  const FOOTER_MENU_LI = '[data-test="footerMenuLi"]'
  const FOOTER_MENU_LINK = '[data-test="footerMenuLink"]'
  const FOOTER_MENU_LINKS_LIST_H5 = '[data-test="footerMenuLinksListH5"]'
  const linksList = [
    {
      href: 'www.google.com',
      label: 'Wiedza'
    }
  ]

  describe('Logic', () => {
    it('Should render default component', () => {
      const wrapper = shallow(
        <FooterMenuList />
      )

      expect(wrapper.find(FOOTER_MENU_LI).exists()).toBeFalsy()
    })

    it('Should pass proper linksList', () => {
      const wrapper = shallow(
        <FooterMenuList linksList={linksList} />
      )

      expect(wrapper.find(FOOTER_MENU_LINK).first().prop('href')).toEqual(linksList[0].href)
      expect(wrapper.find(FOOTER_MENU_LINKS_LIST_H5).first().text()).toEqual(linksList[0].label)
    })
  })
})
