class Cat {
    constructor(name, owner, breed, food, sex, comment) {
        this.name = name;
        this.owner = owner;
        this.breed = breed;
        this.food = food;
        this.sex = sex;
        this.comment = comment;
    }
}

function createCat() {
    let catName = document.querySelector('#name').value;
    let catOwner = document.querySelector('#owner').value;
    let catBreed = document.querySelector('#breed').value;
    let catFood = [];
    let catSex = document.querySelector('input[name="sex"]:checked').value;
    getCheckedCheckBoxes(catFood);
    let catComment = document.querySelector('#comments').value;


    let cat = new Cat(catName, catOwner, catBreed, catFood, catSex, catComment);
    console.log(cat);
}

function getCheckedCheckBoxes(catFood) {
    let checkboxes = document.getElementsByName('meal');
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            catFood.push(checkboxes[i].value);
        }
    }
};

const btn = document.querySelector('#ok');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    createCat();

})