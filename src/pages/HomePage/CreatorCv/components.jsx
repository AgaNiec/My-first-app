import styled from 'styled-components'

export const CreatorCvContainer = styled.div``

export const CreatorCvStepContainer = styled.div`
  @media (min-width: 992px) {
    display: flex;
  }
  
  @media (min-width: 768px) {
    margin: 100px 0 0;
  }
  
  @media (min-width: 320px) and (max-width: 767px) {
    margin: 50px 0 0;
  }
`

export const StepElement = styled.div`
  @media (max-width: 991px) {
    display: flex;
    justify-content: center;
  }
`

export const CreatorCvButton = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    margin: 100px 0 0;
  }
  
  @media (min-width: 320px) and (max-width: 767px) {
    margin: 50px 0 0;
  }
`
