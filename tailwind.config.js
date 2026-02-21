/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Official Cocoon palette — matches the app icon exactly
        'ink':        '#1A1A1A',   // bold black (outlines, headings)
        'charcoal':   '#4D4D4D',   // body text
        'slate-text': '#999388',   // captions, hints
        'silver':     '#D9D4CC',   // dividers, subtle borders
        'cloud':      '#E8D4B8',   // warm beige — card backgrounds
        'snow':       '#F5F1E8',   // warm cream — page background
        'parchment':  '#F2EDDF',   // slightly deeper cream
        'leaf':       '#C5D86D',   // primary lime-green accent
        'leaf-dark':  '#A8B84D',   // darker olive-green secondary
        'recording':  '#D96659',   // soft coral red
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      animation: {
        'float-slow':   'floatSlow 8s ease-in-out infinite',
        'float-medium': 'floatMedium 6s ease-in-out infinite',
        'fade-in-up':   'fadeInUp 0.6s ease-out forwards',
        'pulse-soft':   'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        floatMedium: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%':      { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
