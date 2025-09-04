'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    setMounted(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    // Smooth scroll to section
    const smoothScrollTo = (elementId: string) => {
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }

    // Add smooth scroll to existing anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const sectionId = target.hash.substring(1)
        smoothScrollTo(sectionId)
      }
    }

    // Intersection Observer for active section detection
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    // Observe sections when component mounts
    setTimeout(() => {
      const sections = ['home', 'projects', 'skills', 'contact']
      sections.forEach(id => {
        const element = document.getElementById(id)
        if (element) observer.observe(element)
      })
    }, 100)
    
    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('click', handleAnchorClick)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('click', handleAnchorClick)
      observer.disconnect()
    }
  }, [])

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "革新的なショッピング体験を提供するフルスタックECサイト。リアルタイム在庫管理と高度な検索機能を実装。",
      image: "/api/placeholder/400/300",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Stripe"],
      github: "https://github.com/haikeeen/ecommerce-platform",
      demo: "https://ecommerce-demo.vercel.app",
      status: "completed",
      gradient: "from-pink-400 via-purple-500 to-blue-500",
      icon: "🛒"
    },
    {
      id: 2,
      title: "AI Task Manager",
      description: "AI搭載のインテリジェントなタスク管理ツール。自動カテゴライズと優先度判定機能付き。",
      image: "/api/placeholder/400/300",
      techStack: ["React", "Node.js", "OpenAI API", "MongoDB", "Socket.io"],
      github: "https://github.com/haikeeen/ai-task-manager",
      demo: "https://ai-task-manager-demo.vercel.app",
      status: "completed",
      gradient: "from-cyan-400 via-teal-500 to-blue-600",
      icon: "🤖"
    },
    {
      id: 3,
      title: "Real-time Chat App",
      description: "暗号化されたリアルタイム通信アプリ。ビデオ通話とファイル共有機能を搭載。",
      image: "/api/placeholder/400/300",
      techStack: ["Next.js", "WebRTC", "Socket.io", "Redis", "FFmpeg"],
      github: "https://github.com/haikeeen/realtime-chat",
      demo: "https://realtime-chat-demo.vercel.app",
      status: "in-progress",
      gradient: "from-green-400 via-emerald-500 to-cyan-500",
      icon: "💬"
    },
    {
      id: 4,
      title: "3D Portfolio Showcase",
      description: "Three.jsを使用したインタラクティブな3Dポートフォリオ。没入型のユーザー体験を実現。",
      image: "/api/placeholder/400/300",
      techStack: ["Three.js", "React", "WebGL", "GSAP", "Blender"],
      github: "https://github.com/haikeeen/3d-portfolio",
      demo: "https://3d-portfolio-demo.vercel.app",
      status: "in-progress",
      gradient: "from-orange-400 via-red-500 to-pink-600",
      icon: "🎮"
    },
    {
      id: 5,
      title: "Crypto Analytics Dashboard",
      description: "リアルタイム暗号通貨分析ダッシュボード。高度なチャートと予測機能を提供。",
      image: "/api/placeholder/400/300",
      techStack: ["React", "D3.js", "WebSocket", "Python", "TensorFlow"],
      github: "https://github.com/haikeeen/crypto-analytics",
      demo: "https://crypto-analytics-demo.vercel.app",
      status: "completed",
      gradient: "from-yellow-400 via-orange-500 to-red-500",
      icon: "📊"
    },
    {
      id: 6,
      title: "IoT Smart Home Hub",
      description: "IoTデバイス統合管理システム。音声制御とAI学習機能付きホームオートメーション。",
      image: "/api/placeholder/400/300",
      techStack: ["Node.js", "IoT Core", "Machine Learning", "React Native", "AWS"],
      github: "https://github.com/haikeeen/smart-home-hub",
      demo: "https://smart-home-demo.vercel.app",
      status: "completed",
      gradient: "from-purple-400 via-indigo-500 to-blue-600",
      icon: "🏠"
    }
  ]

  const skills = [
    { name: "React/Next.js", level: 95, category: "Frontend", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
    { name: "TypeScript", level: 90, category: "Language", icon: "🔷", color: "from-blue-400 to-indigo-500" },
    { name: "Node.js", level: 88, category: "Backend", icon: "🟢", color: "from-green-400 to-emerald-500" },
    { name: "Python", level: 85, category: "Language", icon: "🐍", color: "from-yellow-400 to-green-500" },
    { name: "Three.js/WebGL", level: 80, category: "3D Graphics", icon: "🎯", color: "from-purple-400 to-pink-500" },
    { name: "AI/ML", level: 75, category: "Intelligence", icon: "🧠", color: "from-orange-400 to-red-500" },
    { name: "PostgreSQL", level: 82, category: "Database", icon: "🐘", color: "from-indigo-400 to-purple-500" },
    { name: "AWS/Cloud", level: 78, category: "DevOps", icon: "☁️", color: "from-teal-400 to-cyan-500" }
  ]

  // Optimize particle count based on device capabilities
  const getParticleCount = () => {
    if (typeof window === 'undefined') return 30
    const isMobile = window.innerWidth < 768
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (isReducedMotion) return 10
    if (isMobile) return 20
    return 40 // Reduced from 50 for better performance
  }
  
  const particleCount = mounted ? getParticleCount() : 30

  const navigationItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'projects', label: 'Projects', icon: '🎨' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'contact', label: 'Contact', icon: '💫' }
  ]

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 overflow-hidden">
      {/* Floating Navigation */}
      <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-40 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-4 shadow-2xl">
        <div className="flex items-center gap-8">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`group flex items-center gap-3 px-4 py-2 rounded-full transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-white/30 text-white scale-110'
                  : 'text-white/80 hover:text-white hover:bg-white/20 hover:scale-105'
              }`}
            >
              <span className="text-lg group-hover:animate-bounce">
                {item.icon}
              </span>
              <span className="font-medium text-sm hidden md:block">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
      {/* Mouse Follower Effect */}
      <div 
        className="fixed pointer-events-none z-50 w-6 h-6 rounded-full bg-white mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transition: 'all 0.1s ease-out'
        }}
      />

      {/* Floating Particles */}
      {mounted && (
        <div className="fixed inset-0 pointer-events-none z-10">
          {[...Array(particleCount)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: ['#00D4FF', '#39FF14', '#FF1B8D', '#FFD700', '#FF4500'][Math.floor(Math.random() * 5)],
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                opacity: 0.7,
                filter: 'blur(0.5px)',
                willChange: 'opacity, transform'
              }}
            />
          ))}
        </div>
      )}

      {/* Hero Section - Energy Burst */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-400/30 to-emerald-500/30 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400/30 to-orange-500/30 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-20 text-center max-w-6xl mx-auto">
          {/* Floating Profile Card */}
          <div className="mb-12 perspective-1000">
            <div className="relative inline-block transform-gpu hover:scale-105 transition-all duration-500 animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full p-1 animate-spin-slow"></div>
              <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-6xl md:text-7xl lg:text-8xl">👨‍💻</div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                ✨ Available
              </div>
            </div>
          </div>

          {/* Neon Typography */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 drop-shadow-2xl animate-pulse">
            関口 圭祐
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-white drop-shadow-lg">
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Creative</span>{' '}
            <span className="bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">Fullstack</span>{' '}
            <span className="bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent">Developer</span>
          </h2>

          {/* Floating Skill Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['React', 'Next.js', 'TypeScript', 'Three.js', 'AI/ML'].map((skill, index) => (
              <div
                key={skill}
                className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-110 animate-bounce"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {skill}
              </div>
            ))}
          </div>

          {/* Catchphrase */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            🚀 革新的なウェブ体験を創造し、<br />
            <span className="text-yellow-300 font-bold animate-pulse">コードで未来を描く</span> デジタルアーティスト
          </p>

          {/* CTA Buttons with Neon Effects */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => handleNavClick('projects')}
              className="group relative px-10 py-5 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xl font-bold rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
            >
              <span className="relative z-10">🎨 プロジェクトを見る</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="group px-10 py-5 border-4 border-white text-white text-xl font-bold rounded-full backdrop-blur-md hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
            >
              💫 お問い合わせ
            </button>
          </div>

          {/* Animated Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { number: '100+', label: 'Projects', icon: '🚀', color: 'from-cyan-400 to-blue-500' },
              { number: '5+', label: 'Years', icon: '⭐', color: 'from-green-400 to-emerald-500' },
              { number: '500+', label: 'Commits', icon: '💻', color: 'from-purple-400 to-pink-500' },
              { number: '24/7', label: 'Available', icon: '⚡', color: 'from-orange-400 to-red-500' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center transform hover:scale-110 transition-all duration-300 animate-bounce"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.icon} {stat.number}
                </div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Interactive Gallery */}
      <section id="projects" className="py-24 bg-gradient-to-br from-cyan-400 via-teal-500 to-blue-600 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-orange-300 drop-shadow-2xl">
              🎨 Featured Projects
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto font-light">
              創造力と技術力が融合した、革新的なデジタルソリューション
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 hover:rotate-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image/Icon */}
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:animate-pulse`}>
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                    project.status === 'completed' 
                      ? 'bg-green-400 text-green-900'
                      : 'bg-yellow-400 text-yellow-900'
                  }`}>
                    {project.status === 'completed' ? '✅ 完成' : '🚧 開発中'}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/80 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/20 text-white text-xs rounded-full border border-white/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full font-bold">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex-1 text-center px-4 py-3 border border-white/30 text-white rounded-xl hover:bg-white/20 transition-all duration-300 font-semibold hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📂 GitHub
                    </a>
                    <a
                      href={project.demo}
                      className="flex-1 text-center px-4 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 font-semibold hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      🚀 Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Neon Dashboard */}
      <section id="skills" className="py-24 bg-gradient-to-br from-green-400 via-purple-500 to-blue-600 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-purple-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 drop-shadow-2xl">
              ⚡ Technical Skills
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto font-light">
              最新技術をマスターし続ける、デジタルクラフトマンのスキルセット
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-sm text-white/70 font-medium">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  <div className={`text-2xl font-black bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                    {skill.level}%
                  </div>
                </div>
                
                <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
                  <div
                    className={`h-4 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-2000 ease-out shadow-lg`}
                    style={{
                      width: mounted ? `${skill.level}%` : '0%',
                      filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Fire Gradient */}
      <section id="contact" className="py-24 bg-gradient-to-br from-red-400 via-orange-500 to-yellow-400 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-white/10 to-yellow-300/20 rounded-full filter blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-orange-300 drop-shadow-2xl">
            💫 Let&apos;s Connect
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-16 max-w-3xl mx-auto font-light">
            素晴らしいプロジェクトを一緒に創造しましょう！<br />
            新しいアイデアをお聞かせください 🚀
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
            <a
              href="mailto:keisuke.sekiguchi2@gmail.com"
              className="group px-12 py-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-bold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
            >
              <span className="group-hover:animate-bounce inline-block">📧</span> メールを送る
            </a>
            <a
              href="https://github.com/haikeeen"
              className="group px-12 py-6 border-4 border-white text-white text-xl font-bold rounded-full backdrop-blur-md hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="group-hover:animate-spin inline-block">⭐</span> GitHub
            </a>
          </div>

          <div className="text-center text-white/80 space-y-2">
            <p className="text-lg">📍 Tokyo, Japan</p>
            <p className="text-lg">💼 Available for exciting projects</p>
            <p className="text-lg">🌟 Response within 24 hours</p>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}