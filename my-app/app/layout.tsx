import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adwitiya | Personal Portofolio',
  description: 'Adwitiya is a Front-end and Data Enthusiast which recently Graduates from University',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-zinc-50 text-zinc-950 ${inter.className} h-[1000px]`}>
        <div className="absolute rounded-full -z-20 bg-pink-300 w-[32rem] h-[32rem] top-[-6.3rem] right-[11rem] blur-[20rem] sm:w-[62rem]"></div>
        <div className="absolute rounded-full -z-20 bg-sky-200 w-[32rem] h-[32rem] top-[-1rem] left-[-35rem] blur-[20rem] sm:w-[62rem] "></div>
        <Navbar></Navbar>
        {children}

      </body>
    </html>
  )
}
