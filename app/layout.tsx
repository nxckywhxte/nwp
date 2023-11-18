import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './ui/globals.css'

const font = Nunito({ subsets: ['cyrillic'] })

export const metadata: Metadata = {
  title: {
    template: '%s - nxckywhxte portfolio',
    default: 'Main - nxckywhxte portfolio'
  },
  description: 'Nxckywhxte web portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={font.className}>{children}</body>
    </html>
  )
}
