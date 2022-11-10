
function summ() {
    let a = document.getElementById('firstNumber').value;
    let b = document.getElementById('secondNumber').value;
    let result = +a + +b;
    document.getElementById('result').value = result;
}

function subt() {
    let a = document.getElementById('firstNumber').value;
    let b = document.getElementById('secondNumber').value;
    let result = +a - +b;
    document.getElementById('result').value = result;
}

function multip() {
    let a = document.getElementById('firstNumber').value;
    let b = document.getElementById('secondNumber').value;
    let result = +a * +b;
    document.getElementById('result').value = result;
}

function divis() {
    let a = document.getElementById('firstNumber').value;
    let b = document.getElementById('secondNumber').value;
    let result = +a / +b;
    document.getElementById('result').value = result;
}

function getReset() {
    document.querySelector("#firstNumber").value="";
    document.querySelector("#secondNumber").value="";
    document.querySelector("#result").value="";
}

