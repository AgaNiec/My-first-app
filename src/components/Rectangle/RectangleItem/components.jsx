import styled from 'styled-components'

import {
  BlueLightColor,
  PurpleLightColor,
  WhiteColor
} from '../../../assets/styles/colors'

export const RectangleItemContainer = styled.div`
  background-color: ${WhiteColor};
  border-radius: 20px;
  border-top: solid 20px ${BlueLightColor};
  box-shadow: 0 10px 50px 0 rgba(217, 209, 255, 0.3);
  height: 100%;
  max-width: 300px;
  padding: 30px;
  text-align: left;
`

export const RectangleItemIcon = styled.div``

export const RectangleItemDescription = styled.div`
  color: ${PurpleLightColor};
  margin: 30px 0 0;
`
