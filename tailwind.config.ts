import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        drBackground: '#282A36',
        drCurrentLine: '#44475A',
        drForeground: '#F8F8F2',
        drComment: '#6272A4',
        drCyan: '#8BE9FD',
        drGreen: '#50FA7B',
        drOrange: '#FFB86C',
        drPink: '#FF79C6',
        drPurple: '#BD93F9',
        drRed: '#FF5555',
        drYellow: '#F1FA8C'

      }
    },
  },
  plugins: [],
}
export default config
