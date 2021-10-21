const signup = document.querySelector("#signup");
const bgrc = document.querySelector("#bgrc");
const form = document.querySelector("#form");

const onclick = () => {
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

var clickOpen = () => {
  signup.style.display = "block";
  bgrc.style.display = "block";
};

const clickClose = () => {
  signup.style.display = "none";
  form.style.display = "none";
  bgrc.style.display = "none";
};

const clickform = () => {
  signup.style.display = "none";
  form.style.display = "block";
};

const api = () => {
  async function postData(
    url = "https://b24-c35x7z.bitrix24.ua/rest/1/661cp5ctcrvt5jh1/crm.lead.add.json?FIELDS[LAST_NAME]=Петров&FIELDS[EMAIL][0][VALUE]=mail@example.com",
    data = {}
  ) {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return await response.json();
  }

  postData(
    "https://b24-c35x7z.bitrix24.ua/rest/1/661cp5ctcrvt5jh1/crm.lead.add.json?FIELDS[LAST_NAME]=Петров&FIELDS[EMAIL][0][VALUE]=mail@example.com",
    { answer: 42 }
  ).then((data) => {
    console.log(data); // JSON data parsed by `response.json()` call
  });
};

export default onclick;
