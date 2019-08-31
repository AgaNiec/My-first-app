import React from 'react'
import { shallow } from 'enzyme'

import Button from '.'

describe('Button', () => {
  const BUTTON_CONTAINER = '[data-test="buttonContainer"]'
  const BUTTON_CONTAINER_H4 = '[data-test="buttonContainerH4"]'
  const id = 'Custom Id'
  const label = 'Custom Label'
  const onClickSpy = jest.fn()
  const type = 'reset'
  const defaultProps = {
    id: id
  }

  describe('Logic', () => {
    it('Should pass proper default property', () => {
      const wrapper = shallow(
        <Button {...defaultProps} />
      )

      expect(wrapper.find(BUTTON_CONTAINER).prop('type')).toEqual('button')
    })

    it('Should pass proper label', () => {
      const wrapper = shallow(
        <Button
          {...defaultProps}
          label={label}
        />
      )

      expect(wrapper.find(BUTTON_CONTAINER_H4).text()).toEqual(label)
    })

    it('Should trigger onClick callback', () => {
      const wrapper = shallow(
        <Button
          {...defaultProps}
          onClick={onClickSpy}
        />
      )

      wrapper.find(BUTTON_CONTAINER).simulate('click')

      expect(onClickSpy).toBeCalled()
    })

    describe('Props', () => {
      test.each([
        ['id', { id }, id],
        ['type', { type }, type]
      ])(
        'Should pass proper %s property',
        (propName, props, expected) => {
          const wrapper = shallow(
            <Button
              {...defaultProps}
              {...props}
            />
          )

          expect(wrapper.find(BUTTON_CONTAINER).prop(propName)).toEqual(expected)
        })
    })
  })
})
