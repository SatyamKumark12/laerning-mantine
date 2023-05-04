import './globals.css'
import { Poppins } from 'next/font/google';
import Header from './components/Header';
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({ 
  weight :['400' , '700'],
  subsets : ['latin']})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Header/>
        {children}</body>
    </html>
  )
}
