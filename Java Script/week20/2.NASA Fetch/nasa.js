document.addEventListener("DOMContentLoaded", function (e) {
  fetch(
    "https://api.nasa.gov/planetary/apod?api_key=9WXzy1UhmfPiAeNiMwkzpyAun9Bj0k3Jthyzalwm"
  )
    .then((response) => response.json())
    .then((info) => {
      document.querySelector(".title").innerHTML = info.title;
      document.querySelector(".img").src = info.url;
      document.querySelector(".content").innerHTML = info.explanation;
    })
    .catch((error) => console.log(error));
});
