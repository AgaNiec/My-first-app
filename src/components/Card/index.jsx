import React from 'react'
import PropTypes from 'prop-types'

import {
  CardContainer,
  CardContent,
  CardDescription,
  CardIcon,
  CardTitle
} from './components'

import {
  H3,
  H4
} from '../Typography/components'

const Card = ({
  description,
  icon,
  title
}) => (
  <CardContainer>
    <CardIcon data-test='cardIcon'>{icon}</CardIcon>

    <CardContent>
      <CardTitle>
        <H3 data-test='cardTitleH3'>{title}</H3>
      </CardTitle>

      <CardDescription>
        <H4 data-test='cardDescriptionH4'>{description}</H4>
      </CardDescription>
    </CardContent>
  </CardContainer>
)

export default Card

Card.propTypes = {
  description: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string
}
