import React from 'react'
import PropTypes from 'prop-types'

import {
  MenuLi,
  MenuLink,
  MenuListContainer
} from './components'

import { H5 } from '../Typography/components'

const MenuList = ({
  linksList,
  position
}) => (
  <MenuListContainer
    data-test='menuListContainer'
    position={position}
  >
    {
      linksList.map(({ href, label }, index) => (
        <MenuLi
          data-test='menuLi'
          key={index}
          position={position}
        >
          <MenuLink
            data-test='menuLink'
            href={href}
          >
            <H5 data-test='menuLinksListH5'>{label}</H5>
          </MenuLink>
        </MenuLi>
      ))
    }
  </MenuListContainer>
)

export default MenuList

MenuList.propType = {
  linksList: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      label: PropTypes.string
    })
  ),
  position: PropTypes.oneOf([
    'footer',
    'header'
  ])
}

MenuList.defaultProps = {
  linksList: [],
  position: 'footer'
}
