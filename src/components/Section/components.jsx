import styled from 'styled-components'

import {
  PurpleDarkColor,
  PurpleLightColor,
  SoftOrangeColor
} from '../../assets/styles/colors'

export const SectionContainer = styled.div`
  text-align: left;
`

export const SectionTitle = styled.div`
  color: ${PurpleDarkColor};
  font-weight: 600;
`

export const SectionSeparatingLine = styled.hr`
  border: solid 2px ${SoftOrangeColor};
  display: inline-block;
  margin: 20px 0;
  width: 40px;
`

export const SectionDescription = styled.div`
  color: ${PurpleLightColor};
`
