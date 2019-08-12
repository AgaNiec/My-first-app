import React from 'react'
import PropTypes from 'prop-types'

import {
  FooterMenuContainer,
  FooterMenuTitle
} from './components'

import FooterMenuList from '../FooterMenuList'
import { H4 } from '../../Typography/components'

const FooterMenu = ({
  linksList,
  title
}) => (
  <FooterMenuContainer>
    <FooterMenuTitle>
      <H4 data-test='footerMenuTitleH4'>{title}</H4>
    </FooterMenuTitle>

    <FooterMenuList
      data-test='footerMenuList'
      linksList={linksList}
    />

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
