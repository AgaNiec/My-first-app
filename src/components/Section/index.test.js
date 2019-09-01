import React from 'react'
import { mount, shallow } from 'enzyme'
import 'jest-styled-components'

import Section from '.'

describe('Section', () => {
  const SECTION_CONTAINER = '[data-test="sectionContainer"]'
  const SECTION_DESCRIPTION = '[data-test="sectionDescriptionH3"]'
  const SECTION_TITLE = '[data-test="sectionTitleH1"]'
  const description = 'Custom Description'
  const title = 'Custom Title'

  describe('Logic', () => {
    it('Should render default component', () => {
      const wrapper = shallow(
        <Section />
      )

      expect(wrapper.find(SECTION_CONTAINER).prop('align')).toEqual('left')
    })

    describe('Align', () => {
      test.each([
        ['center'],
        ['left']
      ])(
        'Should render proper component when align is set to %s',
        (propName) => {
          const wrapper = shallow(
            <Section align={propName} />
          )

          expect(wrapper.find(SECTION_CONTAINER).prop('align')).toEqual(propName)
        })
    })

    describe('Props', () => {
      test.each([
        ['description', { description }, SECTION_DESCRIPTION, description],
        ['title', { title }, SECTION_TITLE, title]
      ])(
        'Should pass proper %s',
        (_, props, selector, expected) => {
          const wrapper = shallow(
            <Section {...props} />
          )

          expect(wrapper.find(selector).text()).toEqual(expected)
        })
    })
  })

  describe('UI', () => {
    describe('MediaQueries', () => {
      describe('SectionContainer', () => {
        test.each([
          ['(min-width: 992px)', 'text-align', 'left'],
          ['(max-width: 991px)', 'text-align', 'center']
        ])(
          'Should render proper styles for %s resolution when align="left"',
          (mediaQueries, property, propertyValue) => {
            const wrapper = mount(
              <Section align='left' />
            )

            expect(wrapper.find(SECTION_CONTAINER)).toHaveStyleRule(property, propertyValue, { media: mediaQueries })
          })
      })
    })
  })
})
