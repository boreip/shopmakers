/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill-100': 'repeat(auto-fill, minmax(140px, 1fr))',
        'auto-fill-200': 'repeat(auto-fill, minmax(280px, 1fr))',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'light-cornflower-blue': '#8ECAE6',
      'light-cornflower-blue-200': 'rgba(142, 202, 230, 0.20)',
      'blue-green': '#219EBC',
      'prussian-blue': '#023047',
      'selective-yellow': '#FFB703',
      'selective-yellow-300': '#FFBE1C',
      tangerine: '#FB8500',
      'tangerine-200': 'rgba(251, 133, 0, 0.20)',
      lotion: '#FAFAFA',
      coconut: '#FFF',
    },
    fontFamily: {
      sans: ['Jost', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      xs: ['12px', '150%'],
      sm: ['14px', '150%'],
      base: ['16px', '150%'],
      lg: ['18px', '150%'],
      xl: ['24px', '150%'],
      '2xl': ['32px', '110%'],
      '3xl': ['48px', '110%'],
    },
    container: {
      screens: {
        md: '600px',
        lg: '728px',
        xl: '984px',
        '2xl': '1152px',
      },
    },
  },
  plugins: [],
};
