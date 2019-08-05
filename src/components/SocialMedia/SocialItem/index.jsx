import React from 'react'
import PropTypes from 'prop-types'

import {
  SocialItemIconContainer,
  SocialItemLink
} from './components'

import Icon from '../../Icon'
import { Small } from '../../Typography/components'

const SocialItem = ({
  bgColor,
  href,
  icon,
  label
}) => (
  <SocialItemLink
    bgColor={bgColor}
    data-test='SocialItemLink'
    href={href}
  >
    <SocialItemIconContainer>
      <Icon
        data-test='SocialItemIcon'
        icon={icon}
      />
    </SocialItemIconContainer>

    <Small data-test='SocialItemSmall'>{label}</Small>
  </SocialItemLink>
)

export default SocialItem

SocialItem.propTypes = {
  bgColor: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string
}
