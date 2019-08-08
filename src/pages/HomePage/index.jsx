import React from 'react'

import {
  FbColor,
  InColor,
  TwColor,
  YtColor
} from '../../assets/styles/colors'

import { HomepageContainer } from './components'
import { translations } from '../../translations'

import Banner from '../../components/Banner'
import Button from '../../components/Button'
import Card from '../../components/Card'
import CardList from '../../components/CardList'
import CreatorCv from './CreatorCv'
import FeaturesEmployer from '../../components/FeaturesEmployer'
import Footer from '../../components/Footer'
import FooterMenu from '../../components/FooterMenu'
import Header from '../../components/Header'
import HomepageSectionOne from './HomepageSectionOne'
import InnerWrapper from '../../components/InnerWrapper'
import Rectangle from '../../components/Rectangle'
import Section from '../../components/Section'
import SocialList from '../../components/SocialMedia/SocialList'
import Step from '../../components/Step'

const Homepage = () => (
  <HomepageContainer>
    <Header
      buttonLabel={translations.header.label}
      href={translations.header.href}
      icon={translations.header.icon}
      id={translations.header.id}
      linkLabel={translations.header.text}
      onClick={translations.header.onClick}
    />
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

      <Footer
        icon={translations.footer.icon}
        linksListCenter={translations.footer.menuCenter.linksList}
        linksListLeft={translations.footer.menuLeft.linksList}
        linksListRight={translations.footer.menuRight.linksList}
        socialItemsList={translations.footer.socialItemsList}
        titleCenter={translations.footer.menuCenter.title}
        titleLeft={translations.footer.menuLeft.title}
        titleRight={translations.footer.menuRight.title}
      />
      <br />
      <br />
      <br />
      <br />
      ========================================================================================================================================================================
      <br />
      <br />
      <br />
      <br />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Section
        description='Przykładowy tekst'
        title='Przykładowy tekst'
      />

      <Button
        id='1'
        label='TEST'
      />

      <Card
        description='Rekruter potrzebuje tylko 14 sekund, aby odrzucić Twoje CV i 4 minuty, aby je zaakceptować. Spraw, by zainteresował się Twoją osobą i zaprosił do kolejnego etapu rekrutacji!'
        icon='icon'
        title='Stwórz skuteczne CV'
      />

      <Step
        description='Wybierz jeden z wielu atrakcyjnych szablonów stworzonych przez grafików i rekruterów! Wybierz CV, które rozkocha w sobie Twojego przyszłego Pracodawcę. '
        number='1'
        title='Wybierz szablon'
      />

      <Banner
        description='Skorzystaj z naszego kreatora CV. Wybierz jeden  z wielu szablonów i dostosuj go do własnych potrzeb'
        id='2'
        label='Stwórz CV'
        title='Stwórz swoje niepowtrzalane CV'
      />

      <Rectangle
        description='Wolisz samodzielną pracę i formalną atmosferę?'
        icon='icon'
      />

      <FooterMenu
        linksList={[
          {
            href: 'www.google.com',
            label: 'Wiedza'
          },
          {
            href: 'www.google.com',
            label: 'FAQ'
          },
          {
            href: 'www.google.com',
            label: 'Regulamin serwisu'
          },
          {
            href: 'www.google.com',
            label: 'Polityka prywatności'
          }
        ]}
        title='Przykładowy tekst'
      />

      <SocialList
        itemsList={[
          {
            bgColor: FbColor,
            href: 'www.facebook.com',
            icon: 'FB',
            label: 'Lubie to!'
          },
          {
            bgColor: InColor,
            href: 'www.linkedin.com',
            icon: 'IN',
            label: 'Obserwuj'
          },
          {
            bgColor: TwColor,
            href: 'www.twitter.com',
            icon: 'TW',
            label: 'Obserwuj @aasfasasf'
          },
          {
            bgColor: YtColor,
            href: 'www.youtube.com',
            icon: 'YT',
            label: 'YouTube'
          }
        ]}
      />
    </InnerWrapper>
  </HomepageContainer>
)

export default Homepage
