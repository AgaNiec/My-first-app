import styled from 'styled-components'

export const SpacerContainer = styled.div`
  @media (min-width: 992px) {
    margin: 0 0 250px;
  }

  @media (min-width: 576px) and (max-width: 991px) {
    margin: 0 0 150px;
  }

  @media (max-width: 575px) {
    margin: 0 0 100px;
  }
`
