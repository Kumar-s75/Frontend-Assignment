/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#42389E',
        secondary: '#F9A71E',
        accent: '#EDECF6',
        dark: {
          DEFAULT: '#0E121B',
          600: '#323338',
        },
        gray: {
          50: '#F5F7FA',
          100: '#FAFAFA',
          200: '#E1E4EA',
          300: '#DEDEDE',
          400: '#99A0AE',
          500: '#667085',
          600: '#525866',
          700: '#4A4B4D',
          800: '#4B4B4B',
          900: '#8A8A8A',
        },
        text: {
          DEFAULT: '#0E121B',
          body: '#4A4B4D',
          light: '#5F5F60',
          lighter: '#DEDEDE',
          white: '#FEFEFF',
        }
      },
      fontFamily: {
        'sans': ['Satoshi', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'dm': ['DM Sans', 'system-ui', 'sans-serif'],
        'merriweatherSans': ['Merriweather Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '16px', fontWeight: '500' }],
        'sm': ['14px', { lineHeight: '20px', fontWeight: '500' }],
        'base': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'xl': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        '2xl': ['32px', { lineHeight: '40px', fontWeight: '600' }],
        '3xl': ['40px', { lineHeight: '48px', fontWeight: '700' }],
        '4xl': ['64px', { lineHeight: '72px', fontWeight: '700' }],
      },
      spacing: {
        '4.5': '1.125rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '25': '6.25rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '35': '8.75rem',
        '42': '10.5rem',
        '50': '12.5rem',
        '70': '17.5rem',
        '90': '22.5rem',
      },
      borderRadius: {
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '10': '10px',
        '12': '12px',
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        'DEFAULT': '0px 4px 6px -2px rgba(16, 24, 40, 0.05), 0px 12px 16px -4px rgba(16, 24, 40, 0.10)',
        'lg': '0px 8px 8px -4px rgba(16, 24, 40, 0.04), 0px 20px 24px -4px rgba(16, 24, 40, 0.10)',
        'xl': '0px 8px 8px -4px rgba(16, 24, 40, 0.04), 0px 24px 32px -8px rgba(16, 24, 40, 0.10)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #42389E 0%, #6C5CE7 50%, #F9A71E 100%)',
      }
    },
  },
  plugins: [],
}
