"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var signup = document.querySelector("#signup");
var bgrc = document.querySelector("#bgrc");
var form = document.querySelector("#form");

var onclick = function onclick() {
  var target = event.target.id;

  switch (target) {
    case "recording":
      clickOpen();
      break;

    case "recording1":
      clickOpen();
      break;

    case "recording2":
      clickOpen();
      break;

    case "recording3":
      clickform();
      api();
      break;

    case "сlosemodal":
      clickClose();
      break;

    case "formсlosemodal":
      clickClose();
      break;

    case "description":
      window.scrollTo(0, 800);
      break;

    case "services":
      window.scrollTo(800, 1400);
      break;

    case "gallery":
      window.scrollTo(1500, 2000);
      break;

    case "map":
      window.scrollTo(3000, 3500);
      break;
    //   case "phone":
    //   break;

    default:
      break;
  }
};

var clickOpen = function clickOpen() {
  signup.style.display = "block";
  bgrc.style.display = "block";
};

var clickClose = function clickClose() {
  signup.style.display = "none";
  form.style.display = "none";
  bgrc.style.display = "none";
};

var clickform = function clickform() {
  signup.style.display = "none";
  form.style.display = "block";
};

var api = function api() {
  function postData() {
    var url,
        data,
        response,
        _args = arguments;
    return regeneratorRuntime.async(function postData$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = _args.length > 0 && _args[0] !== undefined ? _args[0] : "https://b24-c35x7z.bitrix24.ua/rest/1/661cp5ctcrvt5jh1/crm.lead.add.json?FIELDS[LAST_NAME]=Петров&FIELDS[EMAIL][0][VALUE]=mail@example.com";
            data = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            _context.next = 4;
            return regeneratorRuntime.awrap(fetch(url, {
              method: "POST",
              mode: "cors",
              cache: "no-cache",
              credentials: "same-origin",
              headers: {
                "Content-Type": "application/json"
              },
              redirect: "follow",
              referrerPolicy: "no-referrer",
              body: JSON.stringify(data)
            }));

          case 4:
            response = _context.sent;
            _context.next = 7;
            return regeneratorRuntime.awrap(response.json());

          case 7:
            return _context.abrupt("return", _context.sent);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    });
  }

  postData("https://b24-c35x7z.bitrix24.ua/rest/1/661cp5ctcrvt5jh1/crm.lead.add.json?FIELDS[LAST_NAME]=Петров&FIELDS[EMAIL][0][VALUE]=mail@example.com", {
    answer: 42
  }).then(function (data) {
    console.log(data); // JSON data parsed by `response.json()` call
  });
};

var _default = onclick;
exports["default"] = _default;