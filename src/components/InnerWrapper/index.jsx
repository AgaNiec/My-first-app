import React from 'react'
import PropTypes from 'prop-types'

import { InnerWrapperContainer } from './components'

const InnerWrapper = ({
  children
}) => (
  <InnerWrapperContainer>{children}</InnerWrapperContainer>
)

export default InnerWrapper

InnerWrapper.propTypes = {
  children: PropTypes.any
}
