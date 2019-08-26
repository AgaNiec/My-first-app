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
      itemsList.map(({ bgColor, href, Icon }, index) => (
        <SocialListElement key={index}>
          <SocialItem
            Icon={Icon}
            bgColor={bgColor}
            data-test='socialListSocialItem'
            href={href}
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
      Icon: PropTypes.func,
      bgColor: PropTypes.string,
      href: PropTypes.string
    })
  )
}

SocialList.defaultProps = {
  itemsList: []
}
