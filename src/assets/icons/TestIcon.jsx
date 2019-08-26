import React from 'react'

import Icon from '../../components/Icon'

const TestIcon = (props) => (
  <Icon xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' color={props.color}>
    <path d='M0 0h24v24H0z' fill='none' />
    <path d='M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z' />
  </Icon>
)

export default TestIcon
