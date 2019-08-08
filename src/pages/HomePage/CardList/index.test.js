import React from 'react'
import { shallow } from 'enzyme'

import CardList from '.'

describe('CardList', () => {
  const CARD = '[data-test="card"]'
  const CARD_LIST_ELEMENT = '[data-test="cardListElement"]'
  const itemsList = [
    {
      description: 'Custom Description',
      icon: 'Custom Icon',
      title: 'Custom Title'
    }
  ]

  describe('Logic', () => {
    it('Should render default component', () => {
      const wrapper = shallow(
        <CardList />
      )

      expect(wrapper.find(CARD_LIST_ELEMENT).exists()).toBeFalsy()
    })

    describe('Props', () => {
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
})
