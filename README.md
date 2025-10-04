# 粗品ボタン Web

粗品の音声をスマートフォンで楽しむサウンドボードアプリケーション。

## 概要
- Vite + TypeScript + Tailwind CSS で構築したスマートフォン専用サウンドボード。
- 端末の向きに応じて UI を切り替え、縦向きでは厳選 8 ボイス、横向きではカテゴリ別 3×3 グリッドを提供。
- BGM を選択・再生・一時停止・停止できるミニプレイヤーを搭載し、Howler.js で音源の事前読み込みと安定再生を実現。
- PWA 対応（vite-plugin-pwa）でホーム画面追加やオフライン再生にも対応。

## 主な機能
- スマートフォン判定を行い、PC アクセス時は注意ダイアログを表示。
- ポートレートモード：`phrase-btn-1`〜`phrase-btn-8` のワンタップ再生とボタン自動無効化で二重再生を防止。
- ランドスケープモード：8 カテゴリ×9 ボイスをサイドバーと 3×3 グリッドで切り替えて再生、BGM プレイヤーと現在の曲名表示を同居。
- BGM プレイリスト：How to Get High Legally / How Many Boogie / Lose Yourself / Still D.R.E. / Human Power Plant / Escort をループ再生。
- Howler.js による音源の事前読み込みと再生エラー監視ログをコンソール出力。
- vite-plugin-pwa によるサービスワーカー登録と Google Fonts キャッシュ設定。

## 画面構成
- ポートレートモード：中央に丸型の粗品画像、下部に縦並びのボイスボタンを表示。
- ランドスケープモード：カテゴリ切り替えサイドバー、粗品画像＋BGM コントローラー、3×3 ボタングリッドで構成。

## 必要な環境
- Node.js 18 以上
- npm

## セットアップ
```bash
npm install
npm run dev
```

## ビルド・デプロイ
- `npm run build` : 本番ビルドを `dist/` に生成。
- `npm run preview` : ビルド済みファイルをローカルプレビュー。
- `npm run deploy` : `gh-pages` ブランチへデプロイ（GitHub Pages 用、`vite.config.ts` の `base` を利用）。

## ディレクトリ構成
```
men-s-coach-Button/
├─ public/
│  ├─ audio/
│  │  ├─ portrait/    # ポートレート用ボイス
│  │  ├─ landscape/   # ランドスケープ用ボイス
│  │  └─ bgm/         # BGM 音源
│  └─ images/         # 表示用の人物画像など
└─ src/
   ├─ main.ts         # 音源管理とアプリ初期化
   ├─ ui.ts           # DOM 取得と UI 制御、カテゴリ定義
   ├─ config.ts       # 音源差し替え用スケルトン設定
   ├─ styles.css      # Tailwind レイヤー定義
   └─ ...
```

## 音声・画像アセットの差し替え
- ポートレート音声：`public/audio/portrait/` に mp3 を追加し、`src/main.ts` の `AudioManager` 初期化配列と `src/ui.ts` の `buttonCategories[1]` を同じ順序で更新。
- ランドスケープ音声：`public/audio/landscape/` にファイルを配置し、対応カテゴリ（1〜8）の `buttonCategories` と `AudioManager` の音源配列を更新。
- BGM：`public/audio/bgm/` に音源を置き、`AudioManager` の `bgmList` と `setupBgmSelect` で表示名を定義。
- 画像：`public/images/` 内のファイルを差し替えればポートレート／ランドスケープの表示を変更可能。
- `src/config.ts` には構成情報をコードから切り出すためのインターフェース定義を用意。音源管理を一元化したい場合に活用してください。

## 技術スタック
- Vite 5 + TypeScript
- Tailwind CSS
- Howler.js
- vite-plugin-pwa
- gh-pages

## 開発メモ
- 音源読込や BGM 操作の状態はブラウザコンソールにログ出力されます。
- モバイルブラウザでホーム画面に追加すると、PWA の manifest 設定（`vite.config.ts` 管理）が反映されます。
