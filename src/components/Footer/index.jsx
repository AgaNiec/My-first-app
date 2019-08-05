import React from 'react'
import PropTypes from 'prop-types'

import {
  FooterConteiner,
  FooterLeft,
  FooterLogo,
  FooterMenuContainer,
  FooterRight,
  FooterSocialMedia,
  FooterSocialMediaContent
} from './components'

import FooterMenu from '../FooterMenu'
import SocialList from '../SocialMedia/SocialList'

const Footer = ({
  linksListCenter,
  linksListLeft,
  linksListRight,
  socialItemsList,
  titleCenter,
  titleLeft,
  titleRight
}) => (
  <FooterConteiner>
    <FooterLeft>
      <FooterSocialMedia>
        <FooterLogo>LOGO</FooterLogo>

        <FooterSocialMediaContent>
          <SocialList
            itemsList={socialItemsList}
            data-test='footerSocialList'
          />
        </FooterSocialMediaContent>
      </FooterSocialMedia>
    </FooterLeft>

    <FooterRight>
      <FooterMenuContainer>
        <FooterMenu
          title={titleLeft}
          linksList={linksListLeft}
          data-test='footerMenuLeft'
        />
        <FooterMenu
          title={titleCenter}
          linksList={linksListCenter}
          data-test='footerMenuCenter'
        />
        <FooterMenu
          title={titleRight}
          linksList={linksListRight}
          data-test='footerMenuRight'
        />
      </FooterMenuContainer>
    </FooterRight>
  </FooterConteiner>
)

export default Footer

Footer.propTypes = {
  linksListCenter: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      label: PropTypes.string
    })
  ),
  linksListLeft: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      label: PropTypes.string
    })
  ),
  linksListRight: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      label: PropTypes.string
    })
  ),
  socialItemsList: PropTypes.arrayOf(
    PropTypes.shape({
      bgColor: PropTypes.string,
      href: PropTypes.string,
      icon: PropTypes.string,
      label: PropTypes.string
    })
  ),
  titleCenter: PropTypes.string,
  titleLeft: PropTypes.string,
  titleRight: PropTypes.string
}
