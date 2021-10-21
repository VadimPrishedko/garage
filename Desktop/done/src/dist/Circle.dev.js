"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Circle =
/*#__PURE__*/
function (_Figure) {
  _inherits(Circle, _Figure);

  function Circle(radius) {
    var _this;

    _classCallCheck(this, Circle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Circle).call(this, radius, radius));
    _this.borderRadius = 50;
    return _this;
  }

  _createClass(Circle, [{
    key: "render",
    value: function render(id) {
      var div = document.createElement("div");
      div.style.width = "".concat(this.width, "px");
      div.style.height = "".concat(this.height, "px");
      div.style.top = "".concat(this.y, "px");
      div.style.right = "".concat(this.x, "px");
      div.style.borderRadius = "".concat(this.borderRadius, "%");
      div.style.background = this.background;
      div.id = id; // document.body.appendChild(div);

      this.move(div);
    }
  }, {
    key: "move",
    value: function move(div) {
      var _this2 = this;

      var intervalStep = setInterval(function () {
        if (_this2.y > window.innerHeight) {
          clearInterval(intervalStep);
          _this2.y = 0;
        }

        _this2.y += _this2.step;
        div.style.top = _this2.y + "px";
      }, 80);
    }
  }]);

  return Circle;
}(Figure);