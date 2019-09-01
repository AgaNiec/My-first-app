import React from 'react'
import { mount, shallow } from 'enzyme'
import 'jest-styled-components'

import Rectangle from '.'

describe('Rectangle', () => {
  const RECTANGLE_CONTAINER = '[data-test="rectangleContainer"]'
  const RECTANGLE_ICON = '[data-test="rectangleIcon"]'
  const RECTANGLE_ICON_CONTAINER = '[data-test="rectangleIconContainer"]'
  const RECTANGLE_ITEM_DESCRIPTION_H4 = '[data-test="rectangleDescriptionH4"]'
  const description = 'Custom Description'
  const icon = () => null

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

  describe('UI', () => {
    describe('MediaQueries', () => {
      describe('RectangleContainer', () => {
        test.each([
          ['(min-width: 480px)', 'padding', '30px'],
          ['(max-width: 479px)', 'padding', '20px']
        ])(
          'Should render proper styles for %s resolution',
          (mediaQueries, property, propertyValue) => {
            const wrapper = mount(
              <Rectangle />
            )

            expect(wrapper.find(RECTANGLE_CONTAINER)).toHaveStyleRule(property, propertyValue, { media: mediaQueries })
          })
      })

      describe('RectangleIcon', () => {
        test.each([
          ['(min-width: 768px)', 'height', '50px'],
          ['(min-width: 768px)', 'width', '50px'],
          ['(max-width: 767px)', 'height', '40px'],
          ['(max-width: 767px)', 'width', '40px']
        ])(
          'Should render proper styles for %s resolution when icon passed',
          (mediaQueries, property, propertyValue) => {
            const wrapper = mount(
              <Rectangle icon={icon} />
            )

            expect(wrapper.find(RECTANGLE_ICON_CONTAINER)).toHaveStyleRule(property, propertyValue, { media: mediaQueries })
          })
      })
    })
  })
})
