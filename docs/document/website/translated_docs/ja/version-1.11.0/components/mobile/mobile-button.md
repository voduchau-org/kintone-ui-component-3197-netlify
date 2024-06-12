---
id: version-1.11.0-mobile-button
title: MobileButton
sidebar_label: MobileButton
original_id: mobile-button
---

## Overview

MobileButton は、ボタンを表示します。

<div class="sample-container" id="mobile-button">
  <div id="sample-container__components" class="mobile"></div>
</div>
<script src="/js/samples/mobile/mobile-button.js"></script>

---

## Specification

### Property

使用できるプロパティの一覧です。プロパティを指定して値を更新することができます。

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | "" | コンポーネントの class 名 |  |
| id | string | "" | コンポーネントの id 名 |  |
| text | string | "" | ボタンに表示するテキスト | content が未指定の場合、text が表示される<br>その他の場合、text は無視される |
| type | string | "normal" | ボタンのデザインタイプ | 以下を指定できる<br>"normal" : White(#ffffff)<br>"submit" : Blue(#206694) |
| content *1 | string/HTMLElement | ""  | ボタン内の DOM | HTML が記載された string を指定した場合、自動的に HTML に変換してそのまま表示される |
| disabled | boolean | false | コンポーネントの編集可/不可設定 ||
| visible | boolean | true | コンポーネントの表示/非表示設定 ||

> *1: kintone UI Component はこのプロパティの値を内部的にサニタイズしていません。ユーザー入力を受け付けるような実装でこのプロパティを使用する場合は、開発者自身で XSS 対策をしてください。

### Event

指定できるイベントの一覧です。

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| click | function | クリックされた時のイベントハンドラ | 引数には Event の event オブジェクトをとる |

### Constructor

MobileButton(options)<br>
使用できるコンストラクタの一覧です。

#### Parameter

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | コンポーネントのプロパティを含むオブジェクト | |

---

## Sample Code

>[導入と実装方法](../../getting-started/quick-start.md#導入と実装方法) をご確認ください。

全てのパラメータを指定した場合のサンプルコードです。

```javascript
const Kuc = Kucs['1.x.x'];

const header = kintone.mobile.app.getHeaderMenuSpaceElement();

const mobileButton = new Kuc.MobileButton({
  text: 'Submit',
  type: 'submit',
  content: `<div>
              <svg>...</svg>
              <span>Search</span>
            </div>;`,
  className: 'options-class',
  id: 'options-id',
  visible: true,
  disabled: false
});
header.appendChild(mobileButton);

mobileButton.addEventListener('click', event => {
  console.log(event);
});
```

---

## Related Articles

- [Mobile timecard customization](../../guides/mobile-timecard-customization.md)
