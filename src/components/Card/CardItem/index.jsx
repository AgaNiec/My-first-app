import React from 'react'
import PropTypes from 'prop-types'

import {
  CardItemContainer,
  CardItemContent,
  CardItemDescription,
  CardItemIconContainer,
  CardItemIconContent,
  CardItemTitle
} from './components'

import {
  H3,
  H4
} from '../../Typography/components'

const CardItem = ({
  description,
  icon: Icon,
  title
}) => (
  <CardItemContainer>
    <CardItemIconContainer data-test='cardItemIconContainer'>
      {
        Icon && (
          <CardItemIconContent>
            <Icon data-test='cardItemIcon' />
          </CardItemIconContent>
        )
      }
    </CardItemIconContainer>

    <CardItemContent>
      <CardItemTitle>
        <H3 data-test='cardItemTitleH3'>{title}</H3>
      </CardItemTitle>

      <CardItemDescription>
        <H4 data-test='cardItemDescriptionH4'>{description}</H4>
      </CardItemDescription>
    </CardItemContent>
  </CardItemContainer>
)

export default CardItem

CardItem.propTypes = {
  description: PropTypes.string,
  icon: PropTypes.func,
  title: PropTypes.string
}
