import React from 'react'
import PropTypes from 'prop-types'

import {
  BannerButton,
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerTitle
} from './components'

import {
  H1,
  H4
} from '../Typography/components'

import Button from '../Button'

const Banner = ({
  description,
  id,
  label,
  onClick,
  title
}) => (
  <BannerContainer>
    <BannerContent>
      <BannerTitle>
        <H1 data-test='bannerTitleH1'>{title}</H1>
      </BannerTitle>

      <BannerDescription>
        <H4 data-test='bannerDescriptionH4'>{description}</H4>
      </BannerDescription>
    </BannerContent>

    <BannerButton>
      <Button
        data-test='bannerButton'
        id={id}
        label={label}
        onClick={onClick}
      />
    </BannerButton>
  </BannerContainer>
)

export default Banner

Banner.prototypes = {
  description: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  label: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string
}
