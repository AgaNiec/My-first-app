import React from 'react'
import { mount, shallow } from 'enzyme'
import 'jest-styled-components'

import HomepageSectionOne from '.'

describe('HomepageSectionOne', () => {
  const HOMEPAGE_SECTION_ONE_BUTTON = '[data-test="homepageSectionOneButton"]'
  const HOMEPAGE_SECTION_ONE_BUTTON_CONTAINER = '[data-test="homepageSectionOneButtonContainer"]'
  const HOMEPAGE_SECTION_ONE_CONTAINER = '[data-test="homepageSectionOneContainer"]'
  const HOMEPAGE_SECTION_ONE_ICON = '[data-test="homepageSectionOneIcon"]'
  const HOMEPAGE_SECTION_ONE_LEFT = '[data-test="homepageSectionOneLeft"]'
  const HOMEPAGE_SECTION_ONE_RIGHT = '[data-test="homepageSectionOneRight"]'
  const HOMEPAGE_SECTION_ONE_SECTION = '[data-test="homepageSectionOneSection"]'
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

  describe('UI', () => {
    describe('MediaQueries', () => {
      describe('HomepageSectionOneContainer', () => {
        test.each([
          ['(min-width: 992px)', 'display', 'flex'],
          ['(min-width: 992px)', 'margin', '250px 0 0'],
          ['(min-width: 576px) and (max-width: 991px)', 'margin', '200px 0 0'],
          ['(max-width: 575px)', 'margin', '150px 0 0']
        ])(
          'Should render proper styles for %s resolution',
          (mediaQueries, property, propertyValue) => {
            const wrapper = mount(
              <HomepageSectionOne {...defaultProps} />
            )

            expect(wrapper.find(HOMEPAGE_SECTION_ONE_CONTAINER)).toHaveStyleRule(property, propertyValue, { media: mediaQueries })
          })
      })

      describe('HomepageSectionOneLeft', () => {
        it('Should render proper styles for (min-width: 992px) resolution', () => {
          const wrapper = mount(
            <HomepageSectionOne {...defaultProps} />
          )

          expect(wrapper.find(HOMEPAGE_SECTION_ONE_LEFT)).toHaveStyleRule('flex', '1', { media: '(min-width: 992px)' })
        })
      })

      describe('HomepageSectionOneButton', () => {
        it('Should render proper styles for (max-width: 991px) resolution', () => {
          const wrapper = mount(
            <HomepageSectionOne {...defaultProps} />
          )

          expect(wrapper.find(HOMEPAGE_SECTION_ONE_BUTTON_CONTAINER)).toHaveStyleRule('text-align', 'center', { media: '(max-width: 991px)' })
        })
      })

      describe('HomepageSectionOneRight', () => {
        test.each([
          ['(min-width: 992px)', 'flex', '1'],
          ['(max-width: 991px)', 'display', 'none']
        ])(
          'Should render proper styles for %s resolution',
          (mediaQueries, property, propertyValue) => {
            const wrapper = mount(
              <HomepageSectionOne {...defaultProps} />
            )

            expect(wrapper.find(HOMEPAGE_SECTION_ONE_RIGHT)).toHaveStyleRule(property, propertyValue, { media: mediaQueries })
          })
      })
    })
  })
})
