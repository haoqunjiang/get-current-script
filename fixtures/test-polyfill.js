if (!'currentScript' in document) {
  Object.defineProperty(document, 'currentScript', window.getCurrentScript)
}

if (document.currentScript) {
  document.getElementById('app').textContent = 'It works!'
}
