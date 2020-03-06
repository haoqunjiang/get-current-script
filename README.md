# @soda/get-current-script

It is basically a function that returns `document.currentScript` but with support for IE9-11, thanks to https://github.com/amiller-gh/currentScript-polyfill.

It also works around a [Firefox  issue](https://bugzilla.mozilla.org/show_bug.cgi?id=1620505) when the script is called in a microtask, which makes `document.currentScript` unusable in a webpack dynamic-imported chunk.

The polyfill implemented here may not adhere strictly to spec when called in async code or in a callback. In these situations the spec calls for `document.currentScript` to return `null`. However, for the grand majority of your document.currentScript needs, this polyfill will do the job!

## Usage

```sh
npm i @soda/get-current-script
```

```js
const getCurrentScript = require('@soda/get-current-script')
const script = getCurrentScript() // the current executing <script> element
```
