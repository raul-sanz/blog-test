/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: '#264653',
        secondary: '#f4a261',
        warning: '#e9c46a',
        info: 'white',
        error: '#e76f51',
        success: '#2a9d8f',
      },
    },
  },
  plugins: [],
}

