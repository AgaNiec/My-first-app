import {
  FbColor,
  InColor,
  TwColor,
  YtColor
} from './assets/styles/colors'

export const translations = {
  banner: {
    description: 'Skorzystaj z naszego kreatora CV. Wybierz jeden  z wielu szablonów i dostosuj go do własnych potrzeb',
    id: '6',
    label: 'Stwórz CV',
    title: 'Stwórz swoje niepowtrzalane CV'
  },

  cardList: {
    itemsList: [
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
    ]
  },

  creatorCv: {
    description: 'Stwórz skuteczne CV w mniej niż 10 minut.',
    title: 'Bezpłatny kreator CV',
    label: 'Chcę stworzyć skuteczne CV',
    onClick: () => null,
    id: '3',
    itemsList: [
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
    ]
  },

  featuresEmployer: {
    description: 'Najpierw powiedz nam kim jesteś i czego oczekujesz od życia, a my zarekomendujemy Ci Pracodawcę, który odpowiada Twoim wartościom. Choć związek z firmą najczęściej nie jest wieczny, to w pracy spędzamy 1/3 swojego życia - dopasuj więc kulturę organizacyjną do Twoich preferencji, abyś czuł się jak ryba w wodzie!',
    title: 'Określ cechy idealnego Pracodawcy',
    onClick: () => null,
    label: 'Załóż bezpłatne konto',
    itemsList: [
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
    ]
  },

  footer: {
    icon: 'LOGO',
    socialItemsList: [
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
    ],
    menuLeft: {
      linksList: [
        {
          href: '/wiedza',
          label: 'Wiedza'
        },
        {
          href: '/faq',
          label: 'FAQ'
        },
        {
          href: '/regulamin-serwisu',
          label: 'Regulamin serwisu'
        },
        {
          href: '/polityka-prywatnosci',
          label: 'Polityka prywatności'
        }
      ],
      title: 'Dla odwiedzających'
    },
    menuCenter: {
      linksList: [
        {
          href: '/dolacz-do-wystawcow',
          label: 'Dołącz do Wystawców'
        },
        {
          href: '/zorganizuj-stoisko-targowe',
          label: 'Zorganizuj stoisko targowe'
        },
        {
          href: '/stwórz-własny-film-EB',
          label: 'Stwórz własny film EB!'
        },
        {
          href: '/edukacja',
          label: 'Edukacja'
        },
        {
          href: '/partnerzy',
          label: 'Partnerzy'
        },
        {
          href: '/kontakt',
          label: 'Kontakt'
        }
      ],
      title: 'Współpraca'
    },
    menuRight: {
      linksList: [
        {
          href: '/wrocław',
          label: 'Wrocław'
        },
        {
          href: '/poznan',
          label: 'Poznań'
        }
      ],
      title: 'Targi Pracy'
    }
  },

  header: {
    href: 'google.pl',
    icon: 'LOGO',
    id: '1',
    label: 'Zdobądź bilet',
    onClick: () => null,
    text: 'Zaloguj się'
  },

  homepageSectionOne: {
    icon: 'icon',
    description: 'Stwórz piękne CV, określ idealnego Pracodawcę i przekonaj go do siebie na targach pracy Career EXPO.',
    id: '2',
    label: 'Załóż bezpłatne konto',
    onClick: () => null,
    title: 'Pomożemy Ci znaleźć wymarzoną pracę'
  }
}
