import styled from 'styled-components'

export const FooterContainer = styled.div`
  @media (min-width: 992px) {
    display: flex;
    margin: 0 auto;
    max-width: 1200px;
    padding: 50px 0;
  }

  @media (min-width: 768px) and (max-width: 991px){
    padding: 40px 0;
  }

  @media (max-width: 767px){
    padding: 30px 0;
  }
`

export const FooterLeft = styled.div`
  @media (min-width: 992px) {
    flex: 1;
    margin: 0 30px 0 0;
  }

  @media (min-width: 576px) and (max-width: 991px) {
    margin: 0 0 40px;
  }

  
  @media (max-width: 575px) {
    margin: 0 0 30px;
  }
`

export const FooterLogo = styled.div`
  @media (min-width: 992px) {
    margin: 0 0 20px;
    text-align: left;
  }

  @media (max-width: 991px) {
    margin: 0 auto 20px;
    text-align: center;
  }

  @media (min-width: 768px) {
    max-width: 150px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    max-width: 140px;
  }

  @media (min-width: 480px) and (max-width: 575px) {
    max-width: 130px;
  }

  @media (max-width: 479px) {
    max-width: 120px;
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
`
