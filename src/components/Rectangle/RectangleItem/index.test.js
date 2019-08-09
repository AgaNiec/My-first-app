import React from 'react'
import { shallow } from 'enzyme'

import RectangleItem from '.'

describe('RectangleItem', () => {
  const RECTANGLE_ITEM_DESCRIPTION_H4 = '[data-test="rectangleItemDescriptionH4"]'
  const RECTANGLE_ITEM_ICON = '[data-test="rectangleItemIcon"]'
  const description = 'Custom Description'
  const icon = 'Custom Icon'

  describe('Logic', () => {
    test.each([
      ['description', { description: description }, RECTANGLE_ITEM_DESCRIPTION_H4, description],
      ['icon', { icon: icon }, RECTANGLE_ITEM_ICON, icon]
    ])(
      'Should pass proper %s',
      (_, props, selector, expected) => {
        const wrapper = shallow(
          <RectangleItem {...props} />
        )

        expect(wrapper.find(selector).text()).toEqual(expected)
      }
    )
  })
})
