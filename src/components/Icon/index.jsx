import React from 'react'

import { SVG } from './components'

const Icon = (props) => (
  <SVG {...props}>
    {props.children}
  </SVG>
)

export default Icon
