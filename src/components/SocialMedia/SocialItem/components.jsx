import styled from 'styled-components'

import { WhiteColor } from '../../../assets/styles/colors'

export const SocialItemLink = styled.a`
  align-items: center;
  background-color: ${props => props.bgColor};
  border-radius: 7px;
  color: ${WhiteColor};
  display: inline-flex;
  padding: 5px 10px;
  text-decoration: none;
`

export const SocialItemIconContainer = styled.div`
  margin: 0 6px 0 0;
`
