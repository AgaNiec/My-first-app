import React from 'react'
import { mount, shallow } from 'enzyme'
import 'jest-styled-components'

import Attractions from '.'

describe('Attractions', () => {
  const ATTRACTIONS_BUTTON = '[data-test="attractionsButton"]'
  const ATTRACTIONS_BUTTON_CONTAINER = '[data-test="attractionsButtonContainer"]'
  const ATTRACTIONS_CONTAINER = '[data-test="attractionsContainer"]'
  const ATTRACTIONS_RECTANGLE = '[data-test="attractionsRectangle"]'
  const ATTRACTIONS_RECTANGLE_CONTAINER = '[data-test="attractionsRectangleContainer"]'
  const ATTRACTIONS_RIGHT = '[data-test="attractionsRight"]'
  const ATTRACTIONS_SECTION = '[data-test="attractionsSection"]'
  const description = 'Custom Description'
  const id = 0
  const itemsList = [
    {
      description: 'Custom Desription',
      icon: () => null
    }
  ]
  const label = 'Custom Label'
  const onClickSpy = jest.fn()
  const title = 'Custom Title'
  const defaultProps = {
    id: id
  }

  describe('Logic', () => {
    it('Should redner default component', () => {
      const wrapper = shallow(
        <Attractions {...defaultProps} />
      )

      expect(wrapper.find(ATTRACTIONS_RECTANGLE).exists()).toBeFalsy()
    })

    describe('Props', () => {
      test.each([
        ['description', { description }, ATTRACTIONS_SECTION, description],
        ['description', { itemsList }, ATTRACTIONS_RECTANGLE, itemsList[0].description],
        ['icon', { itemsList }, ATTRACTIONS_RECTANGLE, itemsList[0].icon],
        ['id', { id }, ATTRACTIONS_BUTTON, id],
        ['label', { label }, ATTRACTIONS_BUTTON, label],
        ['onClick', { onClick: onClickSpy }, ATTRACTIONS_BUTTON, onClickSpy],
        ['title', { title }, ATTRACTIONS_SECTION, title]
      ])(
        'Should pass proper %s property',
        (propName, props, selector, expected) => {
          const wrapper = shallow(
            <Attractions
              {...defaultProps}
              {...props}
            />
          )

          expect(wrapper.find(selector).prop(propName)).toEqual(expected)
        })
    })
  })

  describe('UI', () => {
    describe('MediaQueries', () => {
      describe('AttractionsContainer', () => {
        it('Should render proper styles for (min-width: 1200px) resolution', () => {
          const wrapper = mount(
            <Attractions {...defaultProps} />
          )

          expect(wrapper.find(ATTRACTIONS_CONTAINER)).toHaveStyleRule('display', 'flex', { media: '(min-width: 1200px)' })
        })
      })

      describe('AttractionsButton', () => {
        test.each([
          ['(min-width: 992px)', 'text-align', 'left'],
          ['(max-width: 991px)', 'text-align', 'center']
        ])(
          'Should render proper styles for %s resolution',
          (mediaQueries, property, propertyValue) => {
            const wrapper = mount(
              <Attractions {...defaultProps} />

            )

            expect(wrapper.find(ATTRACTIONS_BUTTON_CONTAINER)).toHaveStyleRule(property, propertyValue, { media: mediaQueries })
          })
      })

      describe('AttractionsRight', () => {
        test.each([
          ['(min-width: 1200px)', 'min-width', '640px'],
          ['(max-width: 1199px)', 'justify-content', 'center'],
          ['(max-width: 1199px)', 'margin', '60px auto 0'],
          ['(max-width: 1199px)', 'max-width', '640px']
        ])(
          'Should render proper styles for %s resolution',
          (mediaQueries, property, propertyValue) => {
            const wrapper = mount(
              <Attractions {...defaultProps} />

            )

            expect(wrapper.find(ATTRACTIONS_RIGHT)).toHaveStyleRule(property, propertyValue, { media: mediaQueries })
          })
      })

      describe('AttractionsRectangle', () => {
        test.each([
          ['(min-width: 1200px)', 'margin-right', '20px', '&:nth-child(odd)'],
          ['(max-width: 1199px)', 'margin-right', '20px', '']
        ])(
          'Should render proper styles for %s resolution when itemsList passed',
          (mediaQueries, property, propertyValue, modifierValue) => {
            const wrapper = mount(
              <Attractions
                {...defaultProps}
                itemsList={itemsList}
              />
            )

            expect(wrapper.find(ATTRACTIONS_RECTANGLE_CONTAINER)).toHaveStyleRule(property, propertyValue, { media: mediaQueries, modifier: modifierValue })
          })
      })
    })
  })
})
