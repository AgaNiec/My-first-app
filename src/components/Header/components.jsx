import styled from 'styled-components'

import { PurpleLightColor } from '../../assets/styles/colors'

export const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
`

export const HeaderLogo = styled.div``

export const HeaderMenuList = styled.div`
  @media (max-width: 991px) {
    display: none;
  }
`

export const HeaderLinkButton = styled.div`
  align-items: center;
  display: flex;
`

export const HeaderLinkContainer = styled.div`
  margin: 0 30px 0 0;
`

export const HeaderLink = styled.a`
  color: ${PurpleLightColor};
  text-decoration: none;
`

export const HeaderButton = styled.div``
