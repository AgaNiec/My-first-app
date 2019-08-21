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
`

export const SiteContentContainer = styled.div``

export const SiteFooterContainer = styled.div`
  background-color: ${PurpleLightBackground};
  border-top: 4px solid ${PurpleBorder};
  margin: 200px 0 0;
`
