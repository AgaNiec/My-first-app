import React from 'react'
import { mount, shallow } from 'enzyme'
import 'jest-styled-components'

import Button from '.'

describe('Button', () => {
  const BUTTON_CONTAINER = '[data-test="buttonContainer"]'
  const BUTTON_CONTAINER_H4 = '[data-test="buttonContainerH4"]'
  const id = 'Custom Id'
  const label = 'Custom Label'
  const onClickSpy = jest.fn()
  const type = 'button'
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

  describe('UI', () => {
    describe('MediaQueries', () => {
      describe('ButtonContainer', () => {
        test.each([
          ['(min-width: 992px)', 'padding', '15px 45px'],
          ['(min-width: 768px) and (max-width: 991px)', 'padding', '15px 35px'],
          ['(min-width: 576px) and (max-width: 767px)', 'padding', '15px 25px'],
          ['(min-width: 480px) and (max-width: 575px)', 'padding', '12px 20px'],
          ['(max-width: 479px)', 'padding', '10px 15px']
        ])(
          'Should render proper styles for %s resolution',
          (mediaQueries, property, propertyValue) => {
            const wrapper = mount(
              <Button {...defaultProps} />
            )

            expect(wrapper.find(BUTTON_CONTAINER)).toHaveStyleRule(property, propertyValue, { media: mediaQueries })
          })
      })
    })
  })
})
