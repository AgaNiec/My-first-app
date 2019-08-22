import styled from 'styled-components'

import { WhiteColor } from '../../assets/styles/colors'

export const ButtonContainer = styled.button`
  background: linear-gradient(93deg, #fd007a, #e0057b);
  border-radius: 40px;
  border: none;
  color: ${WhiteColor};
  cursor: pointer;
  font-weight: 600;

  @media (min-width: 992px) {
    padding: 15px 45px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 15px 35px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    padding: 15px 25px;
  }

  @media (min-width: 480px) and (max-width: 575px) {
    padding: 12px 20px;
  }

  @media (max-width: 479px) {
    padding: 10px 15px;
  }
`
