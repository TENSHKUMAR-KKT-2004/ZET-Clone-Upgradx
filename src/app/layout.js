import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../../components/Navbar'
import 'bootstrap/dist/css/bootstrap.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ZET Clone UpgradX',
  description: 'This is for my intern position technical round project.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
