import React from 'react'
import PropTypes from 'prop-types'

import {
  SocialItemIconContainer,
  SocialItemLink
} from './components'

const SocialItem = ({
  bgColor,
  href,
  icon: Icon
}) => (
  <SocialItemLink
    bgColor={bgColor}
    data-test='SocialItemLink'
    href={href}
  >
    {
      Icon && (
        <SocialItemIconContainer>
          <Icon
            color='white'
            data-test='socialItemIcon'
          />
        </SocialItemIconContainer>
      )
    }
  </SocialItemLink>
)

export default SocialItem

SocialItem.propTypes = {
  bgColor: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.func
}
