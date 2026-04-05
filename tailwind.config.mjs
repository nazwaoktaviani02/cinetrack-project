// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warna primer biru dari referensi UI kamu
        'brand': {
          50: '#f0f6ff',
          100: '#dfeeff',
          200: '#b7d8ff',
          300: '#7eb6ff',
          400: '#3c93ff',
          500: '#0a6cfb', // Ini warna biru utamanya
          600: '#004ee6',
          700: '#003eb8',
          800: '#003599',
          900: '#002e7a',
          950: '#001a4d',
        },
        // Warna abu-abu yang bersih untuk background dan teks
        'neutral': {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
      },
    },
  },
  plugins: [],
};

export default config;