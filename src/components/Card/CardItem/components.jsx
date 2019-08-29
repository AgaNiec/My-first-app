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
    padding: 30px 50px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    padding: 30px 40px;
  }

  @media (min-width: 480px) and (max-width: 575px) {
    padding: 20px 40px;
  }

  @media (max-width: 479px) {
    padding: 20px 30px;
  }
`

export const CardItemIconContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    margin: 0 50px 0 0;
  }

  @media (min-width: 480px) and (max-width: 767px) {
    margin: 0 40px 0 0;
  }

  @media (max-width: 479px) {
    display: none;
  }
`

export const CardItemIconContent = styled.div`
  @media (min-width: 992px){
    height: 70px;
    width: 70px;
  }

  @media (min-width: 768px) and (max-width: 991px){
    height: 60px;
    width: 60px;
  }

  @media (min-width: 480px) and (max-width: 767px){
    height: 50px;
    width: 50px;
  }
`

export const CardItemContent = styled.div``

export const CardItemTitle = styled.div`
  color: ${PurpleDarkColor};
  font-weight: 600;
  margin: 0 0 10px;
`

export const CardItemDescription = styled.div`
  color: ${PurpleLightColor};
`
