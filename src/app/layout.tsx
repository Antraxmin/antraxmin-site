import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '성장하는 개발자, 임채민',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-black text-white`}>
        <div className="min-h-screen flex flex-col items-center">
          <main className="w-full max-w-[768px] p-4 flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}