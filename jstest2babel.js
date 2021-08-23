"use strict";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(iterarValores);

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function iterarValores(arreglo) {
  var _iterator, _step, e;

  return regeneratorRuntime.wrap(function iterarValores$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _iterator = _createForOfIteratorHelper(arreglo);
          _context.prev = 1;

          _iterator.s();

        case 3:
          if ((_step = _iterator.n()).done) {
            _context.next = 9;
            break;
          }

          e = _step.value;
          _context.next = 7;
          return e;

        case 7:
          _context.next = 3;
          break;

        case 9:
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](1);

          _iterator.e(_context.t0);

        case 14:
          _context.prev = 14;

          _iterator.f();

          return _context.finish(14);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1, 11, 14, 17]]);
}

var suma = 0;
var generador = iterarValores([2, 4, 76, 11, 7.8, 55.09, 1]);

var _iterator2 = _createForOfIteratorHelper(generador),
    _step2;

try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var valor = _step2.value;
    suma = suma + valor;
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}
