(function (window) {
  var omarGreeter = {};
  omarGreeter.name = "Omar";
  var greeting = "Hi";
  omarGreeter.sayHi = function () {
    console.log(`${greeting} ${omarGreeter.name}`);
  }
  
  window.omarGreeter = omarGreeter // Making it global to the window object, for use in app.js (external file).

})(window);


