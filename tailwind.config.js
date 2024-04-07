// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".{html,js}",
    "./Team.page/**/*.{html}",
    "./Project-page/**/*.{html}",
    "./index.html",
    "./src/**/*.{html,js}"
    "./node_modules/tw-elements/js/**/*.js"
  ],
  darkMode: 'class',
    theme: {
      // ...
    },
    plugins: [
      tailwindcss: {},
      autoprefixer: {},
      require('tailwind-scrollbar-hide')
      require("daisyui")
      require("tw-elements/plugin.cjs")
      // ...
    ]
    darkMode: "class"
  
    }
