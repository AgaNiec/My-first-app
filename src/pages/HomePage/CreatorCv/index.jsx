import React from 'react'
import PropTypes from 'prop-types'

import {
  CreatorCvButton,
  CreatorCvContainer,
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
    <Section
      align='center'
      data-test='creatorCvSection'
      description={description}
      title={title}
    />

    <CreatorCvStepContainer>
      {
        itemsList.map(({ description, number, title }, index) => (
          <StepElement key={index}>
            <Step
              data-test='stepContainer'
              description={description}
              number={number}
              title={title}
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
