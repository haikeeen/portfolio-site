import Link from 'next/link'

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section with Gradient Background */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
        {/* Animated Background Patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>

        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-extrabold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-none">
              Creative
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white mb-6 leading-none">
              Developer
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8 rounded-full"></div>
          </div>
          
          <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-200 mb-12 lg:mb-16 xl:mb-20 leading-relaxed max-w-4xl xl:max-w-5xl mx-auto">
            革新的なウェブ体験を創造し、<br />
            コードを通じてアイデアを現実に変えます
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 justify-center items-center">
            <Link
              href="/projects"
              className="group relative px-8 py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg lg:text-xl xl:text-2xl font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="relative z-10">プロジェクトを見る</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/contact"
              className="group px-8 py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6 border-2 border-white/30 text-white text-lg lg:text-xl xl:text-2xl font-bold rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-105"
            >
              お問い合わせ
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Glass Morphism */}
      <section className="relative py-24 lg:py-32 xl:py-40 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6">
              Why Choose Me?
            </h2>
            <p className="text-xl lg:text-2xl xl:text-3xl text-gray-600 dark:text-gray-300 max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
              革新的な技術と創造的なアプローチで、あなたのビジョンを現実にします
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 max-w-6xl mx-auto">
            <div className="group relative p-8 lg:p-10 xl:p-12 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur"></div>
              <div className="relative">
                <div className="w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 mx-auto mb-6 lg:mb-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6 text-center">
                  モダンな技術
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed lg:text-lg xl:text-xl">
                  最新のフレームワークとツールを活用し、<br />
                  時代に合った高品質なソリューションを提供
                </p>
              </div>
            </div>

            <div className="group relative p-8 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur"></div>
              <div className="relative">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  レスポンシブ対応
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                  スマートフォンからデスクトップまで、<br />
                  あらゆるデバイスで完璧な体験を実現
                </p>
              </div>
            </div>

            <div className="group relative p-8 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur"></div>
              <div className="relative">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  高速パフォーマンス
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                  最適化されたコードとベストプラクティスで、<br />
                  ライトニング級の読み込み速度を実現
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with Modern Cards */}
      <section className="relative py-24 lg:py-32 xl:py-40 bg-gradient-to-b from-gray-900 to-black dark:from-black dark:to-gray-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 lg:mb-8">
              Latest <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl lg:text-2xl xl:text-3xl text-gray-300 max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
              GitHubで公開中の最新プロジェクト。革新的なアイデアと技術を融合させた作品をご覧ください
            </p>
          </div>

          {/* Project Cards Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 mb-16 lg:mb-20 max-w-6xl mx-auto">
            <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 lg:p-8 xl:p-10 border border-gray-700 hover:border-purple-500 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="h-48 lg:h-56 xl:h-64 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl mb-4 lg:mb-6 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </div>
                    <span className="text-sm">Portfolio Site</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">ポートフォリオサイト</h3>
                <p className="text-gray-300 text-sm mb-4">Next.js + Tailwind CSS</p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">Next.js</span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">TypeScript</span>
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-pink-500 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-pink-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="h-48 bg-gradient-to-br from-pink-600 to-purple-600 rounded-xl mb-4 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center">
                      <span className="text-lg font-bold">🚀</span>
                    </div>
                    <span className="text-sm">Coming Soon</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">次期プロジェクト</h3>
                <p className="text-gray-300 text-sm mb-4">開発予定中...</p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-pink-500/20 text-pink-300 text-xs rounded-full">React</span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">Node.js</span>
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="h-48 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl mb-4 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center">
                      <span className="text-lg font-bold">⚡</span>
                    </div>
                    <span className="text-sm">In Development</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">実験的プロジェクト</h3>
                <p className="text-gray-300 text-sm mb-4">新技術テスト中...</p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">Vue.js</span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">Express</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="group relative inline-flex items-center px-8 py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg lg:text-xl xl:text-2xl font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="relative z-10">すべてのプロジェクトを見る</span>
              <svg className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 ml-2 lg:ml-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}