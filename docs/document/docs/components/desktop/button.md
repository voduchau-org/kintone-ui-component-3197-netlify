---
id: button
title: Button
sidebar_label: Button
---

## Overview

The Button component allows the user to create and display buttons.

<div class="sample-container" id="button">
  <div id="sample-container__components"></div>
</div>
<script src="/js/samples/desktop/button.js"></script>

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component class name |  |
| id | string | ""  | Component id name |  |
| text | string | ""  | Text to be displayed inside the button | If `content` is unspecified, the value of `text` will be displayed<br>In other cases, the `text` will be ignored |
| type | string | "normal"  | Button design type | Available options:<br>"normal" : Gray (#f7f9fA)<br>"submit" : Blue (#3498db)<br>"alert" : Red (#e74c3c) |
| content *1 | string/HTMLElement | ""  | The DOM inside button | If a string with HTML is set, it will be automatically converted to HTML and displayed as it is |
| disabled | boolean | false | Enable/Disable the component | |
| visible | boolean | true | Show/Hide the component | |

> *1: [Security] Kintone UI Component does NOT sanitize this property value. It is the developer's responsibility to escape any user input when using this option so that XSS attacks would be prevented.

### Event

Here is a list of events that can be specified:

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| click | function | Event handler when clicked | It will pass the event object as the argument |

### Constructor

Button(options)<br>
Here is a list of available constructors:

#### Parameter

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | Object that includes component properties | |

### Custom CSS
> Please check [Custom CSS feature guide](../../getting-started/custom-css.md) at first.

Here is a list of properties that can be used for modifying component style:
#### Property
| Name |
| :--- |
| --kuc-button-width |
| --kuc-button-height |
| --kuc-button-background-color |
| --kuc-button-background-color-hover |
| --kuc-button-background-color-active |
| --kuc-button-background-color-focus |
| --kuc-button-font-size |
| --kuc-button-text-color |

---

## Sample Code

> Please check the [package installation](../../getting-started/quick-start.md#installation) method first.

Here is a sample code when all parameters are specified:

```javascript
const Kuc = Kucs['1.x.x'];

const header = kintone.app.getHeaderMenuSpaceElement();

const button = new Kuc.Button({
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
header.appendChild(button);

button.addEventListener('click', event => {
  console.log(event);
});
```

---

## Related Articles

- [Search box customization](../../guides/search-box-customization.md)
- [Cleaning check list customization](../../guides/cleaning-check-list-customization.md)
- [Bulk update customization](../../guides/bulk-update-customization.md)
- [Format setting plug-in](../../guides/format-setting-plugin.md)
- [Attachment customization](../../guides/attachment-customization.md)
