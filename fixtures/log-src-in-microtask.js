var app = document.getElementById('app')
if (typeof Promise === 'undefined') {
  // skip this test in IE
  app.textContent = 'http://localhost:5000/fixtures/log-src-in-microtask.js'
} else {
  Promise.resolve().then(function() {
    app.textContent = window.getCurrentScript().src
  })
}
