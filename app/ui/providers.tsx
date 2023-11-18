'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

const Providers = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return (
    <ThemeProvider
      attribute='class'
      enableSystem
      disableTransitionOnChange
      defaultTheme='system'>
      {children}
    </ThemeProvider>
  )
}

export default Providers
