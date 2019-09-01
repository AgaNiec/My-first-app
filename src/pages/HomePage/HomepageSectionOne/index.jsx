import React from 'react'
import PropTypes from 'prop-types'

import {
  HomepageSectionOneButton,
  HomepageSectionOneContainer,
  HomepageSectionOneLeft,
  HomepageSectionOneRight
} from './components'

import Button from '../../../components/Button'
import Icon from '../../../components/Icon'
import Section from '../../../components/Section'

const HomepageSectionOne = ({
  description,
  icon,
  id,
  label,
  onClick,
  title
}) => (
  <HomepageSectionOneContainer data-test='homepageSectionOneContainer'>
    <HomepageSectionOneLeft data-test='homepageSectionOneLeft'>
      <Section
        data-test='homepageSectionOneSection'
        description={description}
        title={title}
      />

      <HomepageSectionOneButton data-test='homepageSectionOneButtonContainer'>
        <Button
          data-test='homepageSectionOneButton'
          id={id}
          label={label}
          onClick={onClick}
        />
      </HomepageSectionOneButton>

    </HomepageSectionOneLeft>

    <HomepageSectionOneRight data-test='homepageSectionOneRight'>
      <Icon
        data-test='homepageSectionOneIcon'
        icon={icon}
      />
    </HomepageSectionOneRight>
  </HomepageSectionOneContainer>
)

export default HomepageSectionOne

HomepageSectionOne.propTypes = {
  description: PropTypes.string,
  icon: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  label: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string
}
