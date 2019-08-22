import styled from 'styled-components'

export const InnerWrapperContainer = styled.div`
  height: 100%;

  @media (min-width: 992px) {
    margin: 0 auto;
    max-width: 1500px;
    padding: 0 50px;
  }

  @media (min-width: 576px) and (max-width: 991px) {
    padding: 0 40px;
  }

  @media (max-width: 575px) {
    padding: 0 20px;
  }
`
