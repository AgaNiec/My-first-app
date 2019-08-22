import styled from 'styled-components'

export const FooterContainer = styled.div`
  @media (min-width: 992px) {
    display: flex;
    margin: 0 auto;
    max-width: 1200px;
    padding: 50px 0;
  }
`

export const FooterLeft = styled.div`
  @media (min-width: 992px) {
    flex: 1;
    margin: 0 30px 0 0;
  }

  @media (min-width: 568px) and (max-width: 991px) {
    margin: 40px 0;
  }

  
  @media (max-width: 567px) {
    margin: 30px 0;
  }
`

export const FooterLogo = styled.div`
  margin: 0 0 40px;

  @media (min-width: 992px) {
    text-align: left;
  }

  @media (max-width: 991px) {
    text-align: center;
  }
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
