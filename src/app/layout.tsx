import type { Metadata } from 'next'
import { Lato, Roboto_Mono, Tinos } from 'next/font/google'
import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'
import './globals.css'

export const tinos = Tinos({
  weight: ['400', '700'],
  variable: '--font-tinos',
  subsets: ['latin'],
})

export const lato = Lato({
  weight: ['400'],
  variable: '--font-lato',
  subsets: ['latin'],
})

export const robotoMono = Roboto_Mono({
  weight: ['400'],
  variable: '--font-roboto-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Nordic Rose',
  description: 'Nordic Rose',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html className={`min-h-full ${tinos.className} ${tinos.variable} ${lato.variable} ${robotoMono.variable}`} lang='en'>
      <body className={`overscroll-none text-base md:text-xl min-h-screen flex flex-col font-new-york-medium`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
