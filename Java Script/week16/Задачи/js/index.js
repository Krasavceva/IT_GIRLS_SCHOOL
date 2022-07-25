//Выведите на экран первый элемент.
let arr = ['js', 'css', 'html'];
console.log(arr[0]);

//Отфильтруйте массив [0, 1, false, 2, undefined, '', 3, null] от нежелательных значений.
let arr2 = [0, 1, false, 2, undefined, '', 3, null];
let filteredArr2 = arr2.filter(el => Boolean(el) !== false);
console.log(filteredArr2);


//Найдите индекс массива, длина которого > 3.
let arr3 = [
    [1, 2],
    [1, 2, 3],
    [1, 2, 3, 4]
];
let el = arr3.findIndex(el => el.length > 3);
console.log(el);
//Или:
let arr4 = [
    [1, 2],
    [1, 2, 3],
    [1, 2, 3, 4]
];
for (let i of arr4) {
    if (i.length > 3) {
        console.log(arr4.indexOf(i));
    }
}