import styled from 'styled-components'

import { WhiteColor } from '../../../assets/styles/colors'

export const SocialItemLink = styled.a`
  background-color: ${props => props.bgColor};
  border-radius: 7px;
  color: ${WhiteColor};
  display: inline-flex;
  padding: 5px 10px;
  text-decoration: none;
`
