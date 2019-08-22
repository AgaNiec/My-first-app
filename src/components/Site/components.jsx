import styled from 'styled-components'

import {
  PurpleBorder,
  PurpleLightBackground
} from '../../assets/styles/colors'

export const SiteContainer = styled.div`
  font-family: 'Poppins', sans-serif;
`

export const SiteHeaderContainer = styled.div`
  background-color: ${PurpleLightBackground};
  border-bottom: 4px solid ${PurpleBorder};
  height: 100px;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`

export const SiteContentContainer = styled.div``

export const SiteFooterContainer = styled.div`
  background-color: ${PurpleLightBackground};
  border-top: 4px solid ${PurpleBorder};

  @media (min-width: 992px) {
    margin: 200px 0 0;
  }

  @media (min-width: 576px) and (max-width: 991px) {
    margin: 180px 0 0;
  }

  @media (max-width: 575px) {
    margin: 150px 0 0;
  }
`
