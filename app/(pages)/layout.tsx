import type { Metadata } from 'next'

import '../globals.css'
import { ContainerHome, Header } from '../components'
import { poppins } from '../config/fonts'

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
      <body className={`${poppins.className} `}>
        {/* <ContainerHome> */}
        {/* <Header /> */}
        {children}
        {/* </ContainerHome> */}
      </body>
    </html>
  )
}
