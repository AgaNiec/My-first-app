import React from 'react'
import { mount, shallow } from 'enzyme'
import 'jest-styled-components'

import MenuList from '.'

describe('MenuList', () => {
  const MENU_LI = '[data-test="menuLi"]'
  const MENU_LINK = '[data-test="menuLink"]'
  const MENU_LIST_CONTAINER = '[data-test="menuListContainer"]'
  const MENU_LINKS_LIST_H5 = '[data-test="menuLinksListH5"]'
  const linksList = [
    {
      href: 'www.google.com',
      label: 'Wiedza'
    }
  ]

  describe('Logic', () => {
    it('Should render default component', () => {
      const wrapper = shallow(
        <MenuList />
      )

      expect(wrapper.find(MENU_LI).exists()).toBeFalsy()
      expect(wrapper.find(MENU_LIST_CONTAINER).prop('position')).toEqual('footer')
    })

    test.each([
      ['header'],
      ['footer']
    ])(
      'Should pass proper position property when position is set to %s and linksList passed',
      (propName) => {
        const wrapper = shallow(
          <MenuList
            linksList={linksList}
            position={propName}
          />
        )

        expect(wrapper.find(MENU_LIST_CONTAINER).prop('position')).toEqual(propName)
        expect(wrapper.find(MENU_LI).prop('position')).toEqual(propName)
      })

    test.each([
      ['header', 'flex', '0 25px 0 0'],
      ['footer', 'inline', '0 0 15px']
    ])(
      'Should render proper component design when property position is set to %s and linksList passed',
      (propName, display, margin) => {
        const wrapper = mount(
          <MenuList
            linksList={linksList}
            position={propName}
          />
        )

        expect(wrapper.find(MENU_LIST_CONTAINER)).toHaveStyleRule('display', display)
        expect(wrapper.find(MENU_LI)).toHaveStyleRule('margin', margin)
      })

    it('Should pass proper linksList', () => {
      const wrapper = shallow(
        <MenuList linksList={linksList} />
      )

      expect(wrapper.find(MENU_LINK).first().prop('href')).toEqual(linksList[0].href)
      expect(wrapper.find(MENU_LINKS_LIST_H5).first().text()).toEqual(linksList[0].label)
    })
  })
})
