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
  <SocialListContainer data-test='socialListContainer'>
    {
      itemsList.map(({ bgColor, href, icon }, index) => (
        <SocialListElement key={index}>
          <SocialItem
            bgColor={bgColor}
            data-test='socialListSocialItem'
            href={href}
            icon={icon}
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
      icon: PropTypes.func
    })
  )
}

SocialList.defaultProps = {
  itemsList: []
}
