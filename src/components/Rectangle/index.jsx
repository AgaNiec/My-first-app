import React from 'react'
import PropTypes from 'prop-types'

import {
  RectangleContainer,
  RectangleDescription,
  RectangleIcon
} from './components'

import { H4 } from '../Typography/components'

const Rectangle = ({
  description,
  icon: Icon
}) => (
  <RectangleContainer>
    {
      Icon && (
        <RectangleIcon>
          <Icon data-test='rectangleIcon' />
        </RectangleIcon>
      )
    }

    <RectangleDescription>
      <H4 data-test='rectangleDescriptionH4'>{description}</H4>
    </RectangleDescription>
  </RectangleContainer>
)

export default Rectangle

Rectangle.prototypes = {
  description: PropTypes.string,
  icon: PropTypes.func
}