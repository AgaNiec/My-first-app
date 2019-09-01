import React from 'react'
import PropTypes from 'prop-types'

import {
  HeaderButton,
  HeaderContainer,
  HeaderLink,
  HeaderLinkButton,
  HeaderLinkContainer,
  HeaderLogoLink,
  HeaderMenuList
} from './components'
import { H4 } from '../Typography/components'

import Button from '../Button'
import Image from '../Image'
import InnerWrapper from '../InnerWrapper'
import MenuList from '../MenuList'

const Header = ({
  buttonId,
  buttonLabel,
  buttonOnClick,
  linkHref,
  linkLabel,
  linksList,
  logo
}) => (
  <InnerWrapper>
    <HeaderContainer>
      <HeaderLogoLink
        data-test='headerLogoLink'
        href='/'
      >
        <Image
          alt='StackFull'
          data-test='headerLogo'
          src={logo}
        />
      </HeaderLogoLink>

      <HeaderMenuList data-test='headerMenuList'>
        <MenuList
          data-test='menuList'
          linksList={linksList}
          position='header'
        />
      </HeaderMenuList>

      <HeaderLinkButton>
        <HeaderLinkContainer>
          <HeaderLink
            data-test='headerLink'
            href={linkHref}
          >
            <H4 data-test='headerLinkH4'>
              {linkLabel}
            </H4>
          </HeaderLink>
        </HeaderLinkContainer>

        <HeaderButton >
          <Button
            data-test='headerButton'
            id={buttonId}
            label={buttonLabel}
            onClick={buttonOnClick}
          />
        </HeaderButton>
      </HeaderLinkButton>
    </HeaderContainer>
  </InnerWrapper>
)

export default Header

Header.propTypes = {
  buttonId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  buttonLabel: PropTypes.string,
  buttonOnClick: PropTypes.func,
  linkHref: PropTypes.string,
  linkLabel: PropTypes.string,
  linksList: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      label: PropTypes.string
    })
  ),
  logo: PropTypes.string
}
