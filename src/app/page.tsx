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
            {/* Terminal Window */}
            <div className="bg-gray-900 rounded-lg shadow-2xl border border-gray-700 max-w-4xl mx-auto mb-8">
              <div className="flex items-center px-4 py-2 bg-gray-800 rounded-t-lg">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-gray-400 text-sm font-mono">portfolio.sh</span>
                </div>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-green-400">➜</span>
                    <span className="text-blue-400 ml-2">~</span>
                    <span className="text-white ml-2">whoami</span>
                  </div>
                  <div className="text-gray-300 ml-6">Creative Developer</div>
                  
                  <div className="flex items-center mt-4">
                    <span className="text-green-400">➜</span>
                    <span className="text-blue-400 ml-2">~</span>
                    <span className="text-white ml-2">cat skills.json</span>
                  </div>
                  <div className="ml-6 text-gray-300">
                    <div className="text-gray-500">{'{'}</div>
                    <div className="ml-4">
                      <span className="text-yellow-300">"frontend"</span>: <span className="text-green-300">["React", "Next.js", "TypeScript"]</span>,
                    </div>
                    <div className="ml-4">
                      <span className="text-yellow-300">"backend"</span>: <span className="text-green-300">["Node.js", "Python", "PostgreSQL"]</span>,
                    </div>
                    <div className="ml-4">
                      <span className="text-yellow-300">"tools"</span>: <span className="text-green-300">["Docker", "Git", "AWS"]</span>
                    </div>
                    <div className="text-gray-500">{'}'}</div>
                  </div>

                  <div className="flex items-center mt-4">
                    <span className="text-green-400">➜</span>
                    <span className="text-blue-400 ml-2">~</span>
                    <span className="text-white ml-2">echo $MISSION</span>
                  </div>
                  <div className="text-gray-300 ml-6">
                    "革新的なウェブ体験を創造し、コードを通じてアイデアを現実に変える"
                  </div>

                  <div className="flex items-center mt-4">
                    <span className="text-green-400">➜</span>
                    <span className="text-blue-400 ml-2">~</span>
                    <span className="text-white ml-2 animate-pulse">▊</span>
                  </div>
                </div>
              </div>
            </div>
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

      {/* Tech Stack Section */}
      <section className="relative py-24 lg:py-32 xl:py-40 bg-gray-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center bg-gray-800 rounded-lg px-4 py-2 mb-6">
              <span className="text-green-400 mr-2">$</span>
              <span className="text-white font-mono">npm list --depth=0</span>
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 lg:mb-6 font-mono">
              <span className="text-green-400">//</span> Tech Stack
            </h2>
            <p className="text-xl lg:text-2xl xl:text-3xl text-gray-300 max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
              モダンな開発環境とベストプラクティスで構築
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 max-w-6xl mx-auto">
            {/* Frontend Code Block */}
            <div className="group bg-gray-800 rounded-lg border border-gray-700 hover:border-green-500 transition-all duration-300 overflow-hidden">
              <div className="bg-gray-700 px-4 py-2 flex items-center justify-between">
                <span className="text-gray-300 font-mono text-sm">frontend.tsx</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="space-y-1">
                  <div><span className="text-blue-400">import</span> <span className="text-yellow-300">React</span> <span className="text-blue-400">from</span> <span className="text-green-300">'react'</span></div>
                  <div><span className="text-blue-400">import</span> <span className="text-yellow-300">Next</span> <span className="text-blue-400">from</span> <span className="text-green-300">'next/app'</span></div>
                  <div><span className="text-blue-400">import</span> <span className="text-yellow-300">TypeScript</span> <span className="text-blue-400">from</span> <span className="text-green-300">'typescript'</span></div>
                  <div className="mt-4">
                    <span className="text-purple-400">const</span> <span className="text-yellow-300">ModernTech</span> = <span className="text-gray-300">() => {</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-blue-400">return</span> <span className="text-gray-300">(</span>
                  </div>
                  <div className="ml-8 text-green-300">&lt;Performance /&gt;</div>
                  <div className="ml-4 text-gray-300">)</div>
                  <div className="text-gray-300">}</div>
                </div>
              </div>
            </div>

            {/* Responsive CSS Code Block */}
            <div className="group bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 overflow-hidden">
              <div className="bg-gray-700 px-4 py-2 flex items-center justify-between">
                <span className="text-gray-300 font-mono text-sm">responsive.css</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="space-y-1">
                  <div><span className="text-purple-400">@media</span> <span className="text-yellow-300">(max-width: 768px)</span> <span className="text-gray-300">{</span></div>
                  <div className="ml-4">
                    <span className="text-blue-400">.container</span> <span className="text-gray-300">{</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-green-300">padding</span>: <span className="text-yellow-300">1rem</span>;
                  </div>
                  <div className="ml-8">
                    <span className="text-green-300">font-size</span>: <span className="text-yellow-300">clamp(1rem, 4vw, 2rem)</span>;
                  </div>
                  <div className="ml-4 text-gray-300">}</div>
                  <div className="text-gray-300">}</div>
                  <div className="mt-2 text-gray-500">/* 📱→🖥️ Perfect on every device */</div>
                </div>
              </div>
            </div>

            {/* Performance Code Block */}
            <div className="group bg-gray-800 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 overflow-hidden">
              <div className="bg-gray-700 px-4 py-2 flex items-center justify-between">
                <span className="text-gray-300 font-mono text-sm">performance.js</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="space-y-1">
                  <div><span className="text-blue-400">const</span> <span className="text-yellow-300">optimize</span> = <span className="text-purple-400">async</span> <span className="text-gray-300">() => {</span></div>
                  <div className="ml-4">
                    <span className="text-blue-400">await</span> <span className="text-yellow-300">lazyLoad</span><span className="text-gray-300">()</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-blue-400">await</span> <span className="text-yellow-300">codesplitting</span><span className="text-gray-300">()</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-blue-400">await</span> <span className="text-yellow-300">preload</span><span className="text-gray-300">()</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-blue-400">return</span> <span className="text-green-300">'⚡ Lightning Fast'</span>
                  </div>
                  <div className="text-gray-300">}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with GitHub Style */}
      <section className="relative py-24 lg:py-32 xl:py-40 bg-black">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center bg-gray-800 rounded-lg px-4 py-2 mb-6">
              <span className="text-green-400 mr-2">$</span>
              <span className="text-white font-mono">git log --oneline --graph</span>
            </div>
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 lg:mb-8 font-mono">
              <span className="text-green-400">*</span> recent <span className="text-cyan-400">commits</span>
            </h2>
            <p className="text-xl lg:text-2xl xl:text-3xl text-gray-300 max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto font-mono">
              <span className="text-yellow-400"># </span>最新のプロジェクトとコントリビューション
            </p>
          </div>

          {/* GitHub Style Repository Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16 lg:mb-20 max-w-6xl mx-auto">
            {/* Repository Card 1 */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg hover:border-green-500 transition-all duration-300 font-mono">
              <div className="p-4 border-b border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
                    </svg>
                    <h3 className="text-cyan-400 text-lg font-semibold">portfolio-site</h3>
                  </div>
                  <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded-full">Public</span>
                </div>
                <p className="text-gray-300 text-sm mb-3">Modern portfolio website built with Next.js 15, TypeScript & Tailwind CSS v4</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
                      <span>TypeScript</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"/>
                      </svg>
                      <span>23</span>
                    </div>
                    <span>Updated 2 hours ago</span>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-gray-750">
                <div className="flex justify-between text-xs">
                  <span className="text-green-400">✓ Deployed on Vercel</span>
                  <a href="#" className="text-cyan-400 hover:underline">View live →</a>
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 lg:p-8 xl:p-10 border border-gray-700 hover:border-pink-500 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-pink-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="h-48 lg:h-52 max-h-52 bg-gradient-to-br from-pink-600 to-purple-600 rounded-xl mb-4 lg:mb-6 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 max-w-14 max-h-14 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center">
                      <span className="text-lg lg:text-xl max-text-xl font-bold">🚀</span>
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

            <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 lg:p-8 xl:p-10 border border-gray-700 hover:border-cyan-500 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="h-48 lg:h-52 max-h-52 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl mb-4 lg:mb-6 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 max-w-14 max-h-14 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center">
                      <span className="text-lg lg:text-xl max-text-xl font-bold">⚡</span>
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