import React from 'react'
import { shallow } from 'enzyme'

import RectangleItem from '.'

describe('RectangleItem', () => {
  const RECTANGLE_ICON = '[data-test="rectangleIcon"]'
  const RECTANGLE_ITEM_DESCRIPTION_H4 = '[data-test="rectangleItemDescriptionH4"]'
  const description = 'Custom Description'
  const icon = jest.fn()

  describe('Logic', () => {
    it('Should render default component', () => {
      const wrapper = shallow(
        <RectangleItem />
      )

      expect(wrapper.find(RECTANGLE_ICON).exists()).toBeFalsy()
    })

    it('Should pass proper description property', () => {
      const wrapper = shallow(
        <RectangleItem description={description} />
      )

      expect(wrapper.find(RECTANGLE_ITEM_DESCRIPTION_H4).text()).toEqual(description)
    })

    it('Should pass proper icon property', () => {
      const wrapper = shallow(
        <RectangleItem icon={icon} />
      )

      expect(wrapper.find(RECTANGLE_ICON).type()).toEqual(icon)
    })
  })
})
