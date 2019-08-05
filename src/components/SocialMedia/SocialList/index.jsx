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
      itemsList.map((e, index) => (
        <SocialListElement key={index}>
          <SocialItem
            bgColor={e.bgColor}
            data-test='socialListSocialItem'
            href={e.href}
            icon={e.icon}
            label={e.label}
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
