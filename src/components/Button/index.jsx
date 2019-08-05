import React from 'react'
import PropTypes from 'prop-types'

import { ButtonContainer } from './components'

import { H4 } from '../Typography/components'

const Button = ({
  id,
  label,
  onClick
}) => (
  <ButtonContainer
    data-test='buttonContainer'
    id={id}
    onClick={onClick}
  >
    <H4 data-test='buttonContainerH4'>{label}</H4>
  </ButtonContainer>
)

export default Button

Button.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  label: PropTypes.string,
  onClick: PropTypes.func
}
