import React from 'react'
import { shallow } from 'enzyme'

import Location from '.'

describe('Location', () => {
  const CREATOR_CV_BUTTON = '[data-test="locationButton"]'
  const CREATOR_CV_SECTION = '[data-test="locationSection"]'
  const STEP_CONTAINER = '[data-test="stepContainer"]'
  const description = 'Custom Description'
  const id = 0
  const itemsList = [
    {
      description: 'Custom Description',
      number: 'Custom Number',
      title: 'Custom Title'
    }
  ]
  const label = 'Custom Label'
  const onClickSpy = jest.fn()
  const title = 'Custom Title'
  const defaultProps = {
    id: id
  }

  describe('Logic', () => {
    it('Should render default component', () => {
      const wrapper = shallow(
        <Location {...defaultProps} />
      )

      expect(wrapper.find(STEP_CONTAINER).exists()).toBeFalsy()
    })

    describe('Props', () => {
      test.each([
        ['description', { description }, CREATOR_CV_SECTION, description],
        ['id', { id }, CREATOR_CV_BUTTON, id],
        ['description', { itemsList }, STEP_CONTAINER, itemsList[0].description],
        ['number', { itemsList }, STEP_CONTAINER, itemsList[0].number],
        ['title', { itemsList }, STEP_CONTAINER, itemsList[0].title],
        ['label', { label }, CREATOR_CV_BUTTON, label],
        ['onClick', { onClick: onClickSpy }, CREATOR_CV_BUTTON, onClickSpy],
        ['title', { title }, CREATOR_CV_SECTION, title]
      ])(
        'Should pass proper %s property',
        (propName, props, selector, expected) => {
          const wrapper = shallow(
            <Location
              {...defaultProps}
              {...props}
            />
          )

          expect(wrapper.find(selector).prop(propName)).toEqual(expected)
        })
    })
  })
})
