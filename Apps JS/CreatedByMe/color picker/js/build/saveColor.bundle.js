"use strict";

var _this = void 0;

function _newArrowCheck(innerThis, boundThis) {
  if (innerThis !== boundThis) {
    throw new TypeError("Cannot instantiate an arrow function");
  }
}

var saveColor = function saveColor(colorValue) {
  _newArrowCheck(this, _this);

  localStorage.setItem("colorValue", colorValue);
}.bind(void 0);
