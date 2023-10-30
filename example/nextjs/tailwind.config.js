module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // uncomment for npm @tincre/promo-dashboard installation
    './node_modules/@tincre/promo-dashboard/*.{js,ts,jsx,tsx}',
    './node_modules/@tincre/promo-dashboard/**/*.{js,ts,jsx,tsx}',
    './node_modules/@tincre/promo-button/*',
    './node_modules/@tincre/promo-button/**/*',
    '../../dist/*.{js,ts,jsx,tsx}', // remove for deployed apps
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '15%': { transform: 'rotate(14.0deg)' },
          '30%': { transform: 'rotate(-8.0deg)' },
          '40%': { transform: 'rotate(14.0deg)' },
          '50%': { transform: 'rotate(-4.0deg)' },
          '60%': { transform: 'rotate(10.0deg)' },
          '70%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        wave: 'wave 3.0s infinite',
      },
    },
  },
  plugins: [],
};
