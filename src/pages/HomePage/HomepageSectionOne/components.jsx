import styled from 'styled-components'

export const HomepageSectionOneContainer = styled.div`
  @media (min-width: 992px) {
    display: flex;
    margin: 250px 0 0;
  }

  @media (min-width: 576px) and (max-width: 991px) {
    margin: 200px 0 0;
  }

  @media (max-width: 575px) {
    margin: 150px 0 0;
  }
`

export const HomepageSectionOneLeft = styled.div`
  @media (min-width: 992px) {
    flex: 1;
  }
`

export const HomepageSectionOneButton = styled.div`
  margin: 50px 0 0;

  @media (max-width: 991px) {
    text-align: center;
  }
`

export const HomepageSectionOneRight = styled.div`
  @media (min-width: 992px) {
    flex: 1;
  }

  @media (max-width: 991px) {
    display: none;
  }
`
