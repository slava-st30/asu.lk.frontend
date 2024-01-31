/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  white: '#ffffff',
  black: '#102030',

  main: {
    DEFAULT: '#001020',
    500: '#112131',
    400: '#213141',
    350: '#283848',
    300: '#314151',
    200: '#415161',
    100: '#516171',
     50: '#586878',
  },

  additional: {
    DEFAULT: '#617181',
    300: '#718191',
    200: '#8191a1',
    100: '#91a1b1',
  },

  positive: {
    DEFAULT: '#1FA244',
    light: '#DADBDC',
  },

  attention: {
    DEFAULT: '#E5AD5F',
    light: '#FCEFD5',
    300: '#DDA538',
    200: '#FFF8DD',
  },

  negative: {
    DEFAULT: '#E03B39',
    light: '#FFD3D3',
    200: '#FEEEEE',
  },

  alternative: {
    DEFAULT: '#6D38DD',
    50: '#F2EEFF',
  },
};

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],

  theme: {
    extend: {
      colors,
      width: {
        22: '5.5rem',
        58: '14.5rem',
        89: '22.25rem',
        100: '25rem',
        122: '30.5rem',
      },
      minWidth: {
        22: '5.5rem',
        80: '20rem',
        58: '14.5rem',
      },
      maxWidth: {
        150: '37.5rem',
      },
      height: {
        22: '5.5rem',
      },
      minHeight: {
        22: '5.5rem',
      },
      margin: {
        22: '5.5rem',
      },
      padding: {
        22: '5.5rem',
      },
      borderWidth: {
        '1.5px': '1.5px',
      },
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '2xl-semibold': ['1.5rem', {
          lineHeight: '2rem',
          fontWeight: '600',
        }],
        'xl-semibold': ['1.25rem', {
          lineHeight: '1.5rem',
          fontWeight: '600',
        }],
        'lg-semibold': ['1.125rem', {
          lineHeight: '1.5rem',
          fontWeight: '600',
        }],
        'sm-semibold': ['0.875rem', {
          lineHeight: '1.25rem',
          fontWeight: '600',
        }],
        'lg-medium-uppercase': ['1.125rem', {
          lineHeight: '1.5rem',
          fontWeight: '500',
          letterSpacing: '0.06em',
        }],
        'base-medium-uppercase': ['1rem', {
          lineHeight: '1.5rem',
          fontWeight: '500',
          letterSpacing: '0.06em',
        }],
        'sm-medium-uppercase': ['0.875rem', {
          lineHeight: '1.25rem',
          fontWeight: '500',
          letterSpacing: '0.06em',
        }],
        'xs-medium-uppercase': ['0.75rem', {
          lineHeight: '1rem',
          fontWeight: '500',
          letterSpacing: '0.06em',
        }],
        'lg-medium': ['1.125rem', {
          lineHeight: '1.5rem',
          fontWeight: '500',
        }],
        'base-medium': ['1rem', {
          lineHeight: '1.375rem',
          fontWeight: '500',
        }],
        'sm-medium': ['0.875rem', {
          lineHeight: '1.25rem',
          fontWeight: '500',
        }],
        'xs-medium': ['0.75rem', {
          lineHeight: '1rem',
          fontWeight: '500',
        }],
        'lg-regular': ['1.125rem', {
          lineHeight: '1.5rem',
          fontWeight: '400',
        }],
        'base-regular': ['1rem', {
          lineHeight: '1.375rem',
          fontWeight: '400',
        }],
        'sm-regular': ['0.875rem', {
          lineHeight: '1.25rem',
          fontWeight: '400',
        }],
        'xs-regular': ['0.75rem', {
          lineHeight: '1rem',
          fontWeight: '400',
        }],
        'xxs-regular': ['0.625rem', {
          lineHeight: '0.75rem',
          fontWeight: '400',
        }],
      },
    },
    container: {
      center: true,
      padding: '2',
    },
    screens: {
      xs: '375px',
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('tw-elements/dist/plugin'),
  ],
};
