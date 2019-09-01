import React from 'react'
import PropTypes from 'prop-types'

import { InnerWrapperContainer } from './components'

const InnerWrapper = ({
  children
}) => (
  <InnerWrapperContainer data-test='innerWrapperContainer'>
    {children}
  </InnerWrapperContainer>
)

export default InnerWrapper

InnerWrapper.propTypes = {
  children: PropTypes.any
}
