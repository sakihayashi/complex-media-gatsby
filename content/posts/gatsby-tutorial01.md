---
template: SinglePost
title: Gatsby使い方　Step1
status: Featured / Published
date: '2019-07-01'
featuredImage: 'https://ucarecdn.com/157877ea-a2cb-49b6-8130-768fbe1a60a7/'
excerpt: >-
  Etiam ac quam eget lectus venenatis ullamcorper sit amet non arcu. Nullam
  interdum arcu vitae augue pulvinar sodales. Sed non dui diam. Quisque lectus
  est, lobortis ac efficitur vitae, posuere a mauris. Phasellus ac dui
  pellentesque, lacinia risus ut, imperdiet eros.
categories:
  - category: Gatsbyチュートリアル
meta:
  canonicalLink: ''
  description: 分かりやすいGatsbyのチュートリアルのステップ１、インストールと設定
  noindex: false
  title: Gatsby使い方　Step1
---

準備　コマンドラインを使えるようになろう

マックの方は[このリンク](https://techacademy.jp/magazine/5155)　｜　ウィンドウズの方は[このリンク](https://techacademy.jp/magazine/5318)の参照をお勧めします

## NodeJSとGatsbyのインストールはHomeBrewからがお勧め

  1. [このリンク](https://brew.sh/index_ja)からHomeBrew（ホームブリュー）をインストール

## NodeJSとnpmをインストール
    
   インストール後はターミナル、もしくはコマンドプロンプトを開いて下記のコマンドをうつ

  1. まずはHomeBrewを最新のバージョンにします

    ```
    brew update
    ```

  2. 次にNodeJSをインストール

    ```
    brew install node
    ```

  3. 次にNodeJSとNpmのバージョンをチェック
  
    ```
    node -v
    ```
    ```
    npm -v
    ```

もしくは

[Macの方](https://nodejs.org/en/)
    ->Recommended For Most Usersをクリック。pkgファイルがダウンロードされるので、クリックしてインストール
　  
[Windowsの方](https://nodejs.org/en/download/)
    ->Windowsをクリックするとダウンロードが始まりますので、インストール
    もしくはマックのインストールと同じ手順で行いましょう

## Gatsbyのインストール

  次にターミナル、もしくはコマンドプロンプトより下記を入力してギャッツビーをインストール

  ```
  npm install -g gatsby-cli
  ```

## Gatsbyのスターターファイルを作成

1. ターミナル、もしくはコマンドプロンプトを開きギットハブからスターターをダウンロード

```
gatsby new hello-world https://github.com/gatsbyjs/gatsby-starter-hello-world
```

2. スターターファイル、Hello-Worldを開く
```
cd hello-world
```

3. ギャッツビーのウェブサイトを走らせてみる
```
gatsby develop
```

これでブラウザ（グーグルクロームを使用）を開いて「localhost:800」とURLにタイプ

### ギャッツビーコマンドの説明
* new　は新しいGatsbyコマンドを作成するコマンド　
* 二つ目のファイル名は自分の好みのものに変更可

下記のような画面が表示されましたか？