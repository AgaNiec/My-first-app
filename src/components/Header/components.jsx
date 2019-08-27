import styled from 'styled-components'

import { PurpleLightColor } from '../../assets/styles/colors'

export const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
`

export const HeaderLogo = styled.div`
  @media (min-width: 768px) {
    max-width: 150px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    max-width: 140px;
  }

  @media (min-width: 480px) and (max-width: 575px) {
    max-width: 130px;
  }

  @media (max-width: 479px) {
    max-width: 120px;
  }
`

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
