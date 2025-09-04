import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '関口 圭祐 | Fullstack Developer Portfolio',
  description: 'フルスタック開発者の関口圭祐のポートフォリオサイト。React、Next.js、TypeScriptを使った実績をご紹介。',
  keywords: ['Next.js', 'React', 'TypeScript', 'フルスタック開発', 'ポートフォリオ'],
  authors: [{ name: '関口 圭祐' }],
  openGraph: {
    title: '関口 圭祐 | Fullstack Developer Portfolio',
    description: 'フルスタック開発者のポートフォリオサイト',
    url: 'https://portfolio-site-haikeeen.vercel.app',
    siteName: '関口 圭祐 Portfolio',
    locale: 'ja_JP',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}