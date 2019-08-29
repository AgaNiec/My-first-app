import React from 'react'
import { shallow } from 'enzyme'

import HomepageSectionOne from '.'

describe('HomepageSectionOne', () => {
  const HOMEPAGE_SECTION_ONE_BUTTON = '[data-test="HomepageSectionOneButton"]'
  const HOMEPAGE_SECTION_ONE_ICON = '[data-test="HomepageSectionOneIcon"]'
  const HOMEPAGE_SECTION_ONE_SECTION = '[data-test="HomepageSectionOneSection"]'
  const description = 'Custom Description'
  const icon = 'Custom Icon'
  const id = 0
  const label = 'Custom Label'
  const onClickSpy = jest.fn()
  const title = 'Custom Title'
  const defaultProps = {
    id: id
  }

  describe('Logic', () => {
    test.each([
      ['description', { description }, HOMEPAGE_SECTION_ONE_SECTION, description],
      ['icon', { icon }, HOMEPAGE_SECTION_ONE_ICON, icon],
      ['id', { id }, HOMEPAGE_SECTION_ONE_BUTTON, id],
      ['label', { label }, HOMEPAGE_SECTION_ONE_BUTTON, label],
      ['onClick', { onClick: onClickSpy }, HOMEPAGE_SECTION_ONE_BUTTON, onClickSpy],
      ['title', { title }, HOMEPAGE_SECTION_ONE_SECTION, title]
    ])(
      'Should pass proper %s property',
      (propName, props, selector, expected) => {
        const wrapper = shallow(
          <HomepageSectionOne
            {...defaultProps}
            {...props}
          />
        )

        expect(wrapper.find(selector).prop(propName)).toEqual(expected)
      })
  })
})
