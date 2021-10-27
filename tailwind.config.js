const rem = 16
const array = max => new Array(max).fill(0).map((_, index) => index)

const pxToRem = px => px / rem + 'rem'

const spacing = array(700).reduce((acc, spacing) => ({ ...acc, [spacing]: pxToRem(spacing) }), {})
const borderRadius = array(50).reduce((acc, borderRadius) => ({ ...acc, [borderRadius]: pxToRem(borderRadius) }), {})
const fontSize = array(100).reduce((acc, fontSize) => ({ ...acc, [fontSize]: pxToRem(fontSize) }), {})
const borderWidth = array(20).reduce((acc, borderWidth) => ({ ...acc, [borderWidth]: pxToRem(borderWidth) }), {})
const lineHeight = array(100).reduce((acc, lineHeight) => ({ ...acc, [lineHeight]: pxToRem(lineHeight) }), {})

const defaultValues = {
  '10%': '10%',
  '15%': '15%',
  '25%': '25%',
  '30%': '30%',
  '33%': '33.333%',
  '50%': '50%',
  '60%': '60%',
  '66%': '66.666%',
  '75%': '75%',
  '100%': '100%',
  inherit: 'inherit',
  auto: 'auto',
  fit: 'fit-content'
}

module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    boxShadow: {
      DEFAULT: `${pxToRem(1)}, ${pxToRem(2)}, ${pxToRem(4)}, rgba(0, 0, 0, 0.5)`,
      MODAL: `${pxToRem(5)} ${pxToRem(8)} ${pxToRem(23)}, rgba(100, 100, 100, 0.25)`,
      project: `${pxToRem(3)} ${pxToRem(6)} ${pxToRem(14)} 0 #2C3949`
    },
    stroke: theme => ({
      current: 'currentColor',
      ...theme('colors')
    }),
    fill: theme => ({
      current: 'currentColor',
      ...theme('colors')
    }),
    fontFamily: {
      sans: ['Lab Grotesque', 'sans-serif'],
      serif: ['Helvetica Neue', 'sans-serif']
    },
    fontSize: {
      ...fontSize
    },
    lineHeight: {
      ...lineHeight
    },
    backgroundPosition: theme => theme('positions'),
    objectPosition: theme => theme('positions'),
    positions: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top'
    },
    screens: {
      /* If you change this, check Breakpoint types and useWindowSize */

      lg: { max: '1440px' },
      // => @media (max-width: 1440px) { ... }

      md: { max: '992px' },
      // => @media (max-width: 992px) { ... }

      sm: { max: '768px' },
      // => @media (max-width: 768px) { ... }

      xs: { max: '576px' }
      // => @media (max-width: 576px) { ... }
    },
    extend: {
      spacing: {
        ...spacing,
        ...defaultValues,
        '100%': '100%'
      },
      borderRadius: {
        ...borderRadius,
        '25%': '25%',
        '50%': '50%'
      },
      backgroundImage: theme => ({
        'main-screen': 'url("/images/main-bg.png")',
        'main-screen-blogs': 'url("/images/blog/main-bg-blogs.jpg")',
        'project-image': 'url("/images/projects/project-edomus.png")',
        'homeBg': 'url("/images/home/banner-home-page.png")',
        'mobileBg': 'url("/images/home/mobile-bg.png")',
        'home-card-4':'url("/images/home/home-card-4.svg")',
        'project-gradient': 'linear-gradient(112.04deg, #8A1EBA 2.43%, #2C45A6 34.39%, #4489D1 64.29%, #6EDF9E 91.61%)',
      }),

      gridTemplateColumns: {
        '7x32': 'repeat(7, 32px)'
      },
      flex: {
        0.75: 0.75,
        0.25: 0.25
      },
      maxWidth: {
        ...spacing,
        ...defaultValues,
        320: pxToRem(320),
        520: pxToRem(520),
        1240: pxToRem(1240),
        1440: pxToRem(1440),
        screen: '100vw'
      },
      minWidth: {
        ...spacing,
        ...defaultValues,
        320: pxToRem(320),
        screen: '100vw'
      },
      maxHeight: {
        ...spacing,
        ...defaultValues,
        screen: '100vh'
      },
      minHeight: {
        ...spacing,
        ...defaultValues,
        screen: '100vh'
      },
      width: {
        ...defaultValues,
        366: '366px',
        screen: '100vw'
      },
      height: {
        ...defaultValues,
        688: '688px',
        366: '366px',
        screen: '100vh'
      },
      borderWidth: {
        ...borderWidth
      },

      keyframes: {
        footer: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },

      },
      animation: {
        footer: "spin 4s linear infinite"
      },
      zIndex: {
        0: 0,
        1: 1,
        2: 2
      },
      listStyleType: {
        decimalZero: 'decimal-leading-zero'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
