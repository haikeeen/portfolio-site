'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'ホーム', href: '/' },
  { name: 'プロジェクト', href: '/projects' },
  { name: 'スキル', href: '/skills' },
  { name: '自己紹介', href: '/about' },
  { name: 'お問い合わせ', href: '/contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800/50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold font-mono">
                <span className="text-green-400">&lt;</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Portfolio</span>
                <span className="text-green-400">/&gt;</span>
              </h1>
            </Link>
          </div>

          {/* デスクトップメニュー */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex items-center px-3 py-2 text-sm font-medium font-mono transition-all duration-300 rounded-lg ${
                  pathname === item.href
                    ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/30 shadow-lg'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5 border border-transparent hover:border-cyan-400/20'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* モバイルメニューボタン */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300"
              aria-expanded={isOpen}
            >
              <span className="sr-only">メニューを開く</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium font-mono transition-all duration-300 ${
                pathname === item.href
                  ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/30'
                  : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5 border border-transparent hover:border-cyan-400/20'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}