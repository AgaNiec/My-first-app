import React from 'react'
import { mount, shallow } from 'enzyme'
import 'jest-styled-components'

import Step from '.'

describe('Step', () => {
  const STEP_CONTAINER = '[data-test="stepContainer"]'
  const STEP_DESCRIPTION_H4 = '[data-test="stepDescriptionH4"]'
  const STEP_NUMBER_LARGE = '[data-test="stepNumberLarge"]'
  const STEP_TITLE_H3 = '[data-test="stepTitleH3"]'
  const description = 'Custom Description'
  const number = 'Custom number'
  const title = 'Custom Title'

  describe('Logic', () => {
    test.each([
      ['description', { description }, STEP_DESCRIPTION_H4, description],
      ['number', { number }, STEP_NUMBER_LARGE, number],
      ['title', { title }, STEP_TITLE_H3, title]
    ])(
      'Should pass proper %s',
      (_, props, selector, expected) => {
        const wrapper = shallow(
          <Step {...props} />
        )

        expect(wrapper.find(selector).text()).toEqual(expected)
      }
    )
  })

  describe('UI', () => {
    describe('MediaQueries', () => {
      describe('StepContainer', () => {
        test.each([
          ['(min-width: 992px)', 'max-width', '400px'],
          ['(max-width: 991px)', 'max-width', '550px'],
          ['(min-width: 480px)', 'padding', '20px'],
          ['(max-width: 479px)', 'padding', '10px']
        ])(
          'Should render proper styles for %s resolution',
          (mediaQueries, property, propertyValue) => {
            const wrapper = mount(
              <Step />
            )

            expect(wrapper.find(STEP_CONTAINER)).toHaveStyleRule(property, propertyValue, { media: mediaQueries })
          })
      })
    })
  })
})
