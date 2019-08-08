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

import Button from '../../../components/Button'
import { H4 } from '../../../components/Typography/components'

const Header = ({
  buttonLabel,
  href,
  icon,
  id,
  linkLabel,
  onClick
}) => (
  <HeaderContainer>
    <HeaderLogo data-test='headerLogoIcon'>
      {icon}
    </HeaderLogo>

    <HeaderLinkButton>
      <HeaderLinkContainer>
        <HeaderLink
          data-test='headerLink'
          href={href}
        >
          <H4 data-test='headerLinkH4'>
            {linkLabel}
          </H4>
        </HeaderLink>
      </HeaderLinkContainer>

      <HeaderButton >
        <Button
          data-test='headerButton'
          id={id}
          label={buttonLabel}
          onClick={onClick}
        />
      </HeaderButton>
    </HeaderLinkButton>
  </HeaderContainer>
)

export default Header

Header.propTypes = {
  buttonLabel: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  linkLabel: PropTypes.string,
  onClick: PropTypes.func
}
