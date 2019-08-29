import React from 'react'
import { shallow } from 'enzyme'

import Attractions from '.'

describe('Attractions', () => {
  const FEATURES_EMPLOYER_BUTTON = '[data-test="attractionsButton"]'
  const FEATURES_EMPLOYER_RECTANGLE = '[data-test="attractionsRectangle"]'
  const FEATURES_EMPLOYER_SECTION = '[data-test="attractionsSection"]'
  const description = 'Custom Description'
  const id = 0
  const itemsList = [
    {
      description: 'Custom Desription',
      icon: jest.fn()
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

      expect(wrapper.find(FEATURES_EMPLOYER_RECTANGLE).exists()).toBeFalsy()
    })

    describe('Props', () => {
      test.each([
        ['description', { description }, FEATURES_EMPLOYER_SECTION, description],
        ['description', { itemsList }, FEATURES_EMPLOYER_RECTANGLE, itemsList[0].description],
        ['icon', { itemsList }, FEATURES_EMPLOYER_RECTANGLE, itemsList[0].icon],
        ['id', { id }, FEATURES_EMPLOYER_BUTTON, id],
        ['label', { label }, FEATURES_EMPLOYER_BUTTON, label],
        ['onClick', { onClick: onClickSpy }, FEATURES_EMPLOYER_BUTTON, onClickSpy],
        ['title', { title }, FEATURES_EMPLOYER_SECTION, title]
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
})
