import React from 'react'
import { mount, shallow } from 'enzyme'
import 'jest-styled-components'

import Location from '.'

describe('Location', () => {
  const LOCATION_BUTTON = '[data-test="locationButton"]'
  const LOCATION_BUTTON_CONTAINER = '[data-test="locationButtonContainer"]'
  const LOCATION_SECTION = '[data-test="locationSection"]'
  const LOCATION_STEP_CONTAINER = '[data-test="locationStepContainer"]'
  const STEP_CONTAINER = '[data-test="stepContainer"]'
  const STEP_ELEMENT = '[data-test="stepElement"]'
  const description = 'Custom Description'
  const id = 0
  const itemsList = [
    {
      description: 'Custom Description',
      number: 'Custom Number',
      title: 'Custom Title'
    }
  ]
  const label = 'Custom Label'
  const onClickSpy = jest.fn()
  const title = 'Custom Title'
  const defaultProps = {
    id: id
  }

  describe('Logic', () => {
    it('Should render default component', () => {
      const wrapper = shallow(
        <Location {...defaultProps} />
      )

      expect(wrapper.find(STEP_CONTAINER).exists()).toBeFalsy()
    })

    describe('Props', () => {
      test.each([
        ['description', { description }, LOCATION_SECTION, description],
        ['description', { itemsList }, STEP_CONTAINER, itemsList[0].description],
        ['id', { id }, LOCATION_BUTTON, id],
        ['label', { label }, LOCATION_BUTTON, label],
        ['number', { itemsList }, STEP_CONTAINER, itemsList[0].number],
        ['onClick', { onClick: onClickSpy }, LOCATION_BUTTON, onClickSpy],
        ['title', { itemsList }, STEP_CONTAINER, itemsList[0].title],
        ['title', { title }, LOCATION_SECTION, title]
      ])(
        'Should pass proper %s property',
        (propName, props, selector, expected) => {
          const wrapper = shallow(
            <Location
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
      describe('LocationStepContainer', () => {
        test.each([
          ['(min-width: 992px)', 'display', 'flex'],
          ['(min-width: 768px)', 'margin', '100px 0 0'],
          ['(min-width: 320px) and (max-width: 767px)', 'margin', '50px 0 0']
        ])(
          'Should render proper styles for %s resolution',
          (mediaQueries, property, propertyValue) => {
            const wrapper = mount(
              <Location {...defaultProps} />
            )

            expect(wrapper.find(LOCATION_STEP_CONTAINER)).toHaveStyleRule(property, propertyValue, { media: mediaQueries })
          })
      })

      describe('StepElement', () => {
        test.each([
          ['(max-width: 991px)', 'display', 'flex'],
          ['(max-width: 991px)', 'justify-content', 'center']
        ])(
          'Should render proper styles for %s resolution',
          (mediaQueries, property, propertyValue) => {
            const wrapper = mount(
              <Location
                {...defaultProps}
                itemsList={itemsList}
              />
            )

            expect(wrapper.find(STEP_ELEMENT)).toHaveStyleRule(property, propertyValue, { media: mediaQueries })
          })
      })

      describe('LocationButton', () => {
        test.each([
          ['(min-width: 768px)', 'margin', '100px 0 0'],
          ['(min-width: 320px) and (max-width: 767px)', 'margin', '50px 0 0']
        ])(
          'Should render proper styles for %s resolution',
          (mediaQueries, property, propertyValue) => {
            const wrapper = mount(
              <Location {...defaultProps} />
            )

            expect(wrapper.find(LOCATION_BUTTON_CONTAINER)).toHaveStyleRule(property, propertyValue, { media: mediaQueries })
          })
      })
    })
  })
})
