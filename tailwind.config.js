// tailwind.config.js
module.exports = {
  content: [".{html,js}"],
  darkMode: 'class',
    theme: {
      // ...
    },
    plugins: [
      require('tailwind-scrollbar-hide')
      // ...
    ]
  }