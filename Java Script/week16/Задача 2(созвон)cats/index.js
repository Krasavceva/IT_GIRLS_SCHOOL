//изначально пока мы ничего не выбрали в нашей форме, то при нажатии кнопки "Посчитать" наша форма обновляется и отправляется на сервер.
//необходимо остановить это действие submit.
const form = document.querySelector('form');
const result = document.querySelector('.result');
//мы обращаемся к элементу e(event) и вызываем у него метод preventdefauld

const monge = [4000, 12000];
const chicopee = [2000, 6000];

form.addEventListener('submit', function (e) {
    e.preventDefault();

    //создаем переменную для хранения суммы клиента
    let sum = 0;

    //ПРОВЕРКА ВЫБОРА КОРМА
    const feed = document.querySelector('select[name="feed"]');
    const weight = document.querySelector('select[name="weight"]');

    if (feed.value === "Monge") {
        sum += monge[weight.value];
    } else if (feed.value === "Chicopee") {
        sum += chicopee[weight.value];
    }
    //или способ с МАТРИЦЕЙ.
    //const feedPrices = [monge, chicopee]  - создали массив из массивов
    //const feedArray = feedPrices[feed.value];
    //const feedPrice = const feedArray[weight.value];
    //sum+=feedPrice;


    //ПРОВЕРКА ДОСТАВКИ 
    const deliveryRadios = document.querySelectorAll('input[name="delivery"]');
    if (deliveryRadios[0].checked) {
        sum += 150;
    } else if (deliveryRadios[1].checked) {
        sum += 300;
    }

    //ПРОВЕРЯЕМ ПОЛЕ "СКИДКИ?ДА!"
    const coupon = document.querySelector('input[name=coupon]');
    if (coupon.value === 'NEWYEAR2022') {
        sum = sum * 0.9;
    }

    //ВЫВОДИМ РЕЗУЛЬТАТ
    result.textContent = 'Итоговая сумма: ' + sum + 'рублей'
})