let btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let form = document.querySelector(".form");
  let formData = new FormData(form);
  const url = `https://httpbin.org/post`;
  fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((cat) => {
      console.log(cat);
    })
    .catch((error) => console.log(error));
});
