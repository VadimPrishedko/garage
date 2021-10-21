"use strict";

var _serveices = _interopRequireDefault(require("./serveices"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import init from "./serveices";
// init();
var body = document.querySelector("body");

body.onclick = function () {
  (0, _serveices["default"])();
}; // var id = 0;
// var arr = [];
// function game() {
//   // console.log('tyt :>> ', "tyt");
//   const intervalCircle = setInterval(() => {
//     let circle = new Circle(100);
//     arr.push(circle);
//     circle.render(id);
//     id++;
//     arr.forEach((el) => {
//       if (el.y + 100> window.innerHeight) {
//        gemeover(intervalCircle)
//       }
//     });
//   }, 700);
// }
// game()