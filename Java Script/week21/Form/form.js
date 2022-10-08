let name = document.querySelector("#name");
let surname = document.querySelector("#surname");
let login = document.querySelector("#login");
let password = document.querySelector("#password");
let email = document.querySelector("#email");
let age = document.querySelector("#age");
let phoneNumber = document.querySelector("#phoneNumber");
let btn = document.querySelector(".btn");
let errors = [];
let user;

function checkValidity(input) {
  let validity = input.validity;
  if (validity.valueMissing) {
    errors.push("Поле " + input.placeholder + " не заполнено");
  }
  if (validity.tooShort) {
    errors.push("Пароль слишком короткий");
  }

  if (validity.patternMismatch) {
    errors.push("Неверный формат заполнения поля " + input.placeholder);
  }
}

btn.addEventListener("click", function (e) {
  e.preventDefault();
  errors = [];
  let inputs = document.querySelectorAll("input");
  for (let input of inputs) {
    checkValidity(input);
  }
  let errorDiv = document.querySelector("#errorsInfo");
  errorDiv.innerHTML = errors.join(". <br>");

  user = {
    id: name.value,
    surname: surname.value,
    login: login.value,
    password: password.value,
    email: email.value,
    age: age.value,
    phoneNumber: phoneNumber.value,
  };
  post();
});

async function post() {
  fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((user) => {
      console.log(user);
    })
    .catch((error) => console.log(error));
}
