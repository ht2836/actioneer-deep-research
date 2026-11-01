/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        banker: {
          navy: '#0f172a',
          slate: '#1e293b',
          muted: '#64748b',
          border: '#e2e8f0',
          bg: '#f8fafc',
          card: '#ffffff',
          emerald: '#059669',
          crimson: '#dc2626',
          cobalt: '#2563eb',
          amber: '#d97706',
        }
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Geist Mono', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      }
    },
  },
  plugins: [],
}
