import styled from 'styled-components'

export const AttractionsContainer = styled.div`
  @media (min-width: 1200px) {
    display: flex;
  }
`

export const AttractionsLeft = styled.div`
  @media (min-width: 1200px) {
    padding: 20px 100px 0 0;
  }
`

export const AttractionsSection = styled.div``

export const AttractionsButton = styled.div`
  margin: 50px 0 0;

  @media (min-width: 992px) {
    text-align: left;
  }

  @media (max-width: 991px) {
    text-align: center;
  }
`

export const AttractionsRight = styled.div`
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

export const AttractionsRectangle = styled.div`
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
