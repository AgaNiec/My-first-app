import React from 'react'
import PropTypes from 'prop-types'

import {
  CreatorCvButton,
  CreatorCvContainer,
  CreatorCvSection,
  CreatorCvStepContainer,
  StepElement
} from './components'

import Button from '../../../components/Button'
import Section from '../../../components/Section'
import Step from '../../../components/Step'

const CreatorCv = ({
  description,
  id,
  itemsList,
  label,
  onClick,
  title
}) => (
  <CreatorCvContainer>
    <CreatorCvSection>
      <Section
        data-test='creatorCvSection'
        description={description}
        title={title}
      />
    </CreatorCvSection>

    <CreatorCvStepContainer>
      {
        itemsList.map((e, index) => (
          <StepElement key={index}>
            <Step
              data-test='stepContainer'
              description={e.description}
              number={e.number}
              title={e.title}
            />
          </StepElement>
        ))
      }
    </CreatorCvStepContainer>

    <CreatorCvButton>
      <Button
        data-test='creatorCvButton'
        id={id}
        label={label}
        onClick={onClick}
      />
    </CreatorCvButton>
  </CreatorCvContainer>
)

export default CreatorCv

CreatorCv.propTypes = {
  description: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  itemsList: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      number: PropTypes.string,
      title: PropTypes.string
    })
  ),
  label: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string
}

CreatorCv.defaultProps = {
  itemsList: []
}
