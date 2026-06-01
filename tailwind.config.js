/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:       'var(--primary)',
        accent:        'var(--accent)',
        'accent-dark': 'var(--accent-dark)',
        'section-alt': 'var(--section-alt)',
        'section-dark':'var(--section-dark)',
        muted:         'var(--text-muted)',
        faint:         'var(--text-faint)',
        divider:       'var(--border-base)',
      },
      fontFamily: {
        sans: ['var(--font-family)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
