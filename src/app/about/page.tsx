export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        自己紹介
      </h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            プロフィール
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            ウェブ開発に情熱を持つエンジニアです。
            最新の技術を学び、実践的なプロジェクトを通じてスキルを向上させています。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            開発への取り組み
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              ユーザー体験を最優先に考え、使いやすく美しいインターフェースの構築を心がけています。
            </p>
            <p>
              コードの品質にこだわり、保守性の高い、拡張可能なソフトウェアの開発を目指しています。
            </p>
            <p>
              常に新しい技術やベストプラクティスを学び、プロジェクトに適用しています。
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            目標
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>実践的なプロジェクトを通じて技術力を向上</li>
            <li>オープンソースコミュニティへの貢献</li>
            <li>フルスタックエンジニアとしての成長</li>
            <li>チーム開発での経験を積む</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            興味のある分野
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              'ウェブアプリケーション開発',
              'UI/UXデザイン',
              'パフォーマンス最適化',
              'アクセシビリティ',
              'モバイルファースト開発',
              'クラウドサービス',
            ].map((interest) => (
              <span
                key={interest}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
              >
                {interest}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}