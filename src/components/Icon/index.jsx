import React from 'react'
import PropTypes from 'prop-types'

import { IconContainer } from './components'

const Icon = ({
  icon
}) => (
  <IconContainer>{icon}</IconContainer>
)

export default Icon

Icon.propTypes = {
  icon: PropTypes.string
}
