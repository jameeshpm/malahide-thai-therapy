import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#1e293b',
        accent: '#38bdf8',
        background: '#f9fafb'
      },
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;

