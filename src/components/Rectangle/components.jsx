import styled from 'styled-components'

import {
  BlueLightColor,
  PurpleLightColor,
  WhiteColor
} from '../../assets/styles/colors'

export const RectangleContainer = styled.div`
  background-color: ${WhiteColor};
  border-radius: 20px;
  border-top: solid 20px ${BlueLightColor};
  box-shadow: 0 10px 50px 0 rgba(217, 209, 255, 0.3);
  height: 100%;
  max-width: 300px;
  text-align: left;

  @media (min-width: 480px) {
    padding: 30px;
  }

  @media (max-width: 479px) {
    padding: 20px;
  }
`

export const RectangleIcon = styled.div`
  @media (min-width:768px){
    width: 50px;
    height: 50px;
  }

  @media (max-width: 767px) {
    height: 40px;
    width: 40px;
  }
`

export const RectangleDescription = styled.div`
  color: ${PurpleLightColor};
  margin: 30px 0 0;
`
