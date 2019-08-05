import React from 'react'
import { shallow } from 'enzyme'

import Section from '.'

describe('Section', () => {
  const SECTION_DESCRIPTION = '[data-test="sectionDescriptionH3"]'
  const SECTION_TITLE = '[data-test="sectionTitleH1"]'
  const description = 'Custom Description'
  const title = 'Custom Title'

  describe('Logic', () => {
    test.each([
      ['description', { description: description }, SECTION_DESCRIPTION, description],
      ['title', { title: title }, SECTION_TITLE, title]
    ])('Should pass proper %s',
      (_, props, selector, expected) => {
        const wrapper = shallow(
          <Section {...props} />
        )

        expect(wrapper.find(selector).text()).toEqual(expected)
      }
    )
  })
})
