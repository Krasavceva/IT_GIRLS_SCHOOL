let send = document.querySelector("#send"), //кнопка "отправить коммент"
    name = document.querySelector("#name"),
    source,
    commentCens2, //переменные вне f, чтобы их можно было везде использовать
    avas = document.querySelectorAll("#ava");


avas.forEach(item => { //перебираю картинки, чтобы словить клик и забрать src на выбранной картинке
    item.addEventListener("click", (e) => {
        source = e.currentTarget.getAttribute("src");
        return source
    })
})


document.addEventListener("DOMContentLoaded", () => { //функция, чтобы забрать значения из хранилища
    name.value = localStorage.getItem('user');
    source = localStorage.getItem('source');
})
saveInfo(); //f для сохранения 
unsaveInfo(); //f для удаления данных


send.addEventListener('click', (e) => { //f на кнопку отправить - сбросить перезагрузку страницы по клику, 
    e.preventDefault();
    checkSpam(); //проверка из прошлого урока, немного поменяла условия - коммент добавлялся в массив, теперь другая логика:
    addElem(); //f создания карточек и вывода на экран
    if (source == "" || source == undefined || source == null) {
        source = img.src = `https://www.meme-arsenal.com/memes/94713eb79af28d2474eee4da37bcf1a5.jpg`;
    } else {
        source = localStorage.getItem('source');
    } //чтобы юзеру не ставить авку каждый раз при отправке нового сбщ
    document.querySelector("#name").value = localStorage.getItem('user'); //то же самое для имени
    document.querySelector("#text").value = "";
    commentCens2 = undefined; //это чтобы не отправлялось пустое сообщение, ниже есть условие
});


function checkSpam() {
    let comment = document.querySelector("#text").value;
    if (comment == "") {
        return comment;
    } else if (comment.search(/viagra/i) > -1 || comment.search(/xxx/i) > -1 || comment.search(/ххх/i) > -1) {
        let censure = "***";
        let commentCens = comment.replace(/viagra/ig, censure);
        let commentCens1 = commentCens.replace(/xxx/ig, censure);
        commentCens2 = commentCens1.replace(/ххх/ig, censure);
    } else {
        commentCens2 = comment;
    }
}

function addElem() {
    if (commentCens2 == undefined) {
        return //останавливаю функцию, если сообщение пустое
    }
    let msg = document.createElement("div");
    msg.classList.add('msg');
    if (name.value == "") { //создаю элементы с классами для вывода сбщ
        name.value = "anonymous"
    }
    let h2 = document.createElement("h2");
    h2.classList.add('name');
    let div = document.createElement("div");
    div.classList.add('txt');
    let img = document.createElement("img");
    img.classList.add('img');
    if (source == undefined || source == "" || source == null) {
        img.src = `https://www.meme-arsenal.com/memes/94713eb79af28d2474eee4da37bcf1a5.jpg`;
    } //устанавливаю картинку по умолчанию, если не выбрана пользователем
    else { //заполняю новые элементы и вывожу на страницу
        img.src = source;
    }
    h2.innerHTML = name.value;
    div.innerHTML = commentCens2;
    msg.append(img, h2, div);
    input.append(msg);
}


function saveInfo() {
    let saveBTN = document.querySelector("#save");
    saveBTN.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.setItem('user', name.value);
        localStorage.setItem('source', source);
    })
}

function unsaveInfo() {
    let unsaveBTN = document.querySelector("#unsave");
    unsaveBTN.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.clear(); //помню, что сказали так не делать, но по-моему здесь уместно
    })
}