import styled from 'styled-components'

export const FooterContainer = styled.div`
  padding: 50px 80px 30px;

  @media (min-width: 992px) {
    display: flex;
  }
`

export const FooterLeft = styled.div`
  @media (min-width: 992px) {
    flex: 1;
    margin: 0 30px 0 0;
  }

  @media (min-width: 568px) and (max-width: 991px) {
    margin: 0 0 40px;
  }
`

export const FooterLogo = styled.div`
  margin: 0 0 40px;
  text-align: left;
`

export const FooterRight = styled.div`
  justify-content: space-between;
  
  @media (min-width: 992px) {
    flex: 3;
  }

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }

  @media (min-width: 568px) {
    display: flex;
  }

  @media (min-width: 568px) and (max-width: 767px) {
    & > div {
      padding-right: 30px;
      width: 50%;
    }
  }

  @media (max-width: 567px) {
    & > div {
      margin: 50px 0 0;
    }
  }
`
