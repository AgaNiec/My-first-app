import React from 'react'
import { shallow } from 'enzyme'

import Rectangle from '.'

describe('Rectangle', () => {
  const RECTANGLE_ICON = '[data-test="rectangleIcon"]'
  const RECTANGLE_ITEM_DESCRIPTION_H4 = '[data-test="rectangleDescriptionH4"]'
  const description = 'Custom Description'
  const icon = jest.fn()

  describe('Logic', () => {
    it('Should render default component', () => {
      const wrapper = shallow(
        <Rectangle />
      )

      expect(wrapper.find(RECTANGLE_ICON).exists()).toBeFalsy()
    })

    it('Should pass proper description property', () => {
      const wrapper = shallow(
        <Rectangle description={description} />
      )

      expect(wrapper.find(RECTANGLE_ITEM_DESCRIPTION_H4).text()).toEqual(description)
    })

    it('Should pass proper icon property', () => {
      const wrapper = shallow(
        <Rectangle icon={icon} />
      )

      expect(wrapper.find(RECTANGLE_ICON).type()).toEqual(icon)
    })
  })
})
