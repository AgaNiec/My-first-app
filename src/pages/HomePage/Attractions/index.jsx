import React from 'react'
import PropTypes from 'prop-types'

import {
  AttractionsButton,
  AttractionsContainer,
  AttractionsLeft,
  AttractionsRectangle,
  AttractionsRight,
  AttractionsSection
} from './components'

import Button from '../../../components/Button'
import Rectangle from '../../../components/Rectangle'
import Section from '../../../components/Section'

const Attractions = ({
  description,
  id,
  itemsList,
  label,
  onClick,
  title
}) => (
  <AttractionsContainer data-test='attractionsContainer'>
    <AttractionsLeft >
      <AttractionsSection>
        <Section
          data-test='attractionsSection'
          description={description}
          title={title}
        />
      </AttractionsSection>

      <AttractionsButton data-test='attractionsButtonContainer'>
        <Button
          data-test='attractionsButton'
          id={id}
          label={label}
          onClick={onClick}
        />
      </AttractionsButton>
    </AttractionsLeft>

    <AttractionsRight data-test='attractionsRight'>
      {
        itemsList.map(({ description, icon }, index) => (
          <AttractionsRectangle
            data-test='attractionsRectangleContainer'
            key={index}
          >
            <Rectangle
              data-test='attractionsRectangle'
              description={description}
              icon={icon}
            />
          </AttractionsRectangle>
        ))
      }
    </AttractionsRight>
  </AttractionsContainer>
)

export default Attractions

Attractions.propTypes = {
  description: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  itemsList: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      icon: PropTypes.func
    })
  ),
  label: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string
}

Attractions.defaultProps = {
  itemsList: []
}
