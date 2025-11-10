/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './SRC/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#F39237',
        'primary-gold': '#D97706',
        'primary-white': '#FFFFFF',
        'background-light': '#FAFAF9',
        'background-warm': '#FFF7ED',
        'left-side-gray': '#6B7280',
        'right-side-amber': '#F59E0B',
        'text-primary': '#1F2937',
        'text-secondary': '#4B5563',
        'hover-amber': '#FBBF24',
        'active-gold': '#D97706',
        'focus-ring': '#FCD34D',
        'brand-orange': '#F7971E',
        'brand-blue': '#0984B6',
        'brand-sand': '#F4AB49',
        'brand-dark': '#1A1A1A',
        'brand-white': '#FFFFFF',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', '-apple-system', 'system-ui', 'sans-serif'],
        accent: ['Merriweather', 'Georgia', 'serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
      },
    },
  },
  plugins: [],
};
