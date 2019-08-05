import React from 'react'
import PropTypes from 'prop-types'

import {
  FooterMenuContainer,
  FooterMenuLi,
  FooterMenuLink,
  FooterMenuTitle,
  FooterMenuListContainer
} from './components'

import {
  H4,
  H5
} from '../Typography/components'

const FooterMenu = ({
  linksList,
  title
}) => (
  <FooterMenuContainer>
    <FooterMenuTitle>
      <H4 data-test='footerMenuTitleH4'>{title}</H4>
    </FooterMenuTitle>

    <FooterMenuListContainer>
      {linksList.map(({ href, label }, index) => (
        <FooterMenuLi key={index}>
          <FooterMenuLink
            data-test='footerMenuLink'
            href={href}
          >
            <H5 data-test='footerMenuLinksListH5'>{label}</H5>
          </FooterMenuLink>
        </FooterMenuLi>
      ))}
    </FooterMenuListContainer>
  </FooterMenuContainer>
)

export default FooterMenu

FooterMenu.propTypes = {
  linksList: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      label: PropTypes.string
    })
  ),
  title: PropTypes.string
}

FooterMenu.defaultProps = {
  linksList: [
    {
      href: '',
      label: ''
    }
  ]
}
