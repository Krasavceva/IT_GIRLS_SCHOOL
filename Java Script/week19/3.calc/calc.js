let a, b, c;
let getNumbers = () => {
    a = +(document.querySelector('#first').value);
    b = +(document.querySelector('#second').value);
    result = document.querySelector('#result');
    return
}

let clearNum = () => {
    document.querySelector('#first').value = '';
    document.querySelector('#second').value = '';
}


class Calc {
    static sum(a, b) {
        c = a + b
        return c;
    }
    static min(a, b) {
        c = a - b
        return c;
    }
    static div(a, b) {
        if (b === 0) {
            alert('На ноль делить нельзя')
        }
        c = a / b
        return c;
    }
    static mult(a, b) {
        c = a * b
        return c;
    }
}


let plus = () => {
    getNumbers();
    clearNum();
    result.innerHTML = Calc.sum(a, b);
}
document.querySelector('#plus').onclick = plus;

let min = () => {
    getNumbers();
    clearNum();
    result.innerHTML = Calc.min(a, b);
}
document.querySelector('#min').onclick = min;

let mult = () => {
    getNumbers();
    clearNum();
    result.innerHTML = Calc.mult(a, b);
}
document.querySelector('#mult').onclick = mult;

let div = () => {
    getNumbers();
    clearNum();
    result.innerHTML = Calc.div(a, b);
}
document.querySelector('#div').onclick = div;