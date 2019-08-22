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
  max-width: 800px;
  
  &:hover {
    box-shadow: 0 15px 25px 0 rgba(217, 209, 255, 0.46);
  }

  @media (min-width: 768px) {
    padding: 30px 80px 30px 0;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    padding: 30px 50px 30px 0;
  }

  @media (min-width: 480px) and (max-width: 575px) {
    padding: 20px 40px;
  }

  @media (max-width: 479px) {
    padding: 20px 30px;
  }
`

export const CardItemIcon = styled.div`
  @media (min-width: 480px){
    padding: 80px 50px;
  }

  @media (max-width: 479px) {
    display: none;
  }
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
