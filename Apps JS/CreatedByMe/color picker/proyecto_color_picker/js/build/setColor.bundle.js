"use strict";

var _this = void 0;

function _newArrowCheck(innerThis, boundThis) {
  if (innerThis !== boundThis) {
    throw new TypeError("Cannot instantiate an arrow function");
  }
}

var setColor = function setColor() {
  _newArrowCheck(this, _this);

  var value = color.value;
  salida.innerHTML = value;
  salida.style.background = value;
}.bind(void 0);
