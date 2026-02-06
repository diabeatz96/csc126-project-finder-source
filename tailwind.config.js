/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#fdfbf7',
        foreground: '#2d2d2d',
        muted: '#e5e0d8',
        accent: '#ff4d4d',
        secondary: '#2d5da1',
        postit: '#fff9c4',
        paper: '#ffffff',
      },
      fontFamily: {
        kalam: ['Kalam', 'cursive'],
        hand: ['Patrick Hand', 'cursive'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        wobbly: '255px 15px 225px 15px / 15px 225px 15px 255px',
        'wobbly-md': '15px 255px 15px 225px / 225px 15px 255px 15px',
        'wobbly-sm': '40px 8px 50px 6px / 8px 50px 6px 40px',
      },
      boxShadow: {
        sketch: '4px 4px 0px 0px #2d2d2d',
        'sketch-lg': '8px 8px 0px 0px #2d2d2d',
        'sketch-hover': '2px 2px 0px 0px #2d2d2d',
        'sketch-subtle': '3px 3px 0px 0px rgba(45, 45, 45, 0.1)',
      },
    },
  },
  plugins: [],
}
