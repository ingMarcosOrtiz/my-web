import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ContainerHome } from '../components'
import { GoogleTagManager } from '@next/third-parties/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Desarrollador web - Marcos Ortiz',
  description: 'Marcos Ortiz Colombia ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <script
        src='https://platform.linkedin.com/badges/js/profile.js'
        async
        defer
        type='text/javascript'></script>
      <GoogleTagManager gtmId='G-1F128NP4FJ' />

      <body className={inter.className}>
        <ContainerHome>{children}</ContainerHome>
      </body>
    </html>
  )
}
