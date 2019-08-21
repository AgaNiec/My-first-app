import styled from 'styled-components'

import {
  PurpleDarkColor,
  PurpleLightColor,
  SoftOrangeColor
} from '../../assets/styles/colors'

export const SectionContainer = styled.div`
  ${props => {
    switch (props.align) {
      case 'center': return 'text-align: center;'
      case 'left': return 'text-align: left;'
      default: return ''
    }
  }}
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
