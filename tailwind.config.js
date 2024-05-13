// tailwind.config.js

module.exports = {
  mode: 'jit', // Enable JIT mode for faster development (requires Tailwind CSS v3.0+)
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Specify files to scan for classes
  darkMode: false, // Enable dark mode if needed
  theme: {
    extend: {
      // Add any customizations to the default theme here
    },
  },
  variants: {
    extend: {
      // Add any custom variants here (e.g., hover, focus, etc.)
    },
  },
  plugins: [
    // Add any additional plugins here (e.g., typography, forms, etc.)
  ],
};

