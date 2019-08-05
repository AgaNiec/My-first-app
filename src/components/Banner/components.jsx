import styled from 'styled-components'

import {
  PlumColor,
  PurpleDarkColor,
  WhiteColor
} from '../../assets/styles/colors'

export const BannerContainer = styled.div`
  background-color: ${PurpleDarkColor};
  border-radius: 20px;
  display: flex;
  padding: 40px 60px;
`

export const BannerContent = styled.div`
  flex: 5;
  max-width: 600px;
  padding: 0 30px 0 0;
  text-align: left;
`

export const BannerTitle = styled.div`
  color: ${WhiteColor};
`

export const BannerDescription = styled.div`
  color: ${PlumColor};
  margin: 20px 0 0;
`

export const BannerButton = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: end;
`
