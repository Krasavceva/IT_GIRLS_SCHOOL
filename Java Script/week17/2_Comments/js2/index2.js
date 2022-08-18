let textarea = document.querySelector(".textarea")
let btn = document.querySelector(".button");
let comments = document.querySelector(".input");


let array = [];


btn.addEventListener('click', () => {
    let text = textarea.value;
    textarea.value = "";
    array.push(text);
    comments.innerHTML = "";
    // for (let item of array) {
    //      comments.innerHTML += item + '<br>';
    //  }                                          это самый простой способ прикрепить комментарий

    render(comments, array); //куда крепим и что крепим
});


function render(parentNote, data) {
    for (let i = 0; i < data.length; i++) {
        let item = data[i];

        const filterWords = ['viagra', 'XXX'];
        let filteredText = item;
        for (let word of filterWords) {
            let reg = new RegExp(word, "ig");
            filteredText = filteredText.replace(reg, "***");
        }

        let node = document.createElement("div");
        node.classList.add("comment");
        node.textContent = filteredText;

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("comment__button");
        deleteButton.textContent = "X";

        deleteButton.addEventListener("click", () => {
            node.remove();
            data.splice(i, 1); //удаляем элемент из массива
        });

        //ВСТАВЛЯЕТ deleteButton ВНУТРЬ node
        node.append(deleteButton); //прикрепляем Х к каждому комментарию
        //ВСТАВЛЯЕТ node ВНУТРЬ parentNode
        parentNote.append(node);
    }
}


// это функция как еще один вариант, но здесь я ей не пользовалась
function checkSpam() {
    let comment = document.querySelector(".input").value;
    if (comment.search(/viagra/i) > -1 || comment.search(/xxx/i) > -1 || comment.search(/ххх/i) > -1) {
        let censure = "***";
        let commentCens = comment.replace(/viagra/ig, censure);
        let commentCens1 = commentCens.replace(/xxx/ig, censure);
        let commentCens2 = commentCens1.replace(/ххх/ig, censure);
        array.push(`<p>${commentCens2}</p>`);
    } else {
        array.push(`<p>${comment}</p>`);
    }
    input.innerHTML += array;
};