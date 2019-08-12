import React from 'react'
import PropTypes from 'prop-types'

import {
  FooterMenuLi,
  FooterMenuLink,
  FooterMenuListContainer
} from './components'

import { H5 } from '../../Typography/components'

const FooterMenuList = ({
  linksList
}) => (
  <FooterMenuListContainer>
    {
      linksList.map(({ href, label }, index) => (
        <FooterMenuLi key={index}>
          <FooterMenuLink
            data-test='footerMenuLink'
            href={href}
          >
            <H5 data-test='footerMenuLinksListH5'>{label}</H5>
          </FooterMenuLink>
        </FooterMenuLi>
      ))
    }
  </FooterMenuListContainer>
)

export default FooterMenuList

FooterMenuList.propType = {
  linksList: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      label: PropTypes.string
    })
  )
}

FooterMenuList.defaultProps = {
  linksList: []
}
