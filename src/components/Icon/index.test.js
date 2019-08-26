import React from 'react'
import { mount } from 'enzyme'
import 'jest-styled-components'

import Icon from '.'

describe('Icon', () => {
  const color = 'Custom Color'

  describe('Logic', () => {
    it('Should pass proper color property', () => {
      const wrapper = mount(
        <Icon color={color} />
      )

      expect(wrapper).toHaveStyleRule('fill', color)
    })
  })
})
