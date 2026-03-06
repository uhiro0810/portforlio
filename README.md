# ポートフォリオサイト - 宇野 宏紀

画像処理AIエンジニア志望の学生向けポートフォリオサイトです。

**公開URL:** https://hiroki-uno-portfolio.netlify.app

---

## 概要

静的HTML/CSS/JSで構築したポートフォリオサイトです。日本語・英語の切り替え機能を備え、スクロールアニメーションやレスポンシブデザインに対応しています。

---

## フォルダ構成

```
ポートフォリオ/
├── index.html          # メインページ
├── css/
│   └── style.css       # スタイルシート（ダークテーマ）
├── js/
│   ├── main.js         # ナビゲーション・スクロールアニメーション
│   └── i18n.js         # 日英バイリンガル対応
├── images/
│   ├── profile.jpg             # プロフィール写真
│   ├── project1-othello.png    # オセロゲームのスクリーンショット
│   ├── project2-gpa-calc.png   # GPA計算アプリのスクリーンショット
│   └── project3-au-expression.png  # AU顔表情変換の画像
└── README.md
```

---

## 機能

- **日英切り替え（i18n）** — ヘッダーのJA/ENボタンで全テキストを切り替え。言語設定はlocalStorageに保存。
- **ダークテーマ** — インディゴ/パープルのアクセントカラーを使用。
- **スクロールアニメーション** — IntersectionObserverによるフェードイン。
- **レスポンシブデザイン** — スマートフォン向けハンバーガーメニュー対応。
- **GitHub Activityグラフ** — ghchart.rshah.orgによるコントリビューション表示。

---

## ローカルでの確認方法

ブラウザで直接 `index.html` を開くか、ローカルサーバーを使用します。

```bash
# Python を使う場合
python -m http.server 8000
# → ブラウザで http://localhost:8000 を開く
```

---

## コンテンツの更新方法

### テキストの変更

すべての表示テキストは `js/i18n.js` で管理されています。日本語は `ja:` オブジェクト、英語は `en:` オブジェクトを編集してください。

```js
// 例: ヒーローの肩書きを変更
hero_title: "画像処理AIエンジニア志望",
```

### 画像の変更

`images/` フォルダ内のファイルを同じファイル名で置き換えるだけで反映されます。

| ファイル名 | 用途 |
|---|---|
| `profile.jpg` | 自己紹介セクションのプロフィール写真 |
| `project1-othello.png` | プロジェクト1のスクリーンショット |
| `project2-gpa-calc.png` | プロジェクト2のスクリーンショット |
| `project3-au-expression.png` | プロジェクト3の画像 |

---

## デプロイ方法

### Netlify（現在使用中）

1. [https://app.netlify.com](https://app.netlify.com) にアクセス
2. "Sites" → "Add new site" → "Deploy manually"
3. ポートフォリオフォルダ全体をドラッグ&ドロップ

更新時も同様の手順でフォルダをドロップし直すと上書きデプロイされます。

### GitHub Pages（代替）

1. GitHubに新規リポジトリを作成
2. フォルダ内のファイルをプッシュ
3. リポジトリの Settings → Pages → Branch: main を選択して保存

---

## 技術スタック

| 種別 | 内容 |
|---|---|
| マークアップ | HTML5 |
| スタイリング | CSS3（カスタムプロパティ、BEM記法） |
| スクリプト | Vanilla JavaScript（ES6+） |
| アニメーション | IntersectionObserver API |
| 国際化 | 独自i18nシステム（localStorage） |
| ホスティング | Netlify |