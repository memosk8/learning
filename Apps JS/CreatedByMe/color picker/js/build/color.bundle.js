"use strict";

var _this = void 0;

function _newArrowCheck(innerThis, boundThis) {
  if (innerThis !== boundThis) {
    throw new TypeError("Cannot instantiate an arrow function");
  }
}

color.value = localSto;
setColor();
color.addEventListener("input", setColor);
color.addEventListener(
  "change",
  function () {
    _newArrowCheck(this, _this);

    return saveColor(color.value);
  }.bind(void 0)
);
