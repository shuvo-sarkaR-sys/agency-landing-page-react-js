const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
       // Spread `flowbite.content` directly to avoid function call
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin,  // Use `flowbite.plugin` without parentheses
  ],
  darkMode: 'class',  // Set dark mode here directly, no need for another `module.exports`
};
