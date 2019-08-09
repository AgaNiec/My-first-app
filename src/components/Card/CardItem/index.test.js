import React from 'react'
import { shallow } from 'enzyme'

import CardItem from '.'

describe('CardItem', () => {
  const CARD_ITEM_DESCRIPTION = '[data-test="cardItemDescriptionH4"]'
  const CARD_ITEM_ICON = '[data-test="cardItemIcon"]'
  const CARD_ITEM_TITLE = '[data-test="cardItemTitleH3"]'
  const description = 'Custom Description'
  const icon = 'Custom Icon'
  const title = 'Custom Title'

  describe('Logic', () => {
    test.each([
      ['description', { description: description }, CARD_ITEM_DESCRIPTION, description],
      ['icon', { icon: icon }, CARD_ITEM_ICON, icon],
      ['title', { title: title }, CARD_ITEM_TITLE, title]
    ])('Should pass proper %s',
      (_, prop, selector, expected) => {
        const wrapper = shallow(
          <CardItem {...prop} />
        )

        expect(wrapper.find(selector).text()).toEqual(expected)
      }
    )
  })
})
