import React from 'react'
import { shallow } from 'enzyme'

import CardList from '.'

describe('CardList', () => {
  const CARD = '[data-test="card"]'
  const itemsList = [
    {
      description: 'Custom Description',
      icon: 'Custom Icon',
      title: 'Custom Title'
    }
  ]

  describe('Logic', () => {
    test.each([
      ['description', itemsList[0].description],
      ['icon', itemsList[0].icon],
      ['title', itemsList[0].title]
    ])(
      'Should pass proper itemsList property',
      (propName, expected) => {
        const wrapper = shallow(
          <CardList itemsList={itemsList} />
        )

        expect(wrapper.find(CARD).prop(propName)).toEqual(expected)
      })
  })
})
