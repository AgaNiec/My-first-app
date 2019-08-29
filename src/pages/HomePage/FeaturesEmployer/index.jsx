import React from 'react'
import PropTypes from 'prop-types'

import {
  FeaturesEmployerButton,
  FeaturesEmployerContainer,
  FeaturesEmployerLeft,
  FeaturesEmployerRectangle,
  FeaturesEmployerRight,
  FeaturesEmployerSection
} from './components'

import Button from '../../../components/Button'
import RectangleItem from '../../../components/Rectangle/RectangleItem'
import Section from '../../../components/Section'

const FeaturesEmployer = ({
  description,
  id,
  itemsList,
  label,
  onClick,
  title
}) => (
  <FeaturesEmployerContainer>
    <FeaturesEmployerLeft >
      <FeaturesEmployerSection>
        <Section
          data-test='featuresEmployerSection'
          description={description}
          title={title}
        />
      </FeaturesEmployerSection>

      <FeaturesEmployerButton>
        <Button
          data-test='featuresEmployerButton'
          id={id}
          label={label}
          onClick={onClick}
        />
      </FeaturesEmployerButton>
    </FeaturesEmployerLeft>

    <FeaturesEmployerRight>
      {
        itemsList.map(({ description, icon }, index) => (
          <FeaturesEmployerRectangle key={index}>
            <RectangleItem
              data-test='featuresEmployerRectangleItem'
              description={description}
              icon={icon}
            />
          </FeaturesEmployerRectangle>
        ))
      }
    </FeaturesEmployerRight>
  </FeaturesEmployerContainer>
)

export default FeaturesEmployer

FeaturesEmployer.propTypes = {
  itemsList: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      icon: PropTypes.func
    })
  ),
  description: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  label: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string
}

FeaturesEmployer.defaultProps = {
  itemsList: []
}
