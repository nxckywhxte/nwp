import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './ui/globals.css'
import Providers from './ui/providers'
import Header from './ui/header/header'
import { ReactNode } from 'react'

const font = Nunito({ subsets: ['cyrillic'] })

export const metadata: Metadata = {
  title: {
    template: '%s - nxckywhxte portfolio',
    default: 'Main - nxckywhxte portfolio'
  },
  description: 'Nxckywhxte web portfolio'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang='ru'
      suppressHydrationWarning>
      <body className={font.className}>
        <Providers>
          <main className='flex flex-col w-full h-screen'>
            <Header />
            <section className='flex-1'>{children}</section>
          </main>
        </Providers>
      </body>
    </html>
  )
}
