import React from 'react'
import { shallow } from 'enzyme'

import CardItem from '.'

describe('CardItem', () => {
  const CARD_ITEM_DESCRIPTION = '[data-test="cardItemDescriptionH4"]'
  const CARD_ITEM_ICON = '[data-test="cardItemIcon"]'
  const CARD_ITEM_TITLE = '[data-test="cardItemTitleH3"]'
  const description = 'Custom Description'
  const icon = jest.fn()
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
})
