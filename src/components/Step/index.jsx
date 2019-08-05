import React from 'react'
import PropTypes from 'prop-types'

import {
  StepContainer,
  StepContent,
  StepDescription,
  StepNumber,
  StepTitle
} from './components'

import {
  H3,
  H4,
  Large
} from '../Typography/components'

const Step = ({
  description,
  number,
  title
}) => (
  <StepContainer>
    <StepNumber>
      <Large data-test='stepNumberLarge'>{number}</Large>
    </StepNumber>

    <StepContent>
      <StepTitle>
        <H3 data-test='stepTitleH3'>{title}</H3>
      </StepTitle>

      <StepDescription>
        <H4 data-test='stepDescriptionH4'>{description}</H4>
      </StepDescription>
    </StepContent>
  </StepContainer>
)

export default Step

Step.propTypes = {
  description: PropTypes.string,
  number: PropTypes.string,
  title: PropTypes.string
}
