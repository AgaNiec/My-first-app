import React from 'react'

import { HomepageContainer } from './components'
import { translations } from '../../translations'

import Banner from '../../components/Banner'
import CardList from '../../components/Card/CardList'
import CreatorCv from './CreatorCv'
import FeaturesEmployer from './FeaturesEmployer'
import HomepageSectionOne from './HomepageSectionOne'
import InnerWrapper from '../../components/InnerWrapper'

const Homepage = () => (
  <HomepageContainer>
    <InnerWrapper>
      <HomepageSectionOne
        description={translations.homepageSectionOne.description}
        icon={translations.homepageSectionOne.icon}
        id={translations.homepageSectionOne.id}
        label={translations.homepageSectionOne.label}
        onClick={translations.homepageSectionOne.onClick}
        title={translations.homepageSectionOne.title}
      />

      <CardList itemsList={translations.cardList.itemsList} />

      <CreatorCv
        description={translations.creatorCv.description}
        id={translations.creatorCv.id}
        itemsList={translations.creatorCv.itemsList}
        label={translations.creatorCv.label}
        onClick={translations.creatorCv.onClick}
        title={translations.creatorCv.title}
      />

      <FeaturesEmployer
        description={translations.featuresEmployer.description}
        itemsList={translations.featuresEmployer.itemsList}
        label={translations.featuresEmployer.label}
        onClick={translations.featuresEmployer.onClick}
        title={translations.featuresEmployer.title}
      />

      <Banner
        description={translations.banner.description}
        id={translations.banner.id}
        label={translations.banner.label}
        title={translations.banner.title}
      />
    </InnerWrapper>
  </HomepageContainer>
)

export default Homepage
