'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "フルスタックECサイトの開発。Next.js + TypeScript + Prisma を使用。",
      image: "/api/placeholder/400/300",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
      github: "https://github.com/haikeeen/ecommerce-platform",
      demo: "https://ecommerce-demo.vercel.app",
      status: "completed"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "チーム向けプロジェクト管理ツール。リアルタイム更新とドラッグ&ドロップ対応。",
      image: "/api/placeholder/400/300",
      techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      github: "https://github.com/haikeeen/task-manager",
      demo: "https://task-manager-demo.vercel.app",
      status: "completed"
    },
    {
      id: 3,
      title: "AI ChatBot Interface",
      description: "OpenAI API統合のチャットボットUI。ストリーミング対応。",
      image: "/api/placeholder/400/300",
      techStack: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel AI SDK"],
      github: "https://github.com/haikeeen/ai-chatbot",
      demo: "https://ai-chatbot-demo.vercel.app",
      status: "in-progress"
    }
  ]

  const skills = [
    { name: "React/Next.js", level: 90, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Language" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "Python", level: 75, category: "Language" },
    { name: "PostgreSQL", level: 70, category: "Database" },
    { name: "AWS", level: 65, category: "DevOps" }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-4xl md:text-5xl lg:text-6xl">
                  👨‍💻
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                Available
              </div>
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            関口 圭祐
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-6">
            Fullstack Developer & Code Architect
          </h2>
          
          {/* Catchphrase */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            革新的なウェブ体験を創造し、アイデアを現実のプロダクトに変える
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="#projects"
              className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              プロジェクトを見る
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-lg font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
            >
              お問い合わせ
            </Link>
          </div>

          {/* Stats Row */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400">3+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base">Years</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400">100%</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-orange-400">24/7</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              実際に制作したプロジェクトをご覧ください。技術力と創造力を形にした成果物です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                    <div className="text-6xl opacity-50">🚀</div>
                  </div>
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'completed' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                  }`}>
                    {project.status === 'completed' ? '完成' : '開発中'}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex-1 text-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-gray-900 dark:hover:border-gray-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              現在習得している技術スタックと習熟度。継続的な学習で常にアップデートしています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md"
              >
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.category}
                    </span>
                  </div>
                  <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: mounted ? `${skill.level}%` : '0%'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            お問い合わせ
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            プロジェクトのご相談、お仕事のご依頼など、お気軽にご連絡ください。24時間以内にご返信いたします。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="mailto:keisuke.sekiguchi2@gmail.com"
              className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              メールを送る
            </a>
            <a
              href="https://github.com/haikeeen"
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-lg font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>

          <div className="text-center text-gray-500 dark:text-gray-400">
            <p>📍 Tokyo, Japan</p>
            <p>💼 Available for freelance projects</p>
          </div>
        </div>
      </section>
    </div>
  )
}