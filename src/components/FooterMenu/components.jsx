import styled from 'styled-components'

import {
  PurpleDarkColor,
  PurpleLightColor
} from '../../assets/styles/colors'

export const FooterMenuContainer = styled.div`
  text-align: left;
`

export const FooterMenuTitle = styled.div`
 color: ${PurpleDarkColor}; 
 font-weight: 600;
 margin: 0 0 30px;
`

export const FooterMenuListContainer = styled.ul``

export const FooterMenuLi = styled.li`
  margin: 0 0 15px;
`

export const FooterMenuLink = styled.a`
  color: ${PurpleLightColor};
  display: inline-block;
  text-decoration: none;
`
