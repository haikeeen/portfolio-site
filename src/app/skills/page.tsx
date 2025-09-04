export default function SkillsPage() {
  const skillCategories = [
    {
      category: 'フロントエンド',
      skills: [
        { name: 'React', level: 80 },
        { name: 'Next.js', level: 75 },
        { name: 'TypeScript', level: 70 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
      ],
    },
    {
      category: 'バックエンド',
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'Express', level: 65 },
        { name: 'Python', level: 60 },
        { name: 'REST API', level: 75 },
      ],
    },
    {
      category: 'データベース',
      skills: [
        { name: 'MongoDB', level: 60 },
        { name: 'PostgreSQL', level: 55 },
        { name: 'MySQL', level: 50 },
      ],
    },
    {
      category: 'ツール・その他',
      skills: [
        { name: 'Git/GitHub', level: 80 },
        { name: 'Docker', level: 50 },
        { name: 'VS Code', level: 90 },
        { name: 'Vercel', level: 70 },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-lg px-6 py-3 mb-6 shadow-lg">
            <span className="text-green-400 mr-2">◇</span>
            <span className="text-white font-mono text-sm">cat ~/.config/skills.json</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold font-mono mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">&lt;/</span>
            <span className="text-white">Skills</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">&gt;</span>
          </h1>
          <p className="text-xl text-gray-300 font-mono">
            <span className="text-cyan-400">//</span> テクニカルスキルと習熟度
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="group bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold font-mono mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  <span className="text-green-400">{'//'}</span> {category.category}
                </h2>
                <div className="space-y-6">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-500 font-mono text-sm w-6">{String(index + 1).padStart(2, '0')}</span>
                          <span className="text-sm font-medium font-mono text-gray-300 group-hover/skill:text-cyan-400 transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-gray-700/50 rounded-full h-1.5 overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-green-400 to-cyan-400 h-full rounded-full transition-all duration-700 ease-out"
                              style={{ 
                                width: `${skill.level}%`,
                                boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)'
                              }}
                            />
                          </div>
                          <span className="text-sm text-cyan-400 font-mono font-bold min-w-[3rem] text-right">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-700/30 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 h-2 rounded-full transition-all duration-1000 ease-out group-hover/skill:shadow-lg"
                          style={{ 
                            width: `${skill.level}%`,
                            boxShadow: `0 0 20px rgba(34, 197, 94, ${skill.level / 200})`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}