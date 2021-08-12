(function (window) {
  var aymanGreeter = {};
  aymanGreeter.name = "Ayman";
  var greeting = "Hello";
  aymanGreeter.sayHello = function () {
    console.log(`${greeting} ${aymanGreeter.name}`);
  }

  window.aymanGreeter = aymanGreeter
})(window);