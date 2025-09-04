'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 overflow-hidden">
      {/* Hero Section with Advanced Dark Background */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
        {/* Matrix-style Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {mounted && [...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animation: `float ${5 + Math.random() * 5}s ease-in-out infinite alternate`
              }}
            />
          ))}
        </div>
        {/* Animated Glow Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
          <div className="mb-8">
            {/* Advanced Terminal Window */}
            <div className="bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-2xl border border-gray-700/50 max-w-4xl mx-auto mb-8 group hover:border-green-400/50 transition-all duration-500">
              {/* Terminal Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <div className="relative flex items-center px-4 py-3 bg-gray-800/90 rounded-t-lg border-b border-gray-700/50">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/50"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-gray-300 text-sm font-mono">portfolio.sh — zsh — 80×24</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <div className="w-4 h-4 border border-gray-600 rounded"></div>
                  <div className="w-4 h-4 border border-gray-600 rounded"></div>
                </div>
              </div>
              <div className="relative p-6 font-mono text-sm bg-gray-900/50">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-green-400">┌──(</span><span className="text-blue-400">developer@portfolio</span><span className="text-green-400">)-[</span><span className="text-purple-400">~</span><span className="text-green-400">]</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400">└─</span><span className="text-blue-400">$ </span>
                    <span className="text-white ml-2">whoami</span>
                  </div>
                  <div className="text-cyan-400 ml-6 animate-pulse">Fullstack Developer & Code Architect</div>
                  
                  <div className="flex items-center mt-4">
                    <span className="text-green-400">┌──(</span><span className="text-blue-400">developer@portfolio</span><span className="text-green-400">)-[</span><span className="text-purple-400">~</span><span className="text-green-400">]</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400">└─</span><span className="text-blue-400">$ </span>
                    <span className="text-white ml-2">cat ~/.config/skills.json</span>
                  </div>
                  <div className="ml-6 text-gray-300">
                    <div className="text-gray-500">{'{'}</div>
                    <div className="ml-4">
                      <span className="text-yellow-300">&quot;frontend&quot;</span>: <span className="text-green-300">[</span><span className="text-cyan-300">&quot;React&quot;</span>, <span className="text-cyan-300">&quot;Next.js&quot;</span>, <span className="text-cyan-300">&quot;TypeScript&quot;</span><span className="text-green-300">]</span>,
                    </div>
                    <div className="ml-4">
                      <span className="text-yellow-300">&quot;backend&quot;</span>: <span className="text-green-300">[</span><span className="text-cyan-300">&quot;Node.js&quot;</span>, <span className="text-cyan-300">&quot;Python&quot;</span>, <span className="text-cyan-300">&quot;PostgreSQL&quot;</span><span className="text-green-300">]</span>,
                    </div>
                    <div className="ml-4">
                      <span className="text-yellow-300">&quot;devops&quot;</span>: <span className="text-green-300">[</span><span className="text-cyan-300">&quot;Docker&quot;</span>, <span className="text-cyan-300">&quot;AWS&quot;</span>, <span className="text-cyan-300">&quot;Vercel&quot;</span><span className="text-green-300">]</span>,
                    </div>
                    <div className="ml-4">
                      <span className="text-yellow-300">&quot;status&quot;</span>: <span className="text-green-300">&quot;</span><span className="text-green-400 animate-pulse">● AVAILABLE_FOR_FREELANCE</span><span className="text-green-300">&quot;</span>
                    </div>
                    <div className="text-gray-500">{'}'}</div>
                  </div>

                  <div className="flex items-center mt-4">
                    <span className="text-green-400">┌──(</span><span className="text-blue-400">developer@portfolio</span><span className="text-green-400">)-[</span><span className="text-purple-400">~</span><span className="text-green-400">]</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400">└─</span><span className="text-blue-400">$ </span>
                    <span className="text-white ml-2">echo $MISSION</span>
                  </div>
                  <div className="text-green-300 ml-6 italic">
                    &quot;革新的なウェブ体験を創造し、コードを通じてアイデアを現実に変える&quot;
                  </div>

                  <div className="flex items-center mt-4">
                    <span className="text-green-400">┌──(</span><span className="text-blue-400">developer@portfolio</span><span className="text-green-400">)-[</span><span className="text-purple-400">~</span><span className="text-green-400">]</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400">└─</span><span className="text-blue-400">$ </span>
                    <span className="text-white ml-2 animate-pulse">▊</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-12 lg:mb-16 xl:mb-20">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 font-mono font-bold mb-6">
              <span className="text-green-400">&lt;</span>FullStack<span className="text-blue-400"> Developer</span><span className="text-green-400"> /&gt;</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 leading-relaxed max-w-4xl xl:max-w-5xl mx-auto">
              革新的なウェブ体験を創造し、<br />
              <span className="text-cyan-400 font-mono">const</span> <span className="text-yellow-400">solution</span> = <span className="text-purple-400">ideas</span>.<span className="text-blue-400">map</span>(<span className="text-green-400">code</span>);
            </p>
          </div>
          
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
      <section className="relative py-24 lg:py-32 xl:py-40 bg-gradient-to-b from-gray-900 to-black">
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <pattern id="circuit" patternUnits="userSpaceOnUse" width="40" height="40">
              <path d="M0 20h40M20 0v40" stroke="#3b82f6" strokeWidth="0.5"/>
              <circle cx="20" cy="20" r="2" fill="#3b82f6"/>
            </pattern>
            <rect width="400" height="400" fill="url(#circuit)"/>
          </svg>
        </div>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="relative z-10 text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-lg px-6 py-3 mb-6 shadow-lg">
              <span className="text-green-400 mr-2">❯</span>
              <span className="text-white font-mono text-sm">npm list --production --depth=0</span>
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 font-mono">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">&lt;/</span>
              <span className="text-white">TechStack</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">&gt;</span>
            </h2>
            <p className="text-xl lg:text-2xl xl:text-3xl text-gray-300 max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
              <span className="text-cyan-400 font-mono">//</span> モダンな開発環境とベストプラクティスで構築
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 max-w-6xl mx-auto">
            {/* Frontend Code Block */}
            <div className="group relative bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-green-400/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-400/10">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-blue-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gray-700/80 px-4 py-3 flex items-center justify-between border-b border-gray-600/30">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-blue-500/80 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">TS</span>
                  </div>
                  <span className="text-gray-300 font-mono text-sm">frontend.tsx</span>
                  <span className="text-green-400 text-xs">● Modified</span>
                </div>
                <div className="flex space-x-1">
                  <div className="w-2.5 h-2.5 bg-red-500 rounded-full shadow-sm"></div>
                  <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full shadow-sm"></div>
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-sm"></div>
                </div>
              </div>
              <div className="relative p-6 font-mono text-sm bg-gray-900/30">
                <div className="space-y-1.5">
                  <div className="flex items-center">
                    <span className="text-gray-500 w-8 text-right mr-4">1</span>
                    <div><span className="text-purple-400">import</span> <span className="text-yellow-300">React</span> <span className="text-purple-400">from</span> <span className="text-green-300">&apos;react&apos;</span></div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 w-8 text-right mr-4">2</span>
                    <div><span className="text-purple-400">import</span> <span className="text-blue-400">type</span> <span className="text-gray-300">{'{'}</span> <span className="text-yellow-300">NextPage</span> <span className="text-gray-300">{'}'}</span> <span className="text-purple-400">from</span> <span className="text-green-300">&apos;next&apos;</span></div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 w-8 text-right mr-4">3</span>
                    <div><span className="text-purple-400">import</span> <span className="text-gray-300">{'{'}</span> <span className="text-yellow-300">useState</span>, <span className="text-yellow-300">useEffect</span> <span className="text-gray-300">{'}'}</span> <span className="text-purple-400">from</span> <span className="text-green-300">&apos;react&apos;</span></div>
                  </div>
                  <div className="flex items-center mt-3">
                    <span className="text-gray-500 w-8 text-right mr-4">4</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 w-8 text-right mr-4">5</span>
                    <div><span className="text-blue-400">const</span> <span className="text-yellow-300">ModernTech</span>: <span className="text-blue-400">NextPage</span> = <span className="text-gray-300">() =&gt; {'{'}</span></div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 w-8 text-right mr-4">6</span>
                    <div className="ml-4"><span className="text-blue-400">return</span> <span className="text-gray-300">(</span></div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 w-8 text-right mr-4">7</span>
                    <div className="ml-8 text-cyan-300">&lt;<span className="text-blue-400">Performance</span> <span className="text-yellow-300">optimized</span><span className="text-gray-300">=</span><span className="text-green-300">{'{true}'}</span> /&gt;</div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 w-8 text-right mr-4">8</span>
                    <div className="ml-4 text-gray-300">)</div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 w-8 text-right mr-4">9</span>
                    <div className="text-gray-300">{'}'}</div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 transition-opacity">
                  <span className="text-green-400 text-xs">✓ TypeScript</span>
                </div>
              </div>
            </div>

            {/* Responsive CSS Code Block */}
            <div className="group relative bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-blue-400/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gray-700/80 px-4 py-3 flex items-center justify-between border-b border-gray-600/30">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">CSS</span>
                  </div>
                  <span className="text-gray-300 font-mono text-sm">responsive.css</span>
                  <span className="text-blue-400 text-xs">● Responsive</span>
                </div>
                <div className="flex space-x-1">
                  <div className="w-2.5 h-2.5 bg-red-500 rounded-full shadow-sm"></div>
                  <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full shadow-sm"></div>
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-sm"></div>
                </div>
              </div>
              <div className="relative p-6 font-mono text-sm bg-gray-900/30">
                <div className="space-y-1.5">
                  <div className="flex items-center">
                    <span className="text-gray-500 w-8 text-right mr-4">1</span>
                    <div><span className="text-purple-400">@media</span> <span className="text-yellow-300">(max-width: 768px)</span> <span className="text-gray-300">{'{'}</span></div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 w-8 text-right mr-4">2</span>
                    <div className="ml-4"><span className="text-cyan-400">.container</span> <span className="text-gray-300">{'{'}</span></div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 w-8 text-right mr-4">3</span>
                    <div className="ml-8"><span className="text-blue-400">padding</span>: <span className="text-green-300">clamp(1rem, 2vw, 2rem)</span>;</div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 w-8 text-right mr-4">4</span>
                    <div className="ml-8"><span className="text-blue-400">font-size</span>: <span className="text-green-300">clamp(1rem, 4vw, 2rem)</span>;</div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 w-8 text-right mr-4">5</span>
                    <div className="ml-8"><span className="text-blue-400">transform</span>: <span className="text-green-300">scale(1)</span>;</div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 w-8 text-right mr-4">6</span>
                    <div className="ml-4 text-gray-300">{'}'}</div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 w-8 text-right mr-4">7</span>
                    <div className="text-gray-300">{'}'}</div>
                  </div>
                  <div className="flex items-center mt-2">
                    <span className="text-gray-500 w-8 text-right mr-4">8</span>
                    <div className="text-gray-500">/* 📱→🖥️ Perfect on every device */</div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 transition-opacity">
                  <span className="text-blue-400 text-xs">✓ Mobile First</span>
                </div>
              </div>
            </div>

            {/* Performance Code Block */}
            <div className="group relative bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/10">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-green-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gray-700/80 px-4 py-3 flex items-center justify-between border-b border-gray-600/30">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-green-500 rounded flex items-center justify-center">
                    <span className="text-black text-xs font-bold">JS</span>
                  </div>
                  <span className="text-gray-300 font-mono text-sm">performance.js</span>
                  <span className="text-green-400 text-xs animate-pulse">⚡ Optimized</span>
                </div>
                <div className="flex space-x-1">
                  <div className="w-2.5 h-2.5 bg-red-500 rounded-full shadow-sm"></div>
                  <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full shadow-sm"></div>
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-sm"></div>
                </div>
              </div>
              <div className="relative p-6 font-mono text-sm bg-gray-900/30">
                <div className="space-y-1.5">
                  <div className="flex items-center">
                    <span className="text-gray-500 w-8 text-right mr-4">1</span>
                    <div><span className="text-blue-400">const</span> <span className="text-yellow-300">optimize</span> = <span className="text-purple-400">async</span> <span className="text-gray-300">() =&gt; {'{'}</span></div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 w-8 text-right mr-4">2</span>
                    <div className="ml-4"><span className="text-purple-400">await</span> <span className="text-yellow-300">lazyLoad</span><span className="text-gray-300">(</span><span className="text-green-300">'components'</span><span className="text-gray-300">)</span></div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 w-8 text-right mr-4">3</span>
                    <div className="ml-4"><span className="text-purple-400">await</span> <span className="text-yellow-300">codeSplitting</span><span className="text-gray-300">(</span><span className="text-green-300">'routes'</span><span className="text-gray-300">)</span></div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 w-8 text-right mr-4">4</span>
                    <div className="ml-4"><span className="text-purple-400">await</span> <span className="text-yellow-300">preloadCritical</span><span className="text-gray-300">(</span><span className="text-green-300">'assets'</span><span className="text-gray-300">)</span></div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 w-8 text-right mr-4">5</span>
                    <div className="ml-4"><span className="text-blue-400">return</span> <span className="text-green-300">'⚡ Lighthouse Score: 100'</span></div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 w-8 text-right mr-4">6</span>
                    <div className="text-gray-300">{'}'}</div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 transition-opacity">
                  <span className="text-cyan-400 text-xs">⚡ Web Vitals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with GitHub Style */}
      <section className="relative py-24 lg:py-32 xl:py-40 bg-gradient-to-b from-black to-gray-900">
        {/* Binary Pattern Background */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(`
              <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                <text x="10" y="15" font-family="monospace" font-size="8" fill="%23059669">1</text>
                <text x="30" y="15" font-family="monospace" font-size="8" fill="%23059669">0</text>
                <text x="50" y="15" font-family="monospace" font-size="8" fill="%23059669">1</text>
                <text x="20" y="35" font-family="monospace" font-size="8" fill="%23059669">0</text>
                <text x="40" y="35" font-family="monospace" font-size="8" fill="%23059669">1</text>
                <text x="10" y="55" font-family="monospace" font-size="8" fill="%23059669">1</text>
              </svg>
            `)}')`
          }}></div>
        </div>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="relative z-10 text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-lg px-6 py-3 mb-6 shadow-lg">
              <span className="text-green-400 mr-2">●</span>
              <span className="text-white font-mono text-sm">git log --oneline --graph --decorate</span>
            </div>
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8 font-mono">
              <span className="text-green-400">*</span> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400">recent</span>
              <span className="text-white"> commits</span>
            </h2>
            <p className="text-xl lg:text-2xl xl:text-3xl text-gray-300 max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto font-mono">
              <span className="text-yellow-400"># </span>最新のプロジェクトとコントリビューション
              <span className="text-green-400 animate-pulse ml-2">▊</span>
            </p>
          </div>

          {/* GitHub Style Repository Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16 lg:mb-20 max-w-6xl mx-auto">
            {/* Repository Card 1 */}
            <div className="group bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:border-green-400/50 transition-all duration-500 font-mono hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-400/10">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-blue-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-4 border-b border-gray-700/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
                      </svg>
                    </div>
                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-lg font-semibold">portfolio-site</h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-1 rounded-full">Public</span>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">🚀 Modern portfolio website built with Next.js 15, TypeScript & Tailwind CSS v4</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2 shadow-sm"></div>
                      <span className="text-blue-400">TypeScript</span>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <svg className="w-3 h-3 mr-1 fill-yellow-400" viewBox="0 0 16 16">
                        <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"/>
                      </svg>
                      <span>23</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></div>
                      <span className="text-green-400">Active</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative p-3 bg-gray-900/50 backdrop-blur-sm">
                <div className="flex justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400">✓ Deployed on Vercel</span>
                  </div>
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center">
                    View live 
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
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