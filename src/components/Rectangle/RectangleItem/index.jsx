import React from 'react'
import PropTypes from 'prop-types'

import {
  RectangleItemContainer,
  RectangleItemDescription,
  RectangleItemIcon
} from './components'

import { H4 } from '../../Typography/components'

const RectangleItem = ({
  description,
  icon: Icon
}) => (
  <RectangleItemContainer>
    {
      Icon && (
        <RectangleItemIcon>
          <Icon data-test='rectangleIcon' />
        </RectangleItemIcon>
      )
    }

    <RectangleItemDescription>
      <H4 data-test='rectangleItemDescriptionH4'>{description}</H4>
    </RectangleItemDescription>
  </RectangleItemContainer>
)

export default RectangleItem

RectangleItem.prototypes = {
  description: PropTypes.string,
  icon: PropTypes.func
}
