import React from 'react'
import PropTypes from 'prop-types'

import {
  SiteContainer,
  SiteContentContainer,
  SiteFooterContainer,
  SiteHeaderContainer
} from './components'

import Footer from '../Footer/Footer'
import Header from '../Header'

const Site = ({
  buttonId,
  buttonLabel,
  buttonOnClick,
  children,
  linkHref,
  linkLabel,
  linksListCenter,
  linksListLeft,
  linksListRight,
  logo,
  socialItemsList,
  titleCenter,
  titleLeft,
  titleRight
}) => (
  <SiteContainer>
    <SiteHeaderContainer>
      <Header
        buttonId={buttonId}
        buttonLabel={buttonLabel}
        buttonOnClick={buttonOnClick}
        data-test='siteHeaderContainer'
        linkHref={linkHref}
        linkLabel={linkLabel}
        logo={logo}
      />
    </SiteHeaderContainer>

    <SiteContentContainer>
      {children}
    </SiteContentContainer>

    <SiteFooterContainer>
      <Footer
        data-test='siteFooterContainer'
        logo={logo}
        linksListCenter={linksListCenter}
        linksListLeft={linksListLeft}
        linksListRight={linksListRight}
        socialItemsList={socialItemsList}
        titleCenter={titleCenter}
        titleLeft={titleLeft}
        titleRight={titleRight}
      />
    </SiteFooterContainer>
  </SiteContainer>
)

export default Site

Site.propTypes = {
  buttonId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  buttonLabel: PropTypes.string,
  buttonOnClick: PropTypes.func,
  children: PropTypes.string,
  linkHref: PropTypes.string,
  logo: PropTypes.string,
  linkLabel: PropTypes.string,
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
