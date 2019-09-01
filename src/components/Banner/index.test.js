import React from 'react'
import { mount, shallow } from 'enzyme'
import 'jest-styled-components'

import Banner from '.'

describe('Banner', () => {
  const BANNER_BUTTON = '[data-test="bannerButton"]'
  const BANNER_BUTTON_CONTENT = '[data-test="bannerButtonContent"]'
  const BANNER_CONTAINER = '[data-test="bannerContainer"]'
  const BANNER_CONTENT = '[data-test="bannerContent"]'
  const BANNER_DESCRIPTION_H4 = '[data-test="bannerDescriptionH4"]'
  const BANNER_TITLE_H1 = '[data-test="bannerTitleH1"]'
  const description = 'Custom Description'
  const id = 0
  const label = 'Custom Label'
  const onClickSpy = jest.fn()
  const title = 'Custom Title'
  const defaultProps = {
    id: id
  }

  describe('Logic', () => {
    test.each([
      ['description', { description }, BANNER_DESCRIPTION_H4, description],
      ['title', { title }, BANNER_TITLE_H1, title]
    ])('Should pass proper %s',
      (_, prop, selector, expected) => {
        const wrapper = shallow(
          <Banner
            {...defaultProps}
            {...prop}
          />
        )

        expect(wrapper.find(selector).text()).toEqual(expected)
      }
    )

    test.each([
      ['id', { id }, id],
      ['label', { label }, label],
      ['onClick', { onClick: onClickSpy }, onClickSpy]
    ])('Should pass proper %s',
      (propName, props, expected) => {
        const wrapper = shallow(
          <Banner
            {...defaultProps}
            {...props}
          />
        )

        expect(wrapper.find(BANNER_BUTTON).prop(propName)).toEqual(expected)
      }
    )
  })

  describe('UI', () => {
    describe('MediaQueries', () => {
      describe('BannerContainer', () => {
        test.each([
          ['(min-width: 992px)', 'display', 'flex'],
          ['(min-width: 992px)', 'justify-content', 'space-between'],
          ['(min-width: 992px)', 'padding', '40px 60px'],
          ['(min-width: 768px) and (max-width: 991px)', 'padding', '40px'],
          ['(min-width: 480px) and (max-width: 767px)', 'padding', '30px'],
          ['(max-width: 479px)', 'padding', '30px 20px']
        ])(
          'Should render proper styles for %s resolution',
          (mediaQueries, property, propertyValue) => {
            const wrapper = mount(
              <Banner {...defaultProps} />
            )

            expect(wrapper.find(BANNER_CONTAINER)).toHaveStyleRule(property, propertyValue, { media: mediaQueries })
          })
      })

      describe('BannerContent', () => {
        test.each([
          ['(min-width: 992px)', 'max-width', '600px'],
          ['(min-width: 992px)', 'text-align', 'left'],
          ['(max-width: 991px)', 'text-align', 'center']
        ])(
          'Should render proper styles for %s resolution',
          (mediaQueries, property, propertyValue) => {
            const wrapper = mount(
              <Banner {...defaultProps} />
            )

            expect(wrapper.find(BANNER_CONTENT)).toHaveStyleRule(property, propertyValue, { media: mediaQueries })
          })
      })

      describe('BannerButton', () => {
        test.each([
          ['(min-width: 992px)', 'align-items', 'center'],
          ['(min-width: 992px)', 'margin', '0 0 0 30px'],
          ['(max-width: 991px)', 'justify-content', 'center'],
          ['(max-width: 991px)', 'margin', '40px 0 0']
        ])(
          'Should render proper styles for %s resolution',
          (mediaQueries, property, propertyValue) => {
            const wrapper = mount(
              <Banner {...defaultProps} />
            )

            expect(wrapper.find(BANNER_BUTTON_CONTENT)).toHaveStyleRule(property, propertyValue, { media: mediaQueries })
          })
      })
    })
  })
})
