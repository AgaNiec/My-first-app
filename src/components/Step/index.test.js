import React from 'react'
import { shallow } from 'enzyme'

import Step from '.'

describe('Step', () => {
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
})
