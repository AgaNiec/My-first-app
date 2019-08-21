import styled from 'styled-components'

import {
  PlumColor,
  PurpleDarkColor,
  WhiteColor
} from '../../assets/styles/colors'

export const BannerContainer = styled.div`
  background-color: ${PurpleDarkColor};
  border-radius: 20px;
  padding: 40px 60px;

  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
  }
`

export const BannerContent = styled.div`
  @media (min-width: 992px) {
    max-width: 600px;
    text-align: left;
  }

  @media (max-width: 991px) {
    text-align: center;
  }
`

export const BannerTitle = styled.div`
  color: ${WhiteColor};
`

export const BannerDescription = styled.div`
  color: ${PlumColor};
  margin: 20px 0 0;
`

export const BannerButton = styled.div`
  display: flex;

  @media (min-width: 992px) {
    align-items: center;
    margin: 0 0 0 30px;
  }

  @media (max-width: 991px) {
    justify-content: center;
    margin: 40px 0 0;
  }
`
