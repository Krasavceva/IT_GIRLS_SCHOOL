let fio = document.querySelector("#fio");
const btn = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");
fio.addEventListener('keydown', function (e) {
    if (e.key.match(/[0-9.,<>?+:;}{@#$%^&*_=+)(]/)) return e.preventDefault();
});
fio.addEventListener('input', function (e) {
    fio.value = fio.value.replace(/[0-9.,<>?+:;}{@#$%^&*_=+)(/]/g, "");
});
btn.addEventListener('click', () => {
    let fio2 = fio.value;
    low = fio2.toLowerCase();
    trim = low.trim();
    let text = trim.replace(/(#[\wа-яё]+)/gi, '').replace(/[ ]+/g, ' ');
    let arr = text.split(" ");
    let familia = arr[0];
    let imya = arr[1];
    let otch = arr[2];
    familia = familia[0].toUpperCase() + familia.slice(1, );
    imya = imya[0].toUpperCase() + imya.slice(1, );
    otch = otch[0].toUpperCase() + otch.slice(1, );
    document.querySelector("#f").value = familia;
    document.querySelector("#i").value = imya;
    document.querySelector("#o").value = otch;
})


btn2.addEventListener('click', () => {
    fio.value = '';
    f.value = '';
    i.value = '';
    o.value = '';
    checkInputs();
});