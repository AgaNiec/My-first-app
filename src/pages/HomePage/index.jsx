import React from 'react'

import { HomepageContainer } from './components'
import {
  FbColor,
  InColor,
  TwColor,
  YtColor
} from '../../assets/styles/colors'

import Banner from '../../components/Banner'
import Button from '../../components/Button'
import Card from '../../components/Card'
import CardList from '../../components/CardList'
import CreatorCv from '../../components/CreatorCv'
import FeaturesEmployer from '../../components/FeaturesEmployer'
import Footer from '../../components/Footer'
import FooterMenu from '../../components/FooterMenu'
import HomepageSectionOne from './HomepageSectionOne'
import InnerWrapper from '../../components/InnerWrapper'
import Rectangle from '../../components/Rectangle'
import Section from '../../components/Section'
import SocialList from '../../components/SocialMedia/SocialList'
import Step from '../../components/Step'

const Homepage = () => (
  <HomepageContainer>
    <InnerWrapper>
      <HomepageSectionOne
        icon='icon'
        description='Stwórz piękne CV, określ idealnego Pracodawcę i przekonaj go do siebie na targach pracy Career EXPO.'
        id='2'
        label='Załóż bezpłatne konto'
        onClick={() => null}
        title='Pomożemy Ci znaleźć wymarzoną pracę'
      />

      <CardList
        itemsList={[
          {
            description: 'Rekruter potrzebuje tylko 14 sekund, aby odrzucić Twoje CV i 4 minuty, aby je zaakceptować. Spraw, by zainteresował się Twoją osobą i zaprosił do kolejnego etapu rekrutacji!',
            icon: 'icon',
            title: 'Stwórz skuteczne CV'
          },
          {
            description: 'Dla jednego międzynarodowa firma to zaleta, a dla drugiego wada.  Praca zdalna może być zbawieniem lub udręką. Pokażemy Ci, którzy Pracodawcy mają to, czego szukasz!',
            icon: 'icon',
            title: 'Określ cechy idealnego Pracodawcy'
          },
          {
            description: 'Przyjdź na targi pracy Career EXPO i przekonaj wybranego Pracodawcę, aby zatrudnił właśnie Ciebie! Weź udział w Szybkich Rekrutacjach, bezpłatnych szkoleniach i konsultacjach kariery.',
            icon: 'icon',
            title: 'Poznajcie się… i aplikuj!'
          }
        ]}
      />

      <CreatorCv
        description='Stwórz skuteczne CV w mniej niż 10 minut.'
        title='Bezpłatny kreator CV'
        itemsList={[
          {
            description: 'Wybierz jeden z wielu atrakcyjnych szablonów stworzonych przez grafików i rekruterów! Wybierz CV, które rozkocha w sobie Twojego przyszłego Pracodawcę. ',
            number: '1',
            title: 'Wybierz szablon'
          },
          {
            description: 'Uzupełnij swoje dane i dodaj zdjęcie. Zapisz szablon jako jeden z wielu i dostosowuj do różnych stanowisk! ',
            number: '2',
            title: 'Uzupełnij dane'
          },
          {
            description: 'Pobierz CV lub aplikuj bezpośrednio z Career EXPO! Całkowicie bezpłatnie.',
            number: '3',
            title: 'Pobierz swoje CV'
          }
        ]}
        label='Chcę stworzyć skuteczne CV'
        onClick={() => null}
        id='3'
      />

      <FeaturesEmployer
        description='Najpierw powiedz nam kim jesteś i czego oczekujesz od życia, a my zarekomendujemy Ci Pracodawcę, który odpowiada Twoim wartościom. Choć związek z firmą najczęściej nie jest wieczny, to w pracy spędzamy 1/3 swojego życia - dopasuj więc kulturę organizacyjną do Twoich preferencji, abyś czuł się jak ryba w wodzie!'
        title='Określ cechy idealnego Pracodawcy'
        onClick={() => null}
        label='Załóż bezpłatne konto'
        itemsList={[
          {
            description: 'Wolisz samodzielną pracę i formalną atmosferę?',
            icon: 'icon'
          },
          {
            description: 'Mamy takich Pracodawców!'
          },
          {
            description: 'Preferujesz pracę zdalną i dużą dozę zaufania?',
            icon: 'icon'
          },
          {
            description: 'Chcesz pracować w dużym zespole i jeździć na światowej rangi konferencje?',
            icon: 'icon'
          }
        ]}
      />

      <Footer />
      <br />
      <br />
      <br />
      <br />
      ========================================================================================================================================================================
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
