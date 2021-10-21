"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _serveices = _interopRequireDefault(require("./serveices"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var init = function init() {
  fetch("https://api.json-generator.com/templates/HGkyLrv3HsIg/data", {
    headers: {
      "Authorization": "Bearer jmhn3fudzvs7ayuyolebfqliqmnj37ynagbc8wcl"
    }
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    return data.forEach(function (elem) {
      return new _serveices["default"](elem).render();
    });
  });
};

var _default = init; // var data = [];
// export default class Post {
//   constructor({ place, row, price }) {
//     this.place = place;
//     this.row = row;
//     this.price = price;
//   }
//   render() {
//     data[this.place] = { place: `${this.place}`, row: `${this.row}`, price: `${this.price}`, };
//     var cinoteatr = document.querySelector(".cinoteatr");
//     cinoteatr.insertAdjacentHTML(
//       "beforeend",
//       '<div class="mesta" id=' +
//         `${this.place}` +
//         ">" +
//         `${this.place}` +
//         "</div>"
//     );
//     var mesta = document.getElementsByClassName("mesta");
//     var selected = document.querySelector(".selected");
//     function tickets(i) {
//         i = i+1;
//         selected.insertAdjacentHTML(
//             "beforeend",
//             '<div class="ticket" id='+ "tiket" +data[i].place+">"+
//               "<p>Ряд " + data[i].row +"</p>"+ "<p>Место " + data[i].place +"</p>"+ "<p>Цена " + data[i].price +"</p>"+
//               "</div>"
//           );
//     }
//     function ticketsDel(i) {
//         i = i+1;
//         document.getElementById( "tiket" + i).remove();
//     }
//     function Count_Mest() {
//       let z_mest = 0;
//       for (let i = 0; i < mesta.length; i++) {
//         if (mesta[i].style.background == "red") {
//           z_mest++;
//         } else {
//           mesta[i].style.background == "silver";
//         }
//       }
//       return z_mest;
//     }
//     function count() {
//         let res = 0;
//         for (let i = 0; i < mesta.length; i++) {
//           if (mesta[i].style.background == "red") {
//             res = res + Number(data[i].price);
//           } else {
//           }
//         }
//         return res;
//       }
//     for (let i = 0; i < mesta.length; i++) {
//       mesta[i].onclick = function () {
//       let status =  this.classList.contains("active");
//         if (status) {
//           this.style.background = "silver";
//           this.classList.remove("active")
//           ticketsDel(i)
//         } else {
//           this.style.background = "red";
//           this.classList.add("active")
//           tickets(i);
//         }
//         status = !status;
//         document.getElementById("count_").innerHTML =
//           "Выбрано мест : " + Count_Mest() ;
//           document.getElementById("buy").innerHTML = "Купить: " + count()
//     }
//   }
// }
// }

exports["default"] = _default;