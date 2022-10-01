async function loadData() {
  let response = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=9WXzy1UhmfPiAeNiMwkzpyAun9Bj0k3Jthyzalwm"
  );
  let data = await response.json();
  return data;
}

function render(data) {
  let resultNode = document.createElement("div");
  let imgNode = document.createElement("img");
  imgNode.src = data.hdurl;
  imgNode.width = 100;

  let pNode = document.createElement("p");
  pNode.textContent = data.title;

  let explanation = document.createElement("text");
  explanation.textContent = data.explanation;

  resultNode.append(pNode);
  resultNode.append(imgNode);
  resultNode.append(explanation);
  document.body.append(resultNode);
}

//весь стартовый код пишем внутри асинхронной функции
async function initApp() {
  let data = await loadData();
  render(data);
}

//вызываем функцию
initApp();
