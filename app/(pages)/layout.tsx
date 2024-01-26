import type { Metadata } from 'next'

import { poppins } from '../config/fonts'

import '../globals.css'
import { Layout } from '../components'

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
      <body className={`${poppins.className}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
