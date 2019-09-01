import React from 'react'
import { mount, shallow } from 'enzyme'
import 'jest-styled-components'

import CardItem from '.'

describe('CardItem', () => {
  const CARD_ITEM_CONTAINER = '[data-test="cardItemContainer"]'
  const CARD_ITEM_DESCRIPTION = '[data-test="cardItemDescriptionH4"]'
  const CARD_ITEM_ICON = '[data-test="cardItemIcon"]'
  const CARD_ITEM_ICON_CONTAINER = '[data-test="cardItemIconContainer"]'
  const CARD_ITEM_ICON_CONTENT = '[data-test="cardItemIconContent"]'
  const CARD_ITEM_TITLE = '[data-test="cardItemTitleH3"]'
  const description = 'Custom Description'
  const icon = () => null
  const title = 'Custom Title'

  describe('Logic', () => {
    it('Shlound render default component', () => {
      const wrapper = shallow(
        <CardItem />
      )

      expect(wrapper.find(CARD_ITEM_ICON).exists()).toBeFalsy()
    })

    it('Should pass proper icon', () => {
      const wrapper = shallow(
        <CardItem icon={icon} />
      )

      expect(wrapper.find(CARD_ITEM_ICON).type()).toEqual(icon)
    })

    describe('Props', () => {
      test.each([
        ['description', { description }, CARD_ITEM_DESCRIPTION, description],
        ['title', { title }, CARD_ITEM_TITLE, title]
      ])(
        'Should pass proper %s',
        (_, prop, selector, expected) => {
          const wrapper = shallow(
            <CardItem {...prop} />
          )

          expect(wrapper.find(selector).text()).toEqual(expected)
        }
      )
    })
  })

  describe('UI', () => {
    describe('MediaQueries', () => {
      describe('CardItemContainer', () => {
        test.each([
          ['(min-width: 768px)', 'padding', '30px 50px'],
          ['(min-width: 576px) and (max-width: 767px)', 'padding', '30px 40px'],
          ['(min-width: 480px) and (max-width: 575px)', 'padding', '20px 40px'],
          ['(max-width: 479px)', 'padding', '20px 30px']
        ])(
          'Should render proper styles for %s resolution',
          (mediaQueries, property, propertyValue) => {
            const wrapper = mount(
              <CardItem />
            )

            expect(wrapper.find(CARD_ITEM_CONTAINER)).toHaveStyleRule(property, propertyValue, { media: mediaQueries })
          })
      })

      describe('CardItemIconContainer', () => {
        test.each([
          ['(min-width: 768px)', 'margin', '0 50px 0 0'],
          ['(min-width: 480px) and (max-width: 767px)', 'margin', '0 40px 0 0'],
          ['(max-width: 479px)', 'display', 'none']
        ])(
          'Should render proper styles for %s resolution',
          (mediaQueries, property, propertyValue) => {
            const wrapper = mount(
              <CardItem />
            )

            expect(wrapper.find(CARD_ITEM_ICON_CONTAINER)).toHaveStyleRule(property, propertyValue, { media: mediaQueries })
          })
      })

      describe('CardItemIconContent', () => {
        test.each([
          ['(min-width: 992px)', 'height', '70px'],
          ['(min-width: 992px)', 'width', '70px'],
          ['(min-width: 768px) and (max-width: 991px)', 'height', '60px'],
          ['(min-width: 768px) and (max-width: 991px)', 'width', '60px'],
          ['(min-width: 480px) and (max-width: 767px)', 'height', '50px'],
          ['(min-width: 480px) and (max-width: 767px)', 'width', '50px']
        ])(
          'Should render proper styles for %s resolution',
          (mediaQueries, property, propertyValue) => {
            const wrapper = mount(
              <CardItem icon={icon} />
            )

            expect(wrapper.find(CARD_ITEM_ICON_CONTENT)).toHaveStyleRule(property, propertyValue, { media: mediaQueries })
          })
      })
    })
  })
})
