# CLAUDE.md - Portfolio Site

This file provides guidance to Claude Code when working with the portfolio site codebase.

## プロジェクト概要
プロフェッショナルなポートフォリオサイト。フリーランスエンジニアとしての実績と技術スタックを効果的に提示。

## 現在のデザインコンセプト
**「Professional Minimalist」** - 信頼性とプロフェッショナリズムを重視したクリーンなデザイン

### カラーパレット
```css
Primary: #0A0E27 (深い紺)
Accent: #3B82F6 (信頼のブルー)  
Background: #FFFFFF / #F8FAFC
Text: #1F2937
Border: #E5E7EB
```

### デザイン原則
- ✅ 白背景ベースのクリーンデザイン
- ✅ 最小限のアニメーション（パフォーマンス重視）
- ✅ 明確な情報階層
- ✅ アクセシビリティ優先
- ✅ モバイルファースト

## 技術スタック
- **Framework**: Next.js 15.5.2 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.x
- **Deployment**: Vercel
- **Version Control**: Git/GitHub

## ファイル構造
```
src/app/
├── layout.tsx       # メインレイアウト（メタデータ、SEO設定）
├── page.tsx         # ホームページ（全セクション統合）
├── globals.css      # グローバルスタイル
├── components/      # 再利用可能コンポーネント（今後追加予定）
│   ├── Navigation.tsx
│   ├── ProjectCard.tsx
│   └── SkillBar.tsx
└── lib/            # ユーティリティ関数（今後追加予定）
    └── utils.ts
```

## セクション構成

### 1. Navigation (固定ヘッダー)
- スクロール位置検知でアクティブセクションハイライト
- スムーススクロール実装
- レスポンシブ対応（モバイルメニュー今後実装）

### 2. Hero Section
- 簡潔な自己紹介
- CTAボタン（Projects / CV）
- プロフェッショナルな第一印象

### 3. Projects Section
- 実プロジェクト優先表示
- ステータス表示（完成/開発中/計画中）
- GitHub/Live Demoリンク
- 使用技術タグ

### 4. Skills Section
- カテゴリ別スキル表示
  - Languages（C#, C++, TypeScript, Python, SQL）
  - Frontend（React, Next.js, HTML/CSS, Tailwind）
  - Backend（.NET Core, Node.js, Express）
  - Tools & Others（Git, Docker, PostgreSQL, MongoDB）
- 経験年数/学習状況表示
- プログレスバー可視化

### 5. Experience Section
- 実務経験
- 学習履歴
- 使用技術タグ

### 6. Contact Section
- Email/GitHubリンク
- シンプルで直接的なコンタクト方法

## 開発コマンド
```bash
npm run dev        # 開発サーバー起動 (http://localhost:3000)
npm run build      # 本番用ビルド
npm run start      # 本番サーバー起動
npm run lint       # ESLintでコード品質チェック
```

## デプロイ情報
- **GitHub**: https://github.com/haikeeen/portfolio-site
- **Production**: https://portfolio-site-haikeeen.vercel.app
- **自動デプロイ**: mainブランチへのプッシュで自動デプロイ

## パフォーマンス最適化
- ✅ 画像最適化（Next.js Image使用）
- ✅ フォント最適化（Next.js Font使用）
- ✅ 静的サイト生成（SSG）
- ✅ コード分割
- ✅ 最小限のJavaScript

## SEO対策
- ✅ 適切なメタタグ設定
- ✅ Open Graph対応
- ✅ 構造化データ（今後追加）
- ✅ サイトマップ（今後追加）

## アクセシビリティ
- ✅ セマンティックHTML
- ✅ 適切なARIA属性
- ✅ キーボードナビゲーション対応
- ✅ 十分なカラーコントラスト

## 今後の実装予定

### 高優先度
1. **モバイルメニュー実装**
2. **プロジェクト詳細モーダル**
3. **GitHub API連携**（実際のリポジトリデータ取得）
4. **ダークモード対応**

### 中優先度
5. **多言語対応**（日本語/英語）
6. **ブログセクション追加**
7. **アニメーション強化**（Framer Motion）
8. **お問い合わせフォーム**

### 低優先度
9. **CMSx連携**
10. **アナリティクス導入**

## Git設定
- ユーザー名: keisuke sekiguchi
- メール: keisuke.sekiguchi2@gmail.com

## コミットメッセージ規則
```
feat: 新機能追加
fix: バグ修正
docs: ドキュメント更新
style: コードスタイル修正
refactor: リファクタリング
perf: パフォーマンス改善
test: テスト追加/修正
chore: ビルド関連・その他
```

## 開発方針
1. **実績重視** - 実際のプロジェクトを優先的に表示
2. **クリーンコード** - 可読性と保守性を重視
3. **パフォーマンス** - Core Web Vitals最適化
4. **プロフェッショナル** - 採用担当者/クライアント向けデザイン
5. **継続的改善** - 定期的なコンテンツ更新

## 備考
- Claude Codeを活用した効率的な開発
- ベストプラクティスの遵守
- 最新技術の積極的採用