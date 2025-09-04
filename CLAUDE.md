# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要
ポートフォリオサイトを作成中。実績やプロジェクトを紹介し、GitHubと連携して開発スキルをアピールすることが目的。

## 技術スタック
- **Next.js 15.5.2** - App Router使用
- **TypeScript** - 型安全な開発
- **Tailwind CSS 3.x** - スタイリング
- **Vercel** - ホスティングとデプロイ

## 開発コマンド
```bash
npm run dev        # 開発サーバー起動 (http://localhost:3000)
npm run build      # 本番用ビルド
npm run start      # 本番サーバー起動
npm run lint       # ESLintでコード品質チェック
```

## デプロイ情報
- GitHub: https://github.com/haikeeen/portfolio-site
- Vercel: 自動デプロイ設定済み（mainブランチにプッシュすると自動的にデプロイ）

## 現在の実装状況

### 完了済み
- ✅ Next.js初期セットアップ
- ✅ TypeScript設定
- ✅ Tailwind CSS設定（v3を使用、v4はVercelでビルドエラーのため避ける）
- ✅ GitHubリポジトリ作成・連携
- ✅ Vercelデプロイ設定
- ✅ 基本的なトップページ作成

### 現在のファイル構造
```
src/app/
├── layout.tsx      # 共通レイアウト（メタデータ含む）
├── page.tsx        # トップページ
└── globals.css     # グローバルスタイル（Tailwind）
```

## 今後の実装予定

### 優先度：高
1. **ナビゲーションバーの実装**
   - ホーム、プロジェクト、スキル、お問い合わせ等のリンク
   - レスポンシブ対応（モバイルメニュー）

2. **プロジェクト一覧ページ**
   - プロジェクトカードコンポーネント
   - GitHub APIとの連携
   - 技術スタックの表示

3. **プロジェクト詳細ページ**
   - 動的ルーティング（[slug]）
   - README表示
   - デモリンク、GitHubリンク

### 優先度：中
4. **スキルセクション**
   - 技術カテゴリ別表示
   - 習熟度の視覚化

5. **自己紹介ページ**
   - 経歴
   - 開発への取り組み

6. **ダークモード対応**
   - システム設定に応じた自動切り替え
   - 手動切り替えボタン

### 優先度：低
7. **お問い合わせフォーム**
   - メール送信機能
   - フォームバリデーション

8. **ブログセクション**
   - 技術記事
   - MDX対応

## 注意事項

### Tailwind CSS
- **必ずv3を使用すること**（v4はVercelでビルドエラーが発生）
- postcss.config.mjsの設定は以下を維持：
  ```javascript
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
  ```

### コミットメッセージ
日本語でわかりやすく記載する。例：
- `feat: プロジェクト一覧ページを追加`
- `fix: ナビゲーションのレスポンシブ対応を修正`
- `style: ダークモードのスタイルを調整`

### Git設定
- ユーザー名: keisuke sekiguchi
- メール: keisuke.sekiguchi2@gmail.com

## 開発方針
1. まず基本的な機能を実装してから、徐々に機能を追加
2. レスポンシブデザインを常に意識
3. パフォーマンスとアクセシビリティを重視
4. 実際の案件で使用されるような品質を目指す