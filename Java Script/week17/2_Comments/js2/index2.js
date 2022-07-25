let send = document.querySelector("#send");
let plus = document.querySelector("#plus");
let input = document.querySelector("#input")
send.addEventListener('click', () => {
    checkSpam();
});


function checkSpam() {
    let comment = document.querySelector("#text").value;
    let comms = [];
    if (comment.search(/viagra/i) > -1 || comment.search(/xxx/i) > -1 || comment.search(/ххх/i) > -1) {
        let censure = "***";
        let commentCens = comment.replace(/viagra/ig, censure);
        let commentCens1 = commentCens.replace(/xxx/ig, censure);
        let commentCens2 = commentCens1.replace(/ххх/ig, censure);
        comms.push(`<p>${commentCens2}</p>`);
    } else {
        comms.push(`<p>${comment}</p>`);
    }
    input.innerHTML += comms;
};