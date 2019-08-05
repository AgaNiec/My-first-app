import styled from 'styled-components'

import {
  PinkColor,
  PurpleDarkColor,
  PurpleLightColor
} from '../../assets/styles/colors'

export const StepContainer = styled.div`
  display: flex;
  max-width: 400px;
  padding: 20px;
`

export const StepNumber = styled.div`
  align-items: start;
  color: ${PinkColor};
  display: flex;
  font-weight: bold;
  justify-content: center;
  min-width: 60px;
`

export const StepContent = styled.div`
  text-align: left;
`

export const StepTitle = styled.div`
  color: ${PurpleDarkColor};
  font-weight: 600;
`

export const StepDescription = styled.div`
  color: ${PurpleLightColor};
  margin: 10px 0 0;
`
