import styled from 'styled-components'

export const HomepageSectionOneContainer = styled.div`
  margin: 150px 0 0;

  @media (min-width: 992px) {
    display: flex;
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
