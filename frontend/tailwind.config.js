export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef6ff',
          100: '#dbeafe',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e3a8a'
        },
        accent: '#f59e0b'
      },
      boxShadow: {
        soft: '0 10px 25px rgba(15, 23, 42, 0.08)'
      }
    }
  },
  plugins: []
}
