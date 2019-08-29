import React from 'react'

import Attractions from './Attractions'
import Banner from '../../components/Banner'
import CardList from '../../components/Card/CardList'
import HomepageSectionOne from './HomepageSectionOne'
import InnerWrapper from '../../components/InnerWrapper'
import Location from './Location'
import Site from '../../components/Site'
import Spacer from '../../components/Spacer'

import { translations } from '../../translations'

const Homepage = () => (
  <Site
    buttonId={translations.header.buttonId}
    buttonLabel={translations.header.buttonLabel}
    buttonOnClick={translations.header.buttonOnClick}
    linkHref={translations.header.linkHref}
    linkLabel={translations.header.linkLabel}
    linksListCenter={translations.footer.menuCenter.linksList}
    linksListLeft={translations.footer.menuLeft.linksList}
    linksListRight={translations.footer.menuRight.linksList}
    logo={translations.header.logo}
    socialItemsList={translations.footer.socialItemsList}
    titleCenter={translations.footer.menuCenter.title}
    titleLeft={translations.footer.menuLeft.title}
    titleRight={translations.footer.menuRight.title}
    linksList={translations.header.linksList}
  >
    <InnerWrapper>
      <HomepageSectionOne
        description={translations.homepageSectionOne.description}
        icon={translations.homepageSectionOne.icon}
        id={translations.homepageSectionOne.id}
        label={translations.homepageSectionOne.label}
        onClick={translations.homepageSectionOne.onClick}
        title={translations.homepageSectionOne.title}
      />

      <Spacer id='dlaczego-js' />

      <CardList itemsList={translations.cardList.itemsList} />

      <Spacer id='lokalizacja' />

      <Location
        description={translations.location.description}
        id={translations.location.id}
        itemsList={translations.location.itemsList}
        label={translations.location.label}
        onClick={translations.location.onClick}
        title={translations.location.title}
      />

      <Spacer id='atrakcje' />

      <Attractions
        description={translations.attractions.description}
        itemsList={translations.attractions.itemsList}
        label={translations.attractions.label}
        onClick={translations.attractions.onClick}
        title={translations.attractions.title}
      />

      <Spacer id='sponsorzy' />

      <Banner
        description={translations.banner.description}
        id={translations.banner.id}
        label={translations.banner.label}
        title={translations.banner.title}
      />
    </InnerWrapper>
  </Site>
)

export default Homepage
