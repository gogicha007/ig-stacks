import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Header from '@/components/header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IG Stacks',
  description: 'Inventory management applicationp',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <div className="header">
            <Header />
          </div>

          <div className="sidebar">
            <Navbar />
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
