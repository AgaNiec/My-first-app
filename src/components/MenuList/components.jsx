import styled from 'styled-components'

import { PurpleLightColor } from '../../assets/styles/colors'

export const MenuListContainer = styled.ul`
  ${props => {
    switch (props.position) {
      case 'footer': return 'display: inline;'
      case 'header': return 'display: flex;'
      default: return ``
    }
  }}
`

export const MenuLi = styled.li`
  ${props => {
    switch (props.position) {
      case 'footer': return 'margin: 0 0 15px;'
      case 'header': return 'margin: 0 25px 0 0;'
      default: return ``
    }
  }}
`

export const MenuLink = styled.a`
  color: ${PurpleLightColor};
  display: inline-block;
  text-decoration: none;
`
