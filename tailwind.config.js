/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./pages/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primaryBg: '#DE3054',
        navHover: '#F1E346', 
        eldBlue: '#4857A3',
        eldGreen: '#05C364',
        eldYellow: '#F5D035',
        eldPink: '#E03550',
        eldBlack: '#000000',
      },
      screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }
      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }
      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }
      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }
      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      'xs': {'max' : '414px'},
      // => @media (max-width: 414px) { ... }
      'xss': {'max': '375px'},
      // => @media (max-width: 375px) { ... }
      },
      fontFamily: {
        grotley: ["Grotley", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"]
      },
    },
  },
  plugins: [],
}
