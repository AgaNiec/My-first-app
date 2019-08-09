import React from 'react'
import PropTypes from 'prop-types'

import {
  HeaderButton,
  HeaderContainer,
  HeaderLink,
  HeaderLinkContainer,
  HeaderLogo,
  HeaderLinkButton
} from './components'

import Button from '../Button'
import { H4 } from '../Typography/components'

const Header = ({
  buttonId,
  buttonLabel,
  buttonOnClick,
  linkHref,
  linkLabel,
  logo
}) => (
  <HeaderContainer>
    <HeaderLogo data-test='headerLogo'>
      {logo}
    </HeaderLogo>

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
  logo: PropTypes.string
}
