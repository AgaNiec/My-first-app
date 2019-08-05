import React from 'react'
import { shallow } from 'enzyme'

import Card from '.'

describe('Card', () => {
  const CARD_DESCRIPTION = '[data-test="cardDescriptionH4"]'
  const CARD_ICON = '[data-test="cardIcon"]'
  const CARD_TITLE = '[data-test="cardTitleH3"]'
  const description = 'Custom Description'
  const icon = 'Custom Icon'
  const title = 'Custom Title'

  describe('Logic', () => {
    test.each([
      ['description', { description: description }, CARD_DESCRIPTION, description],
      ['icon', { icon: icon }, CARD_ICON, icon],
      ['title', { title: title }, CARD_TITLE, title]
    ])('Should pass proper %s',
      (_, prop, selector, expected) => {
        const wrapper = shallow(
          <Card {...prop} />
        )

        expect(wrapper.find(selector).text()).toEqual(expected)
      }
    )
  })
})
