import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import ConditionalLayout from '@/components/ConditionalLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'StudentYug - One Student One Tree',
  description: 'Empowering students through sports guidance while nurturing environmental responsibility. Every student\'s progress contributes to a greener tomorrow.',
  keywords: 'student, sports, environment, tree plantation, education, guidance, mentors, coaches',
  authors: [{ name: 'StudentYug Team' }],
  openGraph: {
    title: 'StudentYug - One Student One Tree',
    description: 'Empowering students through sports guidance while nurturing environmental responsibility.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  )
}