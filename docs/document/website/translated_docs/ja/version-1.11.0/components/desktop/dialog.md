---
id: version-1.11.0-dialog
title: Dialog
sidebar_label: Dialog
original_id: dialog
---

## Overview

Dialog は、ダイアログボックスを表示します。

<div class="sample-container" id="dialog">
  <div id="sample-container__components">
    <iframe id="iframe" title="dialog image" width="700px" height="300px"></iframe>
  </div>
</div>
<script src="/js/samples/desktop/dialog.js"></script>

---

## Specification

### Property

使用できるプロパティの一覧です。プロパティを指定して値を更新することができます。

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| icon | string | "" | content 領域左上に表示するアイコン | 以下を指定できる:<li>"info" : ![info](assets/icon-info.png)</li><li>"success" : ![success](assets/icon-success.png)</li><li>"error" : ![error](assets/icon-error.png)</li><li>"warning" : ![warning](assets/icon-warning.png)</li><li>"question" : ![question](assets/icon-question.png)</li><li>"" : アイコンなし</li> |
| title | string | "" | Header のタイトル | |
| content *1 | string/HTMLElement | "" | Content の DOM | HTML が記載された string を指定した場合、自動的に HTML に変換してそのまま表示される |
| footer *1 | string/HTMLElement | "" | Footer の DOM | HTML が記載された string を指定した場合、自動的に HTML に変換してそのまま表示される |

> *1: kintone UI Component はこのプロパティの値を内部的にサニタイズしていません。ユーザー入力を受け付けるような実装でこのプロパティを使用する場合は、開発者自身で XSS 対策をしてください。

### Event

指定できるイベントの一覧です。

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| close | function | コンポーネントが閉じられた時のイベントハンドラ | 引数には Event の event オブジェクトをとる |

### Constructor

Dialog(options)<br>
使用できるコンストラクタの一覧です。

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | コンポーネントのプロパティを含むオブジェクト | |

---
### Method

使用できるメソッドの一覧です。

#### open()
Dialog を表示する

##### Parameter
none

##### Return
none

#### close()
Dialog を非表示にする

##### Parameter
none

##### Return
none

### Custom CSS
> [Custom CSS](../../getting-started/custom-css.md) をご確認ください。

コンポーネントのスタイルを変更するために使用できるプロパティの一覧です。
#### Property
| Name |
| :--- |
| --kuc-dialog-header-font-size |
| --kuc-dialog-header-color |

---
## Sample Code

>[導入と実装方法](../../getting-started/quick-start.md#導入と実装方法) をご確認ください。

全てのパラメータを指定した場合のサンプルコードです。

```javascript
const Kuc = Kucs['1.x.x'];

// Create OK and Cancel buttons
const okButton = new Kuc.Button({
  text: 'OK',
  type: 'submit'
});
const cancelButton = new Kuc.Button({
  text: 'Cancel',
  type: 'normal'
});

okButton.addEventListener('click', () => {
  // handle click OK button
});
cancelButton.addEventListener('click', () => {
  // handle click Cancel button
});

// Wrap OK and Cancel buttons with a div
const divEl = document.createElement('div');
divEl.appendChild(okButton);
divEl.appendChild(cancelButton);

const dialog = new Kuc.Dialog({
  title: 'Title',
  content: '<div>This is Content</div>',
  footer: divEl,
  icon: 'info'
});

dialog.addEventListener('close', event => {
  console.log(event);
});

dialog.open();
dialog.close();
```

---

## Related Articles

- [Format setting plug-in](../../guides/format-setting-plugin.md)
