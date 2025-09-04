export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'ポートフォリオサイト',
      description: 'Next.js 15とTailwind CSS v4を使用した個人ポートフォリオサイト',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/haikeeen/portfolio-site',
      demoUrl: '#',
      image: '/api/placeholder/600/400',
    },
    {
      id: 2,
      title: 'プロジェクト例 2',
      description: '説明文が入ります',
      technologies: ['React', 'Node.js', 'MongoDB'],
      githubUrl: '#',
      demoUrl: '#',
      image: '/api/placeholder/600/400',
    },
    {
      id: 3,
      title: 'プロジェクト例 3',
      description: '説明文が入ります',
      technologies: ['Vue.js', 'Express', 'PostgreSQL'],
      githubUrl: '#',
      demoUrl: '#',
      image: '/api/placeholder/600/400',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        プロジェクト
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">
                プロジェクト画像
              </span>
            </div>
            
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  デモ
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}