import React from 'react'
import PropTypes from 'prop-types'

import {
  LocationButton,
  LocationContainer,
  LocationStepContainer,
  StepElement
} from './components'

import Button from '../../../components/Button'
import Section from '../../../components/Section'
import Step from '../../../components/Step'

const Location = ({
  description,
  id,
  itemsList,
  label,
  onClick,
  title
}) => (
  <LocationContainer>
    <Section
      align='center'
      data-test='locationSection'
      description={description}
      title={title}
    />

    <LocationStepContainer>
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
    </LocationStepContainer>

    <LocationButton>
      <Button
        data-test='locationButton'
        id={id}
        label={label}
        onClick={onClick}
      />
    </LocationButton>
  </LocationContainer>
)

export default Location

Location.propTypes = {
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

Location.defaultProps = {
  itemsList: []
}
