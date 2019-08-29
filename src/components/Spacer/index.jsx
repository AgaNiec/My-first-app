import React from 'react'
import PropTypes from 'prop-types'

import { SpacerContainer } from './component'

const Spacer = ({ id }) => (
  <SpacerContainer
    data-test='spacerContainer'
    id={id}
  />
)

export default Spacer

Spacer.propTypes = {
  id: PropTypes.string
}
