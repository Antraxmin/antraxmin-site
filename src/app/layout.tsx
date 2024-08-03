import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Antraxmin',
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
        <div className="min-h-screen flex justify-center">
          <main className="w-full max-w-[768px] p-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}