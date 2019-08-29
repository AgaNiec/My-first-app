import {
  FbColor,
  InColor,
  TwColor,
  YtColor
} from './assets/styles/colors'

import BillardIcon from './assets/icons/Billard'
import CodingIcon from './assets/icons/Coding'
import ComputerIcon from './assets/icons/Computer'
import ControllerIcon from './assets/icons/Controller'
import FacebookIcon from './assets/icons/Facebook'
import IdeaIcon from './assets/icons/Idea'
import InstagramIcon from './assets/icons/Instagram'
import JavaScriptIcon from './assets/icons/JavaScript'
import LogoImage from './assets/images/logo.png'
import TwitterIcon from './assets/icons/Twitter'
import VRIcon from './assets/icons/VR'
import YoutubeIcon from './assets/icons/Youtube'

export const translations = {
  banner: {
    description: 'Zawsze szukamy firm, organizacji i ludzi, którzy są zaangażowani w społeczność i chcą pomóc nam stworzyć niesamowite i przyjazne wydarzenie.',
    id: '6',
    label: 'Zostań sponsorem',
    title: 'Zareklamuj swoją firmę'
  },

  cardList: {
    itemsList: [
      {
        description: 'JavaScript przeszedł długą drogę od początków bycia językiem skryptowym. Obecnie praktycznie wszystkie projekty oprogramowania używają JavaScript. Dołącz do naszych ekscytujących sesji i warsztatów na międzynarodowej konferencji Full-Stack, aby przenieść swoje umiejętności JS na wyższy poziom.',
        icon: JavaScriptIcon,
        title: 'JavaScript jest wszędzie!'
      },
      {
        description: 'Angular, React, Vue.js, NativeScript, Electron, Node.js: dowiedz się, jak korzystać z JavaScript od frontendu do backendu, w natywnych aplikacjach mobilnych, komputerowych, a nawet w natywnym programowaniu w chmurze. Zbuduj swój własny zestaw narzędzi!',
        icon: CodingIcon,
        title: 'Zostań full-stack developerem'
      },
      {
        description: 'JavaScript ciągle się rozwija. Od najlepszych praktyk w aplikacjach jednostronnych po progresywnych aplikacjach internetowych i obliczeniach bezserwerowych po rozwoju blockchaina: Nasi uznani eksperci przedstawiają najnowsze trendy i najnowsze technologie technologii JavaScript i poszerzają ofertę o JS tam, gdzie jest to ważne.',
        icon: IdeaIcon,
        title: 'Zainspiruj się'
      }
    ]
  },

  location: {
    description: 'Hala Stulecia, ul. Wystawowa 1, Wrocław',
    id: '3',
    itemsList: [
      {
        description: 'Z okazji piątej edycji dla każdego przygotowaliśmy zestaw upominków oraz masę niesamowitych atrakcji!',
        number: '5',
        title: 'Edycja'
      },
      {
        description: 'W tym roku nasza konferencja będzie trwać aż trzy dni. Wystąpi na niej łącznie 55 prelegentów z całego świata!',
        number: '3',
        title: 'Dni'
      },
      {
        description: 'Tym razem przygotowaliśmy dla was dwie sceny pełne niesamowitych prelekcji z tematyki Front-end & Back-end.',
        number: '2',
        title: 'Sceny'
      }
    ],
    label: 'Dowiedz się więcej',
    onClick: () => null,
    title: '05 - 08 Luty 2019'
  },

  attractions: {
    description: 'W tym roku przygotowaliśmy dla wszystkich naszych uczestników masę niesamowitych atrakcji!',
    itemsList: [
      {
        description: '25+ stanowisk z najlepszymi grami na PS4, Xbox One X & Nintendo!',
        icon: ControllerIcon
      },
      {
        description: '20+ profesionalnych stanowisk gejmerskich wyposarzonych w najnowsze gry PC',
        icon: ComputerIcon
      },
      {
        description: '15 stanowisk z najlepszymi efektami VR dzięki czemu użytkownicy konferencji mogą przenieść się do magicznego świata.',
        icon: VRIcon
      },
      {
        description: '8 stołów bilardowych i 12 stołów do piłkarzyków oraz 20 tarcz do gry w darty!',
        icon: BillardIcon
      }
    ],
    label: 'Sprawdź pozostałe atrakcje',
    onClick: () => null,
    title: 'A w przerwie między prelekcjami...'
  },

  footer: {
    socialItemsList: [
      {
        bgColor: FbColor,
        href: 'www.facebook.com',
        icon: FacebookIcon
      },
      {
        bgColor: InColor,
        href: 'www.instagram.com',
        icon: InstagramIcon
      },
      {
        bgColor: TwColor,
        href: 'www.twitter.com',
        icon: TwitterIcon
      },
      {
        bgColor: YtColor,
        href: 'www.youtube.com',
        icon: YoutubeIcon
      }
    ],
    menuCenter: {
      linksList: [
        {
          href: '/kontakt',
          label: 'Kontakt'
        },
        {
          href: '/partnerzy',
          label: 'Partnerzy'
        },
        {
          href: '/faq',
          label: 'FAQ'
        },
        {
          href: '/regulamin',
          label: 'Regulamin'
        },
        {
          href: '/polityka-prywatnosci',
          label: 'Polityka prywatności'
        }
      ],
      title: 'O nas'
    },
    menuLeft: {
      linksList: [
        {
          href: '/prelegenci',
          label: 'Prelegenci'
        },
        {
          href: '/warsztaty',
          label: 'Warsztaty'
        },
        {
          href: '/harmonogram',
          label: 'Harmonogram'
        },
        {
          href: '/miejsce-spotkania',
          label: 'Miejsce spotkania'
        },
        {
          href: '/sponsorzy',
          label: 'Sponsorzy'
        }
      ],
      title: 'Dla odwiedzających'
    },
    menuRight: {
      linksList: [
        {
          href: '/2018',
          label: '2018'
        },
        {
          href: '/2017',
          label: '2017'
        },
        {
          href: '/2016',
          label: '2016'
        },
        {
          href: '/2015',
          label: '2015'
        }
      ],
      title: 'Poprzednie edycje'
    }
  },

  header: {
    buttonId: '1',
    buttonLabel: 'Kup bilet',
    buttonOnClick: () => null,
    linkHref: '/login',
    linkLabel: 'Zaloguj się',
    linksList: [
      {
        href: '/#dlaczego-js',
        label: 'Dlaczego JS?'
      },
      {
        href: '/#lokalizacja',
        label: 'Lokalizacja'
      },
      {
        href: '/#atrakcje',
        label: 'Atrakcje'
      },
      {
        href: '/#sponsorzy',
        label: 'Sponsorzy'
      }
    ],
    logo: LogoImage
  },

  homepageSectionOne: {
    description: 'StackFull Conf to najwieksza konferencja Webowa w Europie. Znajdziecie u nas pełno nowinek zarówno z świata Back-endu jak i Front-endu.',
    icon: 'icon',
    id: '2',
    label: 'Poznaj prelegentów',
    onClick: () => null,
    title: 'Dołącz do nas na StackFull Conf!'
  }
}
