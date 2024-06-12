---
id: version-1.11.0-usage-with-typescript
title: Usage with TypeScript
sidebar_label: Usage with TypeScript
original_id: usage-with-typescript
---
## 概要

TypeScript を使うと、JavaScript に静的型付けを追加して開発者の生産性とコードの品質を向上させることができます。
<br>
このガイドでは、TypeScript と webpack を使って kintone UI Component（KUC）のカスタマイズ方法を学習できます。

## インストールと構成

1. `npm` を使用して `kuc-demo-ts` という名前の新しい KUC プロジェクトを作成します。
```sh
mkdir kuc-demo-ts
cd kuc-demo-ts
npm init -y
```

2. `webpack` と `webpack-cli` (コマンドラインで webpack を実行するために使用されるツール) をローカルにインストールします。

```sh
npm install --save-dev webpack webpack-cli
```

3. TypeScript コンパイラとローダーをインストールします。
```sh
npm install --save-dev typescript ts-loader
```

4. 次のようなプロジェクトが作成されます。
```sh
kuc-demo-ts
  |- dist
    |- index.html
  |- /src
    |- index.ts
  |- package.json
  |- package-lock.json
  |- webpack.config.js
  |- tsconfig.json
```

[KUC リポジトリ](https://github.com/kintone-labs/kintone-ui-component/tree/master/demos/typescript-app)のサンプルプロジェクトにてファイルとその設定内容をご確認ください。

## KUC のインポート
1. `kintone-ui-component` をインストールします。
```sh
npm install kintone-ui-component
```

2. `src/index.ts` を編集します。
```js
import {
  Dropdown,
  DropdownChangeEventDetail,
  DropdownItem,
  DropdownProps,
} from 'kintone-ui-component';

const root = document.getElementById('root');
const items: DropdownItem[] = [
  {
    label: '-----',
    value: '-----'
  },
  {
    label: 'Orange',
    value: 'orange'
  },
  {
    label: 'Banana',
    value: 'banana'
  }
];
const dropdownProps: DropdownProps = {
  items: items,
  value: '-----',
  label: 'Fruit',
  error: 'Error occurred!'
};
const dropdown = new Dropdown(dropdownProps);
dropdown.addEventListener('change', ((event: CustomEvent) => {
  const detail: DropdownChangeEventDetail = event.detail;
  console.log(detail);
}) as EventListener);
root.appendChild(dropdown);
```
3. 次のコマンドを実行してビルドします。
```sh
npm run build
```

ブラウザで `dist` ディレクトリの `index.html` を開きます。問題がなければ、ページに Dropdown コンポーネントが表示されます。
![dropdown image](assets/kuc-dropdown.png)
KUC は TypeScript で書かれていて型定義も充実しているので、以下のようにプロパティのサジェスチョンや型チェックを活用できます。

![dropdown param image](assets/kuc-dropdown-param.png)

![dropdown props image](assets/kuc-dropdown-props.png)

アプリケーションを開発するために、KUC のコンポーネントを自由に選択し、以下の型定義を利用できるようになります。
- Items プロパティ (ex: DropdownItem)
- コンポーネントのプロパティ (ex: DropdownProps, DatePickerProps)
- CustomEvent.detail プロパティ（ex: DropdownChangeEventDetail）