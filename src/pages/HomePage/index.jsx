import React from 'react'

import { HomepageSpacer } from './components'

import Banner from '../../components/Banner'
import CardList from '../../components/Card/CardList'
import CreatorCv from './CreatorCv'
import FeaturesEmployer from './FeaturesEmployer'
import HomepageSectionOne from './HomepageSectionOne'
import InnerWrapper from '../../components/InnerWrapper'
import Site from '../../components/Site'

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
      <HomepageSpacer />

      <HomepageSectionOne
        description={translations.homepageSectionOne.description}
        icon={translations.homepageSectionOne.icon}
        id={translations.homepageSectionOne.id}
        label={translations.homepageSectionOne.label}
        onClick={translations.homepageSectionOne.onClick}
        title={translations.homepageSectionOne.title}
      />

      <HomepageSpacer />

      <CardList itemsList={translations.cardList.itemsList} />

      <HomepageSpacer />

      <CreatorCv
        description={translations.creatorCv.description}
        id={translations.creatorCv.id}
        itemsList={translations.creatorCv.itemsList}
        label={translations.creatorCv.label}
        onClick={translations.creatorCv.onClick}
        title={translations.creatorCv.title}
      />

      <HomepageSpacer />

      <FeaturesEmployer
        description={translations.featuresEmployer.description}
        itemsList={translations.featuresEmployer.itemsList}
        label={translations.featuresEmployer.label}
        onClick={translations.featuresEmployer.onClick}
        title={translations.featuresEmployer.title}
      />

      <HomepageSpacer />

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
