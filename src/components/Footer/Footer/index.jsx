import React from 'react'
import PropTypes from 'prop-types'

import {
  FooterContainer,
  FooterLeft,
  FooterLogoLink,
  FooterRight
} from './components'

import FooterMenu from '../FooterMenu'
import Image from '../../Image'
import InnerWrapper from '../../InnerWrapper'
import SocialList from '../../SocialMedia/SocialList'

const Footer = ({
  linksListCenter,
  linksListLeft,
  linksListRight,
  logo,
  socialItemsList,
  titleCenter,
  titleLeft,
  titleRight
}) => (
  <InnerWrapper>
    <FooterContainer>
      <FooterLeft>
        <FooterLogoLink>
          <Image
            alt='StackFull'
            data-test='footerLogo'
            src={logo}
          />
        </FooterLogoLink>

        <SocialList
          data-test='footerSocialList'
          itemsList={socialItemsList}
        />
      </FooterLeft>

      <FooterRight>
        <FooterMenu
          data-test='footerMenuLeft'
          linksList={linksListLeft}
          title={titleLeft}
        />
        <FooterMenu
          data-test='footerMenuCenter'
          linksList={linksListCenter}
          title={titleCenter}
        />
        <FooterMenu
          data-test='footerMenuRight'
          linksList={linksListRight}
          title={titleRight}
        />
      </FooterRight>
    </FooterContainer>
  </InnerWrapper>
)

export default Footer

const linksListPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    href: PropTypes.string,
    label: PropTypes.string
  })
)

Footer.propTypes = {
  linksListCenter: linksListPropTypes,
  linksListLeft: linksListPropTypes,
  linksListRight: linksListPropTypes,
  logo: PropTypes.string,
  socialItemsList: PropTypes.arrayOf(
    PropTypes.shape({
      bgColor: PropTypes.string,
      href: PropTypes.string,
      icon: PropTypes.func,
      label: PropTypes.string
    })
  ),
  titleCenter: PropTypes.string,
  titleLeft: PropTypes.string,
  titleRight: PropTypes.string
}
