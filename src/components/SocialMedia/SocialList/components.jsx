import styled from 'styled-components'

export const SocialListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    justify-content: center;
  }
`

export const SocialListElement = styled.li`
  margin: 0 10px 10px 0;

  &:last-child {
    margin: 0 0 10px;
  }
`
