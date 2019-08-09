import styled from 'styled-components'

import {
  PurpleDarkColor,
  PurpleLightColor,
  WhiteColor
} from '../../../assets/styles/colors'

export const CardItemContainer = styled.div`
  background-color: ${WhiteColor};
  border-radius: 10px;
  box-shadow: 0 5px 25px 0 rgba(217, 209, 255, 0.3);
  cursor: pointer;
  display: flex;
  max-width: 460px;
  padding: 30px 80px 30px 0;
  
  &:hover {
    box-shadow: 0 15px 25px 0 rgba(217, 209, 255, 0.46);
  }
`

export const CardItemIcon = styled.div`
  padding: 80px 50px;
`

export const CardItemContent = styled.div`
  text-align: left;
`

export const CardItemTitle = styled.div`
  color: ${PurpleDarkColor};
  font-weight: 600;
  margin: 0 0 10px;
`

export const CardItemDescription = styled.div`
  color: ${PurpleLightColor};
`
