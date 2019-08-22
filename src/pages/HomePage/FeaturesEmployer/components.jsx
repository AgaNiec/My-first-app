import styled from 'styled-components'

export const FeaturesEmployerContainer = styled.div`
  @media (min-width: 1200px) {
    display: flex;
  }
`

export const FeaturesEmployerLeft = styled.div`
  @media (min-width: 1200px) {
    padding: 20px 100px 0 0;
  }
`

export const FeaturesEmployerSection = styled.div``

export const FeaturesEmployerButton = styled.div`
  margin: 50px 0 0;

  @media (min-width: 992px) {
    text-align: left;
  }

  @media (max-width: 991px) {
    text-align: center;
  }
`

export const FeaturesEmployerRight = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  @media (min-width: 1200px) {
    min-width: 640px;
  }

  @media (max-width: 1199px) {
    justify-content: center;
    margin: 60px auto 0;
    max-width: 640px;
  }
`

export const FeaturesEmployerRectangle = styled.div`
  margin-bottom: 20px;

  @media (min-width: 1200px) {
    &:nth-child(odd) {
      margin-right: 20px;
    }
  }

  @media (max-width: 1199px) {
    margin-right: 20px;
  }
`
