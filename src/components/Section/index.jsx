import React from 'react'
import PropTypes from 'prop-types'

import {
  SectionContainer,
  SectionDescription,
  SectionSeparatingLine,
  SectionTitle
} from './components'

import {
  H1,
  H3
} from '../Typography/components'

const Section = ({
  description,
  title
}) => (
  <SectionContainer>
    <SectionTitle>
      <H1 data-test='sectionTitleH1'>{title}</H1>
    </SectionTitle>

    <SectionSeparatingLine />

    <SectionDescription >
      <H3 data-test='sectionDescriptionH3'>{description}</H3>
    </SectionDescription>
  </SectionContainer>
)

export default Section

Section.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
}
