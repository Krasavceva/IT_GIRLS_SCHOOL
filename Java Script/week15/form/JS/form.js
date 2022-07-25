function checkForm() {
    let name = document.querySelector('#name');
    let surname = document.querySelector('#surname');
    let login = document.querySelector('#login');
    let password = document.querySelector('#password');
    let phoneNumber = document.querySelector('#phoneNumber');
    let counter = 0;

    if (name.value == "") {
        name.style.color = "red";
        name.value = "Введите ваше имя";
        counter += 1;
    } else {
        name.style.color = "black";
    }
    if (surname.value == "") {
        surname.style.color = "red";
        surname.value = "Введите вашу фамилию";
        counter += 1;
    } else {
        surname.style.color = "black";
    }
    if (login.value == "") {
        login.type = "text";
        login.value = "Введите email";
        login.style.color = "red";
        counter += 1;
    } else {
        login.style.color = "black";
    }
    if (password.value == "") {
        password.type = "text";
        password.value = "Введите пароль";
        password.style.color = "red";
        counter += 1;
    } else if (password.value.length <= 6) {
        password.type = "text";
        password.value = "Пароль слишком короткий";
        password.style.color = "red";
        counter += 1;
    } else {
        password.style.color = "black";
    }
    if (phoneNumber.value == "") {
        phoneNumber.type = "text";
        phoneNumber.value = "Введите номер телефона";
        phoneNumber.style.color = "red";
        counter += 1;
    } else if (phoneNumber.value.length <= 6) {
        phoneNumber.type = "text";
        phoneNumber.value = "Номер слишком короткий";
        phoneNumber.style.color = "red";
        counter += 1;
    } else {
        phoneNumber.style.color = "black";
    }


    if (counter == 0) {
        let name1 = name.value;
        alert(`Привет, ${name1}!`);
    }
}
let btn = document.querySelector(".btn");
btn.addEventListener("click", checkForm);