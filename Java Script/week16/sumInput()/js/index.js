let arr = [];
let count = 0;
for (let i = 0; i < Infinity; i++) {
    let num = +prompt('Введите число', )
    if (!num) {
        break
    }
    arr.push(num)
    arr.sort((a, b) => a - b)
    arr.forEach(item => {
        count += item
    });
}
alert(count);