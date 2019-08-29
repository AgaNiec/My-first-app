import React from 'react'
import { shallow } from 'enzyme'

import Banner from '.'

describe('Banner', () => {
  const BANNER_BUTTON = '[data-test="bannerButton"]'
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
})
