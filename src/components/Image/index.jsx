import React from 'react'
import PropTypes from 'prop-types'

import { ImageComponent } from './components'

import noPhotoImage from '../../assets/images/noPhoto.png'

const Image = ({
  alt,
  src
}) => (
  <ImageComponent
    alt={alt}
    src={src}
  />
)

export default Image

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string
}

Image.defaultProps = {
  alt: '',
  src: noPhotoImage
}
