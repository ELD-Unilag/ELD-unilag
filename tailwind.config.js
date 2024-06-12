/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        headerPink: '#DE3054', 
        primaryBg: '#DE3054',
        navHover: '#F1E346', 
        eldBlue: '#4857A3',
        eldGreen: '#05C364',
        eldLightGreen: '#80DDAF',
        eldYellow: '#F5D035',
        eldLightYellow:'#F1E346',
        eldPink: '#E03550',
        eldBlack: '#000000',
        eldLightPink: '#ED6B86',
        eldLightBrown:'#FBCA89',
        barBg:'#111111',
        navBorder: 'rgb(17, 17, 17)',
        cardOrange: '#FBCA89',
        cardTextColour: '#4B4B4B',
        lbCardOrange: '#FBCA89',
        lbCardBlue: '#4857A3',
        lbCardWhite: '#FFFFFF',
        lbCardYellow: '#F1E346',
        lbCardPink: '#ED6B86',
        lbCardGreen: '#05C364',
        lbCardLightOrange: '#FCE1BC',
        lbCardDark: '#111111',
        lbCardLightPink: '#E69FAA',
        cardTextColour: '#4B4B4B',
        adminBgprimary: '#FFEBEF',
        navboderbottom: 'rgba(17, 17, 17, 0.11)',
        wwboxHeaderBg: '#F1E346',
        wwboxHeader: '#111111',
        valuesPink: '#DE3054',
        valuesGreen: '#05C364',
        valuesBlack: '#111111',
        valuesBlue: '#4857A3',
        valuesLightPink: '#ED6B86',
        valuesYellow: '#EEC21B',
      },
      fontFamily: {
        grotley: ['var(--font-Grotely)'],
        satoshi: ['var(--font-satoshi)'],
        inter:   ["Inter", "sans-serif"]
      },
      clipPath: {
        decagon: "polygon(100% 35%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)"
      },
      keyframes: {
        comeout: {
          '0%': { right: '-100%'},
          '100%': {right: '0%'}
        },
        goin: {
          '0%': { right: '0%' },
          '100%': { right: '-100%' }
        },
        scrollImages: {
          '0%': { transform: `translateX(0%)`},
          '100%': { transform: 'translateX(-50%)'}
        },
        scrollImagesReverse: {
          '0%': { transform: `translateX(-50%)`},
          '100%': { transform: 'translateX(0%)'}
        },
      },
      animation: {
        'scroll-infinte': 'scrollImages 15s linear infinite',
        'scroll-infinte-reverse': 'scrollImagesReverse 15s linear infinite',
      },
      opacity: {
        '21': '.21'
      },
      backgroundImage: {
        'card_noise': "url('/images/ladiesboard/card/noise.png')",
        'cardModelBg': "url('/images/ladiesboard/card/imgBg.svg')",
        'aboutBg': "url('/images/aboutImages/hero/aboutBg.png')",
        'aboutDesktopBg' : "url('/images/aboutImages/hero/aboutdesktopBg.png')",
        'illustrateBg1': "url('/images/aboutImages/wwsection/illustrateBg1.png')",
        'illustrateBg2': "url('/images/aboutImages/wwsection/illustrateBg2.png')",
        "homeCardNoise" : "url('/images/homeImages/flipcards/noise.png')",
        'menuBar': "url('/images/Barbg.png')"
      },
      boxShadow: {
        'box': '0px 3px 0px 0px #111111',
        'controlCircle': '1.5px 0px 0px 0px #111111',
      }
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}
