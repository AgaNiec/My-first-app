import React from 'react'
import { mount, shallow } from 'enzyme'
import 'jest-styled-components'

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

  describe('UI', () => {
    describe('MediaQueries', () => {
      describe('SpacerContainer', () => {
        test.each([
          ['(min-width: 992px)', 'margin', '50px 0 200px'],
          ['(min-width: 576px) and (max-width: 991px)', 'margin', '0 0 150px'],
          ['(max-width: 575px)', 'margin', '0 0 120px']
        ])(
          'Should render proper styles for %s resolution',
          (mediaQueries, property, propertyValue) => {
            const wrapper = mount(
              <Spacer />
            )

            expect(wrapper.find(SPACER_CONTAINER)).toHaveStyleRule(property, propertyValue, { media: mediaQueries })
          })
      });
    });
  });
})
