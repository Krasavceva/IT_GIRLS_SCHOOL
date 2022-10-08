let btn = document.querySelector("#searchbtn");
let result = document.querySelector("#responce");
let array = [];

btn.addEventListener("click", (e) => {
  result.innerHTML = "";
  array = [];
  e.preventDefault();
  async function fetchToDo() {
    let input = document.querySelector(".search").value;
    const responce = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=EwOmWGb4UqWf79KsjbfzikWI8KBiO7WS&limit=5&offset=0&q=${input}`
    );
    try {
      data = await responce.json();
      input.value = "";
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async function getImg() {
    const data = await fetchToDo();
    array = data.data;
    array.forEach((el) => {
      result.innerHTML += `<img src="${el.images.downsized.url}" alt = "">`;
    });
  }

  getImg();
});

function handleKeyPress(e) {
  var key = e.keyCode || e.which;
  if (key === 13) {
    // Клавиша Enter
    doSomething();
  }
}
