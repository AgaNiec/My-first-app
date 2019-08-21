import React from 'react'
import PropTypes from 'prop-types'

import {
  SocialListContainer,
  SocialListElement
} from './components'

import SocialItem from '../SocialItem'

const SocialList = ({
  itemsList
}) => (
  <SocialListContainer>
    {
      itemsList.map(({ bgColor, href, icon, label }, index) => (
        <SocialListElement key={index}>
          <SocialItem
            bgColor={bgColor}
            data-test='socialListSocialItem'
            href={href}
            icon={icon}
            label={label}
          />
        </SocialListElement>
      ))
    }
  </SocialListContainer>
)

export default SocialList

SocialList.propTypes = {
  itemsList: PropTypes.arrayOf(
    PropTypes.shape({
      bgColor: PropTypes.string,
      href: PropTypes.string,
      icon: PropTypes.string,
      label: PropTypes.string
    })
  )
}

SocialList.defaultProps = {
  itemsList: []
}
