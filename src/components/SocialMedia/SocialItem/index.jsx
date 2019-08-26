import React from 'react'
import PropTypes from 'prop-types'

import { SocialItemLink } from './components'

const SocialItem = ({
  Icon,
  bgColor,
  href
}) => (
  <SocialItemLink
    bgColor={bgColor}
    data-test='SocialItemLink'
    href={href}
  >
    <Icon color='white' />
  </SocialItemLink>
)

export default SocialItem

SocialItem.propTypes = {
  Icon: PropTypes.func,
  bgColor: PropTypes.string,
  href: PropTypes.string
}
