import React from 'react'
import { shallow } from 'enzyme'

import Icon from '.'

import { IconContainer } from './components'

describe('Icon', () => {
  const customIcon = 'Custom Icon'

  describe('Logic', () => {
    it('Sholuld pass propper icon', () => {
      const wrapper = shallow(
        <Icon icon={customIcon} />
      )

      expect(wrapper.find(IconContainer).text()).toEqual(customIcon)
    })
  })
})
