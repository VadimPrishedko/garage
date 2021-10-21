"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Figure =
/*#__PURE__*/
function () {
  function Figure(width, height) {
    _classCallCheck(this, Figure);

    this.step = 10;
    this.width = width;
    this.height = height;
    this.background = "rgb(".concat(this.random(0, 255), ",").concat(this.random(0, 255), ",").concat(this.random(0, 255), ")");
    this.x = this.random(0, window.innerWidth - 100);
    this.y = 0;
    this.id = 1;
  }

  _createClass(Figure, [{
    key: "random",
    value: function random() {
      var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }]);

  return Figure;
}();