import React from 'react'
import { shallow } from 'enzyme'

import Spacer from '.'

describe('Spacer', () => {
  const SPACER_CONTAINER = '[data-test="spacerContainer"]'
  const id = 'Custom Id'

  describe('Logic', () => {
    it('Should pass proper id property ', () => {
      const wrapper = shallow(
        <Spacer id={id} />
      )

      expect(wrapper.find(SPACER_CONTAINER).prop('id')).toEqual(id)
    })
  })
})
