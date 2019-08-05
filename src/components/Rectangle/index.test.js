import React from 'react'
import { shallow } from 'enzyme'

import Rectangle from '.'

describe('Rectangle', () => {
  const RECTANGLE_DESCRIPTION_H4 = '[data-test="rectangleDescriptionH4"]'
  const RECTANGLE_ICON = '[data-test="rectangleIcon"]'
  const description = 'Custom Description'
  const icon = 'Custom Icon'

  describe('Logic', () => {
    test.each([
      ['description', { description: description }, RECTANGLE_DESCRIPTION_H4, description],
      ['icon', { icon: icon }, RECTANGLE_ICON, icon]
    ])(
      'Should pass proper %s',
      (_, props, selector, expected) => {
        const wrapper = shallow(
          <Rectangle {...props} />
        )

        expect(wrapper.find(selector).text()).toEqual(expected)
      }
    )
  })
})
