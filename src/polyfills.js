window.global = window.global || window;


// polyfills.js
if (typeof global === "undefined") {
    var global = window;
  }
  