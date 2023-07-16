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
        barBg:'#111111'
      },
      fontFamily: {
        grotley: ["Grotley", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"]
      },
      clipPath: {
        decagon: "polygon(100% 35%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)"
      },
      keyframes: {
        comeout: {
          '0%': { right: '-75%'},
          '100%': {right: '0%'}
        },
        goin: {
          '0%': { right: '0%' },
          '100%': { right: '7-5%' }
        }
      }
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}
