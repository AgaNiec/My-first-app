import React from 'react'
import { shallow } from 'enzyme'

import FeaturesEmployer from '.'

describe('FeaturesEmployer', () => {
  const FEATURES_EMPLOYER_BUTTON = '[data-test="featuresEmployerButton"]'
  const FEATURES_EMPLOYER_RECTANGLE_ITEM = '[data-test="featuresEmployerRectangleItem"]'
  const FEATURES_EMPLOYER_SECTION = '[data-test="featuresEmployerSection"]'
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
        <FeaturesEmployer {...defaultProps} />
      )

      expect(wrapper.find(FEATURES_EMPLOYER_RECTANGLE_ITEM).exists()).toBeFalsy()
    })

    describe('Props', () => {
      test.each([
        ['description', { description }, FEATURES_EMPLOYER_SECTION, description],
        ['description', { itemsList }, FEATURES_EMPLOYER_RECTANGLE_ITEM, itemsList[0].description],
        ['icon', { itemsList }, FEATURES_EMPLOYER_RECTANGLE_ITEM, itemsList[0].icon],
        ['id', { id }, FEATURES_EMPLOYER_BUTTON, id],
        ['label', { label }, FEATURES_EMPLOYER_BUTTON, label],
        ['onClick', { onClick: onClickSpy }, FEATURES_EMPLOYER_BUTTON, onClickSpy],
        ['title', { title }, FEATURES_EMPLOYER_SECTION, title]
      ])(
        'Should pass proper %s property',
        (propName, props, selector, expected) => {
          const wrapper = shallow(
            <FeaturesEmployer
              {...defaultProps}
              {...props}
            />
          )

          expect(wrapper.find(selector).prop(propName)).toEqual(expected)
        })
    })
  })
})
