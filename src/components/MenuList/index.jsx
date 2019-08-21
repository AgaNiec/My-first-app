import React from 'react'
import PropTypes from 'prop-types'

import {
  MenuLi,
  MenuLink,
  MenuListContainer
} from './components'

import { H5 } from '../Typography/components'

const MenuList = ({
  as,
  linksList
}) => (
  <MenuListContainer
    as={as}
    data-test='menuListContainer'
  >
    {
      linksList.map(({ href, label }, index) => (
        <MenuLi
          as={as}
          data-test='menuLi'
          key={index}
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
  as: PropTypes.oneOf([
    'footer',
    'header'
  ]),
  linksList: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      label: PropTypes.string
    })
  )
}

MenuList.defaultProps = {
  as: 'footer',
  linksList: []
}
