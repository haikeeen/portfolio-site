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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        スキル
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.category}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {category.category}
            </h2>
            
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}