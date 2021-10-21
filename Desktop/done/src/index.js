// import init from "./serveices";
// init();

import onclick from "./serveices";

const body = document.querySelector("body");

body.onclick = function () {
  onclick();
};


// var id = 0;
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
