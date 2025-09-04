# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要
ポートフォリオサイトを作成中。実績やプロジェクトを紹介し、GitHubと連携して開発スキルをアピールすることが目的。

## 技術スタック
- **Next.js 15.5.2** - App Router使用
- **TypeScript** - 型安全な開発
- **Tailwind CSS 4.x** - 最新版のCSSフレームワーク
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

### 完了済み 🎉
- ✅ Next.js初期セットアップ
- ✅ TypeScript設定
- ✅ Tailwind CSS v4設定（@tailwindcss/postcssを使用）
- ✅ GitHubリポジトリ作成・連携
- ✅ Vercelデプロイ設定
- ✅ **革命的「Creative Energy Hub」デザイン実装**
  - 鮮やかなマルチカラーグラデーション背景（4セクション別）
  - マウス追従エフェクト + 最適化されたパーティクルシステム
  - 3D浮遊プロフィールカード（ホログラム風回転ボーダー）
  - ネオンタイポグラフィ（グラデーション文字 + アニメーション）
  - インタラクティブプロジェクトカード（3D変形 + 回転効果）
  - 発光スキルバー（グラデーション + アニメーション）
- ✅ **フローティングナビゲーション**
  - アクティブセクション自動検知
  - スムーススクロール実装
  - レスポンシブ対応
- ✅ **パフォーマンス最適化**
  - GPU最適化（will-change、transform-gpu）
  - デバイス別パーティクル数調整
  - アクセシビリティ対応（prefers-reduced-motion）

### 現在のファイル構造
```
src/app/
├── layout.tsx      # 共通レイアウト（SEO最適化済み）
├── page.tsx        # メインページ（Creative Energy Hub）
└── globals.css     # グローバルスタイル（Tailwind）
```

### デザインコンセプト
**「Creative Energy Hub」** - エネルギッシュで記憶に残るポートフォリオ
- Hero: Orange→Pink→Purple（夕焼けグラデーション）
- Projects: Cyan→Teal→Blue（海グラデーション）
- Skills: Green→Purple→Blue（オーロラグラデーション）
- Contact: Red→Orange→Yellow（炎グラデーション）

## 今後の実装予定

### 優先度：高
1. **プロジェクトモーダルシステム** 🚧
   - クリックで詳細表示
   - 技術スタック詳細
   - スクリーンショット・デモ
   - GitHub統計連携

2. **GitHub API連携** 
   - リアルタイム統計表示
   - コントリビューショングラフ
   - 実際のリポジトリデータ

3. **お問い合わせフォーム機能**
   - メール送信機能
   - フォームバリデーション
   - スパム対策

### 優先度：中
4. **追加ページ作成**
   - About詳細ページ
   - ブログセクション（技術記事）
   - 経歴・実績詳細

5. **アニメーション強化**
   - スクロール連動アニメーション
   - パララックス効果
   - マイクロインタラクション

6. **SEO・アクセシビリティ向上**
   - 構造化データ追加
   - 画像最適化
   - パフォーマンス改善

### 優先度：低  
7. **多言語対応**
   - 英語版ページ
   - 自動言語検知

8. **CMS連携**
   - ブログ投稿管理
   - プロジェクト管理

## 注意事項

### Tailwind CSS v4
- **Tailwind CSS v4を使用**（@tailwindcss/postcssパッケージが必要）
- postcss.config.mjsの設定：
  ```javascript
  plugins: {
    '@tailwindcss/postcss': {},
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
1. **ビジュアルインパクト重視** - 記憶に残る印象的なデザイン
2. **パフォーマンス最適化** - 美しさと実用性の両立
3. **レスポンシブデザイン** - 全デバイスで最適な体験
4. **アクセシビリティ配慮** - 誰もが使いやすいUI/UX
5. **継続的改善** - データ分析に基づく機能改善

## 技術的特徴
- **GPU最適化アニメーション** - スムーズな60FPS描画
- **Intersection Observer** - 効率的なスクロール検知
- **CSS-in-JS** - 動的スタイリング
- **TypeScript** - 型安全な開発
- **Next.js 15** - 最新のReact機能活用