/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sofia: ['"Sofia Pro"', '"Sofia Sans"', '"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      colors: {
        warm: {
          50: '#fafafb',
          100: '#f4f4f7',
          200: '#eaeaef',
          300: '#d8d8e0',
          400: '#a3a3b2',
          500: '#737385',
          600: '#525263',
          700: '#383845',
          800: '#23232c',
          900: '#14141a',
          950: '#0b0b0e'
        }
      },
      boxShadow: {
        'dock': '0 20px 45px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.05)',
        'dock-dark': '0 25px 50px -12px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.04), 0 10px 24px -8px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 12px 32px -8px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.06)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.06)'
      }
    }
  },
  plugins: [],
}
