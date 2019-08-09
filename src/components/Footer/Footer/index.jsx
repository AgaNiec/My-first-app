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
  <FooterConteiner>
    <FooterLeft>
      <FooterSocialMedia>
        <FooterLogo data-test='footerLogo'>
          {logo}
        </FooterLogo>

        <FooterSocialMediaContent>
          <SocialList
            data-test='footerSocialList'
            itemsList={socialItemsList}
          />
        </FooterSocialMediaContent>
      </FooterSocialMedia>
    </FooterLeft>

    <FooterRight>
      <FooterMenuContainer>
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
  logo: PropTypes.string,
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
