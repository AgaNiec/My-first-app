import React from 'react'
import { shallow } from 'enzyme'

import Image from '.'

import noPhotoImage from '../../assets/images/noPhoto.png'

describe('Image', () => {
  const alt = 'Custom Text'
  const src = 'Custom Src'

  describe('Logic', () => {
    it('Should render default component', () => {
      const wrapper = shallow(
        <Image />
      )

      expect(wrapper.prop('alt')).toEqual('')
      expect(wrapper.prop('src')).toEqual(noPhotoImage)
    })

    describe('Props', () => {
      test.each([
        ['alt', { alt }, alt],
        ['src', { src }, src]
      ])(
        'Should pass proper %s property',
        (propName, props, expected) => {
          const wrapper = shallow(
            <Image {...props} />
          )

          expect(wrapper.prop(propName)).toEqual(expected)
        })
    })
  })
})
