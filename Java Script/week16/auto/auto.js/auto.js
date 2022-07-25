let arr = [];
const brand = document.querySelector('#brand')
const year = document.querySelectorAll('.year')
const complete = document.querySelector('.complete')
const btn = document.querySelector('.btn')
const btn2 = document.querySelector('.btn2')

brand.addEventListener('change', () => {
    switch (brand.value) {
        case "Nissan":
            arr[0] = 5000
            break;
        case "Audi":
            arr[0] = 7000
            break;
        case "BMW":
            arr[0] = 10000
            break;
        case "Mercedes":
            arr[0] = 10000
            break;
        case "Skoda":
            arr[0] = 10000
            break;
    }
})


complete.addEventListener('change', () => {
    switch (complete.value) {
        case "Economy":
            arr[1] = 5000
            break;
        case "Comfort":
            arr[1] = 7000
            break;
        case "Business":
            arr[1] = 10000
            break;
    }
})

btn.addEventListener('click', (e) => {
    e.preventDefault()
    const checks = document.querySelectorAll('.check')
    checks.forEach((item, index) => {
        if (item.checked) {
            arr.push(+item.value)
        }
    })
    alert(arr);
})

btn2.addEventListener('click', () => {
    brand.defoult
});