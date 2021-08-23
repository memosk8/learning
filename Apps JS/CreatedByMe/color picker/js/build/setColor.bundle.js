"use strict";

var _this = void 0;

function _newArrowCheck(innerThis, boundThis) {
  if (innerThis !== boundThis) {
    throw new TypeError("Cannot instantiate an arrow function");
  }
}

// crea una nueva constante con el valor actual cada que este cambia
// modifica el elemento #output en el DOM con el valor actual de color
var setColor = function setColor() {
  _newArrowCheck(this, _this);

  var colorValue = color.value;
  output.innerHTML = colorValue;
  output.style.background = colorValue;
  output.style.color = "#ffffff";
}.bind(void 0);
