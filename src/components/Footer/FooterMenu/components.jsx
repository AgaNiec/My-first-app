import styled from 'styled-components'

import {
  PurpleDarkColor
} from '../../../assets/styles/colors'

export const FooterMenuContainer = styled.div`
  @media (max-width: 991px) {
    margin: 0 0 30px;
  }

  @media (min-width: 568px) and (max-width: 767px) {
    padding: 0 30px 0 0;
    width: 50%;
  }
`

export const FooterMenuTitle = styled.div`
  color: ${PurpleDarkColor}; 
  font-weight: 600;
  margin: 0 0 30px;
`
