function summ() {
    let a = document.querySelector('#firstNumber').value;
    let b = document.querySelector('#secondNumber').value;
    let result = +a + +b;
    document.querySelector('#result').value = result;
}

function subt() {
    let a = document.querySelector('#firstNumber').value;
    let b = document.querySelector('#secondNumber').value;
    let result = +a - +b;
    document.querySelector('#result').value = result;
}

function multip() {
    let a = document.querySelector('#firstNumber').value;
    let b = document.querySelector('#secondNumber').value;
    let result = +a * +b;
    document.querySelector('#result').value = result;
}

function divide() {
    let a = document.querySelector('#firstNumber').value;
    let b = document.querySelector('#secondNumber').value;
    if (b == 0) {
        alert("На ноль делить нельзя!")
    } else {
        let result = +a / +b;
        document.querySelector('#result').value = result;
    }
}

function getReset() {
    document.querySelector("#firstNumber").value = "";
    document.querySelector("#secondNumber").value = "";
    document.querySelector("#result").value = "";
}
let nan = document.querySelector(".nan");
nan.onclick = getReset;